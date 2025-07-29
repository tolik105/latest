"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function ITSecurityClient() {
  const accordionItems = [
    {
      title: "Endpoint Security & Device Management",
      body: "Comprehensive endpoint protection including antivirus, anti-malware, device encryption, and mobile device management (MDM) to secure all connected devices."
    },
    {
      title: "Email Security & Phishing Protection",
      body: "Advanced email security solutions including spam filtering, phishing protection, email encryption, and security awareness training to protect against email-based threats."
    },
    {
      title: "Network Security & Firewall Management",
      body: "Network security implementation including next-generation firewalls, intrusion detection systems, VPN setup, and network segmentation for comprehensive protection."
    },
    {
      title: "Identity & Access Management (IAM)",
      body: "User identity management, multi-factor authentication (MFA), single sign-on (SSO), and privileged access management to control and monitor user access."
    },
    {
      title: "Data Protection & Backup Security",
      body: "Data encryption, secure backup solutions, data loss prevention (DLP), and compliance with data protection regulations including GDPR and Japanese privacy laws."
    },
    {
      title: "Security Monitoring & Incident Response",
      body: "24/7 security monitoring, threat detection, incident response planning, and security event management to quickly identify and respond to security threats."
    }
  ]

  const faqItems = [
    {
      q: "What types of security threats do you protect against?",
      a: "We protect against malware, ransomware, phishing attacks, data breaches, insider threats, and advanced persistent threats (APTs) using a multi-layered security approach."
    },
    {
      q: "Do you provide 24/7 security monitoring?",
      a: "Yes, we offer 24/7 security monitoring and incident response services to detect and respond to threats in real-time."
    },
    {
      q: "How do you handle compliance requirements?",
      a: "We help ensure compliance with various regulations including ISO 27001, GDPR, Japanese Personal Information Protection Law, and industry-specific standards."
    },
    {
      q: "Can you secure remote work environments?",
      a: "Yes, we provide comprehensive remote work security including VPN setup, endpoint protection, secure cloud access, and remote device management."
    },
    {
      q: "What is your incident response process?",
      a: "Our incident response includes immediate threat containment, forensic analysis, system recovery, and post-incident review to prevent future occurrences."
    },
    {
      q: "Do you provide security training for employees?",
      a: "Yes, we offer security awareness training, phishing simulations, and ongoing education to help employees recognize and avoid security threats."
    },
    {
      q: "How do you ensure business continuity during security incidents?",
      a: "We implement business continuity plans, secure backup systems, and rapid recovery procedures to minimize downtime during security incidents."
    },
    {
      q: "Can you integrate with existing security tools?",
      a: "Yes, we can integrate with and enhance existing security infrastructure to provide centralized management and monitoring."
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
          title="IT Security Services"
          subtitle="Comprehensive IT security solutions including endpoint protection, network security, and threat monitoring. Protect your business with enterprise-grade security against evolving cyber threats."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="Why IT Security Matters"
          body="<p>Cyber threats are becoming more sophisticated and frequent, targeting businesses of all sizes. Comprehensive IT security is essential to protect your data, systems, and reputation from malicious attacks, data breaches, and operational disruptions.</p><p>Our multi-layered security approach combines advanced technology, proactive monitoring, and expert management to build robust defenses against modern cyber threats while ensuring business continuity and regulatory compliance.</p>"
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your Security Partner"
          body="<p>Effective IT security requires continuous vigilance, specialized expertise, and the right technology stack. Our security professionals stay current with the latest threats and security technologies to provide comprehensive protection tailored to your business needs.</p><p>From endpoint protection to network security and incident response, we provide the expertise and tools needed to maintain a strong security posture that enables your business to operate efficiently and securely.</p>"
          imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to strengthen your IT security?"
          sub="Protect your business with comprehensive IT security solutions. Get expert security management and 24/7 monitoring to defend against cyber threats."
          buttonLabel="Start security consultation"
          buttonHref="/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Security Services",
              "alternateName": "ITセキュリティサービス",
              "serviceType": "IT Security and Cybersecurity Services",
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
              "url": "https://akrin.jp/services/it-security",
              "description": "Comprehensive IT security solutions including endpoint protection, network security, and threat monitoring. Protect your business with enterprise-grade security against evolving cyber threats.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of security threats do you protect against?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We protect against malware, ransomware, phishing attacks, data breaches, insider threats, and advanced persistent threats (APTs) using a multi-layered security approach."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide 24/7 security monitoring?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer 24/7 security monitoring and incident response services to detect and respond to threats in real-time."}
                },
                {
                  "@type": "Question",
                  "name": "How do you handle compliance requirements?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We help ensure compliance with various regulations including ISO 27001, GDPR, Japanese Personal Information Protection Law, and industry-specific standards."}
                },
                {
                  "@type": "Question",
                  "name": "Can you secure remote work environments?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide comprehensive remote work security including VPN setup, endpoint protection, secure cloud access, and remote device management."}
                },
                {
                  "@type": "Question",
                  "name": "What is your incident response process?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Our incident response includes immediate threat containment, forensic analysis, system recovery, and post-incident review to prevent future occurrences."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide security training for employees?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer security awareness training, phishing simulations, and ongoing education to help employees recognize and avoid security threats."}
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure business continuity during security incidents?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We implement business continuity plans, secure backup systems, and rapid recovery procedures to minimize downtime during security incidents."}
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate with existing security tools?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we can integrate with and enhance existing security infrastructure to provide centralized management and monitoring."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
