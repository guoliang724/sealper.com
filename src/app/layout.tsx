import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Headings & body: soft geometric sans. Accent words (<em> in headings): flowing italic serif.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '5 Gallon Water Bottles Supplier | Sealper — 100% Canadian Owned',
    template: '%s | Sealper',
  },
  description: 'Sealper is a 100% Canadian-owned wholesale supplier for 5 gallon water bottles, caps, racks, and pumps. Same-day delivery in Vancouver, Calgary, Edmonton & Toronto. Serving Western Canada.',
  keywords: ['5 gallon bottles', 'water bottle caps', 'bottle racks', 'water packaging', 'wholesale', 'Calgary', 'Alberta', 'Canada', 'Canadian owned', 'same day delivery'],
  authors: [{ name: 'Sealper' }],
  openGraph: {
    siteName: 'Sealper',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${jakarta.variable} ${instrument.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
