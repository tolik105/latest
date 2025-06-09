import { Metadata } from 'next'

interface ServiceMetadata {
  slug: string
  title: string
  description: string
  keywords: string[]
}

export const serviceMetadata: Record<string, ServiceMetadata> = {
  'managed-services': {
    slug: 'managed-services',
    title: 'Managed IT Services in Japan - 24/7 Support & Monitoring',
    description: 'Professional managed IT services for businesses in Japan. Proactive monitoring, maintenance, and support to keep your systems running smoothly.',
    keywords: ['managed IT services', 'IT management Japan', 'proactive monitoring', 'system maintenance', 'IT outsourcing']
  },
  'it-security': {
    slug: 'it-security',
    title: 'IT Security Services - Protect Your Business Data',
    description: 'Enterprise-grade IT security solutions including threat detection, vulnerability assessments, and security compliance for Japanese businesses.',
    keywords: ['IT security Japan', 'cybersecurity services', 'data protection', 'security compliance', 'threat detection']
  },
  'it-support': {
    slug: 'it-support',
    title: '24/7 IT Support Services in Japan - Help Desk & Technical Support',
    description: 'Round-the-clock IT support services with bilingual help desk, remote assistance, and on-site support throughout Japan.',
    keywords: ['IT support Japan', '24/7 help desk', 'technical support', 'remote IT support', 'bilingual support']
  },
  'it-consulting': {
    slug: 'it-consulting',
    title: 'IT Consulting Services - Strategic Technology Solutions',
    description: 'Expert IT consulting to help your business leverage technology for growth. Strategy, planning, and implementation services in Japan.',
    keywords: ['IT consulting Japan', 'technology strategy', 'digital transformation', 'IT advisory', 'business consulting']
  },
  'cloud': {
    slug: 'cloud',
    title: 'Cloud Services & Migration - AWS, Azure, Google Cloud',
    description: 'Professional cloud migration and management services. We help businesses move to AWS, Azure, or Google Cloud with minimal disruption.',
    keywords: ['cloud services Japan', 'cloud migration', 'AWS Japan', 'Azure services', 'Google Cloud']
  },
  'cyber-security': {
    slug: 'cyber-security',
    title: 'Cybersecurity Services - Advanced Threat Protection',
    description: 'Comprehensive cybersecurity solutions including SOC services, incident response, and security awareness training for Japanese enterprises.',
    keywords: ['cybersecurity Japan', 'SOC services', 'incident response', 'security training', 'threat protection']
  },
  'onsite-support': {
    slug: 'onsite-support',
    title: 'On-Site IT Support Services - Technical Assistance at Your Location',
    description: 'Professional on-site IT support services throughout Japan. Hardware repairs, network setup, and technical assistance at your office.',
    keywords: ['onsite IT support', 'field service', 'hardware support', 'network setup', 'technical assistance']
  },
  'wireless-survey': {
    slug: 'wireless-survey',
    title: 'Wireless Network Survey & Design - WiFi Optimization',
    description: 'Professional wireless site surveys and network design. Optimize your WiFi coverage and performance with our expert analysis.',
    keywords: ['wireless survey', 'WiFi optimization', 'network design', 'site survey Japan', 'wireless assessment']
  },
  'e-waste': {
    slug: 'e-waste',
    title: 'E-Waste Recycling & IT Asset Disposal Services',
    description: 'Secure and environmentally responsible e-waste recycling and IT asset disposal services in Japan. Data destruction certified.',
    keywords: ['e-waste recycling', 'IT asset disposal', 'data destruction', 'electronic recycling', 'ITAD services']
  },
  'it-equipment': {
    slug: 'it-equipment',
    title: 'IT Equipment Supply & Procurement Services',
    description: 'Source quality IT equipment and hardware for your business. Competitive pricing on servers, networking gear, and workstations.',
    keywords: ['IT equipment Japan', 'hardware procurement', 'server supply', 'networking equipment', 'IT purchasing']
  },
  'relocation': {
    slug: 'relocation',
    title: 'IT Relocation Services - Office Moving & Setup',
    description: 'Professional IT relocation services for office moves. We handle server migration, network setup, and equipment transportation.',
    keywords: ['IT relocation', 'office moving', 'server migration', 'network relocation', 'IT moving services']
  },
  'recruitment': {
    slug: 'recruitment',
    title: 'IT Recruitment & Staffing Services in Japan',
    description: 'Find skilled IT professionals for your team. Specialized recruitment services for developers, engineers, and IT managers in Japan.',
    keywords: ['IT recruitment Japan', 'tech staffing', 'IT hiring', 'developer recruitment', 'engineer staffing']
  },
  'workforce-solutions': {
    slug: 'workforce-solutions',
    title: 'IT Workforce Solutions - Staff Augmentation & Training',
    description: 'Comprehensive workforce solutions including staff augmentation, IT training, and skill development programs for your team.',
    keywords: ['workforce solutions', 'staff augmentation', 'IT training', 'skill development', 'team expansion']
  },
  'custom-solutions': {
    slug: 'custom-solutions',
    title: 'Custom IT Solutions - Tailored Technology Services',
    description: 'Bespoke IT solutions designed for your unique business needs. Custom software development and specialized technology services.',
    keywords: ['custom IT solutions', 'bespoke services', 'tailored technology', 'custom development', 'specialized IT']
  },
  'asset-management': {
    slug: 'asset-management',
    title: 'IT Asset Management Services - Inventory & Lifecycle Management',
    description: 'Complete IT asset management including inventory tracking, lifecycle management, and cost optimization for your technology investments.',
    keywords: ['IT asset management', 'inventory tracking', 'lifecycle management', 'asset optimization', 'ITAM services']
  },
  'hardware-maintenance': {
    slug: 'hardware-maintenance',
    title: 'Hardware Maintenance & Repair Services',
    description: 'Professional hardware maintenance and repair services. Keep your servers, workstations, and network equipment running optimally.',
    keywords: ['hardware maintenance', 'IT repair services', 'server maintenance', 'equipment repair', 'preventive maintenance']
  }
}

export function getServiceMetadata(slug: string): Metadata {
  const service = serviceMetadata[slug]
  if (!service) {
    return {
      title: 'IT Service',
      description: 'Professional IT services by Akrin'
    }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [...service.keywords, 'Akrin', 'IT services Japan'],
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://akrin.jp/services/${slug}`,
      siteName: 'Akrin IT Solutions',
      locale: 'en_US',
      alternateLocale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: service.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://akrin.jp/services/${slug}`,
      languages: {
        'en': `https://akrin.jp/services/${slug}`,
        'ja': `https://akrin.jp/ja/services/${slug}`,
      }
    },
  }
}