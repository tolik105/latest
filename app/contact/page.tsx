import { Metadata } from 'next'
import ContactClient from './contact-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Akrin IT Solutions',
  description: 'Contact Akrin for professional IT services and support. Reach out to our Tokyo office or send us a message online. Available 24/7 for your IT needs.',
  keywords: [
    'contact Akrin',
    'IT support contact',
    'Tokyo IT services',
    'business hours',
    'IT consultation',
    'request quote',
    'technical support'
  ],
  openGraph: {
    title: 'Contact Akrin - Your IT Solutions Partner',
    description: 'Get in touch with our team for IT services, support, and consultations. We\'re here to help transform your business with technology.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Akrin IT Solutions',
      }
    ],
  },
}

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.jp' },
  { name: 'Contact', url: 'https://akrin.jp/contact' }
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Akrin Co., Ltd.',
    url: 'https://akrin.jp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-3-6821-1223',
      contactType: 'customer service',
      availableLanguage: ['English', 'Japanese'],
      areaServed: ['JP', 'Worldwide']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-4-15 Minamiaoyama 4F',
      addressLocality: 'Minato City',
      addressRegion: 'Tokyo',
      postalCode: '107-0062',
      addressCountry: 'JP'
    }
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
      <ContactClient />
    </>
  )
}

