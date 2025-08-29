"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactClientJA() {
  return (
    <main className="bg-white">
      <section className="bg-[#F8F9FA] min-h-[400px] sm:min-h-[500px] lg:min-h-[500px]" aria-labelledby="contact-heading-ja">
        <div className="flex flex-col lg:flex-row h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[500px]">
          <div className="flex-none lg:w-2/5 px-4 sm:px-6 lg:px-16 xl:px-20 flex flex-col justify-center order-2 lg:order-1 py-8 sm:py-12 lg:py-0">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-none">
              <h1 id="contact-heading-ja" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-semibold leading-[1.05] tracking-tight text-gray-900 mb-4 sm:mb-5 md:mb-6 antialiased"
                  style={{ fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: '600', fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' }}>
                お問い合わせ
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 leading-relaxed antialiased">
                日本のITコンサルティング＆マネージドサービス
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed antialiased mt-2 sm:mt-3">
                AKRINに関するご質問にお答えします
              </p>
            </motion.div>
          </div>
          <div className="flex-none lg:w-3/5 order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-full lg:min-h:[500px]">
              <Image
                src="https://res.cloudinary.com/dtmdovevn/image/upload/v1752615791/roma_20454_Two_business_professionals_one_female_one_male_in_sm_c1a6a181-20ef-4379-b3b7-284c27c20233_mc3hkz.png"
                alt="AKRINのITソリューションについて議論するビジネスプロフェッショナル"
                fill
                priority
                sizes="100vw"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="contact-methods-ja">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="contact-methods-ja" className="sr-only">連絡方法</h2>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">お電話</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>
              <address className="space-y-6 not-italic">
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">
                    <a href="tel:+81-3-6821-1223" className="hover:text-[hsl(var(--primary))] transition-colors">03-6821-1223</a>
                  </p>
                  <p className="text-gray-600">日本国内から</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">
                    <a href="tel:+81-3-6821-1223" className="hover:text-[hsl(var(--primary))] transition-colors">+81-3-6821-1223</a>
                  </p>
                  <p className="text-gray-600">海外から</p>
                </div>
              </address>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">メール</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">（メールまたは以下のフォームをご利用ください）</p>
                  <address className="space-y-4 not-italic">
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        <a href="mailto:support@akrin.jp" className="hover:text-[hsl(var(--primary))] transition-colors">support@akrin.jp</a>
                      </p>
                      <p className="text-gray-600">AKRINのITサービスに関するお問い合わせ</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        <a href="mailto:inquiry@akrin.jp" className="hover:text-[hsl(var(--primary))] transition-colors">inquiry@akrin.jp</a>
                      </p>
                      <p className="text-gray-600">その他のお問い合わせ</p>
                    </div>
                  </address>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="mb-4">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">本社</h3>
                <div className="w-12 h-0.5 bg-[hsl(var(--primary))]"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">コーポレート本社</p>
                  <address className="text-gray-600 space-y-1 not-italic">
                    <p>東京都港区南青山2-4-15 4F</p>
                    <p>107-0062 日本</p>
                  </address>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
