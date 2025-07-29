"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { TabbedCards } from "@/components/ui/tabbed-cards"
import { PricingCards } from "@/components/ui/pricing-cards"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"
import { 
  MonitoringIcon, 
  SupportTeamIcon, 
  InfrastructureIcon, 
  SecurityIcon, 
  PlanningIcon 
} from "@/components/ui/service-icons"

export default function ITManagedServicesClient() {
  const accordionItems = [
    {
      title: "24/7 Network Monitoring",
      body: "Continuous monitoring of your entire IT infrastructure with proactive issue detection and resolution before problems impact your business."
    },
    {
      title: "Unlimited Help Desk Support", 
      body: "Round-the-clock technical support with guaranteed response times. Critical issues resolved within 30 minutes, standard requests within 4 hours."
    },
    {
      title: "Server & Infrastructure Management",
      body: "Complete management of your servers, networks, and cloud infrastructure with regular maintenance, updates, and optimization."
    },
    {
      title: "Cybersecurity & Compliance",
      body: "Advanced threat protection, security monitoring, and compliance management to keep your data safe and meet regulatory requirements."
    },
    {
      title: "Strategic IT Planning",
      body: "Long-term technology roadmap development aligned with your business goals, including budget planning and technology recommendations."
    },
    {
      title: "On-site Support",
      body: "Local technicians available for on-site visits when remote support is not sufficient. 4-hour response time in major Japanese cities."
    }
  ]

  const tabbedCardsData = [
    {
      icon: MonitoringIcon,
      label: "Proactive Monitoring & Maintenance",
      content: {
        title: "Proactive Monitoring & Maintenance",
        subline: "24/7 system, network, and endpoint monitoring (SIEM/XDR capable)",
        bullets: [
          "Automated alerts, patching, and remediation",
          "Performance tuning & capacity planning"
        ]
      }
    },
    {
      icon: SupportTeamIcon,
      label: "Helpdesk & User Support",
      content: {
        title: "Helpdesk & User Support",
        subline: "Multichannel support (phone / email / chat / portal)",
        bullets: [
          "Remote support for instant fixes; on-site for hardware & complex issues",
          "VIP concierge options for executives",
          "Self-service knowledge base"
        ]
      }
    },
    {
      icon: InfrastructureIcon,
      label: "Infrastructure Management",
      content: {
        title: "Infrastructure Management",
        subline: "Server administration (Windows/Linux/virtualization)",
        bullets: [
          "Network management (WAN/LAN/Wi Fi) & optimization",
          "Backup monitoring, DR drills, and failover testing",
          "Cloud operations (Microsoft 365, Azure, AWS, GCP)",
          "Database administration & optimization"
        ]
      }
    },
    {
      icon: SecurityIcon,
      label: "Security & Compliance",
      content: {
        title: "Security & Compliance",
        subline: "Endpoint Detection & Response (EDR) and email security",
        bullets: [
          "Vulnerability scanning & remediation cycles",
          "Security awareness training",
          "Compliance reporting (ISO 27001, J-SOX, etc.)"
        ]
      }
    },
    {
      icon: PlanningIcon,
      label: "Strategic IT Planning & Governance",
      content: {
        title: "Strategic IT Planning & Governance",
        subline: "Annual technology roadmap & budget planning",
        bullets: [
          "Quarterly Business Reviews (QBRs) with actionable insights",
          "Vendor/license management and cost optimization",
          "Digital transformation consulting & automation roadmap"
        ]
      }
    }
  ]

  const pricingPlans = [
    {
      name: "Per-User",
      price: "¥8,000–15,000",
      period: "user / month",
      description: "Standard knowledge workers",
      bullets: [
        "Remote support included",
        "24/7 monitoring",
        "Monthly reporting",
        "Patch management"
      ]
    },
    {
      name: "Per-Device",
      price: "¥3,000–8,000",
      period: "device / month",
      description: "Shared/industrial devices",
      bullets: [
        "Device monitoring",
        "Maintenance scheduling",
        "Performance optimization",
        "Security updates"
      ],
      highlighted: true
    },
    {
      name: "Flat-Rate / Custom",
      price: "Custom Quote",
      period: "enterprise",
      description: "For 25+ users or multi-site environments",
      bullets: [
        "Dedicated account manager",
        "Custom SLAs",
        "Strategic planning",
        "Volume discounts"
      ]
    }
  ]

  const faqItems = [
    {
      q: "What size companies do you support?",
      a: "Typically 20–500+ employees, but we scale up or down as needed."
    },
    {
      q: "Can you co-manage with our internal IT?",
      a: "Yes. We fill skill gaps, provide 24/7 coverage, or handle specific functions."
    },
    {
      q: "What is included in the monthly fee?",
      a: "Remote support, monitoring, maintenance, security tooling, and defined on-site hours. Extra on-site is billed at preferred rates."
    },
    {
      q: "How fast is your response?",
      a: "Critical: 30 mins. High: 2 hrs. Standard: 4–8 hrs. 24/7/365 adherence."
    },
    {
      q: "Do you manage cloud and on-prem?",
      a: "Yes—hybrid environments are our norm (M365, AWS/Azure/GCP + on-prem servers)."
    },
    {
      q: "How do we transition from our current provider?",
      a: "A 30-day overlap/onboarding plan ensures zero downtime and clean handover."
    },
    {
      q: "Can you really cut our IT costs?",
      a: "Most clients see 30–50% savings vs equivalent in-house staffing—validated in our ROI report."
    },
    {
      q: "What about data residency & compliance?",
      a: "We follow Japanese data laws; data stays in Japan when required. ISO 27001-aligned processes."
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
      
      <div className="min-h-screen">
        {/* Hero Section - White background */}
        <div className="bg-white">
          <SectionHero
            title="Managed IT Services & 24/7 Support"
            subtitle="Proactive monitoring, unlimited helpdesk, and on-site support. Cut IT costs 30–50% and achieve 99.9% uptime with AKRIN—Japan's trusted MSP."
            ctaLabel="Get Started"
            ctaHref="/contact"
            imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753274092/managed_services_j9lrhb.png"
          />
        </div>

        {/* What Are Services Section - Gray background */}
        <div className="bg-gray-50">
          <SectionTextImage
            heading="What Are Managed IT Services?"
            body="<p>Managed IT Services replace reactive break–fix support with a proactive, fixed-fee partnership. We monitor, maintain, and continuously improve your environment—aligning technology with business goals while eliminating surprise costs.</p><p>Instead of waiting for problems to occur, our MSP approach prevents issues before they impact your business. This means better uptime, predictable costs, and your team can focus on growth instead of IT fires.</p>"
            imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316226/engineer-rack_stsysi.png"
            imageSide="left"
          />
        </div>

        {/* Service Features Section - White background */}
        <div className="bg-white">
          <AccordionList items={accordionItems} />
        </div>

        {/* Service Components Section - Gray background */}
        <div className="bg-gray-50">
          <TabbedCards tabs={tabbedCardsData} />
        </div>

        {/* Pricing Section - White background */}
        <div className="bg-white">
          <PricingCards plans={pricingPlans} />
        </div>

        {/* Long Term Partnership Section - Gray background */}
        <div className="bg-gray-50">
          <SectionTextImage
            heading="IT Managed Services for Your Long Term"
            body="<p>Building a lasting technology partnership that grows with your business. Our managed IT services are designed to evolve with your needs, providing consistent support and strategic guidance for years to come.</p><p>From startups to established enterprises, we have helped hundreds of companies in Japan transform their IT operations. Our long-term approach means better relationships, deeper understanding of your business, and more effective technology solutions.</p>"
            imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316524/roadmap_avxbss.png"
            imageSide="right"
          />
        </div>

        {/* FAQ Section - White background */}
        <div className="bg-white">
          <FAQ items={faqItems} />
        </div>

        {/* CTA Section - Purple background */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700">
          <SectionCTA
            headline="Ready to transform your IT?"
            sub="See why 200+ companies trust AKRIN as their MSP. Get enterprise-level IT at SMB-friendly prices."
            buttonLabel="Schedule consultation"
            buttonHref="/contact"
          />
        </div>
      </div>
    </div>
  )
}
