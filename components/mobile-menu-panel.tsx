"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { LanguageSelectorMobile } from "@/components/language-selector-mobile"

type Props = {
  isOpen: boolean
  onClose: () => void
  langPrefix: string
  useOverlay: boolean
}

export default function MobileMenuPanel({ isOpen, onClose, langPrefix, useOverlay }: Props) {
  const { t } = useTranslation('common')

  if (!isOpen) return null

  const services = [
    { key: 'managedItSupport', title: t('services.managedIT.title'), href: `${langPrefix}/services/it-managed-services` },
    { key: 'cloudInfrastructure', title: t('services.cloud.title'), href: `${langPrefix}/services/cloud-infrastructure` },
    { key: 'cybersecurity', title: t('services.cyberSecurity.title'), href: `${langPrefix}/services/cybersecurity` },
    { key: 'networkPenetrationTesting', title: 'Network Penetration Testing', href: `${langPrefix}/services/network-penetration-testing` },
    { key: 'itConsultingProjectManagement', title: t('services.consulting.title'), href: `${langPrefix}/services/it-consulting-project-management` },
    { key: 'wifiAssessment', title: 'Wi‑Fi Assessment & Optimization', href: `${langPrefix}/services/wifi-assessment` },
    { key: 'wifiDesign', title: 'Enterprise Wi‑Fi Design & Deployment', href: `${langPrefix}/services/wifi-design` },
    { key: 'itad', title: 'ITAD (Japan/APAC/US)', href: `${langPrefix}/services/itad-japan-apac-us` },
    { key: 'itSecurity', title: t('services.itSecurity.title'), href: `${langPrefix}/services/it-security` }
  ]

  return (
    <div id="mobile-menu" className={`fixed inset-0 z-[1000] ${useOverlay ? 'bg-slate-950/90 text-white' : 'bg-white text-slate-800'} lg:hidden`} role="dialog" aria-modal="true">
      {/* Overlay top bar with close button */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${useOverlay ? 'border-white/10' : 'border-gray-200'}`}>
        <Link href={langPrefix || "/"} onClick={onClose} className={`${useOverlay ? 'text-white' : 'text-slate-800'} font-semibold`}>
          {t('nav.home')}
        </Link>
        <button type="button" onClick={onClose} aria-label="Close menu" className={`size-12 flex justify-center items-center rounded-xl shadow-md transition-colors ${useOverlay ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'}`}>
          <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <div className="px-5 py-4 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
        <Link href={langPrefix || "/"} onClick={onClose} className={`block px-3 py-4 font-medium transition-colors ${useOverlay ? 'text-white/90 hover:text-white border-b border-white/10' : 'text-slate-700 hover:text-slate-900 border-b border-gray-100'}`}>{t('nav.home')}</Link>

        <div className={`${useOverlay ? 'border-b border-white/10' : 'border-b border-gray-100'}`}>
          <details>
            <summary className={`w-full flex items-center justify-between px-3 py-4 font-medium cursor-pointer marker:hidden ${useOverlay ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}>
              <span>{t('nav.services')}</span>
              <svg className="size-4 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </summary>
            <div className="pl-6 pb-3 space-y-1">
              {services.map((service) => (
                <Link key={service.key} href={service.href} onClick={onClose} className={`block px-3 py-3 text-base rounded-lg ${useOverlay ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-slate-900 hover:bg-gray-50'}`}>{service.title}</Link>
              ))}
            </div>
          </details>
        </div>

        <Link href={`${langPrefix}/about`} onClick={onClose} className={`block px-3 py-4 text-base font-medium ${useOverlay ? 'text-white/90 hover:text-white border-b border-white/10' : 'text-slate-700 hover:text-slate-900 border-b border-gray-100'}`}>{t('nav.aboutUs')}</Link>
        <Link href={`${langPrefix}/case-studies`} onClick={onClose} className={`block px-3 py-4 text-base font-medium ${useOverlay ? 'text-white/90 hover:text-white border-b border-white/10' : 'text-slate-700 hover:text-slate-900 border-b border-gray-100'}`}>{t('nav.caseStudies')}</Link>
        <Link href="/blog" onClick={onClose} className={`block px-3 py-4 text-base font-medium ${useOverlay ? 'text-white/90 hover:text-white border-b border-white/10' : 'text-slate-700 hover:text-slate-900 border-b border-gray-100'}`}>{t('nav.blog')}</Link>
        <Link href="/contact" onClick={onClose} className={`block px-3 py-4 text-base font-medium ${useOverlay ? 'text-white/90 hover:text-white border-b border-white/10' : 'text-slate-700 hover:text-slate-900 border-b border-gray-100'}`}>{t('nav.contact')}</Link>

        <div className={`px-3 py-2 ${useOverlay ? 'border-b border-white/10' : 'border-b border-gray-100'}`}>
          <LanguageSelectorMobile useOverlay={useOverlay} />
        </div>

        <div className="px-3 pt-4 pb-8">
          <Link href="/book-consultation" onClick={onClose} className={`block w-full text-center py-4 px-4 text-base font-medium rounded-full shadow ${useOverlay ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}>Book a Call</Link>
        </div>
      </div>
    </div>
  )
}

