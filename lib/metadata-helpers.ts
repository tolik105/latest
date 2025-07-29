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
  const fullUrl = `${baseUrl}${path}`
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'AKRIN株式会社',
      locale: 'en_US',
      alternateLocale: 'ja_JP',
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
        'en': fullUrl,
        'ja': `${baseUrl}/ja${path}`,
        'x-default': fullUrl
      }
    }
  }
}