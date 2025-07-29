"use client"

import React from "react"
import Script from "next/script"
import { SectionHero } from "@/components/ui/section-hero"
import { SectionTextImage } from "@/components/ui/section-text-image"
import { AccordionList } from "@/components/ui/accordion-list"
import { FAQ } from "@/components/ui/faq-section"
import { SectionCTA } from "@/components/ui/section-cta"

export default function ITConsultingProjectManagementJaClient() {
  const accordionItems = [
    {
      title: "IT戦略・デジタルトランスフォーメーション",
      body: "包括的なIT戦略策定、デジタルトランスフォーメーションロードマップ、テクノロジーアーキテクチャ計画により、ITイニシアチブをビジネス目標と整合させます。"
    },
    {
      title: "プロジェクト管理オフィス（PMO）",
      body: "複雑なITイニシアチブのためのプロジェクト計画、リソース管理、リスク評価、デリバリー監督を含む専用PMOサービス。"
    },
    {
      title: "変更管理・トレーニング",
      body: "組織変更管理、ユーザー採用戦略、トレーニングプログラム開発、成功するIT実装のためのステークホルダーコミュニケーション。"
    },
    {
      title: "ベンダー管理・調達",
      body: "テクノロジーベンダー評価、契約交渉、調達サポート、IT投資を最適化するための継続的なベンダー関係管理。"
    },
    {
      title: "リスク評価・コンプライアンス",
      body: "ITリスク評価、コンプライアンス監査、ガバナンスフレームワーク開発、日本および国際基準の規制コンプライアンスサポート。"
    },
    {
      title: "ビジネスプロセス最適化",
      body: "プロセス分析、ワークフロー最適化、自動化機会の特定、IT運用全体の効率改善の実装。"
    }
  ]

  const faqItems = [
    {
      q: "どのようなITプロジェクトを管理しますか？",
      a: "クラウド移行、システム実装、デジタルトランスフォーメーション、インフラストラクチャアップグレード、ソフトウェア展開を含むあらゆるタイプのITプロジェクトを管理します。"
    },
    {
      q: "バイリンガルプロジェクト管理は提供していますか？",
      a: "はい。プロジェクトマネージャーは英語と日本語の両方に堪能で、すべてのステークホルダーとの明確なコミュニケーションを確保します。"
    },
    {
      q: "プロジェクトリスク管理はどのように行いますか？",
      a: "リスク特定、評価、軽減計画、プロジェクトライフサイクル全体を通じた継続的監視を含む実証済みのリスク管理フレームワークを使用します。"
    },
    {
      q: "既存のプロジェクト方法論と連携できますか？",
      a: "はい。プロジェクト要件に基づいて、アジャイル、ウォーターフォール、PRINCE2、またはハイブリッドアプローチなど、お客様の好みの方法論に適応します。"
    },
    {
      q: "一般的なプロジェクト期間は？",
      a: "標準的な実装では3～6ヶ月、大規模なデジタルトランスフォーメーションイニシアチブでは12～24ヶ月とプロジェクト期間は様々です。"
    },
    {
      q: "実装後サポートは提供していますか？",
      a: "はい。ユーザートレーニング、システム最適化、必要に応じた継続的プロジェクトガバナンスを含む実装後サポートを提供します。"
    },
    {
      q: "プロジェクト成功をどのように確保しますか？",
      a: "確立されたPMOプラクティス、定期的なステークホルダーコミュニケーション、マイルストーン追跡、継続的リスク管理を使用して成功するプロジェクトデリバリーを確保します。"
    },
    {
      q: "ベンダー選定と管理を支援できますか？",
      a: "はい。包括的なベンダー評価、選定サポート、契約交渉支援、継続的なベンダー関係管理を提供します。"
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
          title="ITコンサルティング＆プロジェクト管理"
          subtitle="戦略的ITコンサルティング、プロジェクト管理オフィス（PMO）サービス、デジタルトランスフォーメーションガイダンス。専門的な計画と実行で成功するITイニシアチブを推進します。"
          ctaLabel="開始する"
          ctaHref="/ja/contact"
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />

        <SectionTextImage
          heading="なぜITコンサルティングが重要なのか"
          body="<p>成功するITイニシアチブには、戦略的計画、専門的ガイダンス、規律ある実行が必要です。私たちのITコンサルティングとプロジェクト管理サービスは、リスクを最小化し価値を最大化しながら、組織が複雑なテクノロジー実装をナビゲートするお手伝いをします。</p><p>デジタルトランスフォーメーション戦略から実践的なプロジェクトデリバリーまで、IT投資が測定可能なビジネス結果を提供することを確保するために必要な専門知識と方法論を提供します。</p>"
          imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageSide="left"
        />

        <AccordionList items={accordionItems} />

        <SectionTextImage
          heading="戦略的ITパートナー"
          body="<p>効果的なITコンサルティングは、深い技術的専門知識とビジネス洞察力、実証済みのプロジェクト管理方法論を組み合わせます。私たちのコンサルタントは、お客様のチームと密接に連携して独自の課題を理解し、真のビジネス価値を推進するカスタマイズされたソリューションを開発します。</p><p>大規模なデジタルトランスフォーメーションを計画している場合でも、特定のITイニシアチブに関する専門的ガイダンスが必要な場合でも、計画から実装、そしてその先まで成功を確保するための戦略的洞察と実行能力を提供します。</p>"
          imageSrc="https://res.cloudinary.com/dtmdovevn/image/upload/v1753316524/roadmap_avxbss.png"
          imageSide="right"
        />

        <FAQ items={faqItems} />

        <SectionCTA
          headline="ITイニシアチブを加速する準備はできていますか？"
          sub="戦略的ITコンサルティングと専門的プロジェクト管理でAKRINとパートナーシップを組みましょう。テクノロジー投資をビジネス成功に変換します。"
          buttonLabel="コンサルテーション開始"
          buttonHref="/ja/contact"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "ITコンサルティング＆プロジェクト管理（日本のITコンサルティング）",
              "alternateName": "IT Consulting & Project Management",
              "serviceType": "ITコンサルティング・プロジェクト管理サービス",
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
              "url": "https://akrin.jp/ja/services/it-consulting-project-management",
              "description": "戦略的ITコンサルティング、プロジェクト管理オフィス（PMO）サービス、デジタルトランスフォーメーションガイダンス。専門的な計画と実行で成功するITイニシアチブを推進します。",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "どのようなITプロジェクトを管理しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "クラウド移行、システム実装、デジタルトランスフォーメーション、インフラストラクチャアップグレード、ソフトウェア展開を含むあらゆるタイプのITプロジェクトを管理します。"}
                },
                {
                  "@type": "Question",
                  "name": "バイリンガルプロジェクト管理は提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。プロジェクトマネージャーは英語と日本語の両方に堪能で、すべてのステークホルダーとの明確なコミュニケーションを確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "プロジェクトリスク管理はどのように行いますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "リスク特定、評価、軽減計画、プロジェクトライフサイクル全体を通じた継続的監視を含む実証済みのリスク管理フレームワークを使用します。"}
                },
                {
                  "@type": "Question",
                  "name": "既存のプロジェクト方法論と連携できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。プロジェクト要件に基づいて、アジャイル、ウォーターフォール、PRINCE2、またはハイブリッドアプローチなど、お客様の好みの方法論に適応します。"}
                },
                {
                  "@type": "Question",
                  "name": "一般的なプロジェクト期間は？",
                  "acceptedAnswer": {"@type": "Answer", "text": "標準的な実装では3～6ヶ月、大規模なデジタルトランスフォーメーションイニシアチブでは12～24ヶ月とプロジェクト期間は様々です。"}
                },
                {
                  "@type": "Question",
                  "name": "実装後サポートは提供していますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。ユーザートレーニング、システム最適化、必要に応じた継続的プロジェクトガバナンスを含む実装後サポートを提供します。"}
                },
                {
                  "@type": "Question",
                  "name": "プロジェクト成功をどのように確保しますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "確立されたPMOプラクティス、定期的なステークホルダーコミュニケーション、マイルストーン追跡、継続的リスク管理を使用して成功するプロジェクトデリバリーを確保します。"}
                },
                {
                  "@type": "Question",
                  "name": "ベンダー選定と管理を支援できますか？",
                  "acceptedAnswer": {"@type": "Answer", "text": "はい。包括的なベンダー評価、選定サポート、契約交渉支援、継続的なベンダー関係管理を提供します。"}
                }
              ]
            })
          }}
        />
      </div>
    </div>
  )
}
