"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function WiFiDesignJaClient() {
  const accordionItems = [
    {
      title: "予測設計・モデリング",
      body: "プロフェッショナルツールを使用した高度なRFモデリングと予測設計により、展開前に最適な無線ネットワークレイアウトを作成し、包括的なカバレッジとパフォーマンスを確保します。"
    },
    {
      title: "アクセスポイント配置・設定",
      body: "戦略的なアクセスポイント配置、電力設定、チャネル計画により、カバレッジを最大化し、干渉を最小化し、すべてのエリアでネットワークパフォーマンスを最適化します。"
    },
    {
      title: "ネットワークアーキテクチャ・コントローラー選択",
      body: "無線コントローラー選択、VLAN計画、セキュリティ実装、既存ネットワークインフラストラクチャとの統合を含む完全なネットワークアーキテクチャ設計。"
    },
    {
      title: "容量計画・スケーラビリティ",
      body: "ユーザー密度分析、帯域幅要件評価、スケーラブル設計計画により、ネットワークが現在および将来の容量要求に対応できることを確保します。"
    },
    {
      title: "セキュリティ設計・実装",
      body: "暗号化標準、認証方法、ゲストネットワーク分離、セキュリティポリシー実装を含む包括的な無線セキュリティ設計。"
    },
    {
      title: "設置計画・文書化",
      body: "詳細な設置計画、ケーブル配線、電力要件、取り付け仕様、成功する展開とメンテナンスのための包括的な文書化。"
    }
  ]

  const faqItems = [
    {
      q: "WiFi設計にはどのような情報が必要ですか？",
      a: "建物の平面図、ユーザー要件、デバイス数、アプリケーションニーズ、既存ネットワークインフラストラクチャの詳細、特定のカバレッジやパフォーマンス要件が必要です。"
    },
    {
      q: "設計プロセスにはどのくらい時間がかかりますか？",
      a: "設計タイムラインは複雑さによって異なり、標準的なオフィスでは1～2週間、複数の建物を持つ大規模なエンタープライズ環境では3～6週間が一般的です。"
    },
    {
      q: "設置サービスは提供していますか？",
      a: "はい。プロジェクト管理、機器設置、設定、テスト、文書化を含む完全な設置サービスを提供します。"
    },
    {
      q: "特定のアプリケーション向けに設計できますか？",
      a: "はい。VoIP、ビデオストリーミング、IoTデバイス、高密度環境、ミッションクリティカルアプリケーションを含む特定のアプリケーション向けに最適化されたネットワークを設計します。"
    },
    {
      q: "どのベンダーと連携していますか？",
      a: "Cisco、Aruba、Ruckus、Ubiquitiなどの主要無線ベンダーと連携し、お客様の特定の要件と予算に最適なソリューションを選択します。"
    },
    {
      q: "継続的なサポートは提供していますか？",
      a: "はい。継続的な最適パフォーマンスを確保するため、ネットワーク監視、最適化、トラブルシューティング、拡張計画を含む継続的なサポートを提供します。"
    },
    {
      q: "既存ネットワークと統合できますか？",
      a: "はい。既存の有線インフラストラクチャ、セキュリティシステム、ネットワーク管理プラットフォームとシームレスに統合する無線ネットワークを設計します。"
    },
    {
      q: "将来の拡張についてはどうですか？",
      a: "私たちの設計には、ビジネス成長と進化するテクノロジー要件に対応するためのスケーラビリティ計画と将来の拡張考慮事項が含まれています。"
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
          title="WiFi設計・展開"
          subtitle="プロフェッショナルな無線ネットワーク設計、計画、展開サービス。ビジネスに最適なカバレッジ、容量、セキュリティを備えた高性能WiFiネットワークを構築します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
        />

        <SectionTextImage
          heading="なぜプロフェッショナルなWiFi設計が重要なのか"
          body="<p>成功する無線ネットワークには、慎重な計画、プロフェッショナルな設計、専門的な実装が必要です。不適切なWiFi設計は、カバレッジギャップ、パフォーマンス問題、ユーザーの不満を引き起こします。私たちのプロフェッショナルな設計アプローチは、最適なパフォーマンス、スケーラビリティ、信頼性を確保します。</p><p>高度なRFモデリングツールと業界のベストプラクティスを使用して、お客様の特定のビジネス要件と予算制約を満たしながら、一貫した高性能接続を提供する包括的な無線ネットワーク設計を作成します。</p>"
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="WiFi設計パートナー"
          body="<p>効果的な無線ネットワーク設計は、技術的専門知識、業界経験、RF原理とビジネス要件の深い理解を組み合わせます。認定された無線専門家がプロフェッショナル設計ツールと実証済みの方法論を使用して最適な無線ソリューションを作成します。</p><p>初期計画から展開、継続的な最適化まで、無線ネットワークがビジネスが要求するパフォーマンス、カバレッジ、信頼性を提供することを確保する包括的な設計・実装サービスを提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="最適なWiFiネットワークを設計する準備はできていますか？"
          sub="プロフェッショナルなWiFi設計・展開サービスを受けましょう。ビジネスに信頼性の高い接続を提供する高性能無線ネットワークを構築します。"
          buttonLabel="WiFi設計開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "WiFi設計・展開（日本の無線ネットワーク設計）",
              "alternateName": "WiFi Design & Deployment",
              "serviceType": "無線ネットワーク設計・展開サービス",
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
              "url": "https://akrin.jp/ja/services/wifi-design",
              "description": "プロフェッショナルな無線ネットワーク設計、計画、展開サービス。ビジネスに最適なカバレッジ、容量、セキュリティを備えた高性能WiFiネットワークを構築します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "WiFi設計にはどのような情報が必要ですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "建物の平面図、ユーザー要件、デバイス数、アプリケーションニーズ、既存ネットワークインフラストラクチャの詳細、特定のカバレッジやパフォーマンス要件が必要です。"}
                },
                {
                  "@type": "Question",
                  "name": "設計プロセスにはどのくらい時間がかかりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "設計タイムラインは複雑さによって異なり、標準的なオフィスでは1～2週間、複数の建物を持つ大規模なエンタープライズ環境では3～6週間が一般的です。"}
                },
                {
                  "@type": "Question",
                  "name": "設置サービスは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。プロジェクト管理、機器設置、設定、テスト、文書化を含む完全な設置サービスを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "特定のアプリケーション向けに設計できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。VoIP、ビデオストリーミング、IoTデバイス、高密度環境、ミッションクリティカルアプリケーションを含む特定のアプリケーション向けに最適化されたネットワークを設計します。"}
                },
                {
                  "@type": "Question",
                  "name": "どのベンダーと連携していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "Cisco、Aruba、Ruckus、Ubiquitiなどの主要無線ベンダーと連携し、お客様の特定の要件と予算に最適なソリューションを選択します。"}
                },
                {
                  "@type": "Question",
                  "name": "継続的なサポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。継続的な最適パフォーマンスを確保するため、ネットワーク監視、最適化、トラブルシューティング、拡張計画を含む継続的なサポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存ネットワークと統合できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。既存の有線インフラストラクチャ、セキュリティシステム、ネットワーク管理プラットフォームとシームレスに統合する無線ネットワークを設計します。"}
                },
                {
                  "@type": "Question",
                  "name": "将来の拡張についてはどうですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "私たちの設計には、ビジネス成長と進化するテクノロジー要件に対応するためのスケーラビリティ計画と将来の拡張考慮事項が含まれています。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
