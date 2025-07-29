/**
 * Integration tests for content workflow
 * Tests the complete content creation, editing, and publishing process
 */

import { db } from '@/lib/db'
import { ContentStatus, Language } from '@/lib/generated/prisma'

// Mock the database for integration tests
jest.mock('@/lib/db')
const mockDb = db as jest.Mocked<typeof db>

describe('Content Workflow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Complete content creation workflow', () => {
    it('should create, edit, and publish content successfully', async () => {
      // Mock database responses for the workflow
      const mockCategory = {
        id: 'cat-1',
        nameEn: 'Security',
        slugEn: 'security'
      }

      const mockKeyword = {
        id: 'kw-1',
        keyword: 'nexpose',
        language: Language.EN,
        searchVolume: 320,
        difficulty: 4,
        isTarget: true
      }

      const mockContent = {
        id: 'content-1',
        title: 'Complete Nexpose Security Guide',
        slug: 'nexpose-security-guide',
        contentHtml: '<h1>Complete Nexpose Security Guide</h1><p>Comprehensive guide content...</p>',
        excerpt: 'Learn about Nexpose security implementation',
        metaTitle: 'Complete Nexpose Security Guide - AKRIN',
        metaDescription: 'Comprehensive guide to implementing Nexpose for enterprise security.',
        focusKeyword: 'nexpose',
        language: Language.EN,
        status: ContentStatus.DRAFT,
        categoryId: 'cat-1',
        seoScore: 85,
        viewCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null
      }

      // Step 1: Create draft content
      mockDb.content.findUnique.mockResolvedValue(null) // Slug doesn't exist
      mockDb.content.create.mockResolvedValue(mockContent as any)

      const createResponse = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: mockContent.title,
          slug: mockContent.slug,
          contentHtml: mockContent.contentHtml,
          excerpt: mockContent.excerpt,
          metaTitle: mockContent.metaTitle,
          metaDescription: mockContent.metaDescription,
          focusKeyword: mockContent.focusKeyword,
          language: mockContent.language,
          categoryId: mockContent.categoryId,
          keywordIds: [mockKeyword.id]
        })
      })

      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          title: mockContent.title,
          slug: mockContent.slug,
          status: ContentStatus.DRAFT
        }),
        include: expect.any(Object)
      })

      // Step 2: Edit content
      const updatedContent = {
        ...mockContent,
        title: 'Updated Nexpose Security Guide',
        contentHtml: '<h1>Updated Nexpose Security Guide</h1><p>Updated comprehensive guide content...</p>',
        seoScore: 90,
        updatedAt: new Date()
      }

      mockDb.content.findUnique.mockResolvedValue(mockContent as any)
      mockDb.content.update.mockResolvedValue(updatedContent as any)

      const updateResponse = await fetch(`/api/admin/content/${mockContent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: updatedContent.title,
          contentHtml: updatedContent.contentHtml
        })
      })

      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: mockContent.id },
        data: expect.objectContaining({
          title: updatedContent.title,
          contentHtml: updatedContent.contentHtml
        }),
        include: expect.any(Object)
      })

      // Step 3: Publish content
      const publishedContent = {
        ...updatedContent,
        status: ContentStatus.PUBLISHED,
        publishedAt: new Date()
      }

      mockDb.content.update.mockResolvedValue(publishedContent as any)

      const publishResponse = await fetch(`/api/admin/content/${mockContent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: ContentStatus.PUBLISHED
        })
      })

      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: mockContent.id },
        data: expect.objectContaining({
          status: ContentStatus.PUBLISHED,
          publishedAt: expect.any(Date)
        }),
        include: expect.any(Object)
      })
    })

    it('should handle bilingual content creation', async () => {
      const englishContent = {
        id: 'en-content-1',
        title: 'Nexpose Security Guide',
        slug: 'nexpose-security-guide',
        language: Language.EN,
        status: ContentStatus.PUBLISHED
      }

      const japaneseContent = {
        id: 'ja-content-1',
        title: 'Nexpose セキュリティガイド',
        slug: 'nexpose-security-guide', // Same slug, different language
        language: Language.JA,
        status: ContentStatus.PUBLISHED
      }

      // Create English version
      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue(englishContent as any)

      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...englishContent,
          contentHtml: '<h1>Nexpose Security Guide</h1>'
        })
      })

      // Create Japanese version with same slug (should be allowed for different language)
      mockDb.content.findFirst.mockResolvedValue(null) // No conflict for different language
      mockDb.content.create.mockResolvedValue(japaneseContent as any)

      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...japaneseContent,
          contentHtml: '<h1>Nexpose セキュリティガイド</h1>'
        })
      })

      expect(mockDb.content.create).toHaveBeenCalledTimes(2)
    })
  })

  describe('Content SEO workflow', () => {
    it('should analyze and optimize content SEO during creation', async () => {
      const contentWithSEOIssues = {
        title: 'Short Title',
        slug: 'short-title',
        contentHtml: '<p>Very short content without proper structure.</p>',
        metaTitle: 'Short',
        metaDescription: 'Short desc',
        focusKeyword: 'test'
      }

      // Mock SEO analysis
      const mockSEOAnalysis = {
        overallScore: 45,
        recommendations: [
          {
            type: 'critical' as const,
            category: 'content' as const,
            title: 'Increase Content Length',
            description: 'Content is too short for good SEO performance.',
            impact: 'high' as const,
            effort: 'medium' as const
          },
          {
            type: 'important' as const,
            category: 'technical' as const,
            title: 'Optimize Meta Title',
            description: 'Meta title is too short.',
            impact: 'medium' as const,
            effort: 'easy' as const
          }
        ]
      }

      // Test SEO analysis endpoint
      const seoResponse = await fetch('/api/admin/seo/analyze-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentWithSEOIssues)
      })

      // Should return analysis with recommendations
      expect(seoResponse.status).toBe(200)
      
      // Content creation should include calculated SEO score
      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue({
        ...contentWithSEOIssues,
        id: 'content-1',
        seoScore: 45,
        status: ContentStatus.DRAFT
      } as any)

      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentWithSEOIssues)
      })

      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          seoScore: expect.any(Number)
        }),
        include: expect.any(Object)
      })
    })
  })

  describe('Media integration workflow', () => {
    it('should handle media upload and association with content', async () => {
      const mockMedia = {
        id: 'media-1',
        filename: 'nexpose-dashboard.jpg',
        originalName: 'nexpose-dashboard.jpg',
        mimeType: 'image/jpeg',
        size: 1024000,
        url: '/uploads/content/nexpose-dashboard.jpg',
        altText: 'Nexpose security dashboard',
        contentId: 'content-1'
      }

      // Mock media upload
      mockDb.contentMedia.create.mockResolvedValue(mockMedia as any)

      const formData = new FormData()
      formData.append('file', new Blob(['fake image data'], { type: 'image/jpeg' }), 'nexpose-dashboard.jpg')
      formData.append('contentId', 'content-1')
      formData.append('altText', 'Nexpose security dashboard')

      const mediaResponse = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData
      })

      expect(mockDb.contentMedia.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          filename: expect.any(String),
          originalName: 'nexpose-dashboard.jpg',
          mimeType: 'image/jpeg',
          altText: 'Nexpose security dashboard',
          contentId: 'content-1'
        })
      })

      // Content should reference the media
      const contentWithMedia = {
        id: 'content-1',
        contentHtml: '<h1>Guide</h1><img src="/uploads/content/nexpose-dashboard.jpg" alt="Nexpose security dashboard" />'
      }

      mockDb.content.findUnique.mockResolvedValue(contentWithMedia as any)
      mockDb.content.update.mockResolvedValue(contentWithMedia as any)

      await fetch('/api/admin/content/content-1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentHtml: contentWithMedia.contentHtml
        })
      })

      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: 'content-1' },
        data: expect.objectContaining({
          contentHtml: expect.stringContaining('/uploads/content/nexpose-dashboard.jpg')
        }),
        include: expect.any(Object)
      })
    })
  })

  describe('Analytics tracking workflow', () => {
    it('should track content analytics after publishing', async () => {
      const mockContent = {
        id: 'content-1',
        status: ContentStatus.PUBLISHED,
        viewCount: 0
      }

      const mockAnalytics = {
        id: 'analytics-1',
        contentId: 'content-1',
        date: new Date(),
        views: 1,
        uniqueViews: 1,
        organicTraffic: 1
      }

      // Simulate content view
      mockDb.content.findFirst.mockResolvedValue(mockContent as any)
      mockDb.content.update.mockResolvedValue({
        ...mockContent,
        viewCount: 1
      } as any)

      // Simulate analytics creation
      mockDb.contentAnalytics.create.mockResolvedValue(mockAnalytics as any)

      // View content (this would happen when someone visits the published page)
      const viewResponse = await fetch('/nexpose-security-guide')

      // Should increment view count
      expect(mockDb.content.update).toHaveBeenCalledWith({
        where: { id: 'content-1' },
        data: { viewCount: { increment: 1 } }
      })

      // Analytics should be tracked
      expect(mockDb.contentAnalytics.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          contentId: 'content-1',
          views: 1,
          uniqueViews: 1
        })
      })
    })
  })

  describe('Error handling in workflow', () => {
    it('should handle database failures gracefully', async () => {
      mockDb.content.create.mockRejectedValue(new Error('Database connection failed'))

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
      expect(data.error).toBe('Failed to create content')
    })

    it('should validate content before publishing', async () => {
      const invalidContent = {
        title: '', // Empty title
        slug: 'invalid-content',
        contentHtml: '<p>Content</p>'
      }

      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidContent)
      })

      expect(response.status).toBe(400)
      const data = await response.json()
      expect(data.success).toBe(false)
      expect(data.error).toContain('required')
    })

    it('should handle slug conflicts appropriately', async () => {
      mockDb.content.findUnique.mockResolvedValue({ id: 'existing-content' } as any)

      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'New Article',
          slug: 'existing-slug',
          contentHtml: '<p>New content</p>'
        })
      })

      expect(response.status).toBe(400)
      const data = await response.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('Slug already exists')
    })
  })
})
