"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function CloudInfrastructureClient() {
  const accordionItems = [
    {
      title: "Cloud Readiness & TCO Assessment",
      body: "Comprehensive analysis of your current infrastructure and applications to determine cloud readiness and create detailed ROI/TCO models for informed migration decisions."
    },
    {
      title: "Secure Migration & Modernization",
      body: "Execute lift-and-shift or refactor strategies with CI/CD pipelines and Infrastructure as Code (Terraform/Bicep) for efficient cloud transformation."
    },
    {
      title: "Cost & Performance Optimization",
      body: "Implement auto-scaling, reserved instances, and FinOps reporting to maximize cloud efficiency and achieve significant cost savings."
    },
    {
      title: "Managed Cloud Operations (24/7)",
      body: "Complete cloud operations management including patching, monitoring, backup, and incident response around the clock."
    },
    {
      title: "Security & Compliance Management",
      body: "Enterprise-grade security implementation with encryption, IAM, continuous monitoring, and compliance management for regulated industries."
    },
    {
      title: "Multi-Cloud & Hybrid Solutions",
      body: "Design and manage multi-cloud architectures across Azure, AWS, and GCP with seamless hybrid connectivity to on-premises systems."
    }
  ]



  const faqItems = [
    {
      q: "How long does a typical migration take?",
      a: "4–6 weeks for small setups; 3–6 months for complex estates. Timeline depends on application complexity and data volume."
    },
    {
      q: "Can you work with our existing MSP or internal IT?",
      a: "Yes—we can augment your current team or take full ownership as needed. We specialize in collaborative approaches."
    },
    {
      q: "Do you only support Azure?",
      a: "We support Azure, AWS, and GCP platforms. We help you choose the best platform for your specific needs."
    },
    {
      q: "How do you ensure security during migration?",
      a: "Encryption, least-privilege IAM, penetration testing, and continuous monitoring throughout the migration process."
    },
    {
      q: "Do you manage cloud and on-prem?",
      a: "Yes—hybrid environments are our norm. We manage M365, AWS/Azure/GCP alongside on-premises servers."
    },
    {
      q: "What about cost optimization?",
      a: "We implement FinOps practices, right-sizing, reserved instances, and continuous cost monitoring to optimize your cloud spend."
    },
    {
      q: "Can you help with compliance requirements?",
      a: "Yes, we ensure compliance with SOC2, ISO27001, GDPR, and other regulatory requirements specific to your industry."
    },
    {
      q: "What happens if something goes wrong during migration?",
      a: "We have comprehensive rollback procedures and maintain parallel environments during migration to ensure business continuity."
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
        <SectionHero
          title="Cloud Infrastructure Solutions"
          subtitle="Zero-downtime cloud migration, optimization, and 24/7 operations on Azure, AWS, and GCP. Transform your infrastructure with enterprise-grade security and cost efficiency."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316226/engineer-rack_stsysi.png"
        />

        <SectionTextImage
          heading="Why Move to the Cloud?"
          body="<p>Cloud infrastructure offers unparalleled scalability, cost efficiency, and innovation capabilities. Our comprehensive cloud solutions help you modernize your IT infrastructure while maintaining security, compliance, and operational excellence.</p><p>From initial assessment to ongoing management, we provide end-to-end cloud services that transform your business operations and enable digital innovation at scale.</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753274549/cloud.infra_vkpff7.png"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your Cloud Transformation Partner"
          body="<p>Building a successful cloud strategy requires expertise, planning, and ongoing optimization. Our cloud infrastructure solutions are designed to evolve with your business needs, providing scalable, secure, and cost-effective cloud operations.</p><p>From startups to enterprise organizations, we have helped hundreds of companies in Japan successfully migrate to and optimize their cloud infrastructure. Our proven methodologies ensure successful outcomes and long-term value.</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316524/roadmap_avxbss.png"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to modernize your infrastructure?"
          sub="Join 200+ companies that trust AKRIN for their cloud transformation. Get enterprise-grade cloud solutions with SMB-friendly pricing."
          buttonLabel="Start your cloud journey"
          buttonHref="/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Cloud Infrastructure Solutions",
              "alternateName": "クラウドインフラソリューション",
              "serviceType": "Cloud Migration and Managed Cloud Services",
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
              "url": "https://akrin.jp/services/cloud-infrastructure",
              "description": "Zero-downtime cloud migration, optimization, and 24/7 operations on Azure, AWS, and GCP.",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Cloud Assessment",
                  "price": "500000",
                  "priceCurrency": "JPY",
                  "description": "Cloud readiness and migration planning"
                },
                {
                  "@type": "Offer",
                  "name": "Cloud Migration",
                  "price": "2000000",
                  "priceCurrency": "JPY",
                  "description": "Complete cloud migration services"
                },
                {
                  "@type": "Offer",
                  "name": "Managed Operations",
                  "price": "300000",
                  "priceCurrency": "JPY",
                  "description": "Monthly cloud management and support"
                }
              ],
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a typical migration take?",
                  "acceptedAnswer": {"@type": "Answer", "text": "4–6 weeks for small setups; 3–6 months for complex estates. Timeline depends on application complexity and data volume."}
                },
                {
                  "@type": "Question",
                  "name": "Can you work with our existing MSP or internal IT?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes—we can augment your current team or take full ownership as needed. We specialize in collaborative approaches."}
                },
                {
                  "@type": "Question",
                  "name": "Do you only support Azure?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We support Azure, AWS, and GCP platforms. We help you choose the best platform for your specific needs."}
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure security during migration?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Encryption, least-privilege IAM, penetration testing, and continuous monitoring throughout the migration process."}
                },
                {
                  "@type": "Question",
                  "name": "Do you manage cloud and on-prem?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes—hybrid environments are our norm. We manage M365, AWS/Azure/GCP alongside on-premises servers."}
                },
                {
                  "@type": "Question",
                  "name": "What about cost optimization?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We implement FinOps practices, right-sizing, reserved instances, and continuous cost monitoring to optimize your cloud spend."}
                },
                {
                  "@type": "Question",
                  "name": "Can you help with compliance requirements?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we ensure compliance with SOC2, ISO27001, GDPR, and other regulatory requirements specific to your industry."}
                },
                {
                  "@type": "Question",
                  "name": "What happens if something goes wrong during migration?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We have comprehensive rollback procedures and maintain parallel environments during migration to ensure business continuity."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
