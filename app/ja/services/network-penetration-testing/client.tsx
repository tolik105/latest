"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function NetworkPenetrationTestingJaClient() {
  const accordionItems = [
    {
      title: "ネットワーク脆弱性評価",
      body: "業界標準ツールを使用した包括的なネットワークスキャンと脆弱性特定により、ネットワークインフラストラクチャのセキュリティ弱点を発見します。"
    },
    {
      title: "ペネトレーションテスト",
      body: "エシカルハッキングとペネトレーションテストにより、実際の攻撃をシミュレートし、悪用可能な脆弱性を特定し、セキュリティ防御をテストします。"
    },
    {
      title: "Webアプリケーションセキュリティテスト",
      body: "OWASP Top 10脆弱性、SQLインジェクション、XSS、認証バイパステストを含むWebアプリケーションの詳細なセキュリティ評価。"
    },
    {
      title: "無線ネットワークセキュリティ",
      body: "WiFiセキュリティ評価、不正アクセスポイント検出、暗号化分析、無線インフラストラクチャを保護するための無線ペネトレーションテスト。"
    },
    {
      title: "ソーシャルエンジニアリングテスト",
      body: "フィッシングシミュレーション、ソーシャルエンジニアリング評価、セキュリティ体制における人的要因を評価するためのセキュリティ意識テスト。"
    },
    {
      title: "コンプライアンス・レポート",
      body: "リスク評価、修復推奨事項、ISO 27001、PCI DSS、その他のフレームワークのコンプライアンスマッピングを含む詳細なセキュリティレポート。"
    }
  ]

  const faqItems = [
    {
      q: "ペネトレーションテストはどのくらいの頻度で実施すべきですか？",
      a: "最低でも年1回のペネトレーションテストを推奨し、主要なインフラストラクチャ変更やセキュリティインシデント後には追加テストを実施します。"
    },
    {
      q: "テストは業務運営に支障をきたしますか？",
      a: "合意されたメンテナンス時間中にテストを実施し、業務運営への影響を最小限に抑える非破壊的な方法を使用します。"
    },
    {
      q: "どのような成果物を受け取りますか？",
      a: "エグゼクティブサマリー、技術的発見事項、リスク評価、詳細な修復推奨事項を含む包括的なレポートを受け取ります。"
    },
    {
      q: "内部と外部の両方のネットワークをテストしますか？",
      a: "はい。外部ペネトレーションテスト（インターネット向け）と内部ネットワークテストの両方を提供し、内部脅威シナリオを評価します。"
    },
    {
      q: "テストの安全性はどのように確保しますか？",
      a: "制御されたテスト方法論を使用し、詳細なログを維持し、システムに損害を与えないためのロールバック手順を用意しています。"
    },
    {
      q: "テスト後の修復を支援できますか？",
      a: "はい。修復ガイダンス、セキュリティ強化推奨事項を提供し、セキュリティ改善の実装を支援できます。"
    },
    {
      q: "どのコンプライアンス基準をサポートしていますか？",
      a: "ISO 27001、PCI DSS、SOC 2、NIST、その他のセキュリティフレームワークを適切な文書化とレポートでサポートします。"
    },
    {
      q: "再テストサービスは提供していますか？",
      a: "はい。特定された脆弱性が適切に修復され、セキュリティ改善が効果的であることを確認するための再テストサービスを提供します。"
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
          title="ネットワーク＆ペネトレーションテスト"
          subtitle="包括的なセキュリティテスト、脆弱性評価、ペネトレーションテストサービス。攻撃者より先にセキュリティ弱点を特定し、対処します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="なぜセキュリティテストが重要なのか"
          body="<p>サイバー攻撃者は常にネットワークの脆弱性を探して悪用しようとしています。定期的なセキュリティテストは、悪意のある行為者が発見・悪用する前にこれらの弱点を特定し、データ侵害やセキュリティインシデントから組織を保護するのに役立ちます。</p><p>私たちの包括的なテストアプローチは、自動スキャンと手動ペネトレーションテストを組み合わせて、徹底的なセキュリティ評価とセキュリティ体制改善のための実用的な推奨事項を提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="セキュリティテストパートナー"
          body="<p>効果的なセキュリティテストには、深い技術的専門知識、エシカルハッキングスキル、最新の攻撃ベクトルの理解が必要です。認定されたセキュリティ専門家が業界標準の方法論と最先端のツールを使用して、セキュリティ防御を徹底的に評価します。</p><p>ネットワークインフラストラクチャからWebアプリケーション、無線システムまで、セキュリティリスクを理解し、ビジネスを保護するための効果的な対策を実装するのに役立つ包括的なテストを提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="セキュリティ防御をテストする準備はできていますか？"
          sub="攻撃者より先に脆弱性を発見しましょう。包括的なセキュリティテストと専門的な推奨事項でセキュリティ体制を強化します。"
          buttonLabel="セキュリティ評価開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "ネットワーク＆ペネトレーションテスト（日本のセキュリティテスト）",
              "alternateName": "Network & Penetration Testing",
              "serviceType": "ネットワークセキュリティテスト・ペネトレーションテストサービス",
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
              "url": "https://akrin.jp/ja/services/network-penetration-testing",
              "description": "包括的なセキュリティテスト、脆弱性評価、ペネトレーションテストサービス。攻撃者より先にセキュリティ弱点を特定し、対処します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ペネトレーションテストはどのくらいの頻度で実施すべきですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "最低でも年1回のペネトレーションテストを推奨し、主要なインフラストラクチャ変更やセキュリティインシデント後には追加テストを実施します。"}
                },
                {
                  "@type": "Question",
                  "name": "テストは業務運営に支障をきたしますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "合意されたメンテナンス時間中にテストを実施し、業務運営への影響を最小限に抑える非破壊的な方法を使用します。"}
                },
                {
                  "@type": "Question",
                  "name": "どのような成果物を受け取りますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "エグゼクティブサマリー、技術的発見事項、リスク評価、詳細な修復推奨事項を含む包括的なレポートを受け取ります。"}
                },
                {
                  "@type": "Question",
                  "name": "内部と外部の両方のネットワークをテストしますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。外部ペネトレーションテスト（インターネット向け）と内部ネットワークテストの両方を提供し、内部脅威シナリオを評価します。"}
                },
                {
                  "@type": "Question",
                  "name": "テストの安全性はどのように確保しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "制御されたテスト方法論を使用し、詳細なログを維持し、システムに損害を与えないためのロールバック手順を用意しています。"}
                },
                {
                  "@type": "Question",
                  "name": "テスト後の修復を支援できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。修復ガイダンス、セキュリティ強化推奨事項を提供し、セキュリティ改善の実装を支援できます。"}
                },
                {
                  "@type": "Question",
                  "name": "どのコンプライアンス基準をサポートしていますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "ISO 27001、PCI DSS、SOC 2、NIST、その他のセキュリティフレームワークを適切な文書化とレポートでサポートします。"}
                },
                {
                  "@type": "Question",
                  "name": "再テストサービスは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。特定された脆弱性が適切に修復され、セキュリティ改善が効果的であることを確認するための再テストサービスを提供します。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
