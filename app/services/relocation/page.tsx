"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { TruckIcon, PackageCheck, Network, Monitor, Clock, ShieldCheck, CheckCircle, FileSearch, ClipboardList, Play, Headphones } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function RelocationServicesPage() {
  const { t } = useTranslation('common')
  
  const relocationServices = [
    {
      icon: PackageCheck,
      title: t('servicePages.relocation.services.equipmentPackingTitle'),
      description: t('servicePages.relocation.services.packingDesc'),
    },
    {
      icon: TruckIcon,
      title: t('servicePages.relocation.services.transportTitle'),
      description: t('servicePages.relocation.services.transportDesc'),
    },
    {
      icon: Network,
      title: t('servicePages.relocation.services.networkSetupTitle'),
      description: t('servicePages.relocation.services.networkSetupDesc'),
    },
    {
      icon: Monitor,
      title: t('servicePages.relocation.services.reinstallationTitle'),
      description: t('servicePages.relocation.services.reinstallationDesc'),
    },
    {
      icon: Clock,
      title: t('servicePages.relocation.benefits.minimalTitle'),
      description: t('servicePages.relocation.benefits.minimal'),
    },
    {
      icon: ShieldCheck,
      title: t('servicePages.relocation.benefits.secureTitle'),
      description: t('servicePages.relocation.services.transportDesc'),
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.minimalTitle'),
      description: t('servicePages.relocation.benefits.minimalDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.secureTitle'),
      description: t('servicePages.relocation.benefits.secureDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.professionalTitle'),
      description: t('servicePages.relocation.benefits.professionalDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.insuranceTitle'),
      description: t('servicePages.relocation.benefits.insuranceDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.weekendTitle'),
      description: t('servicePages.relocation.benefits.weekendDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.relocation.benefits.businessContinuity'),
      description: 'Ensure seamless transition with minimal impact on daily operations.',
    },
  ]

  const processSteps = [
    {
      icon: FileSearch,
      title: t('servicePages.relocation.process.assessmentTitle'),
      description: t('servicePages.relocation.process.assessment'),
    },
    {
      icon: ClipboardList,
      title: t('servicePages.relocation.process.scheduleTitle'),
      description: t('servicePages.relocation.process.schedule'),
    },
    {
      icon: Play,
      title: t('servicePages.relocation.process.executionTitle'),
      description: t('servicePages.relocation.process.execution'),
    },
    {
      icon: Headphones,
      title: 'Post-Move Support',
      description: 'Ongoing support to ensure smooth transition and address any post-move issues.',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.relocation.title')}
        subtitle={t('servicePages.relocation.subtitle')}
        ctaText={t('servicePages.relocation.cta.button')}
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
              {t('servicePages.relocation.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relocationServices.map((service, index) => (
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
              {t('servicePages.relocation.sections.benefits')}
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

      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicePages.relocation.sections.process')}
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
                variant={index % 3 === 0 ? 'gradient' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.relocation.cta.title')}
        description={t('servicePages.relocation.cta.description')}
        ctaText={t('servicePages.relocation.cta.button')}
        variant="primary"
      />
    </main>
  )
}