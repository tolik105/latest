'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'IT Managed Services',
    image: '/images/banners/it-managed-services/banner.webp',
    link: '/services/it-managed-services',
    blurb:
      'Proactive monitoring, 24/7 help desk, and lifecycle management that keep your business running.'
  },
  {
    id: 2,
    title: 'Cybersecurity',
    image: '/images/banners/cybersecurity/banner1.webp',
    link: '/services/cybersecurity',
    blurb:
      'Defense-in-depth, compliance, and continuous threat detection to protect critical assets.'
  },
  {
    id: 3,
    title: 'IT Consulting & Project Management',
    image: '/images/banners/it-consulting-project-management/hero-banner.webp',
    link: '/services/it-consulting-project-management',
    blurb:
      'Strategy, architecture, and delivery leadership to align technology with business outcomes.'
  }
]

export function HeroServicesRow() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((s, index) => {
          const isReversed = index % 2 === 1
          return (
            <div
              key={s.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 border-t border-gray-200 first:border-t-0"
            >
              {/* Image */}
              <div className={`relative h-64 sm:h-80 lg:h-96 ${isReversed ? 'md:order-2' : ''}`}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={s.id === 1}
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-gray-200" />
              </div>

              {/* Text */}
              <div className={`${isReversed ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                  {s.title}
                </h3>
                {s.blurb && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {s.blurb}
                  </p>
                )}
                <div className="mt-6">
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
                    aria-label={`${s.title} – Learn More`}
                  >
                    <span className="text-sm sm:text-base font-medium">Learn More</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
