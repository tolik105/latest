/**
 * Component tests for RichTextEditor
 */

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RichTextEditor } from '@/components/editor/rich-text-editor'

// Mock TinyMCE
jest.mock('@tinymce/tinymce-react', () => ({
  Editor: ({ onInit, onChange, value }: any) => {
    React.useEffect(() => {
      if (onInit) {
        const mockEditor = {
          getContent: () => value,
          setContent: jest.fn(),
          on: jest.fn()
        }
        onInit({}, mockEditor)
      }
    }, [onInit])

    return (
      <textarea
        data-testid="tinymce-editor"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder="Content editor"
      />
    )
  }
}))

describe('RichTextEditor', () => {
  const defaultProps = {
    value: '',
    onChange: jest.fn(),
    focusKeyword: 'test keyword',
    onAnalysis: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the editor interface', () => {
    render(<RichTextEditor {...defaultProps} />)

    expect(screen.getByTestId('tinymce-editor')).toBeInTheDocument()
    expect(screen.getByText('Content Editor')).toBeInTheDocument()
    expect(screen.getByText('SEO Analysis')).toBeInTheDocument()
  })

  it('should display initial content', () => {
    const initialContent = '<h1>Test Article</h1><p>Test content</p>'
    render(<RichTextEditor {...defaultProps} value={initialContent} />)

    const editor = screen.getByTestId('tinymce-editor')
    expect(editor).toHaveValue(initialContent)
  })

  it('should call onChange when content changes', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()

    render(<RichTextEditor {...defaultProps} onChange={onChange} />)

    const editor = screen.getByTestId('tinymce-editor')
    await user.type(editor, '<h1>New Content</h1>')

    expect(onChange).toHaveBeenCalled()
  })

  it('should analyze content and display SEO metrics', async () => {
    const content = `
      <h1>Test Article with test keyword</h1>
      <h2>Introduction</h2>
      <p>This article contains the test keyword multiple times for SEO analysis. The test keyword is important for ranking.</p>
      <p>More content with test keyword to reach minimum word count for proper analysis.</p>
    `

    const onAnalysis = jest.fn()
    render(
      <RichTextEditor 
        {...defaultProps} 
        value={content}
        focusKeyword="test keyword"
        onAnalysis={onAnalysis}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Overall Score')).toBeInTheDocument()
    })

    // Should display word count
    expect(screen.getByText('Words')).toBeInTheDocument()
    
    // Should display readability score
    expect(screen.getByText('Readability')).toBeInTheDocument()
    
    // Should display heading counts
    expect(screen.getByText('H1 Tags')).toBeInTheDocument()
    expect(screen.getByText('H2 Tags')).toBeInTheDocument()
    
    // Should display keyword density
    expect(screen.getByText('Keyword Density')).toBeInTheDocument()
    expect(screen.getByText('"test keyword":')).toBeInTheDocument()

    // Should call onAnalysis callback
    expect(onAnalysis).toHaveBeenCalledWith(
      expect.objectContaining({
        wordCount: expect.any(Number),
        readabilityScore: expect.any(Number),
        keywordDensity: expect.any(Number),
        seoScore: expect.any(Number)
      })
    )
  })

  it('should display SEO recommendations', async () => {
    const shortContent = '<p>Very short content.</p>'

    render(
      <RichTextEditor 
        {...defaultProps} 
        value={shortContent}
        focusKeyword="test"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Recommendations')).toBeInTheDocument()
    })

    // Should show warning for short content
    expect(screen.getByText(/content.*short/i)).toBeInTheDocument()
  })

  it('should display keyword density analysis', async () => {
    const keywordRichContent = `
      <h1>Test Article</h1>
      <p>This content has the keyword test multiple times. The keyword test appears frequently. Another mention of test keyword here.</p>
    `

    render(
      <RichTextEditor 
        {...defaultProps} 
        value={keywordRichContent}
        focusKeyword="test"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Keyword Density')).toBeInTheDocument()
    })

    // Should display keyword density percentage
    expect(screen.getByText('"test":')).toBeInTheDocument()
    expect(screen.getByText(/%$/)).toBeInTheDocument()
  })

  it('should show different SEO score colors based on score', async () => {
    const goodContent = `
      <h1>Excellent SEO Article with test keyword</h1>
      <h2>Introduction to test keyword</h2>
      <p>This is a well-optimized article about test keyword. The content is comprehensive and includes the test keyword naturally throughout the text. This article provides valuable information about test keyword implementation and best practices.</p>
      <h2>Benefits of test keyword</h2>
      <p>The test keyword offers many advantages for users. Understanding test keyword is crucial for success. This section explores various aspects of test keyword usage.</p>
      <h3>Advanced test keyword techniques</h3>
      <p>Advanced users can leverage test keyword in sophisticated ways. These test keyword strategies help achieve better results.</p>
    `

    render(
      <RichTextEditor 
        {...defaultProps} 
        value={goodContent}
        focusKeyword="test keyword"
      />
    )

    await waitFor(() => {
      const scoreElement = screen.getByText(/SEO:/i)
      expect(scoreElement).toBeInTheDocument()
    })
  })

  it('should handle content without focus keyword', async () => {
    const content = '<h1>Article Without Keyword</h1><p>This content has no specific keyword focus.</p>'

    render(
      <RichTextEditor 
        {...defaultProps} 
        value={content}
        focusKeyword=""
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Overall Score')).toBeInTheDocument()
    })

    // Should not display keyword density section
    expect(screen.queryByText('Keyword Density')).not.toBeInTheDocument()
  })

  it('should show loading state during analysis', async () => {
    render(<RichTextEditor {...defaultProps} />)

    // Simulate content change to trigger analysis
    const editor = screen.getByTestId('tinymce-editor')
    fireEvent.change(editor, { target: { value: '<h1>New content</h1>' } })

    // Should show analyzing state
    await waitFor(() => {
      expect(screen.getByText('Analyzing content...')).toBeInTheDocument()
    })
  })

  it('should display preview button', () => {
    render(<RichTextEditor {...defaultProps} />)

    const previewButton = screen.getByRole('button', { name: /preview/i })
    expect(previewButton).toBeInTheDocument()
  })

  it('should handle different height props', () => {
    const { rerender } = render(<RichTextEditor {...defaultProps} height={300} />)
    
    // Component should render without errors
    expect(screen.getByTestId('tinymce-editor')).toBeInTheDocument()

    rerender(<RichTextEditor {...defaultProps} height={800} />)
    expect(screen.getByTestId('tinymce-editor')).toBeInTheDocument()
  })

  it('should analyze heading structure correctly', async () => {
    const contentWithHeadings = `
      <h1>Main Title</h1>
      <h2>Section 1</h2>
      <p>Content for section 1</p>
      <h2>Section 2</h2>
      <p>Content for section 2</p>
      <h3>Subsection</h3>
      <p>Subsection content</p>
    `

    const onAnalysis = jest.fn()
    render(
      <RichTextEditor 
        {...defaultProps} 
        value={contentWithHeadings}
        onAnalysis={onAnalysis}
      />
    )

    await waitFor(() => {
      expect(onAnalysis).toHaveBeenCalledWith(
        expect.objectContaining({
          headingStructure: expect.objectContaining({
            h1Count: 1,
            h2Count: 2,
            h3Count: 1
          })
        })
      )
    })
  })

  it('should provide recommendations for poor heading structure', async () => {
    const contentWithoutHeadings = '<p>Content without any headings at all.</p>'

    render(
      <RichTextEditor 
        {...defaultProps} 
        value={contentWithoutHeadings}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Recommendations')).toBeInTheDocument()
    })

    // Should recommend adding headings
    expect(screen.getByText(/heading/i)).toBeInTheDocument()
  })

  it('should calculate readability score', async () => {
    const readableContent = `
      <h1>Simple Article</h1>
      <p>This is easy to read. Short sentences work well. Simple words are best.</p>
      <p>Good content flows nicely. Readers like clear text. This helps everyone.</p>
    `

    const onAnalysis = jest.fn()
    render(
      <RichTextEditor 
        {...defaultProps} 
        value={readableContent}
        onAnalysis={onAnalysis}
      />
    )

    await waitFor(() => {
      expect(onAnalysis).toHaveBeenCalledWith(
        expect.objectContaining({
          readabilityScore: expect.any(Number)
        })
      )
    })

    expect(screen.getByText('Readability')).toBeInTheDocument()
  })
})
