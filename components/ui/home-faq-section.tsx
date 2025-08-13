"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { HeadlineText, BodyText } from "@/components/ui/premium-typography"
import { EmbeddedContactForm } from "@/components/ui/embedded-contact-form"
import { cn } from "@/lib/utils"

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

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="shadow-input mb-8 w-full cursor-pointer rounded-lg bg-white p-4 dark:bg-neutral-900"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <svg
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-90 scale-0",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-0 scale-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                {answer.split("").map((char, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: index * 0.005,
                    }}
                    key={index}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export function HomeFAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <>
      {/* FAQ Section */}
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
        <h2 className="text-center text-4xl font-medium tracking-tight text-neutral-600 md:text-5xl dark:text-neutral-50">
          Frequently asked questions
        </h2>
        <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
          We are here to help you with any questions you may have. If you
          don&apos;t find what you need, please contact us at{" "}
          <a
            href="mailto:support@akrin.jp"
            className="text-blue-500 underline"
          >
            support@akrin.jp
          </a>
        </p>
        <div className="mx-auto mt-10 w-full max-w-3xl">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={openFaq}
              setOpen={setOpenFaq}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gray-50 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <BodyText className="text-lg text-gray-600 dark:text-gray-400">
              Still have questions? We're here to help.
            </BodyText>
          </div>
          <EmbeddedContactForm />
        </div>
      </motion.div>
    </>
  )
}
