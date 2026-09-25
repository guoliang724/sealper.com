import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Racks — Home, Office & Commercial',
  description: 'Sealper racks for 5 gallon water bottles — home & office bottle racks, commercial 40-bottle racks, 16-bottle stackable pallets, and 12 & 24 bottle display racks.',
}

type Rack = {
  name: string
  image: string
  specs: string[]
}

const homeRacks: Rack[] = [
  { name: '3-Tier Single Row Rack', image: '/images/products/rack-single-3-tier.png', specs: ['Holds 3 bottles', 'Compact footprint'] },
  { name: '4-Tier Single Row Rack', image: '/images/products/rack-single-4-tier.png', specs: ['Holds 4 bottles', 'Compact footprint'] },
  { name: '5-Tier Single Row Rack', image: '/images/products/rack-single-5-tier.png', specs: ['Holds 5 bottles', 'Compact footprint'] },
  { name: '3-Tier Double Row Rack', image: '/images/products/rack-double-3-tier.png', specs: ['Holds 6 bottles', '31"H × 25"W × 13"D'] },
  { name: '4-Tier Double Row Rack', image: '/images/products/rack-double-4-tier.png', specs: ['Holds 8 bottles', '42.4"H × 24.8"W × 13.3"D'] },
  { name: '5-Tier Double Row Rack', image: '/images/products/rack-double-5-tier.png', specs: ['Holds 10 bottles', '55"H × 25"W × 13"D'] },
  { name: '3-Bottle Stainless Steel Rack', image: '/images/products/rack-stainless-3-bottle.png', specs: ['Holds 3 bottles', '39"H × 14"W × 12"D', 'Stainless steel finish'] },
]

const commercialRacks: Rack[] = [
  {
    name: '40 Bottles Rack',
    image: '/images/products/rack-40-bottle.png',
    specs: ['Capacity: 40 bottles', '48"W × 40"D × 65"H', 'Durable, stackable & space efficient', 'Heavy-duty reusable construction', 'Easy forklift & pallet handling'],
  },
  {
    name: '16 Bottles Stackable Pallet',
    image: '/images/products/pallet-16-bottle.png',
    specs: ['16 bottles per layer', '1.5-tonne load capacity', 'Heavy-duty & reusable', 'Stackable, forklift ready', 'Built for commercial water operations'],
  },
  {
    name: '24 Bottles Display Rack',
    image: '/images/products/rack-display-24.png',
    specs: ['Holds up to 24 bottles', 'Heavy-duty steel construction', 'Space-saving multi-tier design', 'Stable & durable'],
  },
  {
    name: '12 Bottles Display Rack',
    image: '/images/products/rack-display-12.png',
    specs: ['Holds up to 12 bottles', 'Heavy-duty steel construction', 'Space-saving multi-tier design', 'Stable & durable'],
  },
]

function RackCard({ rack, sizes }: { rack: Rack; sizes: string }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrap}>
        <Image src={rack.image} alt={rack.name} fill sizes={sizes} />
      </div>
      <div className={styles.productCardBody}>
        <h3 className={styles.productName}>{rack.name}</h3>
        <div className={styles.productSpecs}>
          {rack.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
        </div>
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
