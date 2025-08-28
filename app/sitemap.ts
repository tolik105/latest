import { MetadataRoute } from 'next'
import { blogPostsEN, blogPostsJA } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://akrin.jp'

  const staticPages = [
    {
      url: '',
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/book-consultation',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/book-reservation',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/blog',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/case-studies',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Locale index pages will be added below with proper URLs
    {
      url: '/privacy',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: '/terms',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: '/cookies',
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const servicePages = [
    {
      url: '/services/it-managed-services',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/it-consulting-project-management',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/cloud-infrastructure',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/cybersecurity',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/network-penetration-testing',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/wifi-assessment',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/wifi-design',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/services/it-security',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts with dynamic content
  const blogPages = Object.values(blogPostsEN).map((post) => ({
    url: `/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  // Japanese equivalents for static and service pages
  const staticPagesJA = staticPages.map(p => ({
    ...p,
    url: `/ja${p.url}`,
  }))

  const servicePagesJA = servicePages.map(p => ({
    ...p,
    url: `/ja${p.url}`,
  }))

  // Japanese blog posts
  const blogPagesJA = Object.values(blogPostsJA).map((post) => ({
    url: `/ja/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...staticPagesJA,
    ...servicePagesJA,
    ...blogPagesJA,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}