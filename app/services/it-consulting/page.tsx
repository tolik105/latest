"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Lightbulb, TrendingUp, Target, Users, Puzzle, BarChart, Brain, Layers, Award } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ITConsultingPage() {
  const { t } = useTranslation('common')
  
  const consultingServices = [
    {
      icon: Lightbulb,
      title: t('servicePages.itConsulting.services.strategy'),
      description: t('servicePages.itConsulting.services.strategyDesc'),
    },
    {
      icon: TrendingUp,
      title: t('servicePages.itConsulting.services.transformation'),
      description: t('servicePages.itConsulting.services.transformationDesc'),
    },
    {
      icon: Target,
      title: t('servicePages.itConsulting.services.budgetOptimization'),
      description: t('servicePages.itConsulting.services.budgetOptimizationDesc'),
    },
    {
      icon: Users,
      title: t('servicePages.itConsulting.services.vendorManagement'),
      description: t('servicePages.itConsulting.services.vendorManagementDesc'),
    },
    {
      icon: Puzzle,
      title: t('servicePages.itConsulting.services.architecture'),
      description: t('servicePages.itConsulting.services.architectureDesc'),
    },
    {
      icon: BarChart,
      title: t('servicePages.itConsulting.services.projectManagement'),
      description: t('servicePages.itConsulting.services.projectManagementDesc'),
    },
  ]

  const approachItems = [
    {
      icon: Brain,
      title: t('servicePages.itConsulting.approach.assessmentTitle'),
      description: t('servicePages.itConsulting.approach.assessmentDesc'),
    },
    {
      icon: Layers,
      title: t('servicePages.itConsulting.approach.strategyTitle'),
      description: t('servicePages.itConsulting.approach.strategyDesc'),
    },
    {
      icon: Award,
      title: t('servicePages.itConsulting.approach.implementationTitle'),
      description: t('servicePages.itConsulting.approach.implementationDesc'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.itConsulting.title')}
        subtitle={t('servicePages.itConsulting.subtitle')}
        ctaText={t('servicePages.itConsulting.cta.button')}
        ctaHref="/book-reservation"
      />

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicePages.itConsulting.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((service, index) => (
              <ServiceFeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                variant={index % 3 === 0 ? 'gradient' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicePages.itConsulting.sections.approach')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {approachItems.map((item, index) => (
              <ServiceFeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.itConsulting.cta.title')}
        description={t('servicePages.itConsulting.cta.description')}
        ctaText={t('servicePages.itConsulting.cta.button')}
        variant="primary"
      />
    </main>
  )
}