import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Sealper for pricing, product inquiries, and shipping information. Based in Calgary, Alberta, Canada. Call 403-667-5058 or email sealperplastics@yahoo.com.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { product } = await searchParams
  return <ContactPageClient product={typeof product === 'string' ? product.trim().slice(0, 200) : undefined} />
}
