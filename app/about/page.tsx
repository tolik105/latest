import { Metadata } from 'next'
import AboutClient from './about-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Akrin - Your Trusted IT Partner Since Establishment',
  description: 'Learn about Akrin\'s mission, values, and commitment to delivering exceptional IT solutions. We combine Japanese precision with global innovation to transform businesses.',
  keywords: [
    'about Akrin',
    'IT company Japan',
    'Tokyo IT services',
    'Japanese technology company',
    'IT solutions provider',
    'company values',
    'mission statement'
  ],
  openGraph: {
    title: 'About Akrin - Leading IT Solutions Provider in Japan',
    description: 'Discover how Akrin combines local expertise with global best practices to deliver exceptional IT solutions for businesses in Japan and worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Akrin IT Solutions',
      }
    ],
  },
}

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'About', url: 'https://akrin.jp/about' }
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <AboutClient />
    </>
  )
}

