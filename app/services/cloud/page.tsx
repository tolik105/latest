"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Cloud, Server, Database, FolderSyncIcon as Sync, Lock, BarChart, TrendingUp, Shield, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function CloudServicesPage() {
  const { t } = useTranslation('common')
  
  const cloudServices = [
    {
      icon: Cloud,
      title: t('servicePages.cloudServices.features.cloudMigration'),
      description: t('servicePages.cloudServices.approach.migration'),
    },
    {
      icon: Server,
      title: t('servicePages.cloudServices.features.hybridCloud'),
      description: t('servicePages.cloudServices.features.hybridCloudDesc'),
    },
    {
      icon: Database,
      title: t('servicePages.cloudServices.features.cloudStorage'),
      description: t('servicePages.cloudServices.features.cloudStorageDesc'),
    },
    {
      icon: Sync,
      title: t('servicePages.cloudServices.features.disasterRecovery'),
      description: t('servicePages.cloudServices.features.disasterRecoveryDesc'),
    },
    {
      icon: Lock,
      title: t('servicePages.cloudServices.features.cloudSecurity'),
      description: t('servicePages.cloudServices.features.cloudSecurityDesc'),
    },
    {
      icon: BarChart,
      title: t('servicePages.cloudServices.features.cloudOptimization'),
      description: t('servicePages.cloudServices.features.cloudOptimizationDesc'),
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: t('servicePages.cloudServices.benefits.scalabilityTitle'),
      description: t('servicePages.cloudServices.benefits.scalability'),
    },
    {
      icon: Zap,
      title: t('servicePages.cloudServices.benefits.costTitle'),
      description: t('servicePages.cloudServices.benefits.costSavings'),
    },
    {
      icon: Shield,
      title: t('servicePages.cloudServices.benefits.flexibilityTitle'),
      description: t('servicePages.cloudServices.benefits.flexibility'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.cloudServices.title')}
        subtitle={t('servicePages.cloudServices.subtitle')}
        ctaText={t('servicePages.cloudServices.cta.button')}
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
              {t('servicePages.cloudServices.sections.services')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.cloudServices.sections.servicesSubtitle', 'Transform your business with our comprehensive cloud solutions')}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((service, index) => (
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
              {t('servicePages.cloudServices.sections.benefits')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.cloudServices.sections.benefitsSubtitle', t('servicePages.cloudServices.sections.whyChoose'))}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ServiceFeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.cloudServices.cta.title')}
        description={t('servicePages.cloudServices.cta.description')}
        ctaText={t('servicePages.cloudServices.cta.button')}
        variant="gradient"
      />
    </main>
  )
}