import CaseStudiesGrid from "@/components/CaseStudiesGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | AKRIN — IT Consulting & Managed Services in Japan",
  description:
    "Explore AKRIN case studies across managed IT, cloud, security, network, and ITAD. Concrete outcomes with enterprise-grade delivery in Japan.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <CaseStudiesGrid />
    </main>
  )
}

