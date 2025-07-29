/**
 * Database seed script for AKRIN Content Management System
 * Populates initial data including target keywords and categories
 */

import { PrismaClient, Language } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  console.log('📁 Creating categories...')
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slugEn: 'security' },
      update: {},
      create: {
        nameEn: 'Security',
        nameJa: 'セキュリティ',
        slugEn: 'security',
        slugJa: 'security',
        description: 'Cybersecurity and IT security topics',
        color: '#ef4444',
        sortOrder: 1
      }
    }),
    prisma.category.upsert({
      where: { slugEn: 'it-consulting' },
      update: {},
      create: {
        nameEn: 'IT Consulting',
        nameJa: 'ITコンサルティング',
        slugEn: 'it-consulting',
        slugJa: 'it-consulting',
        description: 'IT consulting and advisory services',
        color: '#3b82f6',
        sortOrder: 2
      }
    }),
    prisma.category.upsert({
      where: { slugEn: 'systems' },
      update: {},
      create: {
        nameEn: 'Systems',
        nameJa: 'システム',
        slugEn: 'systems',
        slugJa: 'systems',
        description: 'IT systems and infrastructure',
        color: '#10b981',
        sortOrder: 3
      }
    }),
    prisma.category.upsert({
      where: { slugEn: 'case-studies' },
      update: {},
      create: {
        nameEn: 'Case Studies',
        nameJa: 'ケーススタディ',
        slugEn: 'case-studies',
        slugJa: 'case-studies',
        description: 'Real-world implementation examples',
        color: '#8b5cf6',
        sortOrder: 4
      }
    }),
    prisma.category.upsert({
      where: { slugEn: 'digital-workplace' },
      update: {},
      create: {
        nameEn: 'Digital Workplace',
        nameJa: 'デジタルワークプレイス',
        slugEn: 'digital-workplace',
        slugJa: 'digital-workplace',
        description: 'Modern workplace solutions and technologies',
        color: '#f59e0b',
        sortOrder: 5
      }
    })
  ])

  console.log(`✅ Created ${categories.length} categories`)

  // Create target keywords with real search data
  console.log('🔑 Creating target keywords...')
  
  // English keywords
  const englishKeywords = [
    { keyword: 'nexpose', searchVolume: 320, difficulty: 4, competition: 'low', cpc: 2.15 },
    { keyword: 'guest wifi', searchVolume: 170, difficulty: 6, competition: 'low', cpc: 1.85 },
    { keyword: 'systems', searchVolume: 9900, difficulty: 60, competition: 'high', cpc: 3.45 },
    { keyword: 'it consulting', searchVolume: 170, difficulty: 8, competition: 'medium', cpc: 4.20 },
    { keyword: 'firmware update', searchVolume: 320, difficulty: 13, competition: 'medium', cpc: 1.95 }
  ]

  // Japanese keywords
  const japaneseKeywords = [
    { keyword: 'システム it', searchVolume: 590, difficulty: 4, competition: 'low', cpc: 1.50 },
    { keyword: 'ケーススタディとは', searchVolume: 8100, difficulty: 49, competition: 'high', cpc: 2.80 },
    { keyword: 'デジタルワークプレイス', searchVolume: 390, difficulty: 5, competition: 'low', cpc: 2.10 },
    { keyword: '財 サービス', searchVolume: 320, difficulty: 6, competition: 'low', cpc: 1.75 },
    { keyword: 'cs ケース スタディ', searchVolume: 480, difficulty: 11, competition: 'medium', cpc: 2.35 }
  ]

  // Insert English keywords
  for (const keywordData of englishKeywords) {
    await prisma.keyword.upsert({
      where: { keyword: keywordData.keyword },
      update: {},
      create: {
        ...keywordData,
        language: Language.EN,
        isTarget: true,
        trend: 'stable'
      }
    })
  }

  // Insert Japanese keywords
  for (const keywordData of japaneseKeywords) {
    await prisma.keyword.upsert({
      where: { keyword: keywordData.keyword },
      update: {},
      create: {
        ...keywordData,
        language: Language.JA,
        isTarget: true,
        trend: 'stable'
      }
    })
  }

  console.log(`✅ Created ${englishKeywords.length + japaneseKeywords.length} target keywords`)

  // Add some additional supporting keywords
  const supportingKeywords = [
    // English supporting keywords
    { keyword: 'cybersecurity', searchVolume: 1200, difficulty: 45, language: Language.EN },
    { keyword: 'network security', searchVolume: 890, difficulty: 35, language: Language.EN },
    { keyword: 'vulnerability assessment', searchVolume: 450, difficulty: 25, language: Language.EN },
    { keyword: 'wifi management', searchVolume: 280, difficulty: 15, language: Language.EN },
    { keyword: 'enterprise systems', searchVolume: 650, difficulty: 40, language: Language.EN },
    
    // Japanese supporting keywords
    { keyword: 'サイバーセキュリティ', searchVolume: 980, difficulty: 42, language: Language.JA },
    { keyword: 'ネットワークセキュリティ', searchVolume: 720, difficulty: 38, language: Language.JA },
    { keyword: 'ITインフラ', searchVolume: 560, difficulty: 28, language: Language.JA },
    { keyword: 'エンタープライズ', searchVolume: 430, difficulty: 32, language: Language.JA },
    { keyword: 'デジタル変革', searchVolume: 890, difficulty: 45, language: Language.JA }
  ]

  for (const keywordData of supportingKeywords) {
    await prisma.keyword.upsert({
      where: { keyword: keywordData.keyword },
      update: {},
      create: {
        ...keywordData,
        competition: 'medium',
        cpc: Math.random() * 3 + 1, // Random CPC between 1-4
        isTarget: false,
        trend: 'stable'
      }
    })
  }

  console.log(`✅ Created ${supportingKeywords.length} supporting keywords`)
  console.log('🎉 Database seed completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
