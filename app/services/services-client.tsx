"use client"
import { ServiceHero } from "@/components/service-hero"
import { ServiceLinkCard } from "@/components/service-link-card"
import { ServiceCTASection } from "@/components/service-cta-section"
import { motion } from "framer-motion"
import { Icons } from "@/components/icons"
import { useTranslation } from "react-i18next"

export default function ServicesClient() {
  const { t } = useTranslation('common')
  
  const services = [
    {
      icon: Icons.ManagedServices,
      title: t('servicesPage.allServices.managed.title'),
      description: t('servicesPage.allServices.managed.description'),
      href: "/services/managed-services",
    },
    {
      icon: Icons.Security,
      title: t('servicesPage.allServices.security.title'),
      description: t('servicesPage.allServices.security.description'),
      href: "/services/it-security",
    },
    {
      icon: Icons.Support,
      title: t('servicesPage.allServices.support.title'),
      description: t('servicesPage.allServices.support.description'),
      href: "/services/it-support",
    },
    {
      icon: Icons.Consulting,
      title: t('servicesPage.allServices.consulting.title'),
      description: t('servicesPage.allServices.consulting.description'),
      href: "/services/it-consulting",
    },
    {
      icon: Icons.Cloud,
      title: t('servicesPage.allServices.cloud.title'),
      description: t('servicesPage.allServices.cloud.description'),
      href: "/services/cloud",
    },
    {
      icon: Icons.CyberSecurity,
      title: t('servicesPage.allServices.cyber.title'),
      description: t('servicesPage.allServices.cyber.description'),
      href: "/services/cyber-security",
    },
    {
      icon: Icons.Onsite,
      title: t('servicesPage.allServices.onsite.title'),
      description: t('servicesPage.allServices.onsite.description'),
      href: "/services/onsite-support",
    },
    {
      icon: Icons.Network,
      title: t('servicesPage.allServices.wireless.title'),
      description: t('servicesPage.allServices.wireless.description'),
      href: "/services/wireless-survey",
    },
    {
      icon: Icons.EWaste,
      title: t('servicesPage.allServices.waste.title'),
      description: t('servicesPage.allServices.waste.description'),
      href: "/services/e-waste",
    },
    {
      icon: Icons.Hardware,
      title: t('servicesPage.allServices.equipment.title'),
      description: t('servicesPage.allServices.equipment.description'),
      href: "/services/it-equipment",
    },
    {
      icon: Icons.Relocation,
      title: t('servicesPage.allServices.relocation.title'),
      description: t('servicesPage.allServices.relocation.description'),
      href: "/services/relocation",
    },
    {
      icon: Icons.Recruitment,
      title: t('servicesPage.allServices.recruitment.title'),
      description: t('servicesPage.allServices.recruitment.description'),
      href: "/services/recruitment",
    },
    {
      icon: Icons.Workforce,
      title: t('servicesPage.allServices.workforce.title'),
      description: t('servicesPage.allServices.workforce.description'),
      href: "/services/workforce-solutions",
    },
    {
      icon: Icons.Custom,
      title: t('servicesPage.allServices.custom.title'),
      description: t('servicesPage.allServices.custom.description'),
      href: "/services/custom-solutions",
    },
    {
      icon: Icons.Asset,
      title: t('servicesPage.allServices.asset.title'),
      description: t('servicesPage.allServices.asset.description'),
      href: "/services/asset-management",
    },
    {
      icon: Icons.Hardware,
      title: t('servicesPage.allServices.hardware.title'),
      description: t('servicesPage.allServices.hardware.description'),
      href: "/services/hardware-maintenance",
    },
  ]
  
  return (
    <div className="flex flex-col">
      <ServiceHero
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
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
              {t('servicesPage.sectionTitle', 'Our Comprehensive IT Solutions')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicesPage.sectionSubtitle', 'Choose from our wide range of professional IT services designed to meet your business needs')}
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceLinkCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                ctaText={t('common.learnMore')}
                index={index}
                featured={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTASection
        title={t('servicesPage.cta.title')}
        description={t('servicesPage.cta.description')}
        ctaText={t('common.getStarted')}
        variant="gradient"
      />
    </div>
  )
}