"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function CybersecurityJaClient() {
  const accordionItems = [
    {
      title: "セキュリティ評価・監査",
      body: "脆弱性評価、ペネトレーションテスト、コンプライアンス監査を含む包括的なセキュリティ評価により、インフラストラクチャのセキュリティギャップを特定し、対処します。"
    },
    {
      title: "マネージド検知・対応（MDR）",
      body: "高度な脅威検知、リアルタイム分析、セキュリティインシデントへの迅速な対応を含む24/7脅威監視・インシデント対応サービス。"
    },
    {
      title: "セキュリティオペレーションセンター（SOC）",
      body: "継続的な監視、脅威インテリジェンス、プロアクティブなセキュリティ管理を提供する専門アナリストによる専用セキュリティ監視。"
    },
    {
      title: "コンプライアンス管理",
      body: "ISO 27001、SOC 2、GDPR、日本の個人情報保護法を含む規制コンプライアンスのサポート、文書化、監査準備。"
    },
    {
      title: "インシデント対応・フォレンジック",
      body: "封じ込め、調査、フォレンジック分析、復旧計画を含む迅速なインシデント対応サービスにより、ビジネスへの影響を最小限に抑えます。"
    },
    {
      title: "セキュリティトレーニング・意識向上",
      body: "強固なセキュリティ文化を構築するための従業員セキュリティトレーニングプログラム、フィッシングシミュレーション、セキュリティ意識向上キャンペーン。"
    }
  ]

  const faqItems = [
    {
      q: "単発監査と継続監視、どちらも可能？",
      a: "両方対応します。単発のセキュリティ評価から24/7監視・インシデント対応を含む継続的マネージドセキュリティサービスまで提供します。"
    },
    {
      q: "使用するセキュリティツールは？",
      a: "お客様の環境に基づいて、Microsoft Defender、CrowdStrike、Splunk、その他のエンタープライズセキュリティプラットフォームなど、最高クラスのツールを使用します。"
    },
    {
      q: "ISO 27001サポートは提供していますか？",
      a: "はい。ISO 27001およびその他のコンプライアンスフレームワークについて、完全な文書化、ギャップ分析、監査準備サポートを提供します。"
    },
    {
      q: "日本語でのセキュリティトレーニングは可能？",
      a: "はい。英語と日本語の両方でセキュリティ意識向上トレーニングとフィッシングシミュレーションを提供します。"
    },
    {
      q: "インシデント対応の速度は？",
      a: "SOCが24/7監視を提供し、重大な脅威に対しては通常15分以内にインシデント対応を開始します。"
    },
    {
      q: "既存のセキュリティツールとの連携は？",
      a: "はい。既存のセキュリティインフラストラクチャと統合し、追加の監視・対応機能で強化することができます。"
    },
    {
      q: "サポートするコンプライアンスフレームワークは？",
      a: "ISO 27001、SOC 2、GDPR、日本の個人情報保護法、その他の規制要件をサポートします。"
    },
    {
      q: "サイバー保険要件への対応は？",
      a: "はい。セキュリティ評価、文書化、継続的監視を通じて、組織がサイバー保険要件を満たすお手伝いをします。"
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
          title="サイバーセキュリティ＆脅威対策"
          subtitle="24/7セキュリティ監視、脅威検知、インシデント対応。進化するサイバー脅威からビジネスを守るエンタープライズグレードのセキュリティソリューション。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="なぜサイバーセキュリティが重要なのか"
          body="<p>サイバー脅威は急速に進化し、あらゆる規模の企業を標的とした巧妙な攻撃を仕掛けています。私たちの包括的なサイバーセキュリティソリューションは、多層防御、継続的監視、迅速なインシデント対応を提供し、お客様のビジネスを安全に保ちます。</p><p>セキュリティ評価から24/7 SOCサービスまで、規制要件への準拠を確保しながら、データ、システム、評判を保護する堅牢なセキュリティ体制の構築をお手伝いします。</p>"
          imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="セキュリティパートナー"
          body="<p>効果的なサイバーセキュリティの構築には、専門知識、高度なツール、継続的な警戒が必要です。私たちのセキュリティエキスパートは、お客様のチームの延長として機能し、現代の脅威に対抗するために必要な知識とリソースを提供します。</p><p>最先端技術と実証済みの方法論を組み合わせて、脅威の状況に合わせて進化する包括的なセキュリティソリューションを提供し、ビジネスの成長に合わせて保護を継続します。</p>"
          imageSrc="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="セキュリティを強化する準備はできていますか？"
          sub="包括的なサイバーセキュリティでAKRINを信頼する数百の企業に参加しましょう。専門サポート付きのエンタープライズグレード保護を手に入れましょう。"
          buttonLabel="セキュリティ評価を開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "サイバーセキュリティ＆脅威対策（日本のセキュリティサービス）",
              "alternateName": "Cybersecurity & Threat Protection",
              "serviceType": "サイバーセキュリティ・情報セキュリティサービス",
              "provider": {
                "@type": "Organization",
                "name": "AKRIN株式会社",
                "url": "https://akrin.jp"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Japan"
              },
              "availableLanguage": ["ja", "en"],
              "url": "https://akrin.jp/ja/services/cybersecurity",
              "description": "24/7セキュリティ監視、脅威検知、インシデント対応。進化するサイバー脅威からビジネスを守るエンタープライズグレードのセキュリティソリューション。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "単発監査と継続監視、どちらも可能？",
                  "acceptedAnswer": {"@type": "Answer", "text": "両方対応します。単発のセキュリティ評価から24/7監視・インシデント対応を含む継続的マネージドセキュリティサービスまで提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "使用するセキュリティツールは？",
                  "acceptedAnswer": {"@type": "Answer", "text": "お客様の環境に基づいて、Microsoft Defender、CrowdStrike、Splunk、その他のエンタープライズセキュリティプラットフォームなど、最高クラスのツールを使用します。"}
                },
                {
                  "@type": "Question",
                  "name": "ISO 27001サポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ISO 27001およびその他のコンプライアンスフレームワークについて、完全な文書化、ギャップ分析、監査準備サポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "日本語でのセキュリティトレーニングは可能？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。英語と日本語の両方でセキュリティ意識向上トレーニングとフィッシングシミュレーションを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "インシデント対応の速度は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "SOCが24/7監視を提供し、重大な脅威に対しては通常15分以内にインシデント対応を開始します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存のセキュリティツールとの連携は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。既存のセキュリティインフラストラクチャと統合し、追加の監視・対応機能で強化することができます。"}
                },
                {
                  "@type": "Question",
                  "name": "サポートするコンプライアンスフレームワークは？",
                  "acceptedAnswer": {"@type": "Answer", "text": "ISO 27001、SOC 2、GDPR、日本の個人情報保護法、その他の規制要件をサポートします。"}
                },
                {
                  "@type": "Question",
                  "name": "サイバー保険要件への対応は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。セキュリティ評価、文書化、継続的監視を通じて、組織がサイバー保険要件を満たすお手伝いをします。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
