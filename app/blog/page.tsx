import { Metadata } from 'next'
import React from "react"
import { SimpleBlogWithGrid } from "@/components/ui/simple-blog-with-grid"
import { blogPostsEN } from "@/lib/blog-data"

// Enhanced SEO metadata for blog listing page
export const metadata: Metadata = {
  title: 'IT Blog & Resources | AKRIN - Expert Insights on Technology Solutions in Japan',
  description: 'Discover expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan. Read practical guides and industry analysis from AKRIN\'s technology experts.',
  keywords: [
    'IT blog Japan',
    'technology insights',
    'cybersecurity Japan',
    'cloud solutions',
    'IT infrastructure',
    'digital transformation',
    'enterprise technology',
    'IT consulting blog',
    'technology trends Japan',
    'business technology',
    'IT security best practices',
    'cloud migration',
    '5G technology',
    'remote work security',
    'AI technology',
    'IT support Japan'
  ],
  authors: [{ name: 'AKRIN Technology Experts' }],
  creator: 'AKRIN',
  publisher: 'AKRIN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://akrin.jp'),
  alternates: {
    canonical: '/blog',
    languages: {
      'en-US': '/blog',
      'ja-JP': '/ja/blog',
    },
  },
  openGraph: {
    title: 'IT Blog & Resources | AKRIN - Expert Technology Insights',
    description: 'Expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan. Practical guides from AKRIN technology experts.',
    url: 'https://akrin.jp/blog',
    siteName: 'AKRIN',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://akrin.jp/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AKRIN IT Blog - Technology Insights and Resources',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Blog & Resources | AKRIN - Expert Technology Insights',
    description: 'Expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan.',
    site: '@AKRIN_JP',
    creator: '@AKRIN_JP',
    images: ['https://akrin.jp/images/blog-og-image.jpg'],
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

// Generate structured data for blog listing
function generateBlogStructuredData() {
  const posts = Object.values(blogPostsEN)

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'AKRIN IT Blog',
    description: 'Expert insights on IT infrastructure, cybersecurity, cloud solutions, and digital transformation in Japan',
    url: 'https://akrin.jp/blog',
    publisher: {
      '@type': 'Organization',
      name: 'AKRIN',
      url: 'https://akrin.jp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://akrin.jp/images/akrin-logo.png',
        width: 200,
        height: 60
      }
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      url: `https://akrin.jp/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN Expert'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/images/akrin-logo.png'
        }
      },
      image: post.image ? {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630
      } : undefined,
      articleSection: post.category || 'Technology',
      keywords: post.tags?.join(', ') || 'IT, Technology, Japan'
    }))
  }
}

export default function BlogPage() {
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
            AKRIN IT Blog - Expert Technology Insights and Resources for Japanese Businesses
          </h1>

          {/* Blog content with semantic structure */}
          <section aria-label="Blog posts and articles">
            <SimpleBlogWithGrid />
          </section>
        </div>
      </main>
    </>
  )
}