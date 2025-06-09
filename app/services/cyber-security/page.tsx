"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Zap, ShieldCheck, Search, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function CyberSecurityPage() {
  const { t } = useTranslation('common')
  
  const securityServices = [
    {
      icon: Shield,
      title: t('servicePages.cyberSecurity.services.assessment'),
      description: t('servicePages.cyberSecurity.services.assessmentDesc'),
    },
    {
      icon: Lock,
      title: t('servicePages.cyberSecurity.services.dataEncryption'),
      description: t('servicePages.cyberSecurity.services.dataEncryptionDesc'),
    },
    {
      icon: Eye,
      title: t('servicePages.cyberSecurity.services.monitoring'),
      description: t('servicePages.cyberSecurity.services.monitoringDesc'),
    },
    {
      icon: AlertTriangle,
      title: t('servicePages.cyberSecurity.services.penetrationTesting'),
      description: t('servicePages.cyberSecurity.services.penetrationTestingDesc'),
    },
    {
      icon: FileCheck,
      title: t('servicePages.cyberSecurity.services.complianceManagement'),
      description: t('servicePages.cyberSecurity.services.complianceManagementDesc'),
    },
    {
      icon: Zap,
      title: t('servicePages.cyberSecurity.services.incidentResponse'),
      description: t('servicePages.cyberSecurity.services.incidentResponseDesc'),
    },
  ]

  const approachItems = [
    {
      icon: ShieldCheck,
      title: t('servicePages.cyberSecurity.approach.preventionTitle'),
      description: t('servicePages.cyberSecurity.approach.prevention'),
    },
    {
      icon: Search,
      title: t('servicePages.cyberSecurity.approach.detectionTitle'),
      description: t('servicePages.cyberSecurity.approach.detection'),
    },
    {
      icon: Clock,
      title: t('servicePages.cyberSecurity.approach.responseTitle'),
      description: t('servicePages.cyberSecurity.approach.response'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.cyberSecurity.title')}
        subtitle={t('servicePages.cyberSecurity.subtitle')}
        ctaText={t('servicePages.cyberSecurity.cta.button')}
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
              {t('servicePages.cyberSecurity.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service, index) => (
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
              {t('servicePages.cyberSecurity.sections.approach')}
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
        title={t('servicePages.cyberSecurity.cta.title')}
        description={t('servicePages.cyberSecurity.cta.description')}
        ctaText={t('servicePages.cyberSecurity.cta.button')}
        variant="primary"
      />
    </main>
  )
}