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
  variant?: 'primary' | 'accent' | 'gradient'
}

export function ServiceCTASection({ 
  title, 
  description, 
  ctaText, 
  ctaHref = '/book-reservation',
  variant = 'primary' 
}: ServiceCTASectionProps) {
  const sectionVariants = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent",
    gradient: "bg-gradient-to-r from-primary to-primary-foreground/20 text-primary-foreground"
  }

  const buttonVariant = variant === 'accent' ? 'default' : 'secondary'

  return (
    <section className={`py-24 ${sectionVariants[variant]} relative overflow-hidden`}>
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 25%, currentColor 25%, currentColor 50%, transparent 50%, transparent 75%, currentColor 75%)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
      )}
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className={`text-lg mb-8 ${variant === 'accent' ? 'text-muted-foreground' : 'text-primary-foreground/90'}`}>
            {description}
          </p>
          <Button 
            size="lg" 
            variant={buttonVariant}
            className="group shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}