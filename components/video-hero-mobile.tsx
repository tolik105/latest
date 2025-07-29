"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from 'react'

export function VideoHeroMobile() {
  const { t } = useTranslation('common')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-white">
      {/* Mobile Background - Simplified for performance */}
      <div className="absolute inset-0 w-full h-full z-0">
        {isMobile ? (
          // Mobile: Simple gradient background
          <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        ) : (
          // Desktop: Original SVG background
          <img 
            src="/Mask group.svg" 
            alt="" 
            className="w-full h-full object-cover opacity-100"
            aria-hidden="true"
          />
        )}
      </div>
      
      {/* Responsive Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full">
        {/* Content Panel - Full width on mobile, left side on desktop */}
        <div className="relative z-20 flex w-full lg:w-[55%] items-center justify-center lg:justify-start min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 max-w-3xl w-full"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="text-pink-600">Rewiring</span><br />
                enterprise <span className="text-pink-600">IT</span><br />
                with <span className="text-pink-600">AI</span>
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl"
            >
              Expert managed services, cybersecurity, and 24/7 support.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md"
            >
              <Button
                className="bg-pink-600 text-white hover:bg-pink-700 font-medium px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg shadow-md transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/services">
                  {t('hero.exploreServices')}
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-teal-600 bg-white text-teal-600 hover:bg-teal-50 font-medium px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  {t('hero.requestConsultation')}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Panel - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:relative lg:w-[45%] lg:min-h-screen">
          {/* Empty space for the A-shape in background */}
        </div>
      </div>
      
      {/* Video positioned to fill only the white A letter space - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full z-5 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="aLetterClip">
                {/* Triangle part of A */}
                <path d="M1534.5 298L1811 861H1618.01L1438 497.084L1534.5 298Z"/>
                {/* Base part of A */}
                <path d="M1346.01 704H1525L1433.09 861H1257L1346.01 704Z"/>
              </clipPath>
            </defs>
            <foreignObject x="0" y="0" width="1920" height="1080" clipPath="url(#aLetterClip)">
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ 
                  width: '1920px', 
                  height: '1080px', 
                  objectFit: 'cover'
                }}
              >
                <source src="/video/last.mp4" type="video/mp4" />
              </video>
            </foreignObject>
          </svg>
        </div>
      )}

      {/* Mobile: Decorative element instead of video */}
      {isMobile && (
        <div className="absolute bottom-0 right-0 w-full h-1/3 z-5 pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-400/20 to-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-tl from-teal-400/20 to-blue-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      )}
    </section>
  )
}