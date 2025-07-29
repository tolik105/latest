/**
 * Database client for AKRIN Content Management System
 * Provides centralized database access with connection pooling
 */

import { PrismaClient } from './generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a mock client for when database is not available
const createMockClient = () => ({
  content: {
    findFirst: async () => null,
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    count: async () => 0,
    aggregate: async () => ({ _sum: { viewCount: 0 }, _avg: { seoScore: 0 } })
  },
  category: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    count: async () => 0
  },
  keyword: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    count: async () => 0
  },
  contentKeyword: {
    findMany: async () => [],
    create: async () => ({}),
    deleteMany: async () => ({ count: 0 })
  },
  contentMedia: {
    findMany: async () => [],
    create: async () => ({}),
    deleteMany: async () => ({ count: 0 })
  },
  contentAnalytics: {
    findMany: async () => [],
    create: async () => ({}),
    aggregate: async () => ({ _sum: { views: 0 } })
  },
  $connect: async () => {},
  $disconnect: async () => {}
} as any)

let dbClient: PrismaClient | any

try {
  // Try to create real Prisma client
  dbClient = globalForPrisma.prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = dbClient
} catch (error) {
  console.warn('Database not available, using mock client:', error)
  dbClient = createMockClient()
}

export const db = dbClient

// Export types for use throughout the application
export type {
  Content,
  Category,
  Keyword,
  ContentKeyword,
  ContentMedia,
  ContentAnalytics,
  Language,
  ContentStatus
} from './generated/prisma'

// Re-export prisma for backward compatibility
export { db as prisma }
