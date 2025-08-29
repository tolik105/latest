"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Mail, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

import dynamic from "next/dynamic"
const MobileMenuPanel = dynamic(() => import("@/components/mobile-menu-panel.client"), { ssr: false })
export function NavbarSimple() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isJaPath = pathname.startsWith('/ja/') || pathname === '/ja'
  const langPrefix = isJaPath ? '/ja' : ''

  useEffect(() => setIsHydrated(true), [])
  // Lock body scroll when the mobile menu is open and close menu on Escape
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileOpen(false)
      }
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  useEffect(() => {
    const targetLang = isJaPath ? 'ja' : 'en'
    if (i18n.isInitialized && i18n.language !== targetLang) i18n.changeLanguage(targetLang)
  }, [pathname, i18n, isJaPath])

  // Close mobile panels on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  const services = [
    { key: 'managedItSupport', title: isHydrated ? t('services.managedIT.title') : 'Managed IT Services', href: `${langPrefix}/services/it-managed-services` },
    { key: 'cloudInfrastructure', title: isHydrated ? t('services.cloud.title') : 'Cloud Infrastructure', href: `${langPrefix}/services/cloud-infrastructure` },
    { key: 'cybersecurity', title: isHydrated ? t('services.cyberSecurity.title') : 'Cybersecurity', href: `${langPrefix}/services/cybersecurity` },
    { key: 'networkPenetrationTesting', title: 'Network Penetration Testing', href: `${langPrefix}/services/network-penetration-testing` },
    { key: 'itConsultingProjectManagement', title: isHydrated ? t('services.consulting.title') : 'IT Consulting', href: `${langPrefix}/services/it-consulting-project-management` },
    { key: 'wifiAssessment', title: 'Wi‑Fi Assessment & Optimization', href: `${langPrefix}/services/wifi-assessment` },
    { key: 'wifiDesign', title: 'Enterprise Wi‑Fi Design & Deployment', href: `${langPrefix}/services/wifi-design` },
    { key: 'itad', title: 'ITAD (Japan/APAC/US)', href: `${langPrefix}/services/itad-japan-apac-us` },
    { key: 'itSecurity', title: isHydrated ? t('services.itSecurity.title') : 'IT Security', href: `${langPrefix}/services/it-security` }
  ]

  const isHome = pathname === '/' || pathname === '/ja' || pathname === '/ja/'
  const useOverlay = isHome && !isScrolled
  const showTopBar = false

  const headerClasses = `fixed top-0 left-0 right-0 z-[200] flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm transition-all duration-300 ${useOverlay ? 'bg-gradient-to-b from-slate-950/80 to-slate-900/50 text-white' : 'bg-white text-slate-800 shadow-md'}`
  const desktopLinkClasses = `${useOverlay ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-slate-900'} font-medium py-4 text-sm transition-colors`
  const dropdownMenuClasses = useOverlay ? 'bg-slate-900/95 shadow-2xl rounded-xl border border-white/10' : 'bg-white shadow-lg rounded-lg border border-gray-200'
  const dropdownItemTitleClasses = useOverlay ? 'text-sm font-semibold text-white/90 hover:text-white' : 'text-sm font-semibold text-gray-800 hover:text-teal-600'
  const hamburgerButtonClasses = `size-12 flex justify-center items-center rounded-xl shadow-md transition-colors ${useOverlay ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-50'} focus-visible:outline-[hsl(var(--primary))]`
  const logoFilterClasses = useOverlay ? 'brightness-0 invert' : ''
  const bookButtonClasses = useOverlay ? 'border border-white/30 text-white hover:bg-white/10' : 'bg-primary hover:bg-primary/90 text-primary-foreground'

  return (
    <>
      {showTopBar && (
        <div className="bg-gray-50 py-1.5 sm:py-2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <a href="mailto:support@akrin.jp" className="inline-flex items-center gap-1 sm:gap-2 hover:text-gray-900 focus-visible:outline-[hsl(var(--primary))] transition-colors">
                  <Mail className="shrink-0 size-3 sm:size-4 text-[hsl(var(--primary))]" />
                  <span className="hidden sm:inline">support@akrin.jp</span>
                  <span className="sm:hidden text-xs">Email</span>
                </a>
                <div className="border-l border-gray-300 h-3 sm:h-4"></div>
                <a href="tel:+81-3-6821-1223" className="inline-flex items-center gap-1 sm:gap-2 hover:text-gray-900 focus-visible:outline-[hsl(var(--primary))] transition-colors">
                  <Phone className="shrink-0 size-3 sm:size-4 text-[hsl(var(--primary))]" />
                  <span className="hidden sm:inline">+81 (0) 3-6821-1223</span>
                  <span className="sm:hidden text-xs">Call</span>
                </a>
              </div>
              <div className="hidden">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}

      <header className={`${headerClasses} py-3`}>
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Global">
          <Link className="flex-none text-xl font-semibold focus-visible:outline-[hsl(var(--primary))] focus:outline-none focus:opacity-80" href={langPrefix || "/"} aria-label="AKRIN">
            <Image src="/akrin-logo.svg" alt="AKRIN IT Solutions" width={140} height={45} className={`h-7 sm:h-8 md:h-10 w-auto ${logoFilterClasses}`} priority />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Link className={`${desktopLinkClasses} focus-visible:outline-[hsl(var(--primary))]`} href={langPrefix || "/"}>{isHydrated ? t('nav.home') : 'Home'}</Link>

            {/* Services Dropdown (no dependency on Preline) */}
            <div className="relative group">
              <button type="button" className={`${desktopLinkClasses} flex items-center gap-1`} aria-haspopup="menu" aria-expanded="false">
                {isHydrated ? t('nav.services') : 'Services'}
                <svg className="ml-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className={`absolute left-0 top-full mt-0 w-80 ${dropdownMenuClasses} hidden group-hover:block transition-opacity`}>
                <div className="grid grid-cols-2 gap-3 p-4">
                  {services.map((service) => (
                    <Link key={service.key} href={service.href} className={`block p-2 rounded-lg transition-colors focus-visible:outline-[hsl(var(--primary))] ${useOverlay ? 'hover:bg-white/10' : 'hover:bg-gray-50'}`}>
                      <p className={`${dropdownItemTitleClasses}`}>{service.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link className={`${desktopLinkClasses} focus-visible:outline-[hsl(var(--primary))]`} href={`${langPrefix}/about`}>{isHydrated ? t('nav.aboutUs') : 'About Us'}</Link>
            <Link className={`${desktopLinkClasses} focus-visible:outline-[hsl(var(--primary))]`} href={`${langPrefix}/case-studies`}>{isHydrated ? t('nav.caseStudies') : 'Case Studies'}</Link>
            <Link className={`${desktopLinkClasses} focus-visible:outline-[hsl(var(--primary))]`} href="/blog">{isHydrated ? t('nav.blog') : 'Blog'}</Link>
            <Link className={`${desktopLinkClasses} focus-visible:outline-[hsl(var(--primary))]`} href="/contact">{isHydrated ? t('nav.contact') : 'Contact'}</Link>

            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            <Link className={`${bookButtonClasses} rounded-full px-6 py-2 text-sm font-medium shadow focus-visible:outline-[hsl(var(--primary))] transition-all duration-200`} href="/book-consultation">Book</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="block lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen(v => !v)}
              className={`${hamburgerButtonClasses}`}
              aria-label="Toggle navigation"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {!isMobileOpen ? (
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              ) : (
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Panel (deferred, dynamic) */}
        {isMobileOpen && (
          // @ts-ignore dynamically imported in layout to keep entry JS small
          <MobileMenuPanel
            isOpen={isMobileOpen}
            onClose={() => setIsMobileOpen(false)}
            langPrefix={langPrefix}
            useOverlay={useOverlay}
          />
        )}
      </header>
    </>
  )
}
