"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import {
  Monitor,
  Truck,
  Shield,
  Headphones,
  Wifi,
  Database,
  PenToolIcon as Tool,
  Network,
  Users,
  MoveIcon as TruckMove,
  Recycle,
  Laptop,
  ArrowRightLeft,
  Cloud,
  Video,
  Lock,
} from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ITSupportServicesPage() {
  const { t } = useTranslation('common')
  
  const services = [
    {
      icon: Monitor,
      title: t('servicePages.managedServices.title'),
      description: t('servicePages.managedServices.subtitle'),
    },
    {
      icon: Truck,
      title: t('servicePages.onsiteSupport.title'),
      description: t('servicePages.itSupport.features.onsiteSupportDesc'),
    },
    {
      icon: Shield,
      title: t('servicePages.itSecurity.title'),
      description: t('servicePages.itSecurity.subtitle'),
    },
    {
      icon: Headphones,
      title: t('servicePages.itConsulting.title'),
      description: t('servicePages.itConsulting.subtitle'),
    },
    {
      icon: Wifi,
      title: t('servicePages.wirelessSurvey.title'),
      description: t('servicePages.wirelessSurvey.subtitle'),
    },
    {
      icon: Database,
      title: t('servicePages.assetManagement.title'),
      description: t('servicePages.assetManagement.subtitle'),
    },
    {
      icon: Tool,
      title: t('servicePages.hardwareMaintenance.title'),
      description: t('servicePages.hardwareMaintenance.subtitle'),
    },
    {
      icon: Network,
      title: t('servicePages.itSupport.features.networkSupport'),
      description: t('servicePages.itSupport.features.networkSupportDesc'),
    },
    {
      icon: Users,
      title: t('servicePages.onsiteSupport.title'),
      description: t('servicePages.onsiteSupport.features.comprehensiveSupportDesc'),
    },
    {
      icon: TruckMove,
      title: t('servicePages.relocation.title'),
      description: t('servicePages.itSupport.features.relocationDesc'),
    },
    {
      icon: Recycle,
      title: t('servicePages.eWaste.title'),
      description: t('servicePages.itSupport.features.eWasteDesc'),
    },
    {
      icon: Laptop,
      title: t('servicePages.itEquipment.title'),
      description: t('servicePages.itEquipment.subtitle'),
    },
    {
      icon: ArrowRightLeft,
      title: t('servicePages.itSupport.features.systemMigrations'),
      description: t('servicePages.itSupport.features.systemMigrationsDesc'),
    },
    {
      icon: Cloud,
      title: t('servicePages.cloudServices.title'),
      description: t('servicePages.cloudServices.subtitle'),
    },
    {
      icon: Video,
      title: t('servicePages.itSupport.features.audioVisualSupport'),
      description: t('servicePages.itSupport.features.audioVisualSupportDesc'),
    },
    {
      icon: Lock,
      title: t('servicePages.itSupport.features.accessControlSystems'),
      description: t('servicePages.itSupport.features.accessControlSystemsDesc'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.itSupport.title')}
        subtitle={t('servicePages.itSupport.subtitle')}
        ctaText={t('servicePages.itSupport.cta.button')}
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
              {t('servicePages.itSupport.features.title', t('servicePages.itSupport.features.title'))}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.itSupport.features.subtitle', t('servicePages.itSupport.features.subtitle'))}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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

      <ServiceCTASection
        title={t('servicePages.itSupport.cta.title')}
        description={t('servicePages.itSupport.cta.description')}
        ctaText={t('servicePages.itSupport.cta.button')}
        variant="primary"
      />
    </main>
  )
}