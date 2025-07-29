'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CircularProgressProps {
  percentage: number
  label: string
  size?: number
  strokeWidth?: number
  className?: string
  delay?: number
}

export function CircularProgress({
  percentage,
  label,
  size = 200,
  strokeWidth = 8,
  className,
  delay = 0
}: CircularProgressProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  
  const radius = (size - strokeWidth) / 2
  const centerX = size / 2
  const centerY = size / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = percentage / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= percentage) {
          setAnimatedPercentage(percentage)
          clearInterval(timer)
        } else {
          setAnimatedPercentage(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, percentage])

  // Calculate stroke dash properties
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={cn('flex flex-col items-center group', className)}
    >
      {/* Circular progress container */}
      <div 
        className="relative" 
        style={{ 
          width: size, 
          height: size
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="relative z-10 -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            className="dark:stroke-gray-600"
          />
          
          {/* Progress circle */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
            className="text-center group-hover:scale-105 transition-transform duration-500"
          >
            <div 
              className="text-5xl lg:text-6xl font-bold"
              style={{
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontWeight: '700',
                letterSpacing: '-0.04em',
                color: '#8B5CF6'
              }}
            >
              {animatedPercentage}%
            </div>
          </motion.div>
        </div>
      </div>

      {/* Label */}
      <div className="mt-4 text-center max-w-[200px]">
        <h4 
          className="text-sm lg:text-base font-medium text-gray-900 dark:text-gray-100 leading-tight"
          style={{
            fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
            fontWeight: '500',
            lineHeight: '1.3',
            letterSpacing: '-0.01em'
          }}
        >
          {label}
        </h4>
      </div>
    </motion.div>
  )
}

interface IndustryStatsProps {
  stats: Array<{
    industry: string
    percentage: string
  }>
  className?: string
}

export function IndustryStats({ stats, className }: IndustryStatsProps) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-8', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-center">
          <CircularProgress
            percentage={parseInt(stat.percentage)}
            label={stat.industry}
            delay={index * 0.2}
            className="hover:scale-105 transition-all duration-500 ease-out"
          />
        </div>
      ))}
    </div>
  )
}