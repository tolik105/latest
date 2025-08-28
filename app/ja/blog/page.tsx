import { Metadata } from 'next'
import React from "react"
import { SimpleBlogWithGrid } from "@/components/ui/simple-blog-with-grid"
import { blogPostsJA } from "@/lib/blog-data"

// Enhanced SEO metadata for Japanese blog listing page
export const metadata: Metadata = {
  title: 'ITブログ＆リソース | AKRIN - 日本のテクノロジーソリューションに関する専門的な洞察',
  description: '日本におけるITインフラストラクチャー、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションに関する専門的な洞察をご覧ください。AKRINの技術専門家による実践的なガイドと業界分析。',
  keywords: [
    'ITブログ 日本',
    'テクノロジーの洞察',
    'サイバーセキュリティ 日本',
    'クラウドソリューション',
    'ITインフラストラクチャー',
    'デジタルトランスフォーメーション',
    'エンタープライズテクノロジー',
    'ITコンサルティングブログ',
    'テクノロジートレンド 日本',
    'ビジネステクノロジー',
    'ITセキュリティベストプラクティス',
    'クラウド移行',
    '5Gテクノロジー',
    'リモートワークセキュリティ',
    'AIテクノロジー',
    'ITサポート 日本'
  ],
  authors: [{ name: 'AKRIN技術専門家' }],
  creator: 'AKRIN',
  publisher: 'AKRIN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akrin.jp'),
  alternates: {
    canonical: '/ja/blog',
    languages: {
      'en-US': '/blog',
      'ja-JP': '/ja/blog',
    },
  },
  openGraph: {
    title: 'ITブログ＆リソース | AKRIN - 専門的な技術の洞察',
    description: '日本におけるITインフラストラクチャー、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションに関する専門的な洞察。AKRIN技術専門家による実践的なガイド。',
    url: 'https://akrin.jp/ja/blog',
    siteName: 'AKRIN',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AKRIN ITブログ - テクノロジーの洞察とリソース',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITブログ＆リソース | AKRIN - 専門的な技術の洞察',
    description: '日本におけるITインフラストラクチャー、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションに関する専門的な洞察。',
    site: '@AKRIN_JP',
    creator: '@AKRIN_JP',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Generate structured data for Japanese blog listing
function generateBlogStructuredData() {
  const posts = Object.values(blogPostsJA)

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AKRIN ITブログ',
    description: '日本におけるITインフラストラクチャー、サイバーセキュリティ、クラウドソリューション、デジタルトランスフォーメーションに関する専門的な洞察',
    url: 'https://akrin.jp/ja/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AKRIN',
      url: 'https://akrin.jp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://akrin.jp/akrin-logo.svg',
        width: 499,
        height: 80
      }
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      url: `https://akrin.jp/ja/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN専門家'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/akrin-logo.svg'
        }
      },
      image: post.image ? {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630
      } : undefined,
      articleSection: post.category || 'テクノロジー',
      keywords: post.tags?.join(', ') || 'IT, テクノロジー, 日本'
    }))
  }
}

export default function BlogPageJA() {
  const structuredData = generateBlogStructuredData()

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Enhanced semantic HTML structure */}
      <main className="flex min-h-screen flex-col bg-white" role="main">
        <div className="pt-20">
          {/* Hidden H1 for SEO */}
          <h1 className="sr-only">
            AKRIN ITブログ - 日本企業のための専門的な技術の洞察とリソース
          </h1>

          {/* Blog content with semantic structure */}
          <section aria-label="ブログ記事">
            <SimpleBlogWithGrid language="ja" />
          </section>
        </div>
      </main>
    </>
  )
}