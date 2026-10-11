import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'
import QuoteButton from '@/components/QuoteButton'

export const metadata: Metadata = {
  title: { absolute: '5 Gallon Water Bottle Racks & Storage | Sealper' },
  description: 'Racks for 5 gallon water bottles — home and office racks, 40-bottle commercial racks, 16-bottle stackable pallets rated to 1.5 tonnes, and 12 and 24 bottle display racks.',
}

type Rack = {
  name: string
  image: string
  alt?: string
  specs: string[]
}

const homeRacks: Rack[] = [
  { name: '3-Tier Single Row Rack', image: '/images/products/3-tier-single-row-water-bottle-rack.png', specs: ['Holds 3 bottles', 'Compact footprint'] },
  { name: '4-Tier Single Row Rack', image: '/images/products/4-tier-single-row-water-bottle-rack.png', specs: ['Holds 4 bottles', 'Compact footprint'] },
  { name: '5-Tier Single Row Rack', image: '/images/products/5-tier-single-row-water-bottle-rack.png', specs: ['Holds 5 bottles', 'Compact footprint'] },
  { name: '3-Tier Double Row Rack', image: '/images/products/3-tier-double-row-water-bottle-rack.png', specs: ['Holds 6 bottles', '31"H × 25"W × 13"D'] },
  { name: '4-Tier Double Row Rack', image: '/images/products/4-tier-double-row-water-bottle-rack.png', specs: ['Holds 8 bottles', '42.4"H × 24.8"W × 13.3"D'] },
  { name: '5-Tier Double Row Rack', image: '/images/products/5-tier-double-row-water-bottle-rack.png', specs: ['Holds 10 bottles', '55"H × 25"W × 13"D'] },
  { name: '3-Bottle Stainless Steel Rack', image: '/images/products/3-bottle-stainless-steel-water-bottle-rack.png', specs: ['Holds 3 bottles', '39"H × 14"W × 12"D', 'Stainless steel finish'] },
]

const commercialRacks: Rack[] = [
  {
    name: '40-Bottle Commercial Rack',
    image: '/images/products/40-bottle-commercial-water-bottle-rack.png',
    alt: 'commercial 5 gallon water bottle storage rack',
    specs: ['Holds 40 bottles', '48"W × 40"D × 65"H', 'Stackable plastic construction', 'Forklift accessible', 'Designed for warehouse and delivery operations'],
  },
  {
    name: '16-Bottle Stackable Pallet',
    image: '/images/products/16-bottle-stackable-water-bottle-pallet.png',
    alt: 'stackable 16-bottle pallet for 5 gallon water bottles',
    specs: ['16 bottles per layer', 'Rated load capacity: 1.5 tonnes', 'Stackable', 'Forklift-ready', 'Reusable construction'],
  },
  {
    name: '24-Bottle Display Rack',
    image: '/images/products/24-bottle-water-bottle-display-rack.png',
    specs: ['Holds up to 24 bottles', 'Plastic construction', 'Multi-tier design'],
  },
  {
    name: '12-Bottle Display Rack',
    image: '/images/products/12-bottle-water-bottle-display-rack.png',
    specs: ['Holds up to 12 bottles', 'Plastic construction', 'Multi-tier design'],
  },
]

function RackCard({ rack, sizes }: { rack: Rack; sizes: string }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrap}>
        <Image src={rack.image} alt={rack.alt ?? `${rack.name} for 5 gallon water bottles`} fill sizes={sizes} />
      </div>
      <div className={styles.productCardBody}>
        <h3 className={styles.productName}>{rack.name}</h3>
        <div className={styles.productSpecs}>
          {rack.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
        </div>
        <QuoteButton product={rack.name} />
      </div>
    </div>
  )
}

export default function RacksPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">Racks</h1>
          <p className="page-hero__subtitle">
            Home, office and commercial racks — from 3-bottle home racks to 40-bottle racks and stackable pallets.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.group}>
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>Home &amp; Office Racks</h2>
              <p className={styles.groupDesc}>Keep full bottles organized at home, in the office or in a small shop.</p>
            </div>
            <div className={`${styles.productsGrid} ${styles.productsGridCompact}`}>
              {homeRacks.map((r) => (
                <RackCard key={r.name} rack={r} sizes="(max-width: 520px) 100vw, 300px" />
              ))}
            </div>
          </div>

          <div className={styles.group}>
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>Commercial Racks</h2>
              <p className={styles.groupDesc}>Storage, transport and display for water depots and distributors.</p>
            </div>
            <div className={styles.productsGrid}>
              {commercialRacks.map((r) => (
                <RackCard key={r.name} rack={r} sizes="(max-width: 768px) 100vw, 400px" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Need Racks?" subtitle="We’ll help you choose the right rack for your operation." />
    </>
  )
}
