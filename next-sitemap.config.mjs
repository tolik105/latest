/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://akrin.jp',
  generateRobotsTxt: false, // We serve robots via app/robots.ts
  generateIndexSitemap: true,
  sitemapBaseFileName: 'sitemap',
  outDir: 'public',
  exclude: [
    '/api/*',
    '/admin*',
    '/private/*',
    '/thank-you',
    '/404',
    '/500',
    '/book-consultation/success',
    '/book-reservation/success',
    '/ja/ja*',
  ],
  transform: async (config, path) => {
    // Use canonical route map; exclude non-canonical and legacy
    const { routeMap, normalizePath, getAlternatesForPath } = await import('./lib/route-map')
    const normalized = normalizePath(path)
    const pair = getAlternatesForPath(normalized)
    if (!pair) return null

    const enPath = normalizePath(pair.en)
    const jaPath = normalizePath(pair.ja)
    const loc = normalized.startsWith('/ja') ? jaPath : enPath

    return {
      loc,
      changefreq: 'weekly',
      priority: loc === '/' || loc === '/ja' ? 1.0 : 0.7,
      alternateRefs: [
        { href: `https://akrin.jp${enPath}`, hreflang: 'en' },
        { href: `https://akrin.jp${jaPath}`, hreflang: 'ja' },
        { href: `https://akrin.jp${enPath}`, hreflang: 'x-default' },
      ],
    }
  },
}

export default config


