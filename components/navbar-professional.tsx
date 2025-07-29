"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"
import { LanguageSelector } from "@/components/language-selector"

export function NavbarProfessional() {
  const { t, i18n } = useTranslation('common')
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Detect language from URL path and sync with i18n
  const isJaPath = pathname.startsWith('/ja/')
  const langPrefix = isJaPath ? '/ja' : ''

  useEffect(() => {
    const targetLang = isJaPath ? 'ja' : 'en'
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
  }, [pathname, i18n, isJaPath])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const services = [
    { key: "managedItSupport", href: `${langPrefix}/services/it-managed-services` },
    { key: "itConsultingProjectManagement", href: `${langPrefix}/services/it-consulting-project-management` },
    { key: "cloudInfrastructure", href: `${langPrefix}/services/cloud-infrastructure` },
    { key: "cybersecurity", href: `${langPrefix}/services/cybersecurity` },
    { key: "networkPenetrationTesting", href: `${langPrefix}/services/network-penetration-testing` },
    { key: "itSecurity", href: `${langPrefix}/services/it-security` },
  ]

  return (
    <>
      <header className="w-full">
        {/* Top Contact Bar - Mobile Optimized */}
        <div className="bg-gray-50 py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <a href="mailto:support@akrin.jp" className="flex items-center gap-1 sm:gap-2 hover:text-gray-900 transition-colors">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                <span className="hidden sm:inline">support@akrin.jp</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a href="tel:+81-3-6821-1223" className="flex items-center gap-1 sm:gap-2 hover:text-gray-900 transition-colors">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                <span className="hidden sm:inline">+81 (0) 3-6821-1223</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>
            {/* Language selector on desktop only */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Main Navigation - Mobile Optimized */}
        <div className={`bg-white border-b transition-all duration-300 ${scrolled ? 'shadow-sm' : ''} sticky top-0 z-40`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link href={langPrefix || "/"} className="flex-shrink-0">
                <Image
                  src="/akrin-logo.svg"
                  alt="AKRIN IT Solutions"
                  width={140}
                  height={45}
                  className="h-8 sm:h-10 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link
                  href={langPrefix || "/"}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {t('nav.home')}
                </Link>
                
                <div className="relative group">
                  <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center gap-1">
                    {t('nav.services')}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.key}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded transition-colors"
                        >
                          {t(`nav.${service.key}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`${langPrefix}/about`}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {t('nav.aboutUs')}
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {t('nav.contact')}
                </Link>
                
                <Link
                  href="/book-consultation"
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium"
                >
                  Book a Call
                </Link>
              </nav>

              {/* Mobile Menu Button - Enhanced Mobile Visibility */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 bg-white shadow-sm touch-manipulation"
                aria-label="Toggle menu"
                style={{ touchAction: 'manipulation' }}
              >
                {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile Menu - Enhanced Mobile Experience */}
      <div className={`fixed top-0 right-0 h-full w-72 sm:w-80 max-w-full bg-white z-50 transform transition-transform duration-300 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href={langPrefix || "/"} onClick={toggleMenu}>
              <Image
                src="/akrin-logo.svg"
                alt="AKRIN IT Solutions"
                width={120}
                height={40}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links - Mobile Optimized */}
          <nav className="flex-1 p-4 space-y-2">
            <Link
              href={langPrefix || "/"}
              onClick={toggleMenu}
              className="block px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-lg touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              {t('nav.home')}
            </Link>

            {/* Services with mobile-optimized dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-lg touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                {t('nav.services')}
                <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.slice(0, 4).map((service) => ( // Show only top 4 services
                    <Link
                      key={service.key}
                      href={service.href}
                      onClick={toggleMenu}
                      className="block px-4 py-3 text-base text-gray-600 hover:bg-gray-100 rounded touch-manipulation"
                      style={{ touchAction: 'manipulation' }}
                    >
                      {t(`nav.${service.key}`)}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-base text-purple-600 hover:bg-gray-100 rounded font-medium touch-manipulation"
                    style={{ touchAction: 'manipulation' }}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={`${langPrefix}/about`}
              onClick={toggleMenu}
              className="block px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-lg touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              {t('nav.aboutUs')}
            </Link>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className="block px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-lg touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              {t('nav.blog')}
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-lg touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Mobile Menu Footer - Enhanced */}
          <div className="p-4 border-t space-y-4">
            {/* Language Selector */}
            <div>
              <LanguageSelector />
            </div>

            {/* CTA Button - Mobile Optimized */}
            <Link
              href="/book-consultation"
              onClick={toggleMenu}
              className="block w-full bg-purple-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}