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
    default: 'BPA-Free 5 Gallon Bottles & HOD Packaging Solutions | Sealper',
    template: '%s | Sealper',
  },
  description: 'Sealper specializes in BPA-free 5 gallon bottles manufactured in Calgary and provides complete HOD packaging solutions — caps, racks, water dispensers and accessories — for the bottled water industry.',
  keywords: ['BPA-free 5 gallon bottles', 'PET water bottles', 'HOD packaging', 'water bottle caps', 'bottle racks', 'water dispensers', 'Calgary', 'Canada', 'Canadian owned'],
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
