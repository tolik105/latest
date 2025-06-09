"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { PenToolIcon as Tool, Zap, Clock, Shield, Laptop, Smartphone, Activity, DollarSign, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function HardwareMaintenancePage() {
  const { t } = useTranslation('common')
  
  const hardwareMaintenanceServices = [
    {
      icon: Tool,
      title: t('servicePages.hardwareMaintenance.services.preventive'),
      description: t('servicePages.hardwareMaintenance.services.preventiveDesc'),
    },
    {
      icon: Zap,
      title: t('servicePages.hardwareMaintenance.services.repairs'),
      description: t('servicePages.hardwareMaintenance.services.repairsDesc'),
    },
    {
      icon: Clock,
      title: t('servicePages.hardwareMaintenance.services.emergency'),
      description: t('servicePages.hardwareMaintenance.services.emergencyDesc'),
    },
    {
      icon: Shield,
      title: t('servicePages.hardwareMaintenance.services.dataProtection'),
      description: t('servicePages.hardwareMaintenance.services.dataProtectionDesc'),
    },
    {
      icon: Laptop,
      title: t('servicePages.hardwareMaintenance.services.upgrades'),
      description: t('servicePages.hardwareMaintenance.services.upgradesDesc'),
    },
    {
      icon: Smartphone,
      title: t('servicePages.hardwareMaintenance.services.diagnostics'),
      description: t('servicePages.hardwareMaintenance.services.diagnosticsDesc'),
    },
  ]

  const benefits = [
    {
      icon: Activity,
      title: t('servicePages.hardwareMaintenance.benefits.uptimeTitle'),
      description: t('servicePages.hardwareMaintenance.benefits.uptime'),
    },
    {
      icon: DollarSign,
      title: t('servicePages.hardwareMaintenance.benefits.costTitle'),
      description: t('servicePages.hardwareMaintenance.benefits.costSavings'),
    },
    {
      icon: Users,
      title: t('servicePages.hardwareMaintenance.benefits.expertTitle'),
      description: t('servicePages.hardwareMaintenance.benefits.expertSupport'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.hardwareMaintenance.title')}
        subtitle={t('servicePages.hardwareMaintenance.subtitle')}
        ctaText={t('servicePages.hardwareMaintenance.cta.button')}
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
              {t('servicePages.hardwareMaintenance.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hardwareMaintenanceServices.map((service, index) => (
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
              {t('servicePages.hardwareMaintenance.sections.benefits')}
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
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.hardwareMaintenance.cta.title')}
        description={t('servicePages.hardwareMaintenance.cta.description')}
        ctaText={t('servicePages.hardwareMaintenance.cta.button')}
        variant="primary"
      />
    </main>
  )
}