import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '5 Gallon Water Bottles Supplier | Sealper �?100% Canadian Owned',
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
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
