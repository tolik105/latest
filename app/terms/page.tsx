

import TermsClient from './terms-client'
import { generatePageMetadata } from "@/lib/metadata-helpers"

export const metadata = generatePageMetadata({
  title: 'Terms of Service | AKRIN',
  description: 'The terms governing your use of AKRIN’s website and services, including responsibilities, payments, and limitations.',
  path: '/terms'
})

export default function TermsPage() {
  return <TermsClient />
}