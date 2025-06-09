"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import {
  Clock,
  Users,
  Shield,
  Headphones,
  Truck,
  MoveIcon,
  Network,
  Laptop,
  UserPlus,
  Recycle,
  Code,
  Briefcase,
} from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ManagedServicesPage() {
  const { t } = useTranslation('common')
  
  const features = [
    { 
      icon: Clock, 
      title: t('servicePages.managedServices.features.globalSupport'),
      description: t('servicePages.managedServices.features.globalSupportDesc')
    },
    { 
      icon: Users, 
      title: t('servicePages.managedServices.features.blendedModel'),
      description: t('servicePages.managedServices.features.blendedModelDesc')
    },
    { 
      icon: Shield, 
      title: t('servicePages.managedServices.features.proactiveMonitoring'),
      description: t('servicePages.managedServices.features.proactiveMonitoringDesc')
    },
    { 
      icon: Headphones, 
      title: t('servicePages.managedServices.features.serviceDesk'),
      description: t('servicePages.managedServices.features.serviceDeskDesc')
    },
    { 
      icon: Truck, 
      title: t('servicePages.managedServices.features.onsiteSupport'),
      description: t('servicePages.managedServices.features.onsiteSupportDesc')
    },
    { 
      icon: MoveIcon, 
      title: t('servicePages.managedServices.features.relocationServices'),
      description: t('servicePages.managedServices.features.relocationServicesDesc')
    },
  ]

  const additionalServices = [
    { 
      icon: Network, 
      title: t('servicePages.managedServices.additionalServices.dataComm.title'),
      description: t('servicePages.managedServices.additionalServices.dataComm.description')
    },
    { 
      icon: Laptop, 
      title: t('servicePages.managedServices.additionalServices.itEquipment.title'),
      description: t('servicePages.managedServices.additionalServices.itEquipment.description')
    },
    { 
      icon: UserPlus, 
      title: t('servicePages.managedServices.additionalServices.recruitment.title'),
      description: t('servicePages.managedServices.additionalServices.recruitment.description')
    },
    { 
      icon: Recycle, 
      title: t('servicePages.managedServices.additionalServices.wasteManagement.title'),
      description: t('servicePages.managedServices.additionalServices.wasteManagement.description')
    },
    { 
      icon: Code, 
      title: t('servicePages.managedServices.additionalServices.itSolutions.title'),
      description: t('servicePages.managedServices.additionalServices.itSolutions.description')
    },
    { 
      icon: Briefcase, 
      title: t('servicePages.managedServices.additionalServices.workforceSolutions.title'),
      description: t('servicePages.managedServices.additionalServices.workforceSolutions.description')
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.managedServices.title')}
        subtitle={t('servicePages.managedServices.subtitle')}
        ctaText={t('common.contactUs')}
        ctaHref="/contact"
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
              {t('servicePages.managedServices.sections.features')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicePages.managedServices.mainDescription')}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ServiceFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
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
              {t('servicePages.managedServices.sections.additionalServices')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
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

      <ServiceCTASection
        title={t('servicePages.managedServices.cta.title')}
        description={t('servicePages.managedServices.cta.description')}
        ctaText={t('servicePages.managedServices.cta.button')}
        variant="primary"
      />
    </main>
  )
}