import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Storage Racks',
  description: 'Sealper storage racks for 5-gallon water bottles — home & office bottle racks, commercial 40-bottle racks, 16-bottle stackable pallets, and 12 & 24 bottle display racks.',
}

type Rack = {
  tag: string
  name: string
  image: string
  specs: string[]
}

const homeRacks: Rack[] = [
  { tag: 'Single Row', name: '3-Tier Single Row Rack', image: '/images/products/rack-single-3-tier.png', specs: ['Holds 3 bottles', 'Compact footprint'] },
  { tag: 'Single Row', name: '4-Tier Single Row Rack', image: '/images/products/rack-single-4-tier.png', specs: ['Holds 4 bottles', 'Compact footprint'] },
  { tag: 'Single Row', name: '5-Tier Single Row Rack', image: '/images/products/rack-single-5-tier.png', specs: ['Holds 5 bottles', 'Compact footprint'] },
  { tag: 'Double Row', name: '3-Tier Double Row Rack', image: '/images/products/rack-double-3-tier.png', specs: ['Holds 6 bottles', '31"H × 25"W × 13"D'] },
  { tag: 'Double Row', name: '4-Tier Double Row Rack', image: '/images/products/rack-double-4-tier.png', specs: ['Holds 8 bottles', '42.4"H × 24.8"W × 13.3"D'] },
  { tag: 'Double Row', name: '5-Tier Double Row Rack', image: '/images/products/rack-double-5-tier.png', specs: ['Holds 10 bottles', '55"H × 25"W × 13"D'] },
  { tag: 'Stainless', name: '3-Bottle Stainless Steel Rack', image: '/images/products/rack-stainless-3-bottle.png', specs: ['Holds 3 bottles', '39"H × 14"W × 12"D', 'Stainless steel finish'] },
]

const commercialRacks: Rack[] = [
  {
    tag: 'Storage & Transport',
    name: '40 Bottles Rack',
    image: '/images/products/rack-40-bottle.png',
    specs: ['Capacity: 40 bottles', '48"W × 40"D × 65"H', 'Durable, stackable & space efficient', 'Heavy-duty reusable construction', 'Easy forklift & pallet handling'],
  },
  {
    tag: 'Stackable Pallet',
    name: '16 Bottles Stackable Pallet',
    image: '/images/products/pallet-16-bottle.png',
    specs: ['16 bottles per layer', '1.5-tonne load capacity', 'Heavy-duty & reusable', 'Stackable, forklift ready', 'Built for commercial water operations'],
  },
  {
    tag: 'Display',
    name: '24 Bottles Display Rack',
    image: '/images/products/rack-display-24.png',
    specs: ['Holds up to 24 bottles', 'Heavy-duty steel construction', 'Space-saving multi-tier design', 'Stable & durable'],
  },
  {
    tag: 'Display',
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
        <span className={styles.productTag}>{rack.tag}</span>
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
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Storage Racks</span>
          <h1 className="page-hero__title">SEALPER <em>Storage Racks</em></h1>
          <p className="page-hero__subtitle">
            From a 3-bottle home rack to 40-bottle commercial racks and stackable pallets. Built tough, stored smarter.
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
              <h2 className={styles.groupTitle}>Commercial Heavy-Duty Racks</h2>
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

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Need Storage Solutions?</h2>
          <p className={styles.pageCtaSubtitle}>Our team will help you choose the right rack for your operation.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Get a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
