import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { I18nProvider } from "@/components/i18n-provider"
import { Toaster } from "@/components/ui/toaster"
import { CookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@/components/google-analytics"
import { RecaptchaScript } from "@/components/recaptcha-script"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://akrin.jp'),
  title: {
    default: 'AKRIN株式会社 (AKRIN K.K.) - IT Solutions that Transform Your Business | Japan & Global',
    template: '%s | AKRIN株式会社'
  },
  description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support. Transform your business with our expert IT consulting.',
  keywords: ['AKRIN株式会社', 'AKRIN K.K.', 'アクリン', 'IT solutions Japan', 'managed IT services', 'cybersecurity Japan', 'cloud migration', 'IT support Tokyo', 'IT consulting', 'digital transformation', 'Akrin'],
  authors: [{ name: 'AKRIN株式会社' }],
  creator: 'AKRIN株式会社',
  publisher: 'AKRIN株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AKRIN株式会社 - IT Solutions that Transform Your Business',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.',
    url: 'https://akrin.jp',
    siteName: 'AKRIN株式会社',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AKRIN株式会社 - Transform Your Business',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKRIN株式会社 - IT Solutions that Transform Your Business',
    description: 'Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.',
    creator: '@akrin',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_ACTUAL_GOOGLE_VERIFICATION_CODE', // TODO: Replace with your actual Google Search Console verification code
    // yandex: 'your-yandex-verification-code', // Uncomment and add if using Yandex
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://akrin.jp',
    languages: {
      'en': 'https://akrin.jp/en',
      'ja': 'https://akrin.jp/ja',
      'x-default': 'https://akrin.jp'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://akrin.jp/#organization",
                "name": "AKRIN株式会社",
                "legalName": "AKRIN株式会社",
                "alternateName": ["Akrin Co., Ltd.", "Akrin IT Solutions", "AKRIN K.K.", "アクリン"],
                "url": "https://akrin.jp",
                "logo": "https://akrin.jp/akrin-logo.svg",
                "sameAs": [
                  "https://www.linkedin.com/company/akrinkk"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+81-3-6821-1223",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Japanese", "日本語", "英語"],
                  "areaServed": ["JP", "Worldwide"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2-4-15 Minamiaoyama 4F",
                  "streetAddress@ja": "南青山2-4-15 4F",
                  "addressLocality": "Minato City",
                  "addressLocality@ja": "港区",
                  "addressRegion": "Tokyo",
                  "addressRegion@ja": "東京都",
                  "postalCode": "107-0062",
                  "addressCountry": "JP"
                },
                "description": "Leading IT solutions provider in Japan offering managed services, cybersecurity, cloud migration, and 24/7 support.",
                "description@ja": "日本を代表するITソリューションプロバイダー。マネージドサービス、サイバーセキュリティ、クラウド移行、24時間365日サポートを提供。"
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://akrin.jp/#localbusiness",
                "name": "AKRIN株式会社",
                "image": "https://akrin.jp/og-image.png",
                "priceRange": "$$$$",
                "telephone": "+81-3-6821-1223",
                "email": "support@akrin.jp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "南青山2-4-15 4F",
                  "addressLocality": "港区",
                  "addressRegion": "東京都",
                  "postalCode": "107-0062",
                  "addressCountry": "JP"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 35.6712,
                  "longitude": 139.7195
                },
                "url": "https://akrin.jp",
                "areaServed": {
                  "@type": "Country",
                  "name": "Japan"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "IT Services",
                  "itemListElement": [
                    {
                      "@type": "Service",
                      "name": "Managed IT Services"
                    },
                    {
                      "@type": "Service",
                      "name": "Cybersecurity Solutions"
                    },
                    {
                      "@type": "Service",
                      "name": "Cloud Migration"
                    },
                    {
                      "@type": "Service",
                      "name": "IT Support"
                    }
                  ]
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <GoogleAnalytics />
        <RecaptchaScript />
        <I18nProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            <CookieConsent />
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

