"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Wifi, BarChart, Zap, Shield, Smartphone, Settings, CheckCircle, FileSearch, Database, LineChart, FileText, AlertTriangle } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function WirelessSurveyPage() {
  const { t } = useTranslation('common')
  
  const wirelessSurveyServices = [
    {
      icon: Wifi,
      title: t('servicePages.wirelessSurvey.surveyTypes.coverage'),
      description: t('servicePages.wirelessSurvey.deliverables.heatmaps'),
    },
    {
      icon: BarChart,
      title: t('servicePages.wirelessSurvey.surveyTypes.performance'),
      description: t('servicePages.wirelessSurvey.benefits.performance'),
    },
    {
      icon: Zap,
      title: t('servicePages.wirelessSurvey.surveyTypes.capacity'),
      description: t('servicePages.wirelessSurvey.benefits.capacity'),
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive wireless security assessment and vulnerability analysis.',
    },
    {
      icon: Smartphone,
      title: 'Device Compatibility',
      description: 'Ensure optimal compatibility and performance across all wireless devices.',
    },
    {
      icon: Settings,
      title: t('servicePages.wirelessSurvey.services.networkDesignTitle'),
      description: t('servicePages.wirelessSurvey.deliverables.apPlacement'),
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.coverage'),
      description: t('servicePages.wirelessSurvey.benefits.coverage'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.performance'),
      description: t('servicePages.wirelessSurvey.benefits.performance'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.security'),
      description: t('servicePages.wirelessSurvey.benefits.security'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.capacity'),
      description: t('servicePages.wirelessSurvey.benefits.capacity'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.reliability'),
      description: t('servicePages.wirelessSurvey.benefits.reliability'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.wirelessSurvey.benefits.troubleshooting'),
      description: t('servicePages.wirelessSurvey.benefits.troubleshooting'),
    },
  ]

  const processSteps = [
    {
      icon: FileSearch,
      title: t('servicePages.wirelessSurvey.process.requirementsTitle'),
      description: t('servicePages.wirelessSurvey.process.requirementsDesc'),
    },
    {
      icon: Database,
      title: t('servicePages.wirelessSurvey.process.surveyTitle'),
      description: t('servicePages.wirelessSurvey.process.surveyDesc'),
    },
    {
      icon: LineChart,
      title: t('servicePages.wirelessSurvey.process.analysisTitle'),
      description: t('servicePages.wirelessSurvey.process.analysisDesc'),
    },
    {
      icon: FileText,
      title: t('servicePages.wirelessSurvey.process.recommendationsTitle'),
      description: t('servicePages.wirelessSurvey.deliverables.recommendations'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.wirelessSurvey.title')}
        subtitle={t('servicePages.wirelessSurvey.subtitle')}
        ctaText={t('servicePages.wirelessSurvey.cta.button')}
        ctaHref="/book-reservation"
      />

      <section className="py-24 bg-accent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicePages.wirelessSurvey.sections.whyMatter')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t('servicePages.wirelessSurvey.mainDescription')} Issues include: {t('servicePages.wirelessSurvey.whyMatter.issues.deadZones')}, {t('servicePages.wirelessSurvey.whyMatter.issues.interference')}, {t('servicePages.wirelessSurvey.whyMatter.issues.capacity')}, and {t('servicePages.wirelessSurvey.whyMatter.issues.performance')}.
            </p>
          </motion.div>
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
              {t('servicePages.wirelessSurvey.sections.types')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {wirelessSurveyServices.map((service, index) => (
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
              {t('servicePages.wirelessSurvey.sections.benefits')}
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
              {t('servicePages.wirelessSurvey.sections.process')}
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
        title={t('servicePages.wirelessSurvey.cta.title')}
        description={t('servicePages.wirelessSurvey.cta.description')}
        ctaText={t('servicePages.wirelessSurvey.cta.button')}
        variant="primary"
      />
    </main>
  )
}