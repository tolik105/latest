import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://akrin.jp/sitemap.xml',
    host: 'https://akrin.jp',
  }
}