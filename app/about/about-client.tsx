"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { DisplayText, HeadlineText, BodyText, CaptionText, PremiumButton } from "@/components/ui/premium-typography"

export default function AboutClient() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        {/* Premium 3D Wave Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tile-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1"/>
              </linearGradient>

              <linearGradient id="tile-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0.08"/>
              </linearGradient>

              <filter id="tile-shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feFlood floodColor="#000000" floodOpacity="0.2"/>
                <feComposite in2="offsetblur" operator="in"/>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g opacity="0.3">
              {[...Array(15)].map((_, row) => (
                <g key={`row-${row}`}>
                  {[...Array(20)].map((_, col) => {
                    const x = col * 42;
                    const waveOffset = ((col + row) % 4) * 2.5;
                    const y = row * 40 + waveOffset;
                    const gradient = (row + col) % 2 === 0 ? 'tile-gradient-1' : 'tile-gradient-2';

                    return (
                      <rect
                        key={`tile-${row}-${col}`}
                        x={x}
                        y={y}
                        width="38"
                        height="38"
                        rx="8"
                        fill={`url(#${gradient})`}
                        filter="url(#tile-shadow)"
                        opacity="0.6"
                      />
                    );
                  })}
                </g>
              ))}
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <DisplayText className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              About AKRIN
            </DisplayText>
            <HeadlineText className="text-xl md:text-2xl lg:text-3xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Enterprise Reliability, Startup Agility
            </HeadlineText>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <BodyText className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Founded in Tokyo in 2025 by veteran infrastructure engineers, AKRIN blends 15 years of large‑scale IT experience with a lean, automation‑first mindset. Our mission is simple: give high‑growth companies in Japan the uptime, security, and innovation the Fortune 500 enjoy—without the enterprise price tag.
            </BodyText>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <HeadlineText element="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What We Do
            </HeadlineText>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Managed IT & Cloud",
                description: "End‑to‑end design, migration, and 24/7 operations for Microsoft 365, Azure, AWS, and hybrid environments."
              },
              {
                title: "Network Engineering",
                description: "Planning, installation, and optimisation of wired / wireless networks—from multi‑site WANs to in‑office Wi‑Fi surveys."
              },
              {
                title: "Project Management & Delivery",
                description: "PMP‑driven frameworks that keep complex roll‑outs on time, on budget, and fully documented."
              },
              {
                title: "Custom AI Solutions",
                description: "We build domain‑specific chatbots, workflow automations, and data copilots tailored to your stack. Our own internal platform is in private beta, and lessons learned flow directly into client projects."
              },
              {
                title: "Cybersecurity & Compliance",
                description: "Hardening, real‑time monitoring, incident response, and hands‑on guidance toward frameworks such as ISO 27001."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <HeadlineText element="h3" className="text-xl font-semibold mb-4 text-purple-600">
                  {service.title}
                </HeadlineText>
                <BodyText className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </BodyText>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AKRIN Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <HeadlineText element="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why AKRIN
            </HeadlineText>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left font-semibold">
                    Pillar
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left font-semibold">
                    Benefit to You
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    pillar: "Engineer‑Led Service",
                    benefit: "Direct access to senior engineers; no account‑manager relay."
                  },
                  {
                    pillar: "Automation First",
                    benefit: "Scripted remediation cuts mean‑time‑to‑restore by up to 40%."
                  },
                  {
                    pillar: "Japan‑Global Bridge",
                    benefit: "Bilingual (EN/JP) team aligning HQ standards with local regulations."
                  }
                ].map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 font-semibold text-purple-600">
                      {row.pillar}
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">
                      {row.benefit}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <HeadlineText element="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Core Values
            </HeadlineText>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Clarity",
                description: "Plain‑language proposals and transparent costs."
              },
              {
                title: "Velocity",
                description: "Weeks, not quarters, from kickoff to production."
              },
              {
                title: "Accountability",
                description: "< 2 h response SLA during business hours."
              },
              {
                title: "Partnership",
                description: "Your KPIs shape our roadmap."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{value.title.charAt(0)}</span>
                </div>
                <HeadlineText element="h3" className="text-xl font-semibold mb-4 text-purple-600">
                  {value.title}
                </HeadlineText>
                <BodyText className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </BodyText>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to modernise CTA Section */}
      <section className="px-8 md:px-16 lg:px-24 py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeadlineText element="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to modernise?
            </HeadlineText>
            <BodyText className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Book a free 30‑minute strategy call and leave with an actionable roadmap—no obligation, no jargon.
            </BodyText>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">Book Your Strategy Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}