import fs from 'node:fs'
import path from 'node:path'
import { URL } from 'node:url'
import * as cheerio from 'cheerio'

type RobotsRules = { allow: string[]; disallow: string[] }

type UrlAudit = {
  url: string
  status: number | null
  finalUrl: string | null
  title: string | null
  description: string | null
  h1: string | null
  headings: { level: number; text: string }[]
  wordCount: number
  images: { src: string; alt: string | null; width?: number | null; height?: number | null; bytes?: number | null }[]
  css: { href: string; bytes?: number | null }[]
  js: { src: string; bytes?: number | null }[]
  fonts: { href: string; bytes?: number | null }[]
  schemaTypes: string[]
  hreflang: { href: string; lang: string }[]
  canonical: string | null
  metaRobots: string | null
  openGraph: Record<string, string | null>
  lang: string | null
}

const START = process.env.CRAWL_START_URL || 'https://akrin.jp/sitemap.xml'
const MAX = Number(process.env.CRAWL_MAX_URLS || 2000)
const OUT_DIR = path.join(process.cwd(), 'crawl-results')
const OUT_FILE = path.join(OUT_DIR, 'sitemap-crawl.json')

function ensureOut() { if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true }) }

async function getText(u: string, init: RequestInit = {}) {
  const res = await fetch(u, init)
  const text = await res.text()
  return { res, text }
}

async function fetchRobots(base: URL): Promise<RobotsRules> {
  try {
    const { text } = await getText(new URL('/robots.txt', base).toString(), { headers: { 'User-Agent': ua() } })
    const lines = text.split(/\r?\n/).map(l => l.trim())
    let inGlobal = false
    const rules: RobotsRules = { allow: [], disallow: [] }
    for (const line of lines) {
      if (!line || line.startsWith('#')) continue
      const ua = line.match(/^User-Agent:\s*(.*)$/i)
      if (ua) { inGlobal = ua[1] === '*'; continue }
      if (!inGlobal) continue
      const dis = line.match(/^Disallow:\s*(.*)$/i)
      if (dis) { rules.disallow.push(dis[1].trim()); continue }
      const al = line.match(/^Allow:\s*(.*)$/i)
      if (al) { rules.allow.push(al[1].trim()); continue }
    }
    return rules
  } catch { return { allow: [], disallow: [] } }
}

function ua() {
  return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
}

function pathMatches(pathname: string, pattern: string) {
  if (pattern === '') return false
  const escaped = pattern.replace(/[.+^${}()|\[\]\\]/g, r => `\\${r}`)
  const rx = new RegExp('^' + escaped.replace(/\*/g, '.*') + '.*$')
  return rx.test(pathname)
}

function allowed(pathname: string, rules: RobotsRules) {
  const dis = rules.disallow.filter(p => pathMatches(pathname, p))
  const al = rules.allow.filter(p => pathMatches(pathname, p))
  if (!dis.length) return true
  const longestDis = dis.sort((a,b)=>b.length-a.length)[0] || ''
  const longestAl = al.sort((a,b)=>b.length-a.length)[0] || ''
  return longestAl.length > longestDis.length
}

async function parseSitemapXml(xml: string): Promise<string[]> {
  const $ = cheerio.load(xml, { xmlMode: true })
  const isIndex = $('sitemapindex').length > 0
  const urls: string[] = []
  if (isIndex) {
    $('sitemap > loc').each((_, el) => { const u = $(el).text().trim(); if (u) urls.push(u) })
  } else {
    $('urlset > url > loc').each((_, el) => { const u = $(el).text().trim(); if (u) urls.push(u) })
  }
  return urls
}

async function gatherUrlsFromSitemap(startUrl: string): Promise<string[]> {
  const base = new URL(startUrl)
  const { res, text } = await getText(startUrl, { headers: { 'User-Agent': ua(), 'Accept': 'application/xml,text/xml;q=0.9,*/*;q=0.8' } })
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`)
  const items = await parseSitemapXml(text)
  const urls: string[] = []
  // If index, fetch nested sitemaps
  if (text.includes('<sitemapindex')) {
    for (const sm of items) {
      const { res: r2, text: t2 } = await getText(sm, { headers: { 'User-Agent': ua(), 'Accept': 'application/xml' } })
      if (!r2.ok) continue
      urls.push(...await parseSitemapXml(t2))
      if (urls.length >= MAX) break
    }
  } else {
    urls.push(...items)
  }
  // Normalize and de-dup
  const seen = new Set<string>()
  const result: string[] = []
  for (const u of urls) {
    try {
      const nu = new URL(u, base).toString()
      if (!seen.has(nu)) { seen.add(nu); result.push(nu) }
      if (result.length >= MAX) break
    } catch {}
  }
  return result
}

async function headContentLength(u: string): Promise<number | null> {
  try {
    const res = await fetch(u, { method: 'HEAD', headers: { 'User-Agent': ua() } })
    const len = res.headers.get('content-length')
    return len ? Number(len) : null
  } catch { return null }
}

async function auditUrl(u: string): Promise<UrlAudit> {
  let status: number | null = null
  let finalUrl: string | null = null
  try {
    const res = await fetch(u, { headers: { 'User-Agent': ua(), 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' }, redirect: 'follow' })
    status = res.status
    finalUrl = res.url
    const html = await res.text()
    const $ = cheerio.load(html)
    const title = $('head > title').first().text().trim() || null
    const description = $('meta[name="description"]').attr('content') || null
    const h1 = $('h1').first().text().trim() || null
    const headings: { level: number; text: string }[] = []
    for (let i=1;i<=6;i++) {
      $(`h${i}`).each((_, el) => headings.push({ level: i, text: $(el).text().trim() }))
    }
    const textContent = $('body').text().replace(/\s+/g,' ').trim()
    const wordCount = textContent ? textContent.split(/\s+/).length : 0
    const images = $('img').map((_, el) => ({ src: new URL($(el).attr('src') || $(el).attr('data-src') || '', finalUrl || u).toString(), alt: ($(el).attr('alt') || '').trim() || null })).get()
    const cssHrefs = $('link[rel="stylesheet"]').map((_, el) => new URL($(el).attr('href') || '', finalUrl || u).toString()).get()
    const jsSrcs = $('script[src]').map((_, el) => new URL($(el).attr('src') || '', finalUrl || u).toString()).get()
    const fontHrefs = $('link[rel="preload"][as="font"]').map((_, el) => new URL($(el).attr('href') || '', finalUrl || u).toString()).get()
    const schemaTypes: string[] = []
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const data = JSON.parse($(el).text())
        const types = Array.isArray(data) ? data.map(d => d['@type']).filter(Boolean) : [data?.['@type']].filter(Boolean)
        for (const t of types) schemaTypes.push(String(t))
      } catch {}
    })
    const hreflang = $('link[rel="alternate"][hreflang]').map((_, el) => ({ href: new URL($(el).attr('href') || '', finalUrl || u).toString(), lang: ($(el).attr('hreflang') || '').trim() })).get()
    const canonical = ($('link[rel="canonical"]').attr('href') ? new URL($('link[rel="canonical"]').attr('href')!, finalUrl || u).toString() : null)
    const metaRobots = $('meta[name="robots"]').attr('content') || null
    const openGraph: Record<string,string|null> = {}
    $('meta[property^="og:"]').each((_, el) => {
      const p = ($(el).attr('property') || '').replace(/^og:/,'')
      const c = $(el).attr('content') || null
      if (p) openGraph[p] = c
    })
    // sizes (HEAD) limited to top N to avoid heavy load
    const uniq = (arr: string[]) => Array.from(new Set(arr))
    const css: UrlAudit['css'] = []
    const js: UrlAudit['js'] = []
    const fonts: UrlAudit['fonts'] = []
    for (const h of uniq(cssHrefs).slice(0, 20)) css.push({ href: h, bytes: await headContentLength(h) })
    for (const s of uniq(jsSrcs).slice(0, 30)) js.push({ src: s, bytes: await headContentLength(s) })
    for (const f of uniq(fontHrefs).slice(0, 10)) fonts.push({ href: f, bytes: await headContentLength(f) })

    return { url: u, status, finalUrl, title, description, h1, headings, wordCount, images, css, js, fonts, schemaTypes, hreflang, canonical, metaRobots, openGraph, lang: $('html').attr('lang') || null }
  } catch {
    return { url: u, status, finalUrl, title: null, description: null, h1: null, headings: [], wordCount: 0, images: [], css: [], js: [], fonts: [], schemaTypes: [], hreflang: [], canonical: null, metaRobots: null, openGraph: {}, lang: null }
  }
}

async function main() {
  ensureOut()
  const start = new URL(START)
  const rules = await fetchRobots(new URL(start.origin))
  const urls = await gatherUrlsFromSitemap(START)
  const allowUrls = urls.filter(u => allowed(new URL(u).pathname, rules)).slice(0, MAX)
  const results: UrlAudit[] = []
  let i = 0
  for (const u of allowUrls) {
    i++
    const rec = await auditUrl(u)
    results.push(rec)
    if (i % 5 === 0) {
      fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2))
      console.log(`[sitemap-crawl] ${i}/${allowUrls.length}`)
    }
    await new Promise(r => setTimeout(r, 200))
  }
  fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2))
  console.log(`[sitemap-crawl] Done: ${results.length} URLs saved to ${OUT_FILE}`)
}

main().catch(err => { console.error(err); process.exit(1) })


