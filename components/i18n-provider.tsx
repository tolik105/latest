'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Detect language from URL path and set it immediately
    const isJaPath = pathname.startsWith('/ja/')
    const targetLang = isJaPath ? 'ja' : 'en'

    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [pathname])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}