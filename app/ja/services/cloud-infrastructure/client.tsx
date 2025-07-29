"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function CloudInfrastructureJaClient() {
  const accordionItems = [
    {
      title: "クラウド準備状況・TCO評価",
      body: "現在のインフラストラクチャとアプリケーションの包括的な分析を行い、クラウド準備状況を判定し、情報に基づいた移行決定のための詳細なROI/TCOモデルを作成します。"
    },
    {
      title: "セキュアな移行・モダナイゼーション",
      body: "CI/CDパイプラインとInfrastructure as Code（Terraform/Bicep）を使用して、リフト＆シフトまたはリファクタリング戦略を実行し、効率的なクラウド変革を実現します。"
    },
    {
      title: "コスト・パフォーマンス最適化",
      body: "オートスケーリング、リザーブドインスタンス、FinOpsレポートを実装して、クラウド効率を最大化し、大幅なコスト削減を実現します。"
    },
    {
      title: "マネージドクラウド運用（24/7）",
      body: "パッチ適用、監視、バックアップ、インシデント対応を含む、24時間体制での完全なクラウド運用管理を提供します。"
    },
    {
      title: "セキュリティ・コンプライアンス管理",
      body: "暗号化、IAM、継続的監視、規制業界向けコンプライアンス管理を含む、エンタープライズグレードのセキュリティ実装を提供します。"
    },
    {
      title: "マルチクラウド・ハイブリッドソリューション",
      body: "Azure、AWS、GCPにわたるマルチクラウドアーキテクチャを設計・管理し、オンプレミスシステムとのシームレスなハイブリッド接続を実現します。"
    }
  ]



  const faqItems = [
    {
      q: "一般的な移行期間は？",
      a: "小規模で4～6週間、大規模で3～6ヶ月が目安です。アプリケーションの複雑さとデータ量によってタイムラインが決まります。"
    },
    {
      q: "既存MSP／社内ITとの併用は可能？",
      a: "可能です。補完または全面委託どちらも対応します。協調的なアプローチを専門としています。"
    },
    {
      q: "Azureだけですか？",
      a: "Azure／AWS／GCPすべてに対応します。お客様の特定のニーズに最適なプラットフォームの選択をお手伝いします。"
    },
    {
      q: "移行時のセキュリティは？",
      a: "暗号化、最小権限IAM、ペンテスト、移行プロセス全体を通じた継続的監視で安全性を確保します。"
    },
    {
      q: "クラウドとオンプレミス両方の管理に対応できますか？",
      a: "はい。ハイブリッド環境が標準です。M365、AWS/Azure/GCPとオンプレミスサーバーを併せて管理します。"
    },
    {
      q: "コスト最適化について教えてください",
      a: "FinOpsプラクティス、適正サイジング、リザーブドインスタンス、継続的コスト監視を実装してクラウド支出を最適化します。"
    },
    {
      q: "コンプライアンス要件への対応は可能ですか？",
      a: "はい。お客様の業界固有のSOC2、ISO27001、GDPR、その他の規制要件への準拠を確保します。"
    },
    {
      q: "移行中に問題が発生した場合はどうなりますか？",
      a: "包括的なロールバック手順を用意し、ビジネス継続性を確保するため移行中は並行環境を維持します。"
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
          title="クラウドインフラソリューション"
          subtitle="Azure、AWS、GCPでのゼロダウンタイム移行、最適化、24/7運用。エンタープライズグレードのセキュリティとコスト効率でインフラストラクチャを変革します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316226/engineer-rack_stsysi.png"
        />

        <SectionTextImage
          heading="なぜクラウドに移行するのか？"
          body="<p>クラウドインフラストラクチャは、比類のないスケーラビリティ、コスト効率、イノベーション機能を提供します。私たちの包括的なクラウドソリューションは、セキュリティ、コンプライアンス、運用の卓越性を維持しながら、ITインフラストラクチャのモダナイゼーションを支援します。</p><p>初期評価から継続的管理まで、ビジネス運用を変革し、大規模なデジタルイノベーションを可能にするエンドツーエンドのクラウドサービスを提供します。</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753274549/cloud.infra_vkpff7.png"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="クラウド変革パートナー"
          body="<p>成功するクラウド戦略の構築には、専門知識、計画、継続的な最適化が必要です。私たちのクラウドインフラストラクチャソリューションは、お客様のビジネスニーズに合わせて進化し、スケーラブルで安全、かつコスト効率的なクラウド運用を提供するよう設計されています。</p><p>スタートアップから大企業まで、私たちは日本の数百の企業がクラウドインフラストラクチャの移行と最適化を成功させるお手伝いをしてきました。実証済みの方法論により、成功した結果と長期的な価値を確保します。</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316524/roadmap_avxbss.png"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="インフラストラクチャをモダナイズする準備はできていますか？"
          sub="AKRINをクラウド変革のパートナーとして信頼する200社以上の企業に参加しましょう。SMB向けの価格でエンタープライズグレードのクラウドソリューションを手に入れましょう。"
          buttonLabel="クラウドジャーニーを開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "クラウドインフラソリューション（日本のクラウド移行・管理）",
              "alternateName": "Cloud Infrastructure Solutions",
              "serviceType": "クラウド移行・マネージドクラウドサービス",
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
              "url": "https://akrin.jp/ja/services/cloud-infrastructure",
              "description": "Azure、AWS、GCPでのゼロダウンタイム移行、最適化、24/7運用。エンタープライズグレードのセキュリティとコスト効率でインフラストラクチャを変革します。",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "クラウド評価",
                  "price": "500000",
                  "priceCurrency": "JPY",
                  "description": "クラウド準備状況と移行計画"
                },
                {
                  "@type": "Offer",
                  "name": "クラウド移行",
                  "price": "2000000",
                  "priceCurrency": "JPY",
                  "description": "完全なクラウド移行サービス"
                },
                {
                  "@type": "Offer",
                  "name": "マネージド運用",
                  "price": "300000",
                  "priceCurrency": "JPY",
                  "description": "月額クラウド管理とサポート"
                }
              ],
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "一般的な移行期間は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "小規模で4～6週間、大規模で3～6ヶ月が目安です。アプリケーションの複雑さとデータ量によってタイムラインが決まります。"}
                },
                {
                  "@type": "Question",
                  "name": "既存MSP／社内ITとの併用は可能？",
                  "acceptedAnswer": {"@type": "Answer", "text": "可能です。補完または全面委託どちらも対応します。協調的なアプローチを専門としています。"}
                },
                {
                  "@type": "Question",
                  "name": "Azureだけですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "Azure／AWS／GCPすべてに対応します。お客様の特定のニーズに最適なプラットフォームの選択をお手伝いします。"}
                },
                {
                  "@type": "Question",
                  "name": "移行時のセキュリティは？",
                  "acceptedAnswer": {"@type": "Answer", "text": "暗号化、最小権限IAM、ペンテスト、移行プロセス全体を通じた継続的監視で安全性を確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "クラウドとオンプレミス両方の管理に対応できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ハイブリッド環境が標準です。M365、AWS/Azure/GCPとオンプレミスサーバーを併せて管理します。"}
                },
                {
                  "@type": "Question",
                  "name": "コスト最適化について教えてください",
                  "acceptedAnswer": {"@type": "Answer", "text": "FinOpsプラクティス、適正サイジング、リザーブドインスタンス、継続的コスト監視を実装してクラウド支出を最適化します。"}
                },
                {
                  "@type": "Question",
                  "name": "コンプライアンス要件への対応は可能ですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。お客様の業界固有のSOC2、ISO27001、GDPR、その他の規制要件への準拠を確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "移行中に問題が発生した場合はどうなりますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "包括的なロールバック手順を用意し、ビジネス継続性を確保するため移行中は並行環境を維持します。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
