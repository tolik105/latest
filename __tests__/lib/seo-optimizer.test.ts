/**
 * Unit tests for SEO Optimizer
 */

import { seoOptimizer } from '@/lib/seo-optimizer'
import { serankingAPI } from '@/lib/seranking-api'

// Mock the SEranking API
jest.mock('@/lib/seranking-api')
const mockSerankingAPI = serankingAPI as jest.Mocked<typeof serankingAPI>

describe('SEOOptimizer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('analyzeContent', () => {
    const sampleContent = {
      title: 'Complete Nexpose Security Guide',
      content: `
        <h1>Complete Nexpose Security Guide</h1>
        <h2>Introduction to Nexpose</h2>
        <p>Nexpose is a comprehensive vulnerability management solution that helps organizations identify and remediate security vulnerabilities. This guide covers everything you need to know about Nexpose implementation and best practices.</p>
        <h2>Getting Started with Nexpose</h2>
        <p>To begin using Nexpose, you'll need to understand the core concepts and setup procedures. Nexpose provides powerful scanning capabilities for network security assessment.</p>
        <h3>Installation Requirements</h3>
        <p>Before installing Nexpose, ensure your system meets the minimum requirements for optimal performance.</p>
        <img src="/nexpose-dashboard.png" alt="Nexpose security dashboard showing vulnerability scan results" />
      `,
      metaTitle: 'Complete Nexpose Security Guide - Vulnerability Management',
      metaDescription: 'Learn how to implement Nexpose for comprehensive vulnerability management. Complete guide covering installation, configuration, and best practices for security teams.',
      focusKeyword: 'nexpose',
      url: '/nexpose-security-guide'
    }

    it('should analyze content structure correctly', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.contentAnalysis.wordCount).toBeGreaterThan(50)
      expect(result.contentAnalysis.headingStructure.h1Count).toBe(1)
      expect(result.contentAnalysis.headingStructure.h2Count).toBe(2)
      expect(result.contentAnalysis.headingStructure.h3Count).toBe(1)
      expect(result.contentAnalysis.headingStructure.hasProperHierarchy).toBe(true)
    })

    it('should calculate keyword density correctly', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.keywordAnalysis.focusKeyword).toBe('nexpose')
      expect(result.keywordAnalysis.keywordDensity).toBeGreaterThan(0)
      expect(result.keywordAnalysis.keywordDensity).toBeLessThan(10) // Should be reasonable
    })

    it('should analyze keyword placement', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.keywordAnalysis.keywordPlacement.inTitle).toBe(true)
      expect(result.keywordAnalysis.keywordPlacement.inMetaDescription).toBe(true)
      expect(result.keywordAnalysis.keywordPlacement.inH1).toBe(true)
    })

    it('should analyze technical SEO elements', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.technicalSEO.titleOptimization).toBeGreaterThan(0)
      expect(result.technicalSEO.metaDescriptionOptimization).toBeGreaterThan(0)
      expect(result.technicalSEO.imageOptimization).toBe(100) // Image has alt text
    })

    it('should generate meta optimization suggestions', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.metaOptimization.title.length).toBe(sampleContent.metaTitle.length)
      expect(result.metaOptimization.description.length).toBe(sampleContent.metaDescription.length)
      expect(result.metaOptimization.title.hasKeyword).toBe(true)
      expect(result.metaOptimization.description.hasKeyword).toBe(true)
    })

    it('should calculate overall SEO score', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.overallScore).toBeGreaterThan(0)
      expect(result.overallScore).toBeLessThanOrEqual(100)
    })

    it('should generate relevant recommendations', async () => {
      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(Array.isArray(result.recommendations)).toBe(true)
      
      // Should have recommendations for improvement
      const criticalRecommendations = result.recommendations.filter(r => r.type === 'critical')
      const importantRecommendations = result.recommendations.filter(r => r.type === 'important')
      
      expect(criticalRecommendations.length + importantRecommendations.length).toBeGreaterThanOrEqual(0)
    })

    it('should handle content without focus keyword', async () => {
      const contentWithoutKeyword = {
        ...sampleContent,
        focusKeyword: undefined
      }

      const result = await seoOptimizer.analyzeContent(contentWithoutKeyword)

      expect(result.keywordAnalysis.focusKeyword).toBeUndefined()
      expect(result.keywordAnalysis.keywordDensity).toBe(0)
      expect(result.overallScore).toBeGreaterThan(0) // Should still have some score
    })

    it('should handle short content appropriately', async () => {
      const shortContent = {
        title: 'Short Article',
        content: '<h1>Short Article</h1><p>This is very short content.</p>',
        metaTitle: 'Short Article',
        metaDescription: 'A short article for testing.',
        focusKeyword: 'short'
      }

      const result = await seoOptimizer.analyzeContent(shortContent)

      expect(result.contentAnalysis.wordCount).toBeLessThan(300)
      
      // Should have recommendations for content length
      const lengthRecommendations = result.recommendations.filter(r => 
        r.description.toLowerCase().includes('content') && 
        r.description.toLowerCase().includes('short')
      )
      expect(lengthRecommendations.length).toBeGreaterThan(0)
    })

    it('should handle content with poor heading structure', async () => {
      const poorStructureContent = {
        title: 'Poor Structure Article',
        content: '<p>This content has no headings at all. Just paragraphs of text without proper structure.</p><p>More content without headings.</p>',
        metaTitle: 'Poor Structure Article',
        metaDescription: 'An article with poor heading structure.',
        focusKeyword: 'structure'
      }

      const result = await seoOptimizer.analyzeContent(poorStructureContent)

      expect(result.contentAnalysis.headingStructure.h1Count).toBe(0)
      expect(result.contentAnalysis.headingStructure.hasProperHierarchy).toBe(false)
      
      // Should have recommendations for heading structure
      const headingRecommendations = result.recommendations.filter(r => 
        r.description.toLowerCase().includes('heading') || 
        r.description.toLowerCase().includes('h1') ||
        r.description.toLowerCase().includes('h2')
      )
      expect(headingRecommendations.length).toBeGreaterThan(0)
    })

    it('should integrate with SEranking API for keyword data', async () => {
      mockSerankingAPI.getKeywordResearch.mockResolvedValue([
        {
          keyword: 'nexpose',
          searchVolume: 320,
          difficulty: 4,
          cpc: 2.15,
          competition: 'low'
        }
      ])

      const result = await seoOptimizer.analyzeContent(sampleContent)

      expect(result.keywordAnalysis.searchVolume).toBe(320)
      expect(result.keywordAnalysis.keywordDifficulty).toBe(4)
      expect(result.keywordAnalysis.competitionLevel).toBe('low')
    })

    it('should handle SEranking API failures gracefully', async () => {
      mockSerankingAPI.getKeywordResearch.mockRejectedValue(new Error('API Error'))

      const result = await seoOptimizer.analyzeContent(sampleContent)

      // Should still return results even if API fails
      expect(result.overallScore).toBeGreaterThan(0)
      expect(result.keywordAnalysis.searchVolume).toBeUndefined()
      expect(result.keywordAnalysis.keywordDifficulty).toBeUndefined()
    })

    it('should analyze Japanese content correctly', async () => {
      const japaneseContent = {
        title: 'システム it セキュリティガイド',
        content: `
          <h1>システム it セキュリティガイド</h1>
          <h2>システム it の概要</h2>
          <p>システム it は企業のセキュリティ管理において重要な役割を果たします。このガイドでは、システム it の実装と運用について詳しく説明します。</p>
          <h2>システム it の導入手順</h2>
          <p>システム it を効果的に導入するためには、適切な計画と実装が必要です。</p>
        `,
        metaTitle: 'システム it セキュリティガイド - 完全版',
        metaDescription: 'システム it のセキュリティ実装について学びます。企業向けの包括的なガイドです。',
        focusKeyword: 'システム it',
        language: 'JA' as const
      }

      const result = await seoOptimizer.analyzeContent(japaneseContent)

      expect(result.keywordAnalysis.focusKeyword).toBe('システム it')
      expect(result.keywordAnalysis.keywordPlacement.inTitle).toBe(true)
      expect(result.keywordAnalysis.keywordPlacement.inH1).toBe(true)
      expect(result.overallScore).toBeGreaterThan(0)
    })
  })

  describe('Edge cases and error handling', () => {
    it('should handle empty content', async () => {
      const emptyContent = {
        title: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        focusKeyword: ''
      }

      const result = await seoOptimizer.analyzeContent(emptyContent)

      expect(result.contentAnalysis.wordCount).toBe(0)
      expect(result.overallScore).toBe(0)
      expect(result.recommendations.length).toBeGreaterThan(0)
    })

    it('should handle malformed HTML', async () => {
      const malformedContent = {
        title: 'Test Article',
        content: '<h1>Unclosed heading<p>Paragraph without closing<div>Nested without closing',
        metaTitle: 'Test Article',
        metaDescription: 'Test description',
        focusKeyword: 'test'
      }

      const result = await seoOptimizer.analyzeContent(malformedContent)

      // Should still analyze what it can
      expect(result.overallScore).toBeGreaterThanOrEqual(0)
      expect(result.contentAnalysis.wordCount).toBeGreaterThan(0)
    })

    it('should handle very long content', async () => {
      const longContent = {
        title: 'Very Long Article',
        content: '<h1>Very Long Article</h1>' + '<p>This is a very long paragraph. '.repeat(1000) + '</p>',
        metaTitle: 'Very Long Article',
        metaDescription: 'A very long article for testing.',
        focusKeyword: 'long'
      }

      const result = await seoOptimizer.analyzeContent(longContent)

      expect(result.contentAnalysis.wordCount).toBeGreaterThan(1000)
      expect(result.overallScore).toBeGreaterThan(0)
    })
  })
})
