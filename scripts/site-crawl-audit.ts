import fs from 'node:fs'
import path from 'node:path'
import { chromium, devices } from 'playwright'
import { URL } from 'node:url'

type UrlRecord = {
  url: string
  finalUrl?: string
  status: number | null
  redirectedFrom: string[]
  contentType: string | null
  title: string | null
  description: string | null
  h1: string | null
  headings: { level: number; text: string }[]
  wordCount: number
  images: { src: string; type: string | null; width: number | null; height: number | null; bytes: number | null }[]
  fonts: { href: string; bytes: number | null }[]
  css: { href: string | null; bytes: number | null; usedBytes: number | null }[]
  js: { src: string | null; bytes: number | null }[]
  coreWebVitals: { LCP: number | null; CLS: number | null; INP: number | null; TTFB: number | null }
  schemaTypes: string[]
  hreflang: { href: string; lang: string }[]
  canonical: string | null
  metaRobots: string | null
  openGraph: Record<string, string | null>
  links: { href: string; text: string }[]
  a11y: { violations: { id: string; impact: string | null; description: string; nodes: string[] }[] }
  chain: string[]
  locale: string | null
  htmlSnippet?: string
}

const START_URL = process.env.CRAWL_START_URL || 'https://akrin.jp/'
const MAX_URLS = Number(process.env.CRAWL_MAX_URLS || 2000)
const OUT_DIR = path.join(process.cwd(), 'crawl-results')
const OUT_FILE = path.join(OUT_DIR, 'crawl.json')
const SITEMAP_FILE = path.join(OUT_DIR, 'sitemap.txt')
const ROBOTS_CACHE_FILE = path.join(OUT_DIR, 'robots.txt')

function ensureOutDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
}

function sameHost(u: string, base: URL) {
  try { const x = new URL(u, base); return x.hostname === base.hostname } catch { return false }
}

function normalize(u: string) {
  try { const x = new URL(u); x.hash = ''; return x.toString() } catch { return u }
}

type RobotsRules = { allow: string[]; disallow: string[] }
async function fetchRobotsTxt(baseUrl: URL): Promise<RobotsRules> {
  const robotsUrl = new URL('/robots.txt', baseUrl).toString()
  try {
    const res = await fetch(robotsUrl)
    const txt = await res.text()
    fs.writeFileSync(ROBOTS_CACHE_FILE, txt)
    const lines = txt.split(/\r?\n/).map(l => l.trim())
    let inGlobal = false
    const rules: RobotsRules = { allow: [], disallow: [] }
    for (const line of lines) {
      if (!line || line.startsWith('#')) continue
      const ua = line.match(/^User-agent:\s*(.*)$/i)
      if (ua) { inGlobal = ua[1] === '*'; continue }
      if (!inGlobal) continue
      const dis = line.match(/^Disallow:\s*(.*)$/i)
      if (dis) { rules.disallow.push(dis[1].trim()); continue }
      const al = line.match(/^Allow:\s*(.*)$/i)
      if (al) { rules.allow.push(al[1].trim()); continue }
    }
    return rules
  } catch {
    return { allow: [], disallow: [] }
  }
}

function pathMatchesRule(pathname: string, pattern: string) {
  if (pattern === '') return false
  const escaped = pattern.replace(/[.+^${}()|\[\]\\]/g, r => `\\${r}`)
  const rx = new RegExp('^' + escaped.replace(/\*/g, '.*') + '.*$')
  return rx.test(pathname)
}

function isAllowedByRobots(pathname: string, rules: RobotsRules) {
  const disMatches = rules.disallow.filter(p => pathMatchesRule(pathname, p))
  const alMatches = rules.allow.filter(p => pathMatchesRule(pathname, p))
  if (disMatches.length === 0) return true
  const longestDis = disMatches.sort((a,b) => b.length - a.length)[0] || ''
  const longestAl = alMatches.sort((a,b) => b.length - a.length)[0] || ''
  return longestAl.length > longestDis.length
}

async function collectVitals(page: any) {
  const metrics = { LCP: null as number | null, CLS: null as number | null, INP: null as number | null, TTFB: null as number | null }
  await page.addInitScript(() => {
    // @ts-ignore
    window.__vitals = { LCP: null, CLS: 0, INP: null, TTFB: null }
    new PerformanceObserver((entryList) => {
      for (const e of entryList.getEntries()) {
        // @ts-ignore
        if (e.entryType === 'largest-contentful-paint') window.__vitals.LCP = e.renderTime || e.loadTime || e.startTime
        // @ts-ignore
        if (e.entryType === 'layout-shift' && (e as any).value && !(e as any).hadRecentInput) window.__vitals.CLS += (e as any).value
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true })
    new PerformanceObserver((entryList) => {
      for (const e of entryList.getEntries()) {
        // @ts-ignore
        if (e.entryType === 'layout-shift' && (e as any).value && !(e as any).hadRecentInput) window.__vitals.CLS += (e as any).value
      }
    }).observe({ type: 'layout-shift', buffered: true })
    new PerformanceObserver((entryList) => {
      for (const e of entryList.getEntries()) {
        // @ts-ignore
        if (e.name === 'first-input' || e.entryType === 'event') {
          // @ts-ignore
          window.__vitals.INP = Math.max(window.__vitals.INP || 0, (e as any).duration || 0)
        }
      }
    }).observe({ type: 'event', buffered: true, durationThreshold: 16 })
  })
  const nav = await page.evaluate(() => performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)
  metrics.TTFB = nav ? Math.max(0, (nav as any).responseStart - (nav as any).requestStart) : null
  const vit = await page.evaluate(() => (window as any).__vitals)
  metrics.LCP = vit?.LCP ?? null
  metrics.CLS = vit?.CLS ?? null
  metrics.INP = vit?.INP ?? null
  return metrics
}

async function crawl() {
  ensureOutDir()

  const queue: string[] = [START_URL]
  const seen = new Set<string>()
  const records: UrlRecord[] = []

  const base = new URL(START_URL)

  const browser = await chromium.launch({ headless: true })
  const mobileCtx = await browser.newContext({ ...devices['Pixel 7'], locale: 'en-US' })
  const desktopCtx = await browser.newContext({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1, locale: 'en-US' })

  const robots = await fetchRobotsTxt(base)

  async function handlePage(ctx: any, url: string) {
    const redirects: string[] = []
    let status: number | null = null
    let contentType: string | null = null
    const page = await ctx.newPage()
    // Attach listeners BEFORE navigation to capture all requests
    const reqs = new Map<string, { type: string, url: string }>()
    const sizes = new Map<string, number>()
    page.on('request', (req: any) => {
      reqs.set(req.url(), { type: req.resourceType(), url: req.url() })
    })
    page.on('response', async (resp: any) => {
      try {
        if (normalize(resp.url()) === normalize(url)) {
          status = resp.status()
          contentType = resp.headers()['content-type'] || null
        }
        const urlR = resp.url()
        const headers = resp.headers()
        const len = headers['content-length'] ? Number(headers['content-length']) : null
        if (len) sizes.set(urlR, len)
      } catch {}
    })
    page.on('requestfinished', (req: any) => {
      const rr = req.redirectedFrom()
      if (rr) redirects.push(rr.url())
    })

    try {
      const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
      if (!res) throw new Error('No response')
      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {})
      await page.waitForTimeout(800)

      // Extract DOM details
      const dom = await page.evaluate(() => {
        const getMeta = (name: string) => document.querySelector(`meta[name="${name}"]`)?.getAttribute('content')
        const getOg = (p: string) => document.querySelector(`meta[property="og:${p}"]`)?.getAttribute('content')
        const title = document.title || null
        const description = getMeta('description') || null
        const h1 = document.querySelector('h1')?.textContent?.trim() || null
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((el: any) => ({ level: Number(el.tagName.substring(1)), text: (el.textContent || '').trim() }))
        const words = (document.body?.innerText || '').split(/\s+/).filter(Boolean).length
        const imgs = Array.from(document.images).map((img: any) => ({ src: img.currentSrc || img.src, type: (img as any).type || (img.src || '').split('.').pop() || null, width: img.naturalWidth || null, height: img.naturalHeight || null }))
        const links = Array.from(document.querySelectorAll('a[href]')).map((a: any) => ({ href: a.href, text: (a.textContent || '').trim() }))
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null
        const metaRobots = getMeta('robots') || null
        const hreflang = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((l: any) => ({ href: l.href, lang: l.hreflang }))
        const openGraph: Record<string, string | null> = {
          title: getOg('title') || null,
          description: getOg('description') || null,
          image: getOg('image') || null,
          type: getOg('type') || null,
          locale: getOg('locale') || null,
          site_name: getOg('site_name') || null,
        }
        const schemaTypes: string[] = []
        for (const script of Array.from(document.querySelectorAll('script[type="application/ld+json"]'))) {
          try {
            const data = JSON.parse(script.textContent || 'null')
            const types = Array.isArray(data) ? data.map(d => d['@type']).filter(Boolean) : [data?.['@type']].filter(Boolean)
            for (const t of types) schemaTypes.push(String(t))
          } catch {}
        }
        const locale = document.documentElement.getAttribute('lang')
        const html = document.documentElement?.outerHTML || ''
        return { title, description, h1, headings, words, imgs, links, canonical, metaRobots, hreflang, openGraph, schemaTypes, locale, html }
      })

      // Resource sizes
      const css: UrlRecord['css'] = []
      const js: UrlRecord['js'] = []
      const fonts: UrlRecord['fonts'] = []

      // Wait a short while for network to settle
      await page.waitForTimeout(1500)

      for (const [u, info] of reqs.entries()) {
        const size = sizes.get(u) ?? null
        if (info.type === 'stylesheet') css.push({ href: u, bytes: size, usedBytes: null })
        else if (info.type === 'script') js.push({ src: u, bytes: size })
        else if (info.type === 'font') fonts.push({ href: u, bytes: size })
      }

      // Image sizes via HEAD when possible
      const images = await page.evaluate(() => Array.from(document.images).map((img: any) => ({ src: img.currentSrc || img.src, width: img.naturalWidth || null, height: img.naturalHeight || null, type: null as any })))
      const imageInfos: UrlRecord['images'] = []
      for (const im of images) {
        try {
          const u = new URL(im.src, url).toString()
          const r = await fetch(u, { method: 'HEAD' })
          const len = r.headers.get('content-length')
          const ct = r.headers.get('content-type')
          imageInfos.push({ src: u, type: ct, width: im.width, height: im.height, bytes: len ? Number(len) : null })
        } catch {
          imageInfos.push({ src: im.src, type: null, width: im.width, height: im.height, bytes: null })
        }
      }

      const vitals = await collectVitals(page)

      const rec: UrlRecord = {
        url,
        finalUrl: page.url(),
        status,
        redirectedFrom: redirects,
        contentType,
        title: dom.title,
        description: dom.description,
        h1: dom.h1,
        headings: dom.headings,
        wordCount: dom.words,
        images: imageInfos,
        fonts,
        css,
        js,
        coreWebVitals: vitals,
        schemaTypes: dom.schemaTypes,
        hreflang: dom.hreflang,
        canonical: dom.canonical,
        metaRobots: dom.metaRobots,
        openGraph: dom.openGraph,
        links: dom.links,
        a11y: { violations: [] },
        chain: redirects.concat([url]),
        locale: dom.locale,
        htmlSnippet: (dom.html || '').slice(0, 500)
      }
      await page.close()
      return rec
    } catch (e) {
      await page.close().catch(() => {})
      return {
        url,
        status,
        redirectedFrom: redirects,
        contentType,
        title: null,
        description: null,
        h1: null,
        headings: [],
        wordCount: 0,
        images: [],
        fonts: [],
        css: [],
        js: [],
        coreWebVitals: { LCP: null, CLS: null, INP: null, TTFB: null },
        schemaTypes: [],
        hreflang: [],
        canonical: null,
        metaRobots: null,
        openGraph: {},
        links: [],
        a11y: { violations: [] },
        chain: redirects.concat([url]),
        locale: null,
      } as UrlRecord
    }
  }

  const visited: UrlRecord[] = []
  while (queue.length && visited.length < MAX_URLS) {
    const url = queue.shift()!
    if (seen.has(url)) continue
    seen.add(url)

    const parsed = new URL(url)
    if (!isAllowedByRobots(parsed.pathname, robots)) {
      continue
    }
    const ctx = visited.length % 2 === 0 ? mobileCtx : desktopCtx
    const rec = await handlePage(ctx, url)
    visited.push(rec)
    records.push(rec)

    // enqueue same-host links
    if (rec.links) {
      for (const l of rec.links) {
        const abs = (() => { try { return new URL(l.href, base).toString() } catch { return null } })()
        if (!abs) continue
        if (!sameHost(abs, base)) continue
        const norm = normalize(abs)
        const p = new URL(norm)
        if (!isAllowedByRobots(p.pathname, robots)) continue
        if (!seen.has(norm) && !queue.includes(norm)) queue.push(norm)
      }
    }
    if (visited.length % 10 === 0) {
      fs.writeFileSync(OUT_FILE, JSON.stringify(records, null, 2))
      fs.writeFileSync(SITEMAP_FILE, records.map(r => r.url).join('\n'))
      console.log(`[crawl] Progress: ${visited.length} URLs`)
    }
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(records, null, 2))
  fs.writeFileSync(SITEMAP_FILE, records.map(r => r.url).join('\n'))

  await mobileCtx.close(); await desktopCtx.close(); await browser.close()
  console.log(`[crawl] Done. ${records.length} URLs saved to ${OUT_FILE}`)
}

crawl().catch(err => { console.error(err); process.exit(1) })


