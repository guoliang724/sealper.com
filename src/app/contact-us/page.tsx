import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Sealper for pricing, product inquiries, and shipping information. Based in Calgary, Alberta, Canada. Call 403-667-5058 or email contact@sealper.com.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
