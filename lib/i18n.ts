import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '../public/locales/en/common.json'
import jaCommon from '../public/locales/ja/common.json'

const resources = {
  en: {
    common: enCommon
  },
  ja: {
    common: jaCommon
  }
}

// Get saved language from localStorage or default to 'en'
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'en' : 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common'],
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lng)
  }
})

export default i18n