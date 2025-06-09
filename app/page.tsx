import { Metadata } from 'next'
import HomeClient from './home-client'
import { generateFAQSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Akrin - Leading IT Solutions Provider in Japan | Managed Services & Support',
  description: 'Transform your business with Akrin\'s comprehensive IT solutions. We offer managed services, cybersecurity, cloud migration, and 24/7 support for businesses in Japan and globally.',
  keywords: [
    'IT solutions Japan',
    'managed IT services Tokyo',
    'cybersecurity Japan',
    'cloud migration services',
    'IT support Tokyo',
    'IT consulting Japan',
    'digital transformation',
    'enterprise IT solutions',
    '24/7 IT support',
    'Japanese IT company'
  ],
  openGraph: {
    title: 'Akrin - Transform Your Business with Expert IT Solutions',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support. Partner with certified professionals.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akrin IT Solutions - Transform Your Business',
      }
    ],
  },
}

// Generate FAQ schema for homepage
const faqData = [
  {
    question: "What IT services does Akrin provide?",
    answer: "Akrin provides comprehensive IT solutions including managed IT services, cybersecurity, cloud migration, IT consulting, 24/7 support, and custom software development tailored for businesses in Japan and globally."
  },
  {
    question: "Do you offer 24/7 IT support?",
    answer: "Yes, we provide round-the-clock IT support to ensure your business operations run smoothly without interruption. Our dedicated team is available 24/7 to address any IT issues."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various industries including finance, healthcare, manufacturing, retail, and technology companies. Our solutions are customized to meet specific industry requirements and compliance standards."
  },
  {
    question: "Do you provide services outside of Tokyo?",
    answer: "Yes, we provide IT services throughout Japan and internationally. While headquartered in Tokyo, we have the capability to support businesses nationwide and globally."
  },
  {
    question: "How do you ensure data security?",
    answer: "We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with international standards like ISO 27001."
  },
  {
    question: "What makes Akrin different from other IT providers?",
    answer: "Akrin combines local expertise with global best practices, offers bilingual support (English/Japanese), provides certified professionals, and delivers customized solutions with a focus on long-term partnerships."
  },
  {
    question: "How can I get started with Akrin?",
    answer: "You can get started by contacting us through our website, scheduling a consultation, or calling our office. We'll assess your needs and provide a customized IT solution proposal."
  }
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData))
        }}
      />
      <HomeClient />
    </>
  )
}