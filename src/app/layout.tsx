import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '5 Gallon Bottles and Caps Supplier | Sealper Wholesale Store',
    template: '%s | Sealper',
  },
  description: 'Sealper is your trusted supplier for 5 gallon bottles, caps, racks, pumps, and water packaging accessories. Premium quality products for your bottled water packaging needs. Based in Calgary, Canada.',
  keywords: ['5 gallon bottles', 'water bottle caps', 'bottle racks', 'water packaging', 'wholesale', 'Calgary', 'Alberta', 'Canada'],
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
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
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
