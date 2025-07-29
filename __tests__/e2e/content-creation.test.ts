/**
 * End-to-end tests for content creation and publishing process
 * Tests the complete user journey from content creation to publication
 */

import { db } from '@/lib/db'
import { ContentStatus, Language } from '@/lib/generated/prisma'

// Mock the database for E2E tests
jest.mock('@/lib/db')
const mockDb = db as jest.Mocked<typeof db>

describe('Content Creation E2E', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Complete Nexpose article creation journey', () => {
    it('should create a complete Nexpose security guide from start to finish', async () => {
      // Setup: Mock initial data
      const mockCategory = {
        id: 'security-cat',
        nameEn: 'Security',
        nameJa: 'セキュリティ',
        slugEn: 'security',
        color: '#ef4444'
      }

      const mockKeywords = [
        {
          id: 'nexpose-kw',
          keyword: 'nexpose',
          language: Language.EN,
          searchVolume: 320,
          difficulty: 4,
          isTarget: true
        },
        {
          id: 'security-kw',
          keyword: 'vulnerability assessment',
          language: Language.EN,
          searchVolume: 450,
          difficulty: 25,
          isTarget: false
        }
      ]

      // Mock database responses
      mockDb.category.findMany.mockResolvedValue([mockCategory] as any)
      mockDb.keyword.findMany.mockResolvedValue(mockKeywords as any)

      // Step 1: Load admin content creation page
      // This would load categories and keywords
      expect(mockDb.category.findMany).toHaveBeenCalled()
      expect(mockDb.keyword.findMany).toHaveBeenCalled()

      // Step 2: Create comprehensive Nexpose article
      const articleContent = {
        title: 'Complete Nexpose Security Guide: Implementation and Best Practices',
        slug: 'nexpose-security-guide',
        contentHtml: `
          <h1>Complete Nexpose Security Guide: Implementation and Best Practices</h1>
          
          <h2>Introduction to Nexpose</h2>
          <p>Nexpose is a comprehensive vulnerability management solution that helps organizations identify, assess, and remediate security vulnerabilities across their IT infrastructure. This guide provides detailed instructions for implementing Nexpose in enterprise environments.</p>
          
          <h2>Nexpose Installation and Setup</h2>
          <p>Before deploying Nexpose, ensure your environment meets the system requirements. Nexpose requires adequate resources for optimal scanning performance and vulnerability detection.</p>
          
          <h3>System Requirements</h3>
          <p>Nexpose installation requires specific hardware and software configurations to ensure reliable operation and comprehensive vulnerability scanning capabilities.</p>
          
          <h2>Configuration Best Practices</h2>
          <p>Proper Nexpose configuration is crucial for effective vulnerability management. Follow these best practices to maximize your Nexpose deployment's effectiveness.</p>
          
          <h3>Scan Policies</h3>
          <p>Configure Nexpose scan policies to balance thoroughness with performance. Customize scanning parameters based on your organization's security requirements.</p>
          
          <h2>Advanced Nexpose Features</h2>
          <p>Leverage advanced Nexpose capabilities for enhanced security posture management and comprehensive vulnerability assessment across your infrastructure.</p>
          
          <h3>Integration with SIEM</h3>
          <p>Integrate Nexpose with your Security Information and Event Management (SIEM) system for centralized security monitoring and incident response.</p>
          
          <h2>Conclusion</h2>
          <p>Implementing Nexpose effectively requires careful planning, proper configuration, and ongoing maintenance. This comprehensive guide provides the foundation for successful Nexpose deployment in enterprise environments.</p>
        `,
        excerpt: 'Learn how to implement Nexpose for comprehensive vulnerability management in enterprise environments. Complete guide covering installation, configuration, and best practices.',
        metaTitle: 'Complete Nexpose Security Guide: Implementation & Best Practices',
        metaDescription: 'Comprehensive guide to implementing Nexpose for enterprise vulnerability management. Learn installation, configuration, and best practices for effective security scanning.',
        focusKeyword: 'nexpose',
        language: Language.EN,
        status: ContentStatus.DRAFT,
        categoryId: 'security-cat',
        authorName: 'AKRIN Security Team',
        authorRole: 'Cybersecurity Specialists',
        keywordIds: ['nexpose-kw', 'security-kw']
      }

      // Mock content creation
      mockDb.content.findUnique.mockResolvedValue(null) // Slug available
      mockDb.content.create.mockResolvedValue({
        id: 'nexpose-article',
        ...articleContent,
        seoScore: 92,
        viewCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null
      } as any)

      // Create the article
      const createResponse = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleContent)
      })

      expect(createResponse.status).toBe(200)
      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          title: articleContent.title,
          slug: articleContent.slug,
          focusKeyword: 'nexpose',
          seoScore: expect.any(Number)
        }),
        include: expect.any(Object)
      })

      // Step 3: Analyze SEO performance
      const seoAnalysisResponse = await fetch('/api/admin/seo/analyze-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: articleContent.title,
          contentHtml: articleContent.contentHtml,
          metaTitle: articleContent.metaTitle,
          metaDescription: articleContent.metaDescription,
          focusKeyword: articleContent.focusKeyword
        })
      })

      expect(seoAnalysisResponse.status).toBe(200)
      const seoData = await seoAnalysisResponse.json()
      
      // Should have high SEO score due to comprehensive content
      expect(seoData.data.overallScore).toBeGreaterThan(80)
      expect(seoData.data.contentAnalysis.wordCount).toBeGreaterThan(300)
      expect(seoData.data.contentAnalysis.headingStructure.h1Count).toBe(1)
      expect(seoData.data.contentAnalysis.headingStructure.h2Count).toBeGreaterThan(2)
      expect(seoData.data.keywordAnalysis.keywordPlacement.inTitle).toBe(true)
      expect(seoData.data.keywordAnalysis.keywordPlacement.inH1).toBe(true)

      // Step 4: Upload featured image
      const mockMedia = {
        id: 'nexpose-featured',
        filename: 'nexpose-dashboard-2024.jpg',
        originalName: 'nexpose-dashboard.jpg',
        url: '/uploads/content/nexpose-dashboard-2024.jpg',
        altText: 'Nexpose security dashboard showing vulnerability scan results and risk assessment metrics',
        contentId: 'nexpose-article'
      }

      mockDb.contentMedia.create.mockResolvedValue(mockMedia as any)

      const formData = new FormData()
      formData.append('file', new Blob(['mock image data'], { type: 'image/jpeg' }), 'nexpose-dashboard.jpg')
      formData.append('contentId', 'nexpose-article')
      formData.append('altText', 'Nexpose security dashboard showing vulnerability scan results and risk assessment metrics')

      const mediaResponse = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData
      })

      expect(mediaResponse.status).toBe(200)
      expect(mockDb.contentMedia.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          originalName: 'nexpose-dashboard.jpg',
          altText: 'Nexpose security dashboard showing vulnerability scan results and risk assessment metrics',
          contentId: 'nexpose-article'
        })
      })

      // Step 5: Update content with featured image
      const updatedContent = {
        ...articleContent,
        featuredImage: '/uploads/content/nexpose-dashboard-2024.jpg'
      }

      mockDb.content.findUnique.mockResolvedValue({ id: 'nexpose-article' } as any)
      mockDb.content.update.mockResolvedValue({
        id: 'nexpose-article',
        ...updatedContent
      } as any)

      const updateResponse = await fetch('/api/admin/content/nexpose-article', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          featuredImage: '/uploads/content/nexpose-dashboard-2024.jpg'
        })
      })

      expect(updateResponse.status).toBe(200)

      // Step 6: Publish the article
      mockDb.content.update.mockResolvedValue({
        id: 'nexpose-article',
        ...updatedContent,
        status: ContentStatus.PUBLISHED,
        publishedAt: new Date()
      } as any)

      const publishResponse = await fetch('/api/admin/content/nexpose-article', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: ContentStatus.PUBLISHED
        })
      })

      expect(publishResponse.status).toBe(200)
      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: 'nexpose-article' },
        data: expect.objectContaining({
          status: ContentStatus.PUBLISHED,
          publishedAt: expect.any(Date)
        }),
        include: expect.any(Object)
      })

      // Step 7: Verify published content is accessible
      mockDb.content.findFirst.mockResolvedValue({
        id: 'nexpose-article',
        ...updatedContent,
        status: ContentStatus.PUBLISHED,
        publishedAt: new Date(),
        category: mockCategory,
        keywords: [
          { keyword: mockKeywords[0], isPrimary: true },
          { keyword: mockKeywords[1], isPrimary: false }
        ],
        media: [mockMedia]
      } as any)

      // Simulate accessing the published article
      const publishedResponse = await fetch('/nexpose-security-guide')
      expect(publishedResponse.status).toBe(200)

      // Should increment view count
      mockDb.content.update.mockResolvedValue({} as any)
      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: 'nexpose-article' },
        data: { viewCount: { increment: 1 } }
      })

      // Step 8: Track analytics
      const mockAnalytics = {
        id: 'analytics-1',
        contentId: 'nexpose-article',
        date: new Date(),
        views: 1,
        uniqueViews: 1,
        organicTraffic: 1,
        avgTimeOnPage: 180,
        bounceRate: 0.3
      }

      mockDb.contentAnalytics.create.mockResolvedValue(mockAnalytics as any)

      // Analytics should be created for the view
      expect(mockDb.contentAnalytics.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          contentId: 'nexpose-article',
          views: 1,
          uniqueViews: 1
        })
      })
    })

    it('should create bilingual content (English and Japanese)', async () => {
      // Create English version
      const englishContent = {
        title: 'Complete Nexpose Security Guide',
        slug: 'nexpose-security-guide',
        contentHtml: '<h1>Complete Nexpose Security Guide</h1><p>Comprehensive guide to Nexpose implementation...</p>',
        language: Language.EN,
        focusKeyword: 'nexpose'
      }

      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue({
        id: 'nexpose-en',
        ...englishContent,
        status: ContentStatus.PUBLISHED
      } as any)

      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(englishContent)
      })

      // Create Japanese version
      const japaneseContent = {
        title: 'Nexpose セキュリティガイド完全版',
        slug: 'nexpose-security-guide', // Same slug, different language
        contentHtml: '<h1>Nexpose セキュリティガイド完全版</h1><p>Nexpose の実装に関する包括的なガイド...</p>',
        language: Language.JA,
        focusKeyword: 'nexpose'
      }

      mockDb.content.findFirst.mockResolvedValue(null) // No conflict for different language
      mockDb.content.create.mockResolvedValue({
        id: 'nexpose-ja',
        ...japaneseContent,
        status: ContentStatus.PUBLISHED
      } as any)

      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(japaneseContent)
      })

      // Both versions should be created successfully
      expect(mockDb.content.create).toHaveBeenCalledTimes(2)

      // Verify both URLs work
      mockDb.content.findFirst
        .mockResolvedValueOnce({ ...englishContent, id: 'nexpose-en' } as any)
        .mockResolvedValueOnce({ ...japaneseContent, id: 'nexpose-ja' } as any)

      const englishResponse = await fetch('/nexpose-security-guide')
      const japaneseResponse = await fetch('/ja/nexpose-security-guide')

      expect(englishResponse.status).toBe(200)
      expect(japaneseResponse.status).toBe(200)
    })

    it('should handle the complete content optimization workflow', async () => {
      // Start with suboptimal content
      const initialContent = {
        title: 'Nexpose Guide',
        slug: 'nexpose-guide',
        contentHtml: '<p>Short content about nexpose.</p>',
        metaTitle: 'Nexpose',
        metaDescription: 'Short desc',
        focusKeyword: 'nexpose'
      }

      // Analyze initial content (should have low score)
      const initialAnalysis = await fetch('/api/admin/seo/analyze-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initialContent)
      })

      const initialSEO = await initialAnalysis.json()
      expect(initialSEO.data.overallScore).toBeLessThan(60)

      // Optimize content based on recommendations
      const optimizedContent = {
        title: 'Complete Nexpose Security Guide: Implementation and Best Practices',
        slug: 'nexpose-security-guide',
        contentHtml: `
          <h1>Complete Nexpose Security Guide: Implementation and Best Practices</h1>
          <h2>Introduction to Nexpose</h2>
          <p>Nexpose is a comprehensive vulnerability management solution that helps organizations identify and remediate security vulnerabilities. This detailed guide covers everything you need to know about implementing Nexpose in enterprise environments.</p>
          <h2>Getting Started with Nexpose</h2>
          <p>To begin using Nexpose effectively, you'll need to understand the core concepts and setup procedures. Nexpose provides powerful scanning capabilities for comprehensive network security assessment and vulnerability management.</p>
          <h3>Installation Requirements</h3>
          <p>Before installing Nexpose, ensure your system meets the minimum requirements for optimal performance and reliable vulnerability scanning operations.</p>
        `,
        metaTitle: 'Complete Nexpose Security Guide: Implementation & Best Practices',
        metaDescription: 'Comprehensive guide to implementing Nexpose for enterprise vulnerability management. Learn installation, configuration, and best practices for effective security scanning.',
        focusKeyword: 'nexpose'
      }

      // Analyze optimized content (should have high score)
      const optimizedAnalysis = await fetch('/api/admin/seo/analyze-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(optimizedContent)
      })

      const optimizedSEO = await optimizedAnalysis.json()
      expect(optimizedSEO.data.overallScore).toBeGreaterThan(80)
      expect(optimizedSEO.data.contentAnalysis.wordCount).toBeGreaterThan(100)
      expect(optimizedSEO.data.contentAnalysis.headingStructure.hasProperHierarchy).toBe(true)
      expect(optimizedSEO.data.keywordAnalysis.keywordPlacement.inTitle).toBe(true)
      expect(optimizedSEO.data.metaOptimization.title.optimal).toBe(true)
      expect(optimizedSEO.data.metaOptimization.description.optimal).toBe(true)

      // Create the optimized content
      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue({
        id: 'optimized-nexpose',
        ...optimizedContent,
        seoScore: optimizedSEO.data.overallScore
      } as any)

      const createResponse = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(optimizedContent)
      })

      expect(createResponse.status).toBe(200)
      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          seoScore: expect.any(Number)
        }),
        include: expect.any(Object)
      })

      const createData = await createResponse.json()
      expect(createData.data.seoScore).toBeGreaterThan(80)
    })
  })

  describe('Error scenarios and edge cases', () => {
    it('should handle content creation failures gracefully', async () => {
      mockDb.content.create.mockRejectedValue(new Error('Database error'))

      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Test Article',
          slug: 'test-article',
          contentHtml: '<p>Test content</p>'
        })
      })

      expect(response.status).toBe(500)
      const data = await response.json()
      expect(data.success).toBe(false)
    })

    it('should prevent duplicate slugs in the same language', async () => {
      mockDb.content.findUnique.mockResolvedValue({ id: 'existing' } as any)

      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Duplicate Article',
          slug: 'existing-slug',
          contentHtml: '<p>Content</p>'
        })
      })

      expect(response.status).toBe(400)
      const data = await response.json()
      expect(data.error).toBe('Slug already exists')
    })

    it('should handle media upload failures', async () => {
      mockDb.contentMedia.create.mockRejectedValue(new Error('Upload failed'))

      const formData = new FormData()
      formData.append('file', new Blob(['data'], { type: 'image/jpeg' }), 'test.jpg')

      const response = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData
      })

      expect(response.status).toBe(500)
    })
  })
})
