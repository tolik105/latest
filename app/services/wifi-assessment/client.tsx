"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function WiFiAssessmentClient() {
  const accordionItems = [
    {
      title: "Site Survey & RF Analysis",
      body: "Comprehensive wireless site surveys including RF spectrum analysis, signal strength mapping, and interference identification to optimize wireless network performance."
    },
    {
      title: "Coverage & Capacity Planning",
      body: "Detailed analysis of wireless coverage areas, capacity requirements, and user density planning to ensure optimal performance across all locations."
    },
    {
      title: "Interference Detection & Mitigation",
      body: "Identification of RF interference sources, channel conflicts, and environmental factors affecting wireless performance with detailed remediation recommendations."
    },
    {
      title: "Security Assessment",
      body: "Wireless security evaluation including encryption analysis, rogue access point detection, and security policy assessment to ensure network protection."
    },
    {
      title: "Performance Optimization",
      body: "Network performance analysis, throughput testing, and optimization recommendations to maximize wireless network efficiency and user experience."
    },
    {
      title: "Compliance & Standards Review",
      body: "Assessment of wireless network compliance with industry standards, regulatory requirements, and best practices for enterprise wireless deployments."
    }
  ]

  const faqItems = [
    {
      q: "How long does a WiFi assessment take?",
      a: "Assessment duration varies based on facility size and complexity, typically ranging from 1-3 days for standard offices to 1-2 weeks for large enterprise environments."
    },
    {
      q: "What equipment do you use for assessments?",
      a: "We use professional-grade spectrum analyzers, wireless survey tools, and enterprise testing equipment to provide accurate and comprehensive assessments."
    },
    {
      q: "Do you provide detailed reports?",
      a: "Yes, we provide comprehensive reports including heat maps, coverage analysis, performance metrics, and detailed recommendations for improvements."
    },
    {
      q: "Can you assess existing wireless networks?",
      a: "Yes, we assess both existing wireless networks for optimization and new environments for wireless network planning and design."
    },
    {
      q: "What types of facilities do you assess?",
      a: "We assess all types of facilities including offices, warehouses, manufacturing plants, retail spaces, healthcare facilities, and educational institutions."
    },
    {
      q: "Do you identify security vulnerabilities?",
      a: "Yes, our assessments include wireless security evaluation, rogue access point detection, and identification of potential security risks."
    },
    {
      q: "Can you help with regulatory compliance?",
      a: "Yes, we ensure wireless networks comply with local regulations, industry standards, and best practices for your specific environment and use case."
    },
    {
      q: "Do you provide implementation support?",
      a: "Yes, we can provide implementation support and project management services to help deploy the recommended wireless network improvements."
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
          title="WiFi Assessment & Optimization"
          subtitle="Professional wireless network assessment, site surveys, and optimization services. Ensure optimal WiFi performance, coverage, and security for your business environment."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="Why WiFi Assessment Matters"
          body="<p>Poor wireless performance can significantly impact productivity, user experience, and business operations. Professional WiFi assessment identifies coverage gaps, interference issues, and optimization opportunities to ensure your wireless network delivers reliable, high-performance connectivity.</p><p>Our comprehensive assessment approach combines advanced RF analysis, site surveys, and performance testing to provide detailed insights and actionable recommendations for optimizing your wireless infrastructure.</p>"
          imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your WiFi Optimization Partner"
          body="<p>Effective wireless network optimization requires specialized expertise, professional tools, and deep understanding of RF principles and enterprise networking. Our certified wireless professionals use industry-standard assessment methodologies and cutting-edge tools to deliver comprehensive analysis.</p><p>From initial site surveys to ongoing optimization, we provide the expertise needed to ensure your wireless network delivers consistent, reliable performance that supports your business objectives and user requirements.</p>"
          imageSrc="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to optimize your WiFi network?"
          sub="Get professional WiFi assessment and optimization services. Ensure reliable, high-performance wireless connectivity for your business environment."
          buttonLabel="Start WiFi assessment"
          buttonHref="/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WiFi Assessment & Optimization",
              "alternateName": "WiFi評価・最適化",
              "serviceType": "Wireless Network Assessment and Optimization Services",
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
              "url": "https://akrin.jp/services/wifi-assessment",
              "description": "Professional wireless network assessment, site surveys, and optimization services. Ensure optimal WiFi performance, coverage, and security for your business environment.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a WiFi assessment take?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Assessment duration varies based on facility size and complexity, typically ranging from 1-3 days for standard offices to 1-2 weeks for large enterprise environments."}
                },
                {
                  "@type": "Question",
                  "name": "What equipment do you use for assessments?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We use professional-grade spectrum analyzers, wireless survey tools, and enterprise testing equipment to provide accurate and comprehensive assessments."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide detailed reports?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide comprehensive reports including heat maps, coverage analysis, performance metrics, and detailed recommendations for improvements."}
                },
                {
                  "@type": "Question",
                  "name": "Can you assess existing wireless networks?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we assess both existing wireless networks for optimization and new environments for wireless network planning and design."}
                },
                {
                  "@type": "Question",
                  "name": "What types of facilities do you assess?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We assess all types of facilities including offices, warehouses, manufacturing plants, retail spaces, healthcare facilities, and educational institutions."}
                },
                {
                  "@type": "Question",
                  "name": "Do you identify security vulnerabilities?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, our assessments include wireless security evaluation, rogue access point detection, and identification of potential security risks."}
                },
                {
                  "@type": "Question",
                  "name": "Can you help with regulatory compliance?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we ensure wireless networks comply with local regulations, industry standards, and best practices for your specific environment and use case."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide implementation support?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we can provide implementation support and project management services to help deploy the recommended wireless network improvements."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
