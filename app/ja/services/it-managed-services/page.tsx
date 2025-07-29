import { generatePageMetadata } from "@/lib/metadata-helpers"
import ITManagedServicesJaClient from "./client"

export const metadata = generatePageMetadata({
  title: 'マネージドITサービス＆24/7サポート | AKRIN 日本MSP',
  description: '24/7監視と無制限ヘルプデスク、オンサイト対応。ITコストを30～50％削減し、稼働率99.9％を実現する日本発の信頼できるMSP。',
  keywords: ['マネージドITサービス', '24/7サポート', 'MSP 日本', 'IT監視', 'ヘルプデスク', 'プロアクティブIT管理', 'ITコスト削減', 'バイリンガルITサポート'],
  path: '/ja/services/it-managed-services'
})

export default function ITManagedServicesJaPage() {
  return <ITManagedServicesJaClient />
}
