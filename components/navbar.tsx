"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const services = [
  { key: "allServices", href: "/services" },
  { key: "managedServices", href: "/services/managed-services" },
  { key: "itSecurity", href: "/services/it-security" },
  { key: "itSupport", href: "/services/it-support" },
  { key: "itConsulting", href: "/services/it-consulting" },
  { key: "cloud", href: "/services/cloud" },
  { key: "cyberSecurity", href: "/services/cyber-security" },
  { key: "onsiteSupport", href: "/services/onsite-support" },
  { key: "wirelessSurvey", href: "/services/wireless-survey" },
  { key: "eWaste", href: "/services/e-waste" },
  { key: "itEquipment", href: "/services/it-equipment" },
  { key: "relocation", href: "/services/relocation" },
  { key: "recruitment", href: "/services/recruitment" },
  { key: "workforceSolutions", href: "/services/workforce-solutions" },
  { key: "customSolutions", href: "/services/custom-solutions" },
]

export function Navbar() {
  const { t } = useTranslation('common')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      "bg-white dark:bg-gray-900",
      isScrolled ? "shadow-md" : "shadow-sm"
    )}>
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/akrin-logo.svg"
            alt="Akrin IT Solutions - Leading IT Services Provider in Japan"
            width={120}
            height={50}
            className="transition-all object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/" 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {t('nav.home')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-gray-900 shadow-lg">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <div className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
                              {t(`nav.${service.key}`)}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/about" 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {t('nav.aboutUs')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/blog" 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {t('nav.blog')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/contact" 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {t('nav.contact')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <Button 
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white" 
            asChild
          >
            <Link href="/book-reservation">{t('nav.bookConsultation')}</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-10 w-10 p-0"
                aria-label="Toggle menu"
              >
                <Icons.Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[85vw] sm:w-[400px] overflow-y-auto safe-right"
            >
              <div className="flex flex-col gap-1 mt-8">
                <SheetClose asChild>
                  <Link 
                    href="/" 
                    className="flex items-center px-4 py-3 text-lg font-medium hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.home")}
                  </Link>
                </SheetClose>
                
                {/* Services Accordion */}
                <div className="mt-2">
                  <button
                    onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                    className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span>{t("nav.services")}</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isServicesExpanded && "rotate-180"
                      )}
                    />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isServicesExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-4 pr-2 py-2 space-y-1">
                      {services.map((service) => (
                        <SheetClose asChild key={service.href}>
                          <Link
                            href={service.href}
                            className="block px-4 py-2.5 text-base text-gray-600 hover:text-purple-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-purple-400 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(`nav.${service.key}`)}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </div>
                
                <SheetClose asChild>
                  <Link 
                    href="/about" 
                    className="flex items-center px-4 py-3 text-lg font-medium hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.aboutUs")}
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    href="/blog" 
                    className="flex items-center px-4 py-3 text-lg font-medium hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.blog")}
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link 
                    href="/contact" 
                    className="flex items-center px-4 py-3 text-lg font-medium hover:text-purple-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("nav.contact")}
                  </Link>
                </SheetClose>
                
                <Button 
                  className="w-full mt-6 h-12 text-base bg-purple-600 hover:bg-purple-700" 
                  asChild
                >
                  <Link 
                    href="/book-reservation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.bookConsultation')}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}