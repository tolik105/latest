import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { NextResponse } from 'next/server'

type CaseFrontmatter = {
  title: string
  slug: string
  date?: string
  locale: 'en' | 'ja'
  image?: string
}

// Use static, file-traceable absolute directories to avoid bundling the whole repo
const EN_DIR = fileURLToPath(new URL('../../../english-case-studies-mdx', import.meta.url))
const JA_DIR = fileURLToPath(new URL('../../../japanese-case-studies-mdx', import.meta.url))

async function listMdxFrontmatters(absDir: string, locale: 'en' | 'ja'): Promise<CaseFrontmatter[]> {
  try {
    const entries = await fs.readdir(absDir)
    const mdxFiles = entries.filter((f) => f.endsWith('.mdx'))
    const items: CaseFrontmatter[] = []
    for (const file of mdxFiles) {
      const raw = await fs.readFile(path.join(absDir, file), 'utf8')
      const m = raw.match(/^---([\s\S]*?)---/)
      if (!m) continue
      const fm = m[1]
      // Extract only allowed fields
      const get = (key: string) => {
        const r = new RegExp(`^${key}:\\s*(.*)$`, 'm')
        const mm = fm.match(r)
        if (!mm) return undefined
        let v = mm[1].trim()
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1)
        return v
      }
      const title = get('title')
      const slug = get('slug')
      const date = get('date')
      const fmLocale = (get('locale') as 'en' | 'ja' | undefined) || locale
      const image = get('image')
      if (!title || !slug) continue
      items.push({ title, slug, date, locale: fmLocale === 'ja' ? 'ja' : 'en', image })
    }
    return items
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = (searchParams.get('locale') as 'en' | 'ja') || 'en'
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Math.max(1, Math.min(12, Number(limitParam))) : undefined

  const en = await listMdxFrontmatters(EN_DIR, 'en')
  const ja = await listMdxFrontmatters(JA_DIR, 'ja')
  const all = [...en, ...ja]
  const EXCLUDED = new Set([
    'enterprise-wifi-hq-koujimachi',
    'office-relocation-tokyo-hq-move',
    'sdwan-retail-40-sites',
  ])
  const filtered = all.filter((i) => i.locale === locale && !EXCLUDED.has(i.slug))
  filtered.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0
    const bd = b.date ? Date.parse(b.date) : 0
    return bd - ad
  })
  const limited = typeof limit === 'number' ? filtered.slice(0, limit) : filtered
  return NextResponse.json(limited, { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300' } })
}

export const dynamic = 'force-dynamic'







