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
    // Exclude non-canonical duplicates and legacy slugs
    if (path === '/services/it-security-services' || path === '/services/penetration-testing') {
      return null
    }

    const isJa = path.startsWith('/ja')
    const enPath = isJa ? (path.replace(/^\/ja/, '') || '/') : path
    const jaPath = isJa ? path : (path === '/' ? '/ja' : `/ja${path}`)

    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' || path === '/ja' ? 1.0 : 0.7,
      alternateRefs: [
        { href: `https://akrin.jp${enPath}`, hreflang: 'en' },
        { href: `https://akrin.jp${jaPath}`, hreflang: 'ja' },
        { href: `https://akrin.jp${enPath}`, hreflang: 'x-default' },
      ],
    }
  },
}

export default config


