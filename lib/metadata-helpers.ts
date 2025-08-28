import { Metadata } from 'next'

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  path: string
  image?: string
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  image = '/og-image.png'
}: PageMetadataProps): Metadata {
  const baseUrl = 'https://akrin.jp'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const isJa = normalizedPath.startsWith('/ja')
  const enUrl = `${baseUrl}${isJa ? normalizedPath.replace(/^\/ja/, '') || '/' : normalizedPath}`
  const jaUrl = `${baseUrl}${isJa ? normalizedPath : `/ja${normalizedPath}`}`
  const fullUrl = isJa ? jaUrl : enUrl
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'AKRIN株式会社',
      locale: isJa ? 'ja_JP' : 'en_US',
      alternateLocale: isJa ? 'en_US' : 'ja_JP',
      type: 'website',
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@akrin',
      images: [image],
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'en': enUrl,
        'ja': jaUrl,
        'x-default': enUrl
      }
    }
  }
}