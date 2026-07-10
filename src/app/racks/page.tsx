import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Bottle Racks',
  description: 'Sealper water bottle storage and display racks. Single and double row holders, display racks, storage racks, and pallets for 5-gallon bottles.',
}

const racks = [
  {
    tag: 'Single Row',
    name: 'Single Row Bottle Holder',
    image: '/images/racks_product.png',
    desc: 'Space-efficient single-row bottle storage with multiple tier options. Perfect for retail and depot use.',
    specs: ['Available in 3, 4, and 5 tiers', 'Space-saving design', 'Durable metal frame', 'Easy assembly', 'Ideal for small spaces'],
  },
  {
    tag: 'Double Row',
    name: 'Double Row Bottle Holder',
    image: '/images/racks_product.png',
    desc: 'High-capacity double-row rack with back "X" bar for extra structural support. Maximizes storage density.',
    specs: ['3, 4, and 5 tier options', 'Back "X" bar for extra support', 'Heavy-duty construction', 'Large capacity storage', 'Stable and sturdy'],
  },
  {
    tag: 'Display',
    name: 'Bottles Display Rack',
    image: '/images/racks_product.png',
    desc: 'Showcase your products with our professional display racks. Available in 12 and 24 bottle configurations.',
    specs: ['12-bottle and 24-bottle options', 'Display-optimized design', 'Professional appearance', 'Easy bottle access', 'Great for retail environments'],
  },
  {
    tag: 'Storage',
    name: 'Bottles Storage Rack',
    image: '/images/racks_product.png',
    desc: 'High-density warehouse storage solution with 8 bottles per layer and up to 10 layers per unit.',
    specs: ['8 bottles per layer', 'Up to 10 layers per unit', 'Warehouse-grade construction', 'Maximum storage efficiency', 'Easy forklift access'],
  },
  {
    tag: 'Pallet',
    name: 'Bottles Storage Pallet',
    image: '/images/racks_product.png',
    desc: 'Standardized storage pallets in multiple size configurations for efficient bulk storage and transport.',
    specs: ['Available sizes: 3×4, 4×4, 5×4', 'Compatible with standard forklifts', 'Heavy-duty pallet design', 'Bulk transport ready', 'Efficient warehouse solution'],
  },
]

export default function RacksPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_racks.png"
            alt="Racks background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Racks</span>
          <h1 className="page-hero__title">SEALPER Racks</h1>
          <p className="page-hero__subtitle">
            Commercial storage and display rack solutions for 5-gallon water bottles. From retail display to warehouse storage.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {racks.map((r) => (
              <div key={r.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={r.image} alt={r.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{r.tag}</span>
                  <h2 className={styles.productName}>{r.name}</h2>
                  <p className={styles.productDesc}>{r.desc}</p>
                  <div className={styles.productSpecs}>
                    {r.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
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
