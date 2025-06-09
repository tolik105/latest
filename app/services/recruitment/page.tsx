"use client"

import { ServiceHero } from "@/components/service-hero"
import { ServiceFeatureCard } from "@/components/service-feature-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import {
  Users,
  Search,
  FileCheck,
  Briefcase,
  BarChart,
  Award,
  Code,
  Database,
  Cloud,
  Shield,
  Server,
  Cpu,
  Target,
  Globe,
  Settings,
} from "lucide-react"
import { useTranslation } from "react-i18next"

export default function RecruitmentServicesPage() {
  const { t } = useTranslation('common')
  
  const generalRecruitmentServices = [
    {
      icon: Search,
      title: t('servicePages.recruitment.process.candidateSourcing'),
      description: t('servicePages.recruitment.process.sourcing'),
    },
    {
      icon: FileCheck,
      title: t('servicePages.recruitment.process.technicalAssessment'),
      description: t('servicePages.recruitment.process.assessment'),
    },
    {
      icon: Users,
      title: t('servicePages.recruitment.services.teamBuilding'),
      description: t('servicePages.recruitment.services.teamBuildingDesc'),
    },
    {
      icon: Briefcase,
      title: t('servicePages.recruitment.services.executive'),
      description: t('servicePages.recruitment.services.executiveDesc'),
    },
    {
      icon: BarChart,
      title: t('servicePages.recruitment.services.marketAnalysis'),
      description: t('servicePages.recruitment.services.marketAnalysisDesc'),
    },
    {
      icon: Award,
      title: t('servicePages.recruitment.services.employerBranding'),
      description: t('servicePages.recruitment.services.employerBrandingDesc'),
    },
  ]

  const itRoles = [
    {
      icon: Code,
      title: t('servicePages.recruitment.positions.developers'),
      description: t('servicePages.recruitment.positions.developersDesc'),
    },
    {
      icon: Database,
      title: t('servicePages.recruitment.positions.administrators'),
      description: t('servicePages.recruitment.positions.administratorsDesc'),
    },
    {
      icon: Cloud,
      title: t('servicePages.recruitment.positions.cloudArchitects'),
      description: 'Experienced cloud architects to design and implement scalable cloud solutions.',
    },
    {
      icon: Shield,
      title: t('servicePages.recruitment.positions.security'),
      description: t('servicePages.recruitment.positions.securityDesc'),
    },
    {
      icon: Server,
      title: t('servicePages.recruitment.positions.engineers'),
      description: t('servicePages.recruitment.positions.engineersDesc'),
    },
    {
      icon: Cpu,
      title: t('servicePages.recruitment.positions.analysts'),
      description: t('servicePages.recruitment.positions.analystsDesc'),
    },
  ]

  const whyChooseItems = [
    {
      icon: Target,
      title: t('servicePages.recruitment.benefits.industryExpertise'),
      description: t('servicePages.recruitment.benefits.industryExpertiseDesc'),
    },
    {
      icon: Globe,
      title: t('servicePages.recruitment.benefits.extensiveNetwork'),
      description: t('servicePages.recruitment.benefits.extensiveNetworkDesc'),
    },
    {
      icon: Settings,
      title: t('servicePages.recruitment.benefits.timeToHire'),
      description: t('servicePages.recruitment.benefits.timeToHireDesc'),
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero
        title={t('servicePages.recruitment.title')}
        subtitle={t('servicePages.recruitment.subtitle')}
        ctaText={t('servicePages.recruitment.cta.button')}
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
              {t('servicePages.recruitment.sections.services')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {generalRecruitmentServices.map((service, index) => (
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
              {t('servicePages.recruitment.sections.positions')}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {itRoles.map((role, index) => (
              <ServiceFeatureCard
                key={index}
                icon={role.icon}
                title={role.title}
                description={role.description}
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
              {t('servicePages.recruitment.sections.whyChoose')}
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
                variant={index % 3 === 0 ? 'gradient' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicePages.recruitment.cta.title')}
        description={t('servicePages.recruitment.cta.description')}
        ctaText={t('servicePages.recruitment.cta.button')}
        variant="primary"
      />
    </main>
  )
}