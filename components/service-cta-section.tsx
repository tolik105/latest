'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCTASectionProps {
  title: string
  description: string
  ctaText: string
  ctaHref?: string
  variant?: 'primary' | 'accent' | 'gradient' | 'clean'
}

export function ServiceCTASection({
  title,
  description,
  ctaText,
  ctaHref = '/contact',
  variant = 'clean'
}: ServiceCTASectionProps) {
  const sectionVariants = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent",
    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white",
    clean: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
  }

  const buttonVariant = variant === 'accent' ? 'default' : 'secondary'

  return (
    <section className={`py-24 md:py-32 ${sectionVariants[variant]} relative overflow-hidden`}>
      {/* Enhanced background pattern for gradient variant - matching established design */}
      {variant === 'gradient' && (
        <>
          {/* Premium 3D Wave Pattern - matching other CTA sections */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cta-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient id="cta-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2"/>
                </linearGradient>
                <filter id="cta-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                </filter>
              </defs>

              <g opacity="0.3">
                {[...Array(10)].map((_, row) => (
                  <g key={`cta-row-${row}`}>
                    {[...Array(20)].map((_, col) => {
                      const x = col * 42;
                      const waveOffset = ((col - row + 10) % 4) * 2;
                      const y = row * 40 + waveOffset;
                      const gradient = (row + col) % 2 === 0 ? 'cta-gradient-1' : 'cta-gradient-2';

                      return (
                        <rect
                          key={`cta-tile-${row}-${col}`}
                          x={x}
                          y={y}
                          width="38"
                          height="38"
                          rx="8"
                          fill={`url(#${gradient})`}
                          filter="url(#cta-shadow)"
                          opacity="0.6"
                        />
                      );
                    })}
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Background elements - static for professional appearance */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        </>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`font-light leading-tight mb-6 ${
            variant === 'gradient'
              ? 'text-4xl md:text-5xl lg:text-6xl'
              : variant === 'clean'
              ? 'text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white'
              : 'text-3xl md:text-4xl font-bold'
          }`}>
            {title}
          </h2>
          <p className={`mb-12 leading-relaxed max-w-3xl mx-auto ${
            variant === 'accent'
              ? 'text-lg text-muted-foreground'
              : variant === 'gradient'
              ? 'text-xl md:text-2xl opacity-90'
              : variant === 'clean'
              ? 'text-lg text-gray-600 dark:text-gray-300'
              : 'text-lg text-primary-foreground/90'
          }`}>
            {description}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: variant === 'clean' ? 1.02 : 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant={variant === 'gradient' ? 'default' : buttonVariant}
                className={`group transition-all duration-300 ${
                  variant === 'gradient'
                    ? 'bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-none shadow-2xl'
                    : variant === 'clean'
                    ? 'bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border-0 p-0 h-auto font-normal text-lg justify-start'
                    : 'shadow-lg hover:shadow-xl'
                }`}
                asChild
              >
                <Link href={ctaHref} className={variant === 'clean' ? 'flex items-center' : ''}>
                  {ctaText}
                  {variant === 'clean' ? (
                    <span className="ml-2 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">→</span>
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}