/**
 * Mock Database client for AKRIN Content Management System
 * Provides mock database access without external dependencies
 */

// Basic TypeScript types to replace Prisma types
export type Language = 'EN' | 'JA'
export type ContentStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'

export interface Content {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  status: ContentStatus
  language: Language
  viewCount: number
  seoScore?: number
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface Keyword {
  id: string
  keyword: string
  language: Language
  searchVolume?: number
  difficulty?: number
  createdAt: Date
  updatedAt: Date
}

export interface ContentKeyword {
  id: string
  contentId: string
  keywordId: string
}

export interface ContentMedia {
  id: string
  contentId: string
  url: string
  alt?: string
  type: string
}

export interface ContentAnalytics {
  id: string
  contentId: string
  views: number
  date: Date
}

// Create a mock client that returns empty data
const createMockClient = () => ({
  content: {
    findFirst: async () => null,
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({} as Content),
    update: async () => ({} as Content),
    count: async () => 0,
    aggregate: async () => ({ _sum: { viewCount: 0 }, _avg: { seoScore: 0 } })
  },
  category: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({} as Category),
    update: async () => ({} as Category),
    count: async () => 0
  },
  keyword: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({} as Keyword),
    update: async () => ({} as Keyword),
    count: async () => 0
  },
  contentKeyword: {
    findMany: async () => [],
    create: async () => ({} as ContentKeyword),
    deleteMany: async () => ({ count: 0 })
  },
  contentMedia: {
    findMany: async () => [],
    create: async () => ({} as ContentMedia),
    deleteMany: async () => ({ count: 0 })
  },
  contentAnalytics: {
    findMany: async () => [],
    create: async () => ({} as ContentAnalytics),
    aggregate: async () => ({ _sum: { views: 0 } })
  },
  lead: {
    create: async () => ({ id: 'mock-id', createdAt: new Date() })
  },
  $connect: async () => {},
  $disconnect: async () => {}
})

export const db = createMockClient()

// Re-export db as prisma for backward compatibility
export { db as prisma }
