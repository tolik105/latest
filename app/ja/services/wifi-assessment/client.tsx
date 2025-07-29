"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function WiFiAssessmentJaClient() {
  const accordionItems = [
    {
      title: "サイト調査・RF分析",
      body: "RFスペクトラム分析、信号強度マッピング、干渉特定を含む包括的な無線サイト調査により、無線ネットワークパフォーマンスを最適化します。"
    },
    {
      title: "カバレッジ・容量計画",
      body: "無線カバレッジエリア、容量要件、ユーザー密度計画の詳細分析により、すべての場所で最適なパフォーマンスを確保します。"
    },
    {
      title: "干渉検出・軽減",
      body: "RF干渉源、チャネル競合、無線パフォーマンスに影響する環境要因の特定と詳細な修復推奨事項を提供します。"
    },
    {
      title: "セキュリティ評価",
      body: "暗号化分析、不正アクセスポイント検出、セキュリティポリシー評価を含む無線セキュリティ評価により、ネットワーク保護を確保します。"
    },
    {
      title: "パフォーマンス最適化",
      body: "ネットワークパフォーマンス分析、スループットテスト、最適化推奨事項により、無線ネットワーク効率とユーザーエクスペリエンスを最大化します。"
    },
    {
      title: "コンプライアンス・標準レビュー",
      body: "業界標準、規制要件、エンタープライズ無線展開のベストプラクティスに対する無線ネットワークコンプライアンスの評価。"
    }
  ]

  const faqItems = [
    {
      q: "WiFi評価にはどのくらい時間がかかりますか？",
      a: "評価期間は施設の規模と複雑さによって異なり、標準的なオフィスでは1～3日、大規模なエンタープライズ環境では1～2週間が一般的です。"
    },
    {
      q: "評価にはどのような機器を使用しますか？",
      a: "正確で包括的な評価を提供するため、プロフェッショナルグレードのスペクトラムアナライザー、無線調査ツール、エンタープライズテスト機器を使用します。"
    },
    {
      q: "詳細なレポートは提供されますか？",
      a: "はい。ヒートマップ、カバレッジ分析、パフォーマンス指標、改善のための詳細な推奨事項を含む包括的なレポートを提供します。"
    },
    {
      q: "既存の無線ネットワークを評価できますか？",
      a: "はい。最適化のための既存無線ネットワークと、無線ネットワーク計画・設計のための新しい環境の両方を評価します。"
    },
    {
      q: "どのような種類の施設を評価しますか？",
      a: "オフィス、倉庫、製造工場、小売スペース、医療施設、教育機関を含むあらゆる種類の施設を評価します。"
    },
    {
      q: "セキュリティ脆弱性を特定しますか？",
      a: "はい。評価には無線セキュリティ評価、不正アクセスポイント検出、潜在的なセキュリティリスクの特定が含まれます。"
    },
    {
      q: "規制コンプライアンスを支援できますか？",
      a: "はい。お客様の特定の環境と使用ケースに対して、無線ネットワークが地域規制、業界標準、ベストプラクティスに準拠することを確保します。"
    },
    {
      q: "実装サポートは提供していますか？",
      a: "はい。推奨される無線ネットワーク改善の展開を支援するため、実装サポートとプロジェクト管理サービスを提供できます。"
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
          title="WiFi評価・最適化"
          subtitle="プロフェッショナルな無線ネットワーク評価、サイト調査、最適化サービス。ビジネス環境で最適なWiFiパフォーマンス、カバレッジ、セキュリティを確保します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="なぜWiFi評価が重要なのか"
          body="<p>無線パフォーマンスの低下は、生産性、ユーザーエクスペリエンス、ビジネス運営に大きな影響を与える可能性があります。プロフェッショナルなWiFi評価は、カバレッジギャップ、干渉問題、最適化機会を特定し、無線ネットワークが信頼性の高い高性能接続を提供することを確保します。</p><p>私たちの包括的な評価アプローチは、高度なRF分析、サイト調査、パフォーマンステストを組み合わせて、詳細な洞察と無線インフラストラクチャ最適化のための実用的な推奨事項を提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="WiFi最適化パートナー"
          body="<p>効果的な無線ネットワーク最適化には、専門的な専門知識、プロフェッショナルツール、RF原理とエンタープライズネットワーキングの深い理解が必要です。認定された無線専門家が業界標準の評価方法論と最先端のツールを使用して包括的な分析を提供します。</p><p>初期サイト調査から継続的な最適化まで、無線ネットワークがビジネス目標とユーザー要件をサポートする一貫した信頼性の高いパフォーマンスを提供することを確保するために必要な専門知識を提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="WiFiネットワークを最適化する準備はできていますか？"
          sub="プロフェッショナルなWiFi評価・最適化サービスを受けましょう。ビジネス環境で信頼性の高い高性能無線接続を確保します。"
          buttonLabel="WiFi評価開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WiFi評価・最適化（日本の無線ネットワーク評価）",
              "alternateName": "WiFi Assessment & Optimization",
              "serviceType": "無線ネットワーク評価・最適化サービス",
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
              "url": "https://akrin.jp/ja/services/wifi-assessment",
              "description": "プロフェッショナルな無線ネットワーク評価、サイト調査、最適化サービス。ビジネス環境で最適なWiFiパフォーマンス、カバレッジ、セキュリティを確保します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "WiFi評価にはどのくらい時間がかかりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "評価期間は施設の規模と複雑さによって異なり、標準的なオフィスでは1～3日、大規模なエンタープライズ環境では1～2週間が一般的です。"}
                },
                {
                  "@type": "Question",
                  "name": "評価にはどのような機器を使用しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "正確で包括的な評価を提供するため、プロフェッショナルグレードのスペクトラムアナライザー、無線調査ツール、エンタープライズテスト機器を使用します。"}
                },
                {
                  "@type": "Question",
                  "name": "詳細なレポートは提供されますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ヒートマップ、カバレッジ分析、パフォーマンス指標、改善のための詳細な推奨事項を含む包括的なレポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存の無線ネットワークを評価できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。最適化のための既存無線ネットワークと、無線ネットワーク計画・設計のための新しい環境の両方を評価します。"}
                },
                {
                  "@type": "Question",
                  "name": "どのような種類の施設を評価しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "オフィス、倉庫、製造工場、小売スペース、医療施設、教育機関を含むあらゆる種類の施設を評価します。"}
                },
                {
                  "@type": "Question",
                  "name": "セキュリティ脆弱性を特定しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。評価には無線セキュリティ評価、不正アクセスポイント検出、潜在的なセキュリティリスクの特定が含まれます。"}
                },
                {
                  "@type": "Question",
                  "name": "規制コンプライアンスを支援できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。お客様の特定の環境と使用ケースに対して、無線ネットワークが地域規制、業界標準、ベストプラクティスに準拠することを確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "実装サポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。推奨される無線ネットワーク改善の展開を支援するため、実装サポートとプロジェクト管理サービスを提供できます。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
