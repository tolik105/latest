"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function WiFiDesignClient() {
  const accordionItems = [
    {
      title: "Predictive Design & Modeling",
      body: "Advanced RF modeling and predictive design using professional tools to create optimal wireless network layouts before deployment, ensuring comprehensive coverage and performance."
    },
    {
      title: "Access Point Placement & Configuration",
      body: "Strategic access point positioning, power settings, and channel planning to maximize coverage, minimize interference, and optimize network performance across all areas."
    },
    {
      title: "Network Architecture & Controller Selection",
      body: "Complete network architecture design including wireless controller selection, VLAN planning, security implementation, and integration with existing network infrastructure."
    },
    {
      title: "Capacity Planning & Scalability",
      body: "User density analysis, bandwidth requirements assessment, and scalable design planning to ensure the network can handle current and future capacity demands."
    },
    {
      title: "Security Design & Implementation",
      body: "Comprehensive wireless security design including encryption standards, authentication methods, guest network isolation, and security policy implementation."
    },
    {
      title: "Installation Planning & Documentation",
      body: "Detailed installation plans, cable routing, power requirements, mounting specifications, and comprehensive documentation for successful deployment and maintenance."
    }
  ]

  const faqItems = [
    {
      q: "What information do you need for WiFi design?",
      a: "We need building floor plans, user requirements, device counts, application needs, existing network infrastructure details, and any specific coverage or performance requirements."
    },
    {
      q: "How long does the design process take?",
      a: "Design timeline varies based on complexity, typically 1-2 weeks for standard offices and 3-6 weeks for large enterprise environments with multiple buildings."
    },
    {
      q: "Do you provide installation services?",
      a: "Yes, we provide complete installation services including project management, equipment installation, configuration, testing, and documentation."
    },
    {
      q: "Can you design for specific applications?",
      a: "Yes, we design networks optimized for specific applications including VoIP, video streaming, IoT devices, high-density environments, and mission-critical applications."
    },
    {
      q: "What vendors do you work with?",
      a: "We work with leading wireless vendors including Cisco, Aruba, Ruckus, Ubiquiti, and others, selecting the best solution for your specific requirements and budget."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer ongoing support including network monitoring, optimization, troubleshooting, and expansion planning to ensure continued optimal performance."
    },
    {
      q: "Can you integrate with existing networks?",
      a: "Yes, we design wireless networks that seamlessly integrate with existing wired infrastructure, security systems, and network management platforms."
    },
    {
      q: "What about future expansion?",
      a: "Our designs include scalability planning and future expansion considerations to accommodate business growth and evolving technology requirements."
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
          title="WiFi Design & Deployment"
          subtitle="Professional wireless network design, planning, and deployment services. Create high-performance WiFi networks with optimal coverage, capacity, and security for your business."
          ctaLabel="Get Started"
          ctaHref="/contact"
          imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
        />

        <SectionTextImage
          heading="Why Professional WiFi Design Matters"
          body="<p>Successful wireless networks require careful planning, professional design, and expert implementation. Poor WiFi design leads to coverage gaps, performance issues, and user frustration. Our professional design approach ensures optimal performance, scalability, and reliability.</p><p>Using advanced RF modeling tools and industry best practices, we create comprehensive wireless network designs that deliver consistent, high-performance connectivity while meeting your specific business requirements and budget constraints.</p>"
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="Your WiFi Design Partner"
          body="<p>Effective wireless network design combines technical expertise, industry experience, and deep understanding of RF principles and business requirements. Our certified wireless professionals use professional design tools and proven methodologies to create optimal wireless solutions.</p><p>From initial planning through deployment and ongoing optimization, we provide comprehensive design and implementation services that ensure your wireless network delivers the performance, coverage, and reliability your business demands.</p>"
          imageSrc="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="Ready to design your optimal WiFi network?"
          sub="Get professional WiFi design and deployment services. Create a high-performance wireless network that delivers reliable connectivity for your business."
          buttonLabel="Start WiFi design"
          buttonHref="/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WiFi Design & Deployment",
              "alternateName": "WiFi設計・展開",
              "serviceType": "Wireless Network Design and Deployment Services",
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
              "url": "https://akrin.jp/services/wifi-design",
              "description": "Professional wireless network design, planning, and deployment services. Create high-performance WiFi networks with optimal coverage, capacity, and security for your business.",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What information do you need for WiFi design?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We need building floor plans, user requirements, device counts, application needs, existing network infrastructure details, and any specific coverage or performance requirements."}
                },
                {
                  "@type": "Question",
                  "name": "How long does the design process take?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Design timeline varies based on complexity, typically 1-2 weeks for standard offices and 3-6 weeks for large enterprise environments with multiple buildings."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide installation services?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide complete installation services including project management, equipment installation, configuration, testing, and documentation."}
                },
                {
                  "@type": "Question",
                  "name": "Can you design for specific applications?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we design networks optimized for specific applications including VoIP, video streaming, IoT devices, high-density environments, and mission-critical applications."}
                },
                {
                  "@type": "Question",
                  "name": "What vendors do you work with?",
                  "acceptedAnswer": {"@type": "Answer", "text": "We work with leading wireless vendors including Cisco, Aruba, Ruckus, Ubiquiti, and others, selecting the best solution for your specific requirements and budget."}
                },
                {
                  "@type": "Question",
                  "name": "Do you provide ongoing support?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we offer ongoing support including network monitoring, optimization, troubleshooting, and expansion planning to ensure continued optimal performance."}
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate with existing networks?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes, we design wireless networks that seamlessly integrate with existing wired infrastructure, security systems, and network management platforms."}
                },
                {
                  "@type": "Question",
                  "name": "What about future expansion?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Our designs include scalability planning and future expansion considerations to accommodate business growth and evolving technology requirements."}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
