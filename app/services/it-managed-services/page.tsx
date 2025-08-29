import { getServiceMetadata } from "@/lib/service-metadata"
import ITManagedServicesClient from "./client"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getServiceMetadata('it-managed-services')
  return {
    ...baseMetadata,
    alternates: {
      canonical: 'https://akrin.jp/services/it-managed-services'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

export default function ITManagedServicesPage() {
  return <ITManagedServicesClient />
}
