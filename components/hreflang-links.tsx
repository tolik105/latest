'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

export function HreflangLinks() {
  const pathname = usePathname() || '/'

  // Prefer runtime origin; fall back to production domain (akrin.jp)
  const origin = typeof window !== 'undefined' && window.location?.origin
    ? window.location.origin
    : (process.env.NEXT_PUBLIC_SITE_URL || 'https://akrin.jp')

  // Normalize paths for each locale
  const enPath = useMemo(() => pathname.replace(/^\/ja(\/|$)/, '/'), [pathname])
  const jaPath = useMemo(() => `/ja${pathname.replace(/^\/ja/, '')}` as const, [pathname])

  const enUrl = `${origin}${enPath}`
  const jaUrl = `${origin}${jaPath}`

  return (
    <>
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  )
}