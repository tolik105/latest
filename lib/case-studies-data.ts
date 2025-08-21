export type CaseStudyItem = {
  id: string
  slug: string
  titleEN: string
  titleJA: string
  categoryEN: string
  categoryJA: string
  excerptEN: string
  excerptJA: string
  metrics?: string[]
}

export const caseStudiesEN: CaseStudyItem[] = [
  {
    id: 'cs-1',
    slug: 'managed-it-services-cpg-tokyo',
    titleEN: 'Consumer Goods Managed IT (Tokyo)',
    titleJA: '消費財メーカー 向け運用保守（東京）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },
  {
    id: 'cs-2',
    slug: 'cloud-migration-manufacturing',
    titleEN: 'Manufacturing Cloud Migration (Kantō / Osaka)',
    titleJA: '製造業 クラウド移行（関東・大阪）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },
  {
    id: 'cs-3',
    slug: 'pentest-fintech-tokyo',
    titleEN: 'Fintech Application Penetration Testing (Tokyo)',
    titleJA: 'フィンテック アプリ脆弱性診断（東京）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },
  {
    id: 'cs-4',
    slug: 'wifi-assessment-retail-tokyo',
    titleEN: 'Retail Wi-Fi Assessment & Optimization (Tokyo + Warehouse)',
    titleJA: '小売 Wi-Fiアセスメント・最適化（東京＋倉庫）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },

  {
    id: 'cs-6',
    slug: 'itad-tokyo-kobe-consolidation',
    titleEN: 'IT Asset Disposition Program (Tokyo & Kobe)',
    titleJA: 'IT資産処分プログラム（東京・神戸）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },

  {
    id: 'cs-8',
    slug: 'datacenter-relocation-colo-to-colo',
    titleEN: 'Data Center Relocation & Consolidation (Metro Tokyo)',
    titleJA: 'データセンター移設・集約（首都圏）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },
  {
    id: 'cs-9',
    slug: 'sdwan-insurance-30-sites-japan',
    titleEN: 'SD-WAN Deployment for Major Insurance (30+ Sites)',
    titleJA: '大手保険 SD-WAN導入（全国30拠点超）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },

  {
    id: 'cs-11',
    slug: 'rack-buildout-9racks-campus',
    titleEN: 'Rack Build-out & Cabling (8–9 Racks)',
    titleJA: 'ラック新設・配線（8〜9架）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  },
  {
    id: 'cs-12',
    slug: 'nationwide-wifi-30-offices',
    titleEN: 'Nationwide Wi-Fi Standardization (30 Offices)',
    titleJA: '全国Wi-Fi標準化（30拠点）',
    categoryEN: '',
    categoryJA: '',
    excerptEN: '',
    excerptJA: ''
  }
]

export const outcomesTable = {
  headersEN: ['Area', 'Key Outcomes'],
  headersJA: ['分野', '主要成果'],
  rowsEN: [
    ['Managed IT', '−28% tickets, −41% repeats, 98.7% SLA'],
    ['Cloud', '−23% TCO, RPO < 15m'],
    ['PenTest', '0 critical/high across 3 releases, −31% remediation LT'],
    ['Wi‑Fi Assessment', '−62% disconnects; VoIP re‑assoc < 1.5s'],
    ['Enterprise Wi‑Fi', 'Stable UC; avg latency < 35 ms; −40% lobby queue'],
    ['ITAD', '0 incidents; −37% net cost; evidence within 48h']
  ],
  rowsJA: [
    ['運用保守', '月次チケット −28%、再発 −41%、SLA 98.7%'],
    ['クラウド移行', 'インフラTCO −23%、RPO < 15分'],
    ['セキュリティ（PenTest）', '重大/高 0件（3リリース連続）、是正LT −31%'],
    ['Wi‑Fiアセスメント', '切断 −62%、VoIP再接続 <1.5秒'],
    ['エンタープライズWi‑Fi', 'UC品質安定、平均遅延 <35ms、滞留 −40%'],
    ['ITAD', '漏えい0件、ネットコスト −37%、証跡 48時間内']
  ]
}

