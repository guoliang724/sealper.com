import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Water Bottle Cradles',
  description: 'Sealper folding and table cradles with spout for 5-gallon water bottles. Easy dispensing solutions for home and office.',
}

const cradles = [
  {
    tag: 'Portable',
    name: 'Folding Cradle With Spout',
    image: '/images/cradles_product.png',
    desc: 'Compact folding cradle with integrated spout for effortless gravity-fed dispensing. Folds flat for easy storage and transport.',
    specs: ['Folding design for portability', 'Integrated dispensing spout', 'Gravity-fed dispensing', 'Suitable for 5-gallon bottles', 'Easy assembly and storage'],
  },
  {
    tag: 'Stationary',
    name: 'Table Cradle With Spout',
    image: '/images/cradles_product.png',
    desc: 'Sturdy table-top cradle with a reliable spout. Perfect for kitchens, offices, and any countertop setting. Simple tilt-and-pour design.',
    specs: ['Table-top stable design', 'Durable spout included', 'Tilt-and-pour dispensing', 'Non-slip base', 'Compatible with 5-gallon bottles'],
  },
]

export default function CradlesPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(72px + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_cradles.png"
            alt="Cradles background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Cradles</span>
          <h1 className="page-hero__title">SEALPER Cradles</h1>
          <p className="page-hero__subtitle">
            Convenient cradle systems with spout for gravity-fed water dispensing from 5-gallon bottles.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {cradles.map((c) => (
              <div key={c.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={c.image} alt={c.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{c.tag}</span>
                  <h2 className={styles.productName}>{c.name}</h2>
                  <p className={styles.productDesc}>{c.desc}</p>
                  <div className={styles.productSpecs}>
                    {c.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Interested in Cradles?</h2>
          <p className={styles.pageCtaSubtitle}>Contact us for pricing and availability information.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Get a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
