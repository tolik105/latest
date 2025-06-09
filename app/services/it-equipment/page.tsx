"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Laptop, Printer, Server, Wifi, HardDrive, ShieldCheck, Headphones, Settings, Award, Zap, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ITEquipmentPage() {
  const { t } = useTranslation('common')
  
  const equipmentCategories = [
    {
      icon: Laptop,
      title: t('servicePages.itEquipment.products.computers'),
      description: t('servicePages.itEquipment.products.computersDesc'),
    },
    {
      icon: Printer,
      title: t('servicePages.itEquipment.products.printers'),
      description: 'Professional printers, scanners, and multi-function devices for efficient document management.',
    },
    {
      icon: Server,
      title: t('servicePages.itEquipment.products.servers'),
      description: t('servicePages.itEquipment.products.serversDesc'),
    },
    {
      icon: Wifi,
      title: t('servicePages.itEquipment.products.networking'),
      description: t('servicePages.itEquipment.products.networkingDesc'),
    },
  ]

  const services = [
    {
      icon: HardDrive,
      title: t('servicePages.itEquipment.features.procurementSourcing'),
      description: t('servicePages.itEquipment.services.procurementDesc'),
    },
    {
      icon: ShieldCheck,
      title: t('servicePages.itEquipment.features.warrantyManagement'),
      description: t('servicePages.itEquipment.services.warrantyDesc'),
    },
    {
      icon: Headphones,
      title: 'Lifecycle Support',
      description: t('servicePages.itEquipment.benefits.support'),
    },
    {
      icon: Settings,
      title: 'Pre-configuration Services',
      description: 'Equipment pre-configured to your specifications for immediate deployment.',
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: t('servicePages.itEquipment.benefits.qualityTitle'),
      description: t('servicePages.itEquipment.benefits.quality'),
    },
    {
      icon: Zap,
      title: t('servicePages.itEquipment.benefits.pricingTitle'),
      description: t('servicePages.itEquipment.benefits.pricing'),
    },
    {
      icon: Users,
      title: t('servicePages.itEquipment.benefits.supportTitle'),
      description: t('servicePages.itEquipment.benefits.support'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.itEquipment.title')}
        subtitle={t('servicePages.itEquipment.subtitle')}
        ctaText={t('servicePages.itEquipment.cta.button')}
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
              {t('servicePages.itEquipment.sections.products')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {equipmentCategories.map((category, index) => (
              <ServiceFeatureCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
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
              {t('servicePages.itEquipment.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceFeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicePages.itEquipment.sections.whyChoose')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ServiceFeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
                variant={index % 3 === 0 ? 'gradient' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.itEquipment.cta.title')}
        description={t('servicePages.itEquipment.cta.description')}
        ctaText={t('servicePages.itEquipment.cta.button')}
        variant="primary"
      />
    </main>
  )
}