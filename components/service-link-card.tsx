'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceLinkCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  ctaText: string
  index?: number
  featured?: boolean
}

export function ServiceLinkCard({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  ctaText,
  index = 0,
  featured = false
}: ServiceLinkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-2xl group ${
        featured ? 'border-primary shadow-lg' : ''
      }`}>
        <CardHeader className="flex-1">
          <div className="mb-4 inline-flex">
            <motion.div 
              className={`p-4 rounded-xl transition-all duration-300 ${
                featured 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground'
              }`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          </div>
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant={featured ? 'default' : 'outline'} 
            className="w-full group/btn"
            asChild
          >
            <Link href={href}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}