'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface SectionHeroProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  imageSrc: string
}

export function SectionHero({ title, subtitle, ctaLabel, ctaHref, imageSrc }: SectionHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Diagonal gradient band background motif */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: `repeating-linear-gradient(65deg, #6F3AFF 0px, #6F3AFF 1px, transparent 1px, transparent 60px)`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      {/* Desktop Layout - FNG-Inspired Geometric Design */}
      <div className="hidden lg:block">
        {/* Clean white background like FNG */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Geometric Image with SVG Mask - Professional FNG Style */}
        <div className="absolute top-0 right-0 w-[65%] h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <mask id="geometricMask">
                <rect width="100" height="100" fill="white"/>
                <polygon points="0,0 30,0 0,100" fill="black"/>
              </mask>
            </defs>
            <foreignObject width="100" height="100" mask="url(#geometricMask)">
              <div className="w-full h-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="65vw"
                  priority
                />
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Content Container - Proper FNG Layout */}
        <div className="relative z-20 flex items-center min-h-[75vh] max-w-[1400px] mx-auto px-8 lg:px-12 xl:px-16">
          <div className="w-full">
            <div className="max-w-[45%] pr-8">
              {/* Clean H1 Typography - FNG Style */}
              <h1 className="font-bold mb-6 lg:mb-8 text-gray-900 leading-tight" style={{ 
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.1',
                fontWeight: '700'
              }}>
                {title}
              </h1>

              {/* Brand-colored subtitle - Like FNG's pink text */}
              <p className="text-purple-600 font-medium mb-8 lg:mb-10 leading-relaxed" style={{ 
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                lineHeight: '1.5'
              }}>
                {subtitle}
              </p>

              {/* Clean CTA Button - Professional */}
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 lg:px-10 py-4 lg:py-5 text-lg font-semibold rounded-lg transition-all duration-300 min-h-[60px] touch-manipulation shadow-lg hover:shadow-xl"
                style={{
                  touchAction: 'manipulation'
                }}
              >
                <Link href={ctaHref}>
                  {ctaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout - FNG-Inspired Clean Design */}
      <div className="hidden md:block lg:hidden min-h-[70vh] bg-white">
        <div className="px-6 md:px-8 py-16 md:py-20 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content First - FNG Style */}
            <div className="order-1">
              <h1 className="font-bold mb-6 md:mb-8 leading-tight text-gray-900" style={{ 
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: '1.1'
              }}>
                {title}
              </h1>
              <p className="text-purple-600 font-medium mb-8 md:mb-10 leading-relaxed" style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.5'
              }}>
                {subtitle}
              </p>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto px-8 md:px-10 py-4 md:py-5 text-lg font-semibold rounded-lg transition-all duration-300 min-h-[60px] touch-manipulation shadow-lg"
                style={{
                  touchAction: 'manipulation'
                }}
              >
                <Link href={ctaHref}>
                  {ctaLabel}
                </Link>
              </Button>
            </div>
            
            {/* Image with Geometric Shape - Simplified for tablet */}
            <div className="order-2">
              <div className="relative h-64 md:h-80 overflow-hidden" style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Clean FNG-Inspired Design */}
      <div className="block md:hidden min-h-[75vh] sm:min-h-[70vh] bg-white">
        <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-[1200px] mx-auto safe-area-p">
          {/* Text First - Clean FNG Style */}
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            {/* Bold H1 Typography - FNG Style */}
            <h1 className="font-bold mb-6 sm:mb-8 leading-tight text-gray-900" style={{ 
              fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
              lineHeight: '1.1'
            }}>
              {title}
            </h1>

            {/* Brand-colored subtitle - Like FNG's approach */}
            <p className="text-purple-600 font-medium mb-8 sm:mb-10 max-w-2xl mx-auto sm:mx-0 leading-relaxed" style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              lineHeight: '1.5'
            }}>
              {subtitle}
            </p>

            {/* Professional CTA button */}
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-semibold rounded-lg transition-all duration-300 min-h-[60px] sm:min-h-[64px] touch-manipulation shadow-lg"
              style={{
                touchAction: 'manipulation',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
              }}
            >
              <Link href={ctaHref}>
                {ctaLabel}
              </Link>
            </Button>
          </div>

          {/* Image with subtle geometric touch */}
          <div className="relative overflow-hidden" style={{
            height: 'clamp(12rem, 40vw, 18rem)',
            borderRadius: '0.75rem'
          }}>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
