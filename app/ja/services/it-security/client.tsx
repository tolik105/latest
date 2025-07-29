"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function ITSecurityJaClient() {
  const accordionItems = [
    {
      title: "エンドポイントセキュリティ・デバイス管理",
      body: "アンチウイルス、アンチマルウェア、デバイス暗号化、モバイルデバイス管理（MDM）を含む包括的なエンドポイント保護により、接続されたすべてのデバイスを保護します。"
    },
    {
      title: "メールセキュリティ・フィッシング対策",
      body: "スパムフィルタリング、フィッシング保護、メール暗号化、セキュリティ意識向上トレーニングを含む高度なメールセキュリティソリューションにより、メールベースの脅威から保護します。"
    },
    {
      title: "ネットワークセキュリティ・ファイアウォール管理",
      body: "次世代ファイアウォール、侵入検知システム、VPNセットアップ、ネットワークセグメンテーションを含むネットワークセキュリティ実装により、包括的な保護を提供します。"
    },
    {
      title: "アイデンティティ・アクセス管理（IAM）",
      body: "ユーザーアイデンティティ管理、多要素認証（MFA）、シングルサインオン（SSO）、特権アクセス管理により、ユーザーアクセスを制御・監視します。"
    },
    {
      title: "データ保護・バックアップセキュリティ",
      body: "データ暗号化、セキュアバックアップソリューション、データ損失防止（DLP）、GDPR・日本のプライバシー法を含むデータ保護規制への準拠。"
    },
    {
      title: "セキュリティ監視・インシデント対応",
      body: "24/7セキュリティ監視、脅威検知、インシデント対応計画、セキュリティイベント管理により、セキュリティ脅威を迅速に特定・対応します。"
    }
  ]

  const faqItems = [
    {
      q: "どのようなセキュリティ脅威から保護しますか？",
      a: "マルウェア、ランサムウェア、フィッシング攻撃、データ侵害、内部脅威、高度持続的脅威（APT）から多層セキュリティアプローチで保護します。"
    },
    {
      q: "24/7セキュリティ監視は提供していますか？",
      a: "はい。リアルタイムで脅威を検知・対応するための24/7セキュリティ監視・インシデント対応サービスを提供します。"
    },
    {
      q: "コンプライアンス要件はどのように対応しますか？",
      a: "ISO 27001、GDPR、日本の個人情報保護法、業界固有の基準を含む様々な規制への準拠を支援します。"
    },
    {
      q: "リモートワーク環境を保護できますか？",
      a: "はい。VPNセットアップ、エンドポイント保護、セキュアクラウドアクセス、リモートデバイス管理を含む包括的なリモートワークセキュリティを提供します。"
    },
    {
      q: "インシデント対応プロセスはどのようなものですか？",
      a: "インシデント対応には、即座の脅威封じ込め、フォレンジック分析、システム復旧、将来の発生を防ぐためのインシデント後レビューが含まれます。"
    },
    {
      q: "従業員向けのセキュリティトレーニングは提供していますか？",
      a: "はい。従業員がセキュリティ脅威を認識・回避できるよう、セキュリティ意識向上トレーニング、フィッシングシミュレーション、継続的な教育を提供します。"
    },
    {
      q: "セキュリティインシデント時の事業継続性はどのように確保しますか？",
      a: "事業継続計画、セキュアバックアップシステム、迅速な復旧手順を実装し、セキュリティインシデント時のダウンタイムを最小限に抑えます。"
    },
    {
      q: "既存のセキュリティツールと統合できますか？",
      a: "はい。既存のセキュリティインフラストラクチャと統合・強化し、一元管理・監視を提供できます。"
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
          title="ITセキュリティサービス"
          subtitle="エンドポイント保護、ネットワークセキュリティ、脅威監視を含む包括的なITセキュリティソリューション。進化するサイバー脅威からエンタープライズグレードのセキュリティでビジネスを保護します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="なぜITセキュリティが重要なのか"
          body="<p>サイバー脅威はより巧妙で頻繁になり、あらゆる規模の企業を標的としています。包括的なITセキュリティは、悪意のある攻撃、データ侵害、運用中断からデータ、システム、評判を保護するために不可欠です。</p><p>私たちの多層セキュリティアプローチは、高度な技術、プロアクティブな監視、専門的な管理を組み合わせて、事業継続性と規制遵守を確保しながら、現代のサイバー脅威に対する堅牢な防御を構築します。</p>"
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="セキュリティパートナー"
          body="<p>効果的なITセキュリティには、継続的な警戒、専門知識、適切な技術スタックが必要です。私たちのセキュリティ専門家は最新の脅威とセキュリティ技術に精通し、お客様のビジネスニーズに合わせた包括的な保護を提供します。</p><p>エンドポイント保護からネットワークセキュリティ、インシデント対応まで、ビジネスが効率的かつ安全に運営できるよう、強固なセキュリティ体制を維持するために必要な専門知識とツールを提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="ITセキュリティを強化する準備はできていますか？"
          sub="包括的なITセキュリティソリューションでビジネスを保護しましょう。専門的なセキュリティ管理と24/7監視でサイバー脅威から防御します。"
          buttonLabel="セキュリティコンサルテーション開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "ITセキュリティサービス（日本のITセキュリティ）",
              "alternateName": "IT Security Services",
              "serviceType": "ITセキュリティ・サイバーセキュリティサービス",
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
              "url": "https://akrin.jp/ja/services/it-security",
              "description": "エンドポイント保護、ネットワークセキュリティ、脅威監視を含む包括的なITセキュリティソリューション。進化するサイバー脅威からエンタープライズグレードのセキュリティでビジネスを保護します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "どのようなセキュリティ脅威から保護しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "マルウェア、ランサムウェア、フィッシング攻撃、データ侵害、内部脅威、高度持続的脅威（APT）から多層セキュリティアプローチで保護します。"}
                },
                {
                  "@type": "Question",
                  "name": "24/7セキュリティ監視は提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。リアルタイムで脅威を検知・対応するための24/7セキュリティ監視・インシデント対応サービスを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "コンプライアンス要件はどのように対応しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "ISO 27001、GDPR、日本の個人情報保護法、業界固有の基準を含む様々な規制への準拠を支援します。"}
                },
                {
                  "@type": "Question",
                  "name": "リモートワーク環境を保護できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。VPNセットアップ、エンドポイント保護、セキュアクラウドアクセス、リモートデバイス管理を含む包括的なリモートワークセキュリティを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "インシデント対応プロセスはどのようなものですか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "インシデント対応には、即座の脅威封じ込め、フォレンジック分析、システム復旧、将来の発生を防ぐためのインシデント後レビューが含まれます。"}
                },
                {
                  "@type": "Question",
                  "name": "従業員向けのセキュリティトレーニングは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。従業員がセキュリティ脅威を認識・回避できるよう、セキュリティ意識向上トレーニング、フィッシングシミュレーション、継続的な教育を提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "セキュリティインシデント時の事業継続性はどのように確保しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "事業継続計画、セキュアバックアップシステム、迅速な復旧手順を実装し、セキュリティインシデント時のダウンタイムを最小限に抑えます。"}
                },
                {
                  "@type": "Question",
                  "name": "既存のセキュリティツールと統合できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。既存のセキュリティインフラストラクチャと統合・強化し、一元管理・監視を提供できます。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
