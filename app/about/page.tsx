import { Metadata } from 'next'
import AboutClient from './about-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About AKRIN - Enterprise Reliability, Startup Agility',
  description: 'Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large‑scale IT experience with a lean, automation‑first mindset for high‑growth companies in Japan.',
  keywords: [
    'about AKRIN',
    'IT company Japan',
    'Tokyo IT services',
    'enterprise reliability',
    'startup agility',
    'automation first',
    'infrastructure engineers',
    'managed IT cloud',
    'network engineering',
    'cybersecurity compliance'
  ],
  openGraph: {
    title: 'About AKRIN - Enterprise Reliability, Startup Agility',
    description: 'Founded by veteran infrastructure engineers, AKRIN gives high‑growth companies in Japan the uptime, security, and innovation the Fortune 500 enjoy—without the enterprise price tag.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About AKRIN IT Solutions',
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

