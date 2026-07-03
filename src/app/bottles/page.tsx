import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Water Bottles',
  description: 'Sealper 5 gallon and 3 gallon polycarbonate water bottles with anti-skid orange peel bottom design. Durable, clear, BPA-free.',
}

const bottles = [
  {
    tag: 'Most Popular',
    name: '5 Gallon PC Bottles',
    image: '/images/bottles_product.png',
    desc: 'Premium polycarbonate 5-gallon bottle with anti-skid orange peel bottom for maximum stability. Perfect for home and office water dispensers.',
    specs: ['Weight: 840g', 'Anti-skid embossed bottom pattern', 'Crystal clear polycarbonate', 'FDA Approved & BPA Free', 'Compatible with standard dispensers'],
  },
  {
    tag: 'Compact & Portable',
    name: '3 Gallon PC Bottles',
    image: '/images/bottles_product.png',
    desc: 'Narrow and tall design — cute, clear, and incredibly easy to carry and store. Ideal for smaller offices, camping, and household use.',
    specs: ['Narrow & tall design', 'Lightweight & easy to handle', 'Crystal clear visibility', 'FDA Approved & BPA Free', 'Easy to clean'],
  },
  {
    tag: 'Versatile',
    name: 'Fridge Pack Camping Jugs',
    image: '/images/bottles_product.png',
    desc: 'The most durable and versatile camping and fridge jug. Easy to carry, clean, and store. Designed for outdoor adventures and emergency readiness.',
    specs: ['Most durable design', 'Versatile multi-use application', 'Easy carry & clean', 'Compact for refrigerator storage', 'Suitable for outdoor use'],
  },
]

export default function BottlesPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(72px + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_bottles.png"
            alt="Bottles background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Bottles</span>
          <h1 className="page-hero__title">SEALPER Bottles</h1>
          <p className="page-hero__subtitle">
            Premium polycarbonate water bottles in 3 and 5 gallon sizes. Durable, crystal-clear, and food-grade safe.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {bottles.map((b) => (
              <div key={b.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={b.image} alt={b.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{b.tag}</span>
                  <h2 className={styles.productName}>{b.name}</h2>
                  <p className={styles.productDesc}>{b.desc}</p>
                  <div className={styles.productSpecs}>
                    {b.specs.map((s) => (
                      <div key={s} className={styles.productSpec}>{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Interested in Our Bottles?</h2>
          <p className={styles.pageCtaSubtitle}>Contact us for pricing, minimum order quantities, and delivery options.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Request a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
