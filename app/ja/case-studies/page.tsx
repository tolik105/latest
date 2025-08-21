import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "導入事例 | AKRIN — 日本のITコンサルティング & マネージドサービス",
  description:
    "AKRINの導入事例（運用保守、クラウド、セキュリティ、ネットワーク、ITAD）をご覧ください。日本市場での具体的な成果を掲載。",
}

export default function CaseStudiesPageJA() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid />
    </main>
  )
}

