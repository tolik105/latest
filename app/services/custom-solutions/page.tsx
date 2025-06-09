"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Code, Database, Cloud, Lock, Zap, BarChart, Search, PenTool, Wrench, Rocket } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function CustomSolutionsPage() {
  const { t } = useTranslation('common')
  
  const customSolutions = [
    {
      icon: Code,
      title: t('servicePages.customSolutions.expertise.webApps'),
      description: t('servicePages.customSolutions.expertise.webAppsDesc'),
    },
    {
      icon: Database,
      title: t('servicePages.customSolutions.expertise.apiDevelopment'),
      description: t('servicePages.customSolutions.features.apiDevelopmentDesc'),
    },
    {
      icon: Cloud,
      title: t('servicePages.customSolutions.expertise.systemIntegration'),
      description: t('servicePages.customSolutions.expertise.systemIntegrationDesc'),
    },
    {
      icon: Lock,
      title: t('servicePages.customSolutions.expertise.cybersecurity'),
      description: t('servicePages.customSolutions.expertise.cybersecurityDesc'),
    },
    {
      icon: Zap,
      title: t('servicePages.customSolutions.expertise.automation'),
      description: t('servicePages.customSolutions.features.businessAutomationDesc'),
    },
    {
      icon: BarChart,
      title: t('servicePages.customSolutions.expertise.dataAnalytics'),
      description: t('servicePages.customSolutions.features.dataAnalyticsDesc'),
    },
  ]

  const processSteps = [
    {
      icon: Search,
      title: t('servicePages.customSolutions.process.discoveryTitle'),
      description: t('servicePages.customSolutions.process.consultation'),
    },
    {
      icon: PenTool,
      title: t('servicePages.customSolutions.process.designTitle'),
      description: t('servicePages.customSolutions.process.design'),
    },
    {
      icon: Wrench,
      title: t('servicePages.customSolutions.process.developmentTitle'),
      description: t('servicePages.customSolutions.process.development'),
    },
    {
      icon: Rocket,
      title: t('servicePages.customSolutions.process.deploymentTitle'),
      description: t('servicePages.customSolutions.process.deployment'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.customSolutions.title')}
        subtitle={t('servicePages.customSolutions.subtitle')}
        ctaText={t('servicePages.customSolutions.cta.button')}
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
              {t('servicePages.customSolutions.sections.expertise')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {customSolutions.map((solution, index) => (
              <ServiceFeatureCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
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
              {t('servicePages.customSolutions.sections.process')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ServiceFeatureCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.customSolutions.cta.title')}
        description={t('servicePages.customSolutions.cta.description')}
        ctaText={t('servicePages.customSolutions.cta.button')}
        variant="primary"
      />
    </main>
  )
}