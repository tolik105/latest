"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function NetworkPenetrationTestingClient() {
  const accordionItems = [
    {
      title: "Network Vulnerability Assessment",
      body: "Comprehensive network scanning and vulnerability identification using industry-standard tools to discover security weaknesses in your network infrastructure."
    },
    {
      title: "Penetration Testing",
      body: "Ethical hacking and penetration testing to simulate real-world attacks, identify exploitable vulnerabilities, and test your security defenses."
    },
    {
      title: "Web Application Security Testing",
      body: "Detailed security assessment of web applications including OWASP Top 10 vulnerabilities, SQL injection, XSS, and authentication bypass testing."
    },
    {
      title: "Wireless Network Security",
      body: "WiFi security assessment, rogue access point detection, encryption analysis, and wireless penetration testing to secure your wireless infrastructure."
    },
    {
      title: "Social Engineering Testing",
      body: "Phishing simulations, social engineering assessments, and security awareness testing to evaluate human factors in your security posture."
    },
    {
      title: "Compliance & Reporting",
      body: "Detailed security reports with risk ratings, remediation recommendations, and compliance mapping for ISO 27001, PCI DSS, and other frameworks."
    }
  ]

  const faqItems = [
    {
      q: "How often should we conduct penetration testing?",
      a: "We recommend annual penetration testing at minimum, with additional testing after major infrastructure changes or security incidents."
    },
    {
      q: "Will testing disrupt our business operations?",
      a: "We conduct testing during agreed maintenance windows and use non-disruptive methods to minimize impact on business operations."
    },
    {
      q: "What deliverables do we receive?",
      a: "You receive comprehensive reports including executive summaries, technical findings, risk ratings, and detailed remediation recommendations."
    },
    {
      q: "Do you test both internal and external networks?",
      a: "Yes, we provide both external penetration testing (internet-facing) and internal network testing to assess insider threat scenarios."
    },
    {
      q: "How do you ensure testing is safe?",
      a: "We use controlled testing methodologies, maintain detailed logs, and have rollback procedures to ensure no damage to your systems."
    },
    {
      q: "Can you help with remediation after testing?",
      a: "Yes, we provide remediation guidance, security hardening recommendations, and can assist with implementing security improvements."
    },
    {
      q: "What compliance standards do you support?",
      a: "Our testing supports ISO 27001, PCI DSS, SOC 2, NIST, and other security frameworks with appropriate documentation and reporting."
    },
    {
      q: "Do you provide retesting services?",
      a: "Yes, we offer retesting services to verify that identified vulnerabilities have been properly remediated and security improvements are effective."
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
          title="Network & Penetration Testing"
          subtitle="Comprehensive security testing, vulnerability assessment, and penetration testing services. Identify and address security weaknesses before attackers do."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="Why Security Testing Matters"
          body="<p>Cyber attackers constantly probe networks for vulnerabilities to exploit. Regular security testing helps identify these weaknesses before malicious actors can discover and exploit them, protecting your organization from data breaches and security incidents.</p><p>Our comprehensive testing approach combines automated scanning with manual penetration testing to provide thorough security assessment and actionable recommendations for improving your security posture.</p>"
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your Security Testing Partner"
          body="<p>Effective security testing requires deep technical expertise, ethical hacking skills, and understanding of the latest attack vectors. Our certified security professionals use industry-standard methodologies and cutting-edge tools to thoroughly assess your security defenses.</p><p>From network infrastructure to web applications and wireless systems, we provide comprehensive testing that helps you understand your security risks and implement effective countermeasures to protect your business.</p>"
          imageSrc="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to test your security defenses?"
          sub="Discover vulnerabilities before attackers do. Get comprehensive security testing and expert recommendations to strengthen your security posture."
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
              "name": "Network & Penetration Testing",
              "alternateName": "ネットワーク＆ペネトレーションテスト",
              "serviceType": "Network Security Testing and Penetration Testing Services",
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
              "url": "https://akrin.jp/services/network-penetration-testing",
              "description": "Comprehensive security testing, vulnerability assessment, and penetration testing services. Identify and address security weaknesses before attackers do.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How often should we conduct penetration testing?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We recommend annual penetration testing at minimum, with additional testing after major infrastructure changes or security incidents."}
                },
                {
                  "@type": "Question",
                  "name": "Will testing disrupt our business operations?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We conduct testing during agreed maintenance windows and use non-disruptive methods to minimize impact on business operations."}
                },
                {
                  "@type": "Question",
                  "name": "What deliverables do we receive?",
                  "acceptedAnswer": {"@type": "Answer", "text": "You receive comprehensive reports including executive summaries, technical findings, risk ratings, and detailed remediation recommendations."}
                },
                {
                  "@type": "Question",
                  "name": "Do you test both internal and external networks?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide both external penetration testing (internet-facing) and internal network testing to assess insider threat scenarios."}
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure testing is safe?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We use controlled testing methodologies, maintain detailed logs, and have rollback procedures to ensure no damage to your systems."}
                },
                {
                  "@type": "Question",
                  "name": "Can you help with remediation after testing?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide remediation guidance, security hardening recommendations, and can assist with implementing security improvements."}
                },
                {
                  "@type": "Question",
                  "name": "What compliance standards do you support?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Our testing supports ISO 27001, PCI DSS, SOC 2, NIST, and other security frameworks with appropriate documentation and reporting."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide retesting services?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer retesting services to verify that identified vulnerabilities have been properly remediated and security improvements are effective."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
