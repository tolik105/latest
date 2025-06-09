"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Mobile-first grid layout */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image
                  src="/akrin-logo.svg"
                  alt="Akrin IT Solutions - Professional IT Services in Japan"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-4 mb-6 sm:mb-0">
              <a
                href="https://www.linkedin.com/company/akrinkk"
                className="text-gray-400 hover:text-white transition-colors p-2 -ml-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                  {t('nav.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/book-reservation" className="inline-block py-1 text-gray-400 hover:text-white transition-colors">
                  {t('nav.bookConsultation')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="mr-3 h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@akrin.jp" className="text-gray-400 hover:text-white transition-colors break-all">
                  {t('contact.info.emailText')}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+81368211223" className="text-gray-400 hover:text-white transition-colors">
                  {t('contact.info.phoneText')}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=2+Chome-4-15+Minamiaoyama+4F,+Minato+City,+Tokyo+107-0062,+Japan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <address className="not-italic">
                    {t('contact.info.addressText')}
                  </address>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter - Full width on mobile, single column on tablet */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t('footer.newsletter')}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')} 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 h-10"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700 h-10 w-10 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} AKRIN株式会社. {t('footer.allRightsReserved')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors py-1">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors py-1">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}