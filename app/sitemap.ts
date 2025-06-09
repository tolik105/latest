import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://akrin.jp'
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/book-reservation',
    '/blog',
    '/privacy',
    '/terms',
    '/cookies',
  ]
  
  const servicePages = [
    '/services/asset-management',
    '/services/cloud',
    '/services/custom-solutions',
    '/services/cyber-security',
    '/services/e-waste',
    '/services/hardware-maintenance',
    '/services/it-consulting',
    '/services/it-equipment',
    '/services/it-security',
    '/services/it-support',
    '/services/managed-services',
    '/services/onsite-support',
    '/services/recruitment',
    '/services/relocation',
    '/services/wireless-survey',
    '/services/workforce-solutions',
  ]
  
  const allPages = [...staticPages, ...servicePages]
  
  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.includes('/services') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/services' ? 0.9 : route.includes('/services/') ? 0.8 : 0.7,
  }))
}