"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function CybersecurityClient() {
  const accordionItems = [
    {
      title: "Security Assessment & Audit",
      body: "Comprehensive security evaluations including vulnerability assessments, penetration testing, and compliance audits to identify and address security gaps in your infrastructure."
    },
    {
      title: "Managed Detection & Response (MDR)",
      body: "24/7 threat monitoring and incident response services with advanced threat detection, real-time analysis, and rapid response to security incidents."
    },
    {
      title: "Security Operations Center (SOC)",
      body: "Dedicated security monitoring with expert analysts providing continuous surveillance, threat intelligence, and proactive security management."
    },
    {
      title: "Compliance Management",
      body: "Support for regulatory compliance including ISO 27001, SOC 2, GDPR, and Japanese data protection laws with documentation and audit preparation."
    },
    {
      title: "Incident Response & Forensics",
      body: "Rapid incident response services including containment, investigation, forensic analysis, and recovery planning to minimize business impact."
    },
    {
      title: "Security Training & Awareness",
      body: "Employee security training programs, phishing simulations, and security awareness campaigns to build a strong security culture."
    }
  ]

  const faqItems = [
    {
      q: "One-time audit or ongoing monitoring?",
      a: "Both. We offer one-time security assessments and ongoing managed security services including 24/7 monitoring and incident response."
    },
    {
      q: "What security tools do you use?",
      a: "We use best-in-class tools including Microsoft Defender, CrowdStrike, Splunk, and other enterprise security platforms based on your environment."
    },
    {
      q: "Do you provide ISO 27001 support?",
      a: "Yes. We provide full documentation, gap analysis, and audit preparation support for ISO 27001 and other compliance frameworks."
    },
    {
      q: "Can you provide security training in Japanese?",
      a: "Yes, we provide security awareness training and phishing simulations in both English and Japanese."
    },
    {
      q: "How quickly can you respond to incidents?",
      a: "Our SOC provides 24/7 monitoring with incident response times typically within 15 minutes for critical threats."
    },
    {
      q: "Do you work with existing security tools?",
      a: "Yes, we integrate with your existing security infrastructure and can enhance it with additional monitoring and response capabilities."
    },
    {
      q: "What compliance frameworks do you support?",
      a: "We support ISO 27001, SOC 2, GDPR, Japanese Personal Information Protection Act, and other regulatory requirements."
    },
    {
      q: "Can you help with cyber insurance requirements?",
      a: "Yes, we help organizations meet cyber insurance requirements through security assessments, documentation, and ongoing monitoring."
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
          title="Cybersecurity & Threat Protection"
          subtitle="24/7 security monitoring, threat detection, and incident response. Protect your business from evolving cyber threats with enterprise-grade security solutions."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="Why Cybersecurity Matters"
          body="<p>Cyber threats are evolving rapidly, targeting businesses of all sizes with sophisticated attacks. Our comprehensive cybersecurity solutions provide multi-layered protection, continuous monitoring, and rapid incident response to keep your business secure.</p><p>From security assessments to 24/7 SOC services, we help you build a robust security posture that protects your data, systems, and reputation while ensuring compliance with regulatory requirements.</p>"
          imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your Security Partner"
          body="<p>Building effective cybersecurity requires expertise, advanced tools, and continuous vigilance. Our security experts work as an extension of your team, providing the knowledge and resources needed to defend against modern threats.</p><p>We combine cutting-edge technology with proven methodologies to deliver comprehensive security solutions that evolve with the threat landscape, ensuring your business stays protected as it grows.</p>"
          imageSrc="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to strengthen your security?"
          sub="Join hundreds of companies that trust AKRIN for comprehensive cybersecurity. Get enterprise-grade protection with expert support."
          buttonLabel="Start security assessment"
          buttonHref="/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Cybersecurity & Threat Protection",
              "alternateName": "サイバーセキュリティ＆脅威対策",
              "serviceType": "Cybersecurity and Information Security Services",
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
              "url": "https://akrin.jp/services/cybersecurity",
              "description": "24/7 security monitoring, threat detection, and incident response. Protect your business from evolving cyber threats with enterprise-grade security solutions.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "One-time audit or ongoing monitoring?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Both. We offer one-time security assessments and ongoing managed security services including 24/7 monitoring and incident response."}
                },
                {
                  "@type": "Question",
                  "name": "What security tools do you use?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We use best-in-class tools including Microsoft Defender, CrowdStrike, Splunk, and other enterprise security platforms based on your environment."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide ISO 27001 support?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. We provide full documentation, gap analysis, and audit preparation support for ISO 27001 and other compliance frameworks."}
                },
                {
                  "@type": "Question",
                  "name": "Can you provide security training in Japanese?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide security awareness training and phishing simulations in both English and Japanese."}
                },
                {
                  "@type": "Question",
                  "name": "How quickly can you respond to incidents?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Our SOC provides 24/7 monitoring with incident response times typically within 15 minutes for critical threats."}
                },
                {
                  "@type": "Question",
                  "name": "Do you work with existing security tools?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we integrate with your existing security infrastructure and can enhance it with additional monitoring and response capabilities."}
                },
                {
                  "@type": "Question",
                  "name": "What compliance frameworks do you support?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We support ISO 27001, SOC 2, GDPR, Japanese Personal Information Protection Act, and other regulatory requirements."}
                },
                {
                  "@type": "Question",
                  "name": "Can you help with cyber insurance requirements?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we help organizations meet cyber insurance requirements through security assessments, documentation, and ongoing monitoring."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
