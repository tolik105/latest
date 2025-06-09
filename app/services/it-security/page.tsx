"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Icons } from "@/components/icons"
import { useTranslation } from "react-i18next"

export default function ITSecurityPage() {
  const { t } = useTranslation('common')
  
  const securityServices = [
    {
      icon: Icons.Security,
      title: t('servicePages.itSecurity.features.networkSecurity'),
      description: t('servicePages.itSecurity.features.networkSecurityDesc'),
    },
    {
      icon: Icons.CyberSecurity,
      title: t('servicePages.itSecurity.features.dataEncryption'),
      description: t('servicePages.itSecurity.features.dataEncryptionDesc'),
    },
    {
      icon: Icons.Monitoring,
      title: t('servicePages.itSecurity.features.monitoring'),
      description: t('servicePages.itSecurity.features.monitoringDesc'),
    },
    {
      icon: Icons.Alert,
      title: t('servicePages.itSecurity.features.threatDetection'),
      description: t('servicePages.itSecurity.features.threatDetectionDesc'),
    },
    {
      icon: Icons.Compliance,
      title: t('servicePages.itSecurity.features.compliance'),
      description: t('servicePages.itSecurity.features.complianceDesc'),
    },
    {
      icon: Icons.Performance,
      title: t('servicePages.itSecurity.features.incidentResponse'),
      description: t('servicePages.itSecurity.features.incidentResponseDesc'),
    },
  ]

  const whyChooseItems = [
    {
      icon: Icons.Team,
      title: t('servicePages.itSecurity.whyChoose.expertTeam.title'),
      description: t('servicePages.itSecurity.whyChoose.expertTeam.description'),
    },
    {
      icon: Icons.Hardware,
      title: t('servicePages.itSecurity.whyChoose.cuttingEdge.title'),
      description: t('servicePages.itSecurity.whyChoose.cuttingEdge.description'),
    },
    {
      icon: Icons.Settings,
      title: t('servicePages.itSecurity.whyChoose.tailored.title'),
      description: t('servicePages.itSecurity.whyChoose.tailored.description'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.itSecurity.title')}
        subtitle={t('servicePages.itSecurity.subtitle')}
        ctaText={t('servicePages.itSecurity.cta.button')}
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
              {t('servicePages.itSecurity.sections.features')}
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
              {t('servicePages.itSecurity.sections.whyChoose')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item, index) => (
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
        title={t('servicePages.itSecurity.cta.title')}
        description={t('servicePages.itSecurity.cta.description')}
        ctaText={t('servicePages.itSecurity.cta.button')}
        variant="primary"
      />
    </main>
  )
}