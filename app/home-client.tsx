"use client"
import { HeroServicesRow } from "@/components/hero-services-row"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { VideoHeroMobile } from "@/components/video-hero-mobile"
import { CalendlyPopupButton } from "@/components/calendly-widget"
import { LogosWithBlurFlip } from "@/components/ui/logos-with-blur-flip"
import { IndustryStats } from "@/components/ui/circular-progress"
import { ClientOnly } from "@/hooks/use-mounted"
import { DisplayText, HeadlineText, BodyText, CaptionText, PremiumButton } from "@/components/ui/premium-typography"
import { HomeFAQSection } from "@/components/ui/home-faq-section"
import { HeroSlider } from "@/components/hero-slider"
import { PremiumCTA } from "@/components/ui/premium-cta"

export default function HomeClient() {

  return (
    <div className="w-full overflow-x-clip">
      {/* Video Hero Section - Mobile Optimized */}
      <VideoHeroMobile />

      {/* Content wrapper */}
      <div className="w-full bg-white dark:bg-gray-900">

        {/* Managed services row (no carousel) */}
        <HeroServicesRow />

        {/* Industry Excellence Section - Professional Layout */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white max-w-4xl mx-auto">
                Industry expertise that
                <span className="block font-semibold text-purple-600 mt-2">drives measurable results</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                With over 15 years of experience across diverse sectors, we understand the unique
                challenges and opportunities in your industry. Our solutions are tailored to meet
                regulatory requirements while driving innovation and growth.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <ClientOnly>
                  <IndustryStats
                    stats={[
                      { industry: "Financial Services", percentage: "40%" },
                      { industry: "Healthcare & Life Sciences", percentage: "25%" },
                      { industry: "Manufacturing & Retail", percentage: "20%" },
                      { industry: "Technology & Telecom", percentage: "15%" }
                    ]}
                    className="w-full"
                  />
                </ClientOnly>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Partners Section - Organized Layout */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Trusted by industry leaders
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                We partner with the world's leading technology companies to deliver best-in-class solutions.
              </p>
            </motion.div>
            <ClientOnly>
              <LogosWithBlurFlip />
            </ClientOnly>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-gray-50 dark:bg-gray-800">
          <ClientOnly>
            <HomeFAQSection />
          </ClientOnly>
        </section>

        {/* Premium CTA Section */}
        <PremiumCTA
          variant="teal"
          title="Ready to transform your IT infrastructure?"
          description="Get expert consultation and discover how our solutions can drive your business forward with enterprise-grade reliability and startup agility."
          buttonText="Schedule Consultation"
          buttonHref="/contact"
        />

      </div>
    </div>
  )
}