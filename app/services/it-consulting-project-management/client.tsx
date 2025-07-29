"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { TabbedCards } from "@/components/ui/tabbed-cards"
import { TechPartnersSkeleton } from "@/components/ui/tech-partners-animated"
import { EmbeddedContactForm } from "@/components/ui/embedded-contact-form"
import { motion } from "framer-motion"
import {
  ClipboardDocumentListIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline"

export default function ITConsultingProjectManagementClient() {
  const serviceCards = [
    {
      icon: ClipboardDocumentListIcon,
      label: "IT Strategy & Digital Transformation",
      content: {
        title: "Strategic IT Planning & Digital Transformation",
        subline: "Comprehensive IT strategy development, digital transformation roadmaps, and technology architecture planning to align IT initiatives with business objectives.",
        bullets: [
          "Digital transformation strategy and roadmap development",
          "Technology architecture planning and design",
          "IT governance framework implementation",
          "Business-IT alignment and strategic planning"
        ]
      }
    },
    {
      icon: CogIcon,
      label: "Project Management Office (PMO)",
      content: {
        title: "Dedicated PMO Services",
        subline: "Professional project management office services including project planning, resource management, risk assessment, and delivery oversight for complex IT initiatives.",
        bullets: [
          "Project planning and resource allocation",
          "Risk assessment and mitigation strategies",
          "Delivery oversight and quality assurance",
          "Stakeholder communication and reporting"
        ]
      }
    },
    {
      icon: UserGroupIcon,
      label: "Change Management & Training",
      content: {
        title: "Organizational Change Management",
        subline: "Organizational change management, user adoption strategies, training program development, and stakeholder communication for successful IT implementations.",
        bullets: [
          "Change management strategy development",
          "User adoption and training programs",
          "Stakeholder engagement and communication",
          "Post-implementation support and optimization"
        ]
      }
    },
    {
      icon: ShieldCheckIcon,
      label: "Vendor Management & Procurement",
      content: {
        title: "Technology Vendor Management",
        subline: "Technology vendor evaluation, contract negotiation, procurement support, and ongoing vendor relationship management to optimize IT investments.",
        bullets: [
          "Vendor evaluation and selection processes",
          "Contract negotiation and procurement support",
          "Vendor relationship management",
          "Performance monitoring and optimization"
        ]
      }
    },
    {
      icon: ChartBarIcon,
      label: "Risk Assessment & Compliance",
      content: {
        title: "IT Risk & Compliance Management",
        subline: "IT risk assessment, compliance auditing, governance framework development, and regulatory compliance support for Japanese and international standards.",
        bullets: [
          "IT risk assessment and analysis",
          "Compliance auditing and reporting",
          "Governance framework development",
          "Regulatory compliance support"
        ]
      }
    },
    {
      icon: WrenchScrewdriverIcon,
      label: "Business Process Optimization",
      content: {
        title: "Process Analysis & Optimization",
        subline: "Process analysis, workflow optimization, automation opportunities identification, and implementation of efficiency improvements across IT operations.",
        bullets: [
          "Business process analysis and mapping",
          "Workflow optimization and automation",
          "Efficiency improvement implementation",
          "Performance monitoring and continuous improvement"
        ]
      }
    }
  ]

  const benefitCards = [
    {
      title: "Strategic Alignment",
      description: "Ensure IT initiatives align with business objectives and deliver measurable value through strategic planning and governance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Risk Mitigation",
      description: "Minimize project risks through proven methodologies, continuous monitoring, and proactive issue resolution.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Expert Delivery",
      description: "Leverage experienced project managers and consultants to ensure successful delivery of complex IT initiatives.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Bilingual Support",
      description: "Navigate Japanese business culture with bilingual project management and stakeholder communication.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YTE9HVKEE');
        `}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Mobile-specific styles */}
        <style jsx>{`
          @media (max-width: 640px) {
            .touch-manipulation {
              touch-action: manipulation;
            }

            /* Improve tap targets */
            button, a, [role="button"] {
              min-height: 44px;
              min-width: 44px;
            }

            /* Prevent zoom on input focus */
            input, select, textarea {
              font-size: 16px;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }

            /* Optimize images for mobile */
            img {
              max-width: 100%;
              height: auto;
            }
          }
        `}</style>
        {/* Hero Section - FMC Style */}
        <SectionHero
          title="IT Consulting & Project Management Services"
          subtitle="Strategic IT consulting, project management office (PMO) services, and digital transformation guidance. Drive successful IT initiatives with expert planning and execution."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        {/* Internal Services Section - Mobile Optimized FMC Style */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Internal IT Consulting & Project Management Services
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Successful IT initiatives require strategic planning, expert guidance, and disciplined execution. Our IT consulting and project management services help organizations navigate complex technology implementations while minimizing risk and maximizing value.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  From digital transformation strategy to hands-on project delivery, we provide the expertise and methodologies needed to ensure your IT investments deliver measurable business results.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IT Consulting Services"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Supported Vendors Section - Mobile Optimized FMC Style */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                Supported Vendors
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
                We work with leading technology partners to deliver comprehensive solutions
              </p>
            </div>
            <div className="overflow-hidden">
              <TechPartnersSkeleton />
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section - FMC Style */}
        <TabbedCards tabs={serviceCards} />

        {/* Service Images Grid - Mobile Optimized FMC Style */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Row 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Strategic Planning"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Strategic Planning</h3>
                  <p className="text-xs sm:text-sm opacity-90">Digital transformation roadmaps</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Project Management"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Project Management</h3>
                  <p className="text-xs sm:text-sm opacity-90">PMO services and delivery</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Risk Management"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Risk Management</h3>
                  <p className="text-xs sm:text-sm opacity-90">Compliance and governance</p>
                </div>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Change Management"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Change Management</h3>
                  <p className="text-xs sm:text-sm opacity-90">Training and adoption</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Vendor Management"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Vendor Management</h3>
                  <p className="text-xs sm:text-sm opacity-90">Procurement and relationships</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Process Optimization"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">Process Optimization</h3>
                  <p className="text-xs sm:text-sm opacity-90">Workflow automation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section - Mobile Optimized FMC Style */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
                Key Benefits of Our IT Consulting & Project Management Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
                Partner with AKRIN for strategic IT consulting and expert project management. Transform your technology investments into business success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {benefitCards.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section - Mobile Optimized FMC Style */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
                Partner with Multi-Platform Experts
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
                Ready to accelerate your IT initiatives? Get in touch with our consulting experts.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <EmbeddedContactForm />
            </div>
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Consulting & Project Management",
              "alternateName": "ITコンサルティング＆プロジェクト管理",
              "serviceType": "IT Consulting and Project Management Services",
              "provider": {
                "@type": "Organization",
                "name": "AKRIN株式会社",
                "url": "https://akrin.jp"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Japan"
              },
              "availableLanguage": ["en", "ja"],
              "url": "https://akrin.jp/services/it-consulting-project-management",
              "description": "Strategic IT consulting, project management office (PMO) services, and digital transformation guidance. Drive successful IT initiatives with expert planning and execution."
            })
          }}
        />
      </div>
    </div>
  )
}
