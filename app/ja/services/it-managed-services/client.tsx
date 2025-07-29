"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { TabbedCards } from "@/components/ui/tabbed-cards"
import { PricingCards } from "@/components/ui/pricing-cards"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"
import { 
  MonitoringIcon, 
  SupportTeamIcon, 
  InfrastructureIcon, 
  SecurityIcon, 
  PlanningIcon 
} from "@/components/ui/service-icons"

export default function ITManagedServicesJaClient() {
  const accordionItems = [
    {
      title: "24/7 ネットワーク監視",
      body: "ビジネスに影響を与える前に問題を検出・解決するプロアクティブな問題検出により、ITインフラストラクチャ全体を継続的に監視します。"
    },
    {
      title: "無制限ヘルプデスクサポート", 
      body: "保証された応答時間での24時間体制の技術サポート。重要な問題は30分以内、標準的な要求は4時間以内に解決します。"
    },
    {
      title: "サーバー・インフラ管理",
      body: "定期的なメンテナンス、アップデート、最適化により、サーバー、ネットワーク、クラウドインフラストラクチャの完全な管理を行います。"
    },
    {
      title: "サイバーセキュリティ・コンプライアンス",
      body: "データを安全に保ち、規制要件を満たすための高度な脅威保護、セキュリティ監視、コンプライアンス管理。"
    },
    {
      title: "戦略的IT計画",
      body: "予算計画とテクノロジー推奨事項を含む、ビジネス目標に合わせた長期的なテクノロジーロードマップの開発。"
    },
    {
      title: "オンサイトサポート",
      body: "リモートサポートでは不十分な場合のオンサイト訪問が可能な地元技術者。日本の主要都市では4時間以内の対応時間。"
    }
  ]

  const tabbedCardsData = [
    {
      icon: MonitoringIcon,
      label: "プロアクティブ監視＆メンテナンス",
      content: {
        title: "プロアクティブ監視＆メンテナンス",
        subline: "24/7システム、ネットワーク、エンドポイント監視（SIEM/XDR対応）",
        bullets: [
          "自動アラート、パッチ適用、修復",
          "パフォーマンス調整＆容量計画"
        ]
      }
    },
    {
      icon: SupportTeamIcon,
      label: "ヘルプデスク＆ユーザーサポート",
      content: {
        title: "ヘルプデスク＆ユーザーサポート",
        subline: "マルチチャネルサポート（電話/メール/チャット/ポータル）",
        bullets: [
          "即座の修正のためのリモートサポート；ハードウェア＆複雑な問題のためのオンサイト",
          "役員向けVIPコンシェルジュオプション",
          "セルフサービスナレッジベース"
        ]
      }
    },
    {
      icon: InfrastructureIcon,
      label: "インフラストラクチャ管理",
      content: {
        title: "インフラストラクチャ管理",
        subline: "サーバー管理（Windows/Linux/仮想化）",
        bullets: [
          "ネットワーク管理（WAN/LAN/Wi-Fi）＆最適化",
          "バックアップ監視、DR訓練、フェイルオーバーテスト",
          "クラウド運用（Microsoft 365、Azure、AWS、GCP）",
          "データベース管理＆最適化"
        ]
      }
    },
    {
      icon: SecurityIcon,
      label: "セキュリティ＆コンプライアンス",
      content: {
        title: "セキュリティ＆コンプライアンス",
        subline: "エンドポイント検出・対応（EDR）とメールセキュリティ",
        bullets: [
          "脆弱性スキャン＆修復サイクル",
          "セキュリティ意識向上トレーニング",
          "コンプライアンス報告（ISO 27001、J-SOX等）"
        ]
      }
    },
    {
      icon: PlanningIcon,
      label: "戦略的IT計画＆ガバナンス",
      content: {
        title: "戦略的IT計画＆ガバナンス",
        subline: "年次テクノロジーロードマップ＆予算計画",
        bullets: [
          "実用的な洞察を含む四半期ビジネスレビュー（QBR）",
          "ベンダー/ライセンス管理とコスト最適化",
          "デジタルトランスフォーメーションコンサルティング＆自動化ロードマップ"
        ]
      }
    }
  ]

  const pricingPlans = [
    {
      name: "ユーザー単位",
      price: "¥8,000–15,000",
      period: "ユーザー / 月",
      description: "標準的なナレッジワーカー",
      bullets: [
        "リモートサポート込み",
        "24/7監視",
        "月次レポート",
        "パッチ管理"
      ]
    },
    {
      name: "デバイス単位",
      price: "¥3,000–8,000",
      period: "デバイス / 月",
      description: "共有/産業用デバイス",
      bullets: [
        "デバイス監視",
        "メンテナンススケジューリング",
        "パフォーマンス最適化",
        "セキュリティアップデート"
      ],
      highlighted: true
    },
    {
      name: "定額 / カスタム",
      price: "カスタム見積",
      period: "エンタープライズ",
      description: "25名以上またはマルチサイト環境向け",
      bullets: [
        "専任アカウントマネージャー",
        "カスタムSLA",
        "戦略的計画",
        "ボリューム割引"
      ]
    }
  ]

  const faqItems = [
    {
      q: "どの規模の企業に対応していますか？",
      a: "通常は従業員20～500名規模が中心ですが、規模に応じて柔軟に対応します。"
    },
    {
      q: "社内IT部門との協業（共同管理）は可能ですか？",
      a: "可能です。スキルギャップの補完、24/7体制の提供、特定領域のみの担当など柔軟に選べます。"
    },
    {
      q: "月額料金には何が含まれますか？",
      a: "リモートサポート、監視、メンテナンス、セキュリティツール、所定のオンサイト対応時間が含まれます。追加オンサイトは優待料金で対応します。"
    },
    {
      q: "対応スピードはどのくらいですか？",
      a: "重大：30分以内／高：2時間以内／標準：4～8時間以内。年中無休でSLAを順守します。"
    },
    {
      q: "クラウドとオンプレミス両方の管理に対応できますか？",
      a: "はい。M365やAWS/Azure/GCPとオンプレサーバーを組み合わせたハイブリッド環境を前提にしています。"
    },
    {
      q: "現行ベンダーからの切替はどのように進めますか？",
      a: "30日間のオーバーラップ期間を設け、ダウンタイムゼロで引き継ぎます。"
    },
    {
      q: "本当にITコストを削減できますか？",
      a: "多くの企業で社内IT相当と比べ30～50％の削減効果を確認しています（ROIレポートを提示します）。"
    },
    {
      q: "データ保存場所・コンプライアンスについて教えてください",
      a: "日本のデータ法に従い、必要に応じてデータは日本国内に保存されます。ISO 27001準拠のプロセスを採用しています。"
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
          title="マネージドITサービス＆24/7サポート"
          subtitle="プロアクティブ監視、無制限ヘルプデスク、オンサイトサポート。ITコストを30～50％削減し、99.9％の稼働率を実現するAKRIN—日本の信頼できるMSP。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753274092/managed_services_j9lrhb.png"
        />

        <SectionTextImage
          heading="マネージドITサービスとは？"
          body="<p>マネージドITサービスは、リアクティブな「故障修理」サポートを、プロアクティブで定額制のパートナーシップに置き換えます。私たちは監視、保守、継続的な環境改善を行い、テクノロジーをビジネス目標に合わせながら、予期しないコストを排除します。</p><p>問題が発生するのを待つのではなく、私たちのMSPアプローチは、問題がビジネスに影響を与える前に予防します。これにより、より良い稼働時間、予測可能なコスト、そしてチームがITの火消しではなく成長に集中できることを意味します。</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316226/engineer-rack_stsysi.png"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <TabbedCards tabs={tabbedCardsData} />

        <PricingCards plans={pricingPlans} />

        <SectionTextImage
          heading="長期的なITマネージドサービス"
          body="<p>ビジネスと共に成長する持続的なテクノロジーパートナーシップの構築。私たちのマネージドITサービスは、お客様のニーズに合わせて進化し、長年にわたって一貫したサポートと戦略的ガイダンスを提供するよう設計されています。</p><p>スタートアップから確立された企業まで、私たちは日本の数百の企業がIT運用を変革するお手伝いをしてきました。私たちの長期的なアプローチは、より良い関係、ビジネスのより深い理解、そしてより効果的なテクノロジーソリューションを意味します。</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316524/roadmap_avxbss.png"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="ITを変革する準備はできていますか？"
          sub="200社以上の企業がAKRINをMSPとして信頼している理由をご覧ください。SMB向けの価格でエンタープライズレベルのITを手に入れましょう。"
          buttonLabel="コンサルテーションを予約"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "マネージドITサービス（日本の24/7 MSP）",
              "alternateName": "Managed IT Services (24/7 MSP in Japan)",
              "serviceType": "マネージドITサービス",
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
              "url": "https://akrin.jp/ja/services/it-managed-services",
              "description": "プロアクティブ監視、無制限ヘルプデスク、オンサイトサポート。ITコストを30～50％削減し、99.9％の稼働率を実現するAKRIN—日本の信頼できるMSP。",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "JPY",
                "lowPrice": "3000",
                "highPrice": "15000",
                "priceSpecification": [
                  {
                    "@type": "UnitPriceSpecification",
                    "name": "ユーザー単位プラン（から）",
                    "price": "8000",
                    "priceCurrency": "JPY",
                    "unitText": "ユーザー/月"
                  },
                  {
                    "@type": "UnitPriceSpecification",
                    "name": "デバイス単位プラン（から）",
                    "price": "3000",
                    "priceCurrency": "JPY",
                    "unitText": "デバイス/月"
                  }
                ],
                "availability": "https://schema.org/InStock"
              },
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "どの規模の企業に対応していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "通常は従業員20～500名規模が中心ですが、規模に応じて柔軟に対応します。"}
                },
                {
                  "@type": "Question",
                  "name": "社内IT部門との協業（共同管理）は可能ですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "可能です。スキルギャップの補完、24/7体制の提供、特定領域のみの担当など柔軟に選べます。"}
                },
                {
                  "@type": "Question",
                  "name": "月額料金には何が含まれますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "リモートサポート、監視、メンテナンス、セキュリティツール、所定のオンサイト対応時間が含まれます。追加オンサイトは優待料金で対応します。"}
                },
                {
                  "@type": "Question",
                  "name": "対応スピードはどのくらいですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "重大：30分以内／高：2時間以内／標準：4～8時間以内。年中無休でSLAを順守します。"}
                },
                {
                  "@type": "Question",
                  "name": "クラウドとオンプレミス両方の管理に対応できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。M365やAWS/Azure/GCPとオンプレサーバーを組み合わせたハイブリッド環境を前提にしています。"}
                },
                {
                  "@type": "Question",
                  "name": "現行ベンダーからの切替はどのように進めますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "30日間のオーバーラップ期間を設け、ダウンタイムゼロで引き継ぎます。"}
                },
                {
                  "@type": "Question",
                  "name": "本当にITコストを削減できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "多くの企業で社内IT相当と比べ30～50％の削減効果を確認しています（ROIレポートを提示します）。"}
                },
                {
                  "@type": "Question",
                  "name": "データ保存場所・コンプライアンスについて教えてください",
                  "acceptedAnswer": {"@type": "Answer", "text": "日本のデータ法に従い、必要に応じてデータは日本国内に保存されます。ISO 27001準拠のプロセスを採用しています。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
