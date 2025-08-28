import { Metadata } from "next"
import ServicesClient from './services-client'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: "IT Services - Comprehensive Technology Solutions | Akrin",
  description: "Explore our full range of IT services including managed IT, cybersecurity, cloud solutions, consulting, and 24/7 support. Professional technology solutions for businesses in Japan.",
  keywords: [
    'IT services Japan',
    'managed IT services',
    'cybersecurity solutions',
    'cloud services',
    'IT consulting',
    'technology solutions',
    'business IT support',
    'enterprise IT services'
  ],
  openGraph: {
    title: 'Professional IT Services for Your Business | Akrin',
    description: 'Comprehensive IT solutions including managed services, security, cloud, and support. Transform your business with our expert technology services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akrin IT Services',
      }
    ],
  },
}

const breadcrumbData = [
  { name: 'Home', url: 'https://akrin.ai' },
  { name: 'Services', url: 'https://akrin.ai/services' }
]

export default function ITServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData))
        }}
      />
      <ServicesClient />
    </>
  )
}