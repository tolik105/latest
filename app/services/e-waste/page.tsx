"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceProcessCard } from "@/components/service-process-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { CheckCircle, Recycle, Leaf, Shield, BarChart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export default function EWastePage() {
  const { t } = useTranslation('common')
  
  const processSteps = [
    {
      step: 1,
      title: 'Collection',
      description: t('servicePages.eWaste.process.collection'),
    },
    {
      step: 2,
      title: 'Sorting',
      description: t('servicePages.eWaste.process.sorting'),
    },
    {
      step: 3,
      title: t('servicePages.eWaste.process.dataDestruction'),
      description: t('servicePages.eWaste.process.dataDestruction'),
    },
    {
      step: 4,
      title: 'Recycling',
      description: t('servicePages.eWaste.process.recycling'),
    },
    {
      step: 5,
      title: 'Reporting',
      description: t('servicePages.eWaste.process.reporting'),
    },
    {
      step: 6,
      title: 'Compliance',
      description: t('servicePages.eWaste.process.compliance'),
    },
  ]

  const benefits = [
    {
      icon: Recycle,
      title: t('servicePages.eWaste.benefits.environmentalTitle'),
      description: t('servicePages.eWaste.benefits.environmentalDesc'),
    },
    {
      icon: Shield,
      title: t('servicePages.eWaste.benefits.dataProtectionTitle'),
      description: t('servicePages.eWaste.benefits.dataProtectionDesc'),
    },
    {
      icon: Leaf,
      title: t('servicePages.eWaste.benefits.environmentalImpact'),
      description: t('servicePages.eWaste.benefits.carbonFootprintDesc')
    },
    {
      icon: BarChart,
      title: t('servicePages.eWaste.benefits.complianceTitle'),
      description: t('servicePages.eWaste.benefits.complianceDesc'),
    },
    {
      icon: CheckCircle,
      title: t('servicePages.eWaste.benefits.certificatesTitle'),
      description: t('servicePages.eWaste.benefits.certificatesDesc'),
    },
    {
      icon: Award,
      title: 'Corporate Responsibility',
      description: 'Demonstrate corporate environmental responsibility to stakeholders.',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.eWaste.title')}
        subtitle={t('servicePages.eWaste.subtitle')}
        ctaText={t('servicePages.eWaste.cta.button')}
      />

      {/* Custom section with image */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Akrin for E-Waste Management?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                {t('servicePages.eWaste.mainDescription')}
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                We combine environmental responsibility with data security to provide comprehensive e-waste management solutions that protect your business and the planet.
              </p>
              <Link href="/book-reservation">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                  {t('servicePages.eWaste.cta.button')}
                </Button>
              </Link>
            </motion.div>

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
              {t('servicePages.eWaste.sections.process')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.eWaste.sections.processSubtitle', 'Our certified 6-step process ensures complete data security and environmental compliance')}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <ServiceProcessCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                index={index}
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
              Benefits of Our E-Waste Management Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.eWaste.sections.benefitsSubtitle', 'Why choose our e-waste management services')}
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
        title={t('servicePages.eWaste.cta.title')}
        description={t('servicePages.eWaste.cta.description')}
        ctaText={t('servicePages.eWaste.cta.button')}
        variant="primary"
      />
    </main>
  )
}