'use client'

import { usePathname } from 'next/navigation'

export function HreflangLinks() {
  const pathname = usePathname()
  const baseUrl = 'https://akrin.jp'
  
  // Generate absolute URLs for each language
  const enUrl = `${baseUrl}${pathname}`
  const jaUrl = `${baseUrl}/ja${pathname}`
  
  return (
    <>
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  )
}