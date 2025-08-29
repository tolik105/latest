import fs from 'node:fs'
import path from 'node:path'

type CrawlRec = {
  url: string
  status: number | null
  title: string | null
  description: string | null
  h1: string | null
  headings: { level: number; text: string }[]
  wordCount: number
  css: { href: string; bytes?: number | null }[]
  js: { src: string; bytes?: number | null }[]
  fonts: { href: string; bytes?: number | null }[]
  images: { src: string; bytes?: number | null; width?: number | null; height?: number | null; alt?: string | null }[]
  schemaTypes: string[]
  hreflang: { href: string; lang: string }[]
  canonical: string | null
  metaRobots: string | null
  openGraph: Record<string, string | null>
  lang?: string | null
}

const IN_FILE = path.join(process.cwd(), 'crawl-results', 'sitemap-crawl.json')
const OUT_DIR = path.join(process.cwd(), 'crawl-results')
const ISSUES_CSV = path.join(OUT_DIR, 'issues.csv')
const SUMMARY_MD = path.join(OUT_DIR, 'summary.md')

function gz(bytes: number | null | undefined): number | null {
  if (bytes == null) return null
  // Rough gzip ratio estimate 0.3 for text, 0.5 for js; use 0.35 overall
  return Math.round(bytes * 0.35)
}

function sumBytes(list: Array<{ bytes?: number | null }>): number {
  return list.reduce((a, b) => a + (b.bytes || 0), 0)
}

function uniq<T>(arr: T[]): T[] { return Array.from(new Set(arr)) }

function analyze(records: CrawlRec[]) {
  const issues: string[] = []
  const rows: string[] = ['url,issue,severity,details']

  const add = (url: string, issue: string, severity: 'high'|'medium'|'low', details = '') => {
    rows.push([url, issue, severity, JSON.stringify(details)].map(v => '"'+String(v).replace(/"/g,'""')+'"').join(','))
    issues.push(issue)
  }

  for (const r of records) {
    // Status
    if (r.status && r.status >= 400) add(r.url, `HTTP ${r.status}`, 'high')

    // Titles & meta
    if (!r.title || r.title.trim().length === 0) add(r.url, 'Missing title', 'high')
    else if (r.title.length > 60) add(r.url, `Title too long (${r.title.length})`, 'low')
    if (!r.description || r.description.trim().length === 0) add(r.url, 'Missing meta description', 'medium')
    else if (r.description.length < 120 || r.description.length > 170) add(r.url, `Meta description suboptimal (${r.description.length})`, 'low')

    // Headings
    if (!r.h1) add(r.url, 'Missing H1', 'high')
    const h1s = r.headings.filter(h => h.level === 1)
    if (h1s.length > 1) add(r.url, `Multiple H1s (${h1s.length})`, 'medium')

    // Perf budgets (rough, gzip-estimated)
    const jsTotal = gz(sumBytes(r.js))
    const cssTotal = gz(sumBytes(r.css))
    const fontsTotal = gz(sumBytes(r.fonts))
    const imageAboveFold = r.images.slice(0, 6).reduce((a, b) => a + (b.bytes || 0), 0) // rough top images
    if (jsTotal != null && jsTotal > 180_000) add(r.url, `JS over budget (${jsTotal} gz)`, 'high', { budget: 180000 })
    if (cssTotal != null && cssTotal > 60_000) add(r.url, `CSS over budget (${cssTotal} gz)`, 'medium', { budget: 60000 })
    if (fontsTotal != null && fontsTotal > 120_000) add(r.url, `Fonts heavy (${fontsTotal} gz)`, 'low')
    if (imageAboveFold > 200_000) add(r.url, `Above-the-fold images heavy (${imageAboveFold})`, 'high')

    // hreflang/canonical
    if (!r.canonical) add(r.url, 'Missing canonical', 'medium')
    const langs = uniq(r.hreflang.map(h => h.lang))
    if (!(langs.includes('en') && langs.includes('ja') && langs.includes('x-default'))) add(r.url, 'Incomplete hreflang set', 'medium')

    // a11y basics
    const missingAlt = r.images.filter(i => (i.alt == null || i.alt === '')).length
    if (missingAlt > 0) add(r.url, `Images missing alt (${missingAlt})`, 'high')
    if (!r.lang) add(r.url, 'Missing html lang', 'high')
  }

  const byIssue = new Map<string, number>()
  for (const i of issues) byIssue.set(i, (byIssue.get(i) || 0) + 1)

  const summaryLines = ['# Crawl Summary', '', `Pages: ${records.length}`, '', '## Issue counts']
  for (const [k, v] of Array.from(byIssue.entries()).sort((a,b)=>b[1]-a[1])) summaryLines.push(`- ${k}: ${v}`)

  fs.writeFileSync(ISSUES_CSV, rows.join('\n'))
  fs.writeFileSync(SUMMARY_MD, summaryLines.join('\n'))
  console.log(`[analyze] Wrote ${ISSUES_CSV} and ${SUMMARY_MD}`)
}

function main() {
  if (!fs.existsSync(IN_FILE)) throw new Error('sitemap-crawl.json not found')
  const data = JSON.parse(fs.readFileSync(IN_FILE, 'utf8')) as CrawlRec[]
  analyze(data)
}

main()


