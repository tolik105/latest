"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Truck, Users, Briefcase, Clock, CheckCircle, UserPlus, Wrench, Shield } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function OnsiteSupportPage() {
  const { t } = useTranslation('common')
  
  const mainServices = [
    { 
      icon: Wrench, 
      title: t('servicePages.onsiteSupport.features.expertTechnicians'),
      description: t('servicePages.onsiteSupport.mainDescription')
    },
    { 
      icon: Shield, 
      title: t('servicePages.onsiteSupport.features.comprehensiveSupport'),
      description: t('servicePages.onsiteSupport.features.comprehensiveSupportDesc')
    }
  ]

  const additionalFeatures = [
    { 
      icon: Truck, 
      title: t('servicePages.onsiteSupport.features.flexibleScheduling'),
      description: t('servicePages.onsiteSupport.features.flexibleSchedulingDesc')
    },
    { 
      icon: Users, 
      title: t('servicePages.onsiteSupport.features.emergencyResponse'),
      description: t('servicePages.onsiteSupport.features.emergencyResponseDesc')
    },
    { 
      icon: Briefcase, 
      title: t('servicePages.onsiteSupport.features.preventiveMaintenance'),
      description: t('servicePages.onsiteSupport.features.preventiveMaintenanceDesc')
    },
    { 
      icon: Clock, 
      title: t('servicePages.onsiteSupport.features.userTraining'),
      description: t('servicePages.onsiteSupport.features.userTrainingDesc')
    },
    { 
      icon: CheckCircle, 
      title: t('servicePages.onsiteSupport.features.hardwareInstallation'),
      description: t('servicePages.onsiteSupport.features.hardwareInstallationDesc')
    },
    { 
      icon: UserPlus, 
      title: t('servicePages.onsiteSupport.features.systemTroubleshooting'),
      description: t('servicePages.onsiteSupport.features.systemTroubleshootingDesc')
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.onsiteSupport.title')}
        subtitle={t('servicePages.onsiteSupport.subtitle')}
        ctaText={t('servicePages.onsiteSupport.cta.button')}
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
              {t('servicePages.onsiteSupport.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
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
              {t('servicePages.onsiteSupport.sections.additionalStaffing')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => (
              <ServiceFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.onsiteSupport.cta.title')}
        description={t('servicePages.onsiteSupport.cta.description')}
        ctaText={t('servicePages.onsiteSupport.cta.button')}
        variant="primary"
      />
    </main>
  )
}