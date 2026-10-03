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
    default: '5 Gallon Water Bottles & HOD Packaging Supplier Canada | Sealper',
    template: '%s | Sealper',
  },
  description: 'Sealper supplies 5 gallon PET and PC water bottles, caps, racks, dispensers and HOD accessories across Canada. BPA-free PET bottles manufactured in Calgary.',
  keywords: ['5 gallon water bottles', '5 gallon bottle supplier', 'HOD packaging supplier', 'bottled water packaging supplier', '5 gallon water bottle caps', 'water bottle racks', 'water dispensers', 'HOD accessories', 'Calgary', 'Alberta', 'Canada'],
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
