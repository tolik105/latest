/**
 * Unit tests for Content API endpoints
 */

import { NextRequest } from 'next/server'
import { GET, POST } from '@/app/api/admin/content/route'
import { db } from '@/lib/db'
import { ContentStatus, Language } from '@/lib/generated/prisma'

// Mock the database
jest.mock('@/lib/db')
const mockDb = db as jest.Mocked<typeof db>

describe('/api/admin/content', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/admin/content', () => {
    it('should return paginated content list', async () => {
      const mockContent = [
        {
          id: '1',
          title: 'Test Article',
          slug: 'test-article',
          contentHtml: '<p>Test content</p>',
          status: ContentStatus.PUBLISHED,
          language: Language.EN,
          createdAt: new Date(),
          updatedAt: new Date(),
          category: { nameEn: 'Technology' },
          keywords: [],
          _count: { media: 0, analytics: 0 }
        }
      ]

      mockDb.content.findMany.mockResolvedValue(mockContent as any)
      mockDb.content.count.mockResolvedValue(1)

      const request = new NextRequest('http://localhost:3000/api/admin/content?page=1&limit=10')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual(mockContent)
      expect(data.pagination).toEqual({
        page: 1,
        limit: 10,
        total: 1,
        pages: 1
      })
    })

    it('should handle search filtering', async () => {
      mockDb.content.findMany.mockResolvedValue([])
      mockDb.content.count.mockResolvedValue(0)

      const request = new NextRequest('http://localhost:3000/api/admin/content?search=nexpose')
      await GET(request)

      expect(mockDb.content.findMany).toHaveBeenCalledWith({
        where: {
          OR: [
            { title: { contains: 'nexpose', mode: 'insensitive' } },
            { excerpt: { contains: 'nexpose', mode: 'insensitive' } },
            { focusKeyword: { contains: 'nexpose', mode: 'insensitive' } }
          ]
        },
        skip: 0,
        take: 10,
        orderBy: { updatedAt: 'desc' },
        include: expect.any(Object)
      })
    })

    it('should handle status filtering', async () => {
      mockDb.content.findMany.mockResolvedValue([])
      mockDb.content.count.mockResolvedValue(0)

      const request = new NextRequest('http://localhost:3000/api/admin/content?status=PUBLISHED')
      await GET(request)

      expect(mockDb.content.findMany).toHaveBeenCalledWith({
        where: { status: ContentStatus.PUBLISHED },
        skip: 0,
        take: 10,
        orderBy: { updatedAt: 'desc' },
        include: expect.any(Object)
      })
    })

    it('should handle language filtering', async () => {
      mockDb.content.findMany.mockResolvedValue([])
      mockDb.content.count.mockResolvedValue(0)

      const request = new NextRequest('http://localhost:3000/api/admin/content?language=JA')
      await GET(request)

      expect(mockDb.content.findMany).toHaveBeenCalledWith({
        where: { language: Language.JA },
        skip: 0,
        take: 10,
        orderBy: { updatedAt: 'desc' },
        include: expect.any(Object)
      })
    })
  })

  describe('POST /api/admin/content', () => {
    it('should create new content successfully', async () => {
      const mockCreatedContent = {
        id: '1',
        title: 'New Article',
        slug: 'new-article',
        contentHtml: '<p>New content</p>',
        status: ContentStatus.DRAFT,
        language: Language.EN,
        seoScore: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: null,
        keywords: []
      }

      mockDb.content.findUnique.mockResolvedValue(null) // Slug doesn't exist
      mockDb.content.create.mockResolvedValue(mockCreatedContent as any)

      const requestBody = {
        title: 'New Article',
        slug: 'new-article',
        contentHtml: '<p>New content</p>',
        focusKeyword: 'test keyword'
      }

      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual(mockCreatedContent)
      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          title: 'New Article',
          slug: 'new-article',
          contentHtml: '<p>New content</p>',
          focusKeyword: 'test keyword',
          seoScore: expect.any(Number)
        }),
        include: expect.any(Object)
      })
    })

    it('should return error for missing required fields', async () => {
      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: JSON.stringify({ title: 'Test' }), // Missing slug and content
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Title, slug, and content are required')
    })

    it('should return error for duplicate slug', async () => {
      mockDb.content.findUnique.mockResolvedValue({ id: '1' } as any) // Slug exists

      const requestBody = {
        title: 'New Article',
        slug: 'existing-slug',
        contentHtml: '<p>New content</p>'
      }

      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Slug already exists')
    })

    it('should calculate SEO score correctly', async () => {
      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue({} as any)

      const requestBody = {
        title: 'SEO Test Article',
        slug: 'seo-test-article',
        contentHtml: '<h1>SEO Test Article</h1><h2>Introduction</h2><p>This article contains the keyword SEO multiple times for testing SEO optimization.</p>',
        metaTitle: 'SEO Test Article - Complete Guide',
        metaDescription: 'Learn about SEO optimization techniques in this comprehensive guide.',
        focusKeyword: 'SEO'
      }

      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })

      await POST(request)

      expect(mockDb.content.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          seoScore: expect.any(Number)
        }),
        include: expect.any(Object)
      })

      const createCall = mockDb.content.create.mock.calls[0][0]
      expect(createCall.data.seoScore).toBeGreaterThan(0)
    })

    it('should set publishedAt when status is PUBLISHED', async () => {
      mockDb.content.findUnique.mockResolvedValue(null)
      mockDb.content.create.mockResolvedValue({} as any)

      const requestBody = {
        title: 'Published Article',
        slug: 'published-article',
        contentHtml: '<p>Published content</p>',
        status: ContentStatus.PUBLISHED
      }

      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })

      await POST(request)

      const createCall = mockDb.content.create.mock.calls[0][0]
      expect(createCall.data.publishedAt).toBeInstanceOf(Date)
    })
  })

  describe('Error handling', () => {
    it('should handle database errors gracefully', async () => {
      mockDb.content.findMany.mockRejectedValue(new Error('Database connection failed'))

      const request = new NextRequest('http://localhost:3000/api/admin/content')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Failed to fetch content')
    })

    it('should handle JSON parsing errors', async () => {
      const request = new NextRequest('http://localhost:3000/api/admin/content', {
        method: 'POST',
        body: 'invalid json',
        headers: { 'Content-Type': 'application/json' }
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
    })
  })
})
