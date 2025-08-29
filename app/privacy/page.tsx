

import PrivacyClient from './privacy-client'
import { generatePageMetadata } from "@/lib/metadata-helpers"

export const metadata = generatePageMetadata({
  title: 'Privacy Policy | AKRIN',
  description: 'How AKRIN collects, uses, and protects your data. Read our Privacy Policy for details on cookies, analytics, and your rights.',
  path: '/privacy'
})

export default function PrivacyPage() {
  return <PrivacyClient />
}