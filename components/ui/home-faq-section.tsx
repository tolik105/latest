"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { HeadlineText, BodyText } from "@/components/ui/premium-typography"
import { EmbeddedContactForm } from "@/components/ui/embedded-contact-form"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What IT services does AKRIN provide in Japan?",
    answer: "AKRIN delivers end-to-end technology solutions—managed IT services, 24/7 help-desk support, cybersecurity & compliance, cloud migration, onsite support, wireless surveys, and custom development—so you can run and scale your business without juggling multiple vendors."
  },
  {
    question: "Can AKRIN deploy onsite engineers quickly?",
    answer: "Yes. Our Tokyo-based field team can be on-site anywhere in Japan—often same-day in the Kanto region and within 24 hours nationwide—for critical incidents, project roll-outs, or scheduled maintenance."
  },
  {
    question: "Does AKRIN offer 24×7 monitoring and support?",
    answer: "Absolutely. We operate a round-the-clock service desk and network-operations centre that monitors your infrastructure, responds to alerts, and resolves tickets in real time—even on Japanese public holidays."
  },
  {
    question: "How does AKRIN keep my data secure and compliant?",
    answer: "Our security stack includes endpoint protection, zero-trust access, and SIEM monitoring aligned with ISO 27001 best practices. We help you meet Japan's APPI, GDPR, and industry-specific standards through continuous patching, vulnerability management, and audit-ready documentation."
  },
  {
    question: "Can AKRIN support bilingual (English & Japanese) environments?",
    answer: "Yes. All consultants and help-desk staff are bilingual. We provide tickets, reports, and meetings in either language—ideal for multinational teams operating in Japan."
  },
  {
    question: "What is the typical timeline for a cloud-migration project?",
    answer: "A standard mid-size migration (50–150 workloads) takes 4–8 weeks: assessment (1 wk), planning (1 wk), pilot (1 wk), phased cut-over (1–3 wks), optimisation (1 wk). Critical apps remain online thanks to AKRIN's zero-downtime methodology."
  },
  {
    question: "Do you perform wireless surveys before access-point upgrades?",
    answer: "Yes. Our Ekahau-powered wireless surveys map coverage, interference, and capacity so we can recommend the exact AP count and placement—eliminating dead zones and costly re-installs."
  }
]

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          {/* Violet accent line */}
          <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-violet-600 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <HeadlineText
            element="h2"
            className="mb-2 sm:mb-3 md:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          >
            Frequently Asked Questions
          </HeadlineText>
          <BodyText className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto px-2 sm:px-4">
            Get answers to common questions about our IT services, support, and solutions.
          </BodyText>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-600 transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-sm sm:text-base md:text-lg font-medium text-gray-900 dark:text-white pr-2 sm:pr-3 leading-tight"
                      style={{
                        fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                        fontWeight: '500',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4">
                        <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-purple-600 mb-2 sm:mb-3"></div>
                        <p
                          className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '400',
                            lineHeight: '1.6'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <div className="text-center mb-4 sm:mb-6">
            <BodyText className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
              Still have questions? We're here to help.
            </BodyText>
          </div>
          <EmbeddedContactForm />
        </motion.div>
      </div>
    </section>
  )
}
