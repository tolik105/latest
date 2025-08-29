import fs from 'node:fs'
import path from 'node:path'

type Rec = { url: string, status: number | null, redirectedFrom?: string[] }

const IN = path.join(process.cwd(), 'crawl-results', 'sitemap-crawl.json')
const OUT = path.join(process.cwd(), 'crawl-results', 'redirect-map.csv')

function main() {
  const data = JSON.parse(fs.readFileSync(IN, 'utf8')) as Rec[]
  const rows = ['from,to,type']
  for (const r of data) {
    if (Array.isArray(r.redirectedFrom) && r.redirectedFrom.length) {
      for (const from of r.redirectedFrom) rows.push(`${from},${r.url},301`)
    }
  }
  fs.writeFileSync(OUT, rows.join('\n'))
  console.log(`[redirect-map] Wrote ${OUT}`)
}

main()
