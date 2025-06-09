"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/testimonial-card"

export default function HomeClient() {
  const { t } = useTranslation('common')
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Simplified and stable */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 px-4 sm:px-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="px-8 bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/services">
                  {t('hero.exploreServices')}
                  <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="/book-reservation">{t('hero.requestConsultation')}</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
              <div className="text-center">
                <Icons.Security className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('hero.enterpriseSecurity')}</p>
              </div>
              <div className="text-center">
                <Icons.Support247 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('hero.support247')}</p>
              </div>
              <div className="text-center">
                <Icons.Certification className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('hero.certifiedProfessionals')}</p>
              </div>
              <div className="text-center">
                <Icons.Scalable className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-purple-600" />
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('hero.tailoredSolutions')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.companyOverview')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('sections.companyOverviewDesc')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <Icons.Global className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{t('overview.global')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('overview.globalDesc')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <Icons.Team className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{t('overview.expertise')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('overview.expertiseDesc')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <Icons.Security className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{t('overview.trusted')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('overview.trustedDesc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.coreServices')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('sections.coreServicesDesc')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.Security className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('services.itSecurity.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.itSecurity.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/it-security">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.Cloud className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('nav.cloud')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.cloud.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/cloud">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.Support className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('services.serviceDesk.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.serviceDesk.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/it-support">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.ManagedServices className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('services.managedIT.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.managedIT.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/managed-services">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.Consulting className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('nav.itConsulting')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.consulting.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/it-consulting">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icons.CyberSecurity className="h-10 w-10 mb-2 text-purple-600" />
                  <CardTitle>{t('nav.cyberSecurity')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('services.cyberSecurity.description')}
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services/cyber-security">
                      {t('common.learnMore')} <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.additionalServices')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('sections.additionalServicesDesc')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: t('nav.onsiteSupport'), href: '/services/onsite-support' },
              { name: t('nav.wirelessSurvey'), href: '/services/wireless-survey' },
              { name: t('nav.eWaste'), href: '/services/e-waste' },
              { name: t('nav.itEquipment'), href: '/services/it-equipment' },
              { name: t('nav.relocation'), href: '/services/relocation' },
              { name: t('nav.recruitment'), href: '/services/recruitment' },
              { name: t('nav.workforceSolutions'), href: '/services/workforce-solutions' },
              { name: t('nav.assetManagement'), href: '/services/asset-management' },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-md transition-all hover:scale-105 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold">{service.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Akrin Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.whyChooseUs')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('sections.whyChooseUsDesc')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Support247 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.support247.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.support247.description')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Certification className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.certified.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.certified.description')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Global className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.global.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.global.description')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Security className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.security.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.security.description')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Scalable className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.scalable.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.scalable.description')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icons.Success className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.proven.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.proven.description')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.faq')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('sections.faqDesc')}
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <AccordionItem key={`q${num}`} value={`q${num}`}>
                  <AccordionTrigger className="text-left">
                    {t(`faq.q${num}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {t(`faq.q${num}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('sections.testimonials')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('sections.testimonialsDesc')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[1, 2, 3].map((num) => (
              <motion.div key={`t${num}`} variants={fadeInUp}>
                <TestimonialCard
                  name={t(`testimonials.t${num}.name`)}
                  role={t(`testimonials.t${num}.role`)}
                  content={t(`testimonials.t${num}.content`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.ready')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('cta.transform')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{t('cta.contactToday')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20" asChild>
                <Link href="/book-reservation">{t('cta.scheduleConsultation')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}