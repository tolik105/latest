import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock Prisma client with proper Jest mock functions
const createMockPrismaModel = () => ({
  findMany: jest.fn().mockResolvedValue([]),
  findUnique: jest.fn().mockResolvedValue(null),
  findFirst: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({}),
  delete: jest.fn().mockResolvedValue({}),
  count: jest.fn().mockResolvedValue(0),
  aggregate: jest.fn().mockResolvedValue({}),
  groupBy: jest.fn().mockResolvedValue([]),
  upsert: jest.fn().mockResolvedValue({}),
  deleteMany: jest.fn().mockResolvedValue({ count: 0 }),
})

jest.mock('./lib/db', () => ({
  db: {
    content: createMockPrismaModel(),
    category: createMockPrismaModel(),
    keyword: createMockPrismaModel(),
    contentMedia: createMockPrismaModel(),
    contentAnalytics: createMockPrismaModel(),
    contentKeyword: createMockPrismaModel(),
  },
}))

// Mock SEranking API
jest.mock('./lib/seranking-api', () => ({
  serankingAPI: {
    getKeywordResearch: jest.fn(),
    getRankings: jest.fn(),
    getCompetitorAnalysis: jest.fn(),
  },
}))

// Mock file system operations
jest.mock('fs/promises', () => ({
  writeFile: jest.fn(),
  unlink: jest.fn(),
  mkdir: jest.fn(),
}))

// Mock environment variables
process.env.DATABASE_URL = 'file:./test.db'
process.env.SERANKING_API_KEY = 'test-api-key'

// Global test utilities
global.fetch = jest.fn()

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks()
})
