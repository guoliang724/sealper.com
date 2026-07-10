import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Water Bottle Pumps',
  description: 'Sealper manual and USB rechargeable water bottle pumps for 5-gallon bottles. No batteries needed for manual model.',
}

const pumps = [
  {
    tag: 'Manual',
    name: 'Manual Pump',
    image: '/images/pumps_product.png',
    desc: 'Reliable manual water pump �?no batteries or power required. Includes a cleaning kit and is built from high-quality food-grade materials.',
    specs: ['No batteries required', 'Includes cleaning kit', 'High quality construction', 'Food-grade safe materials', 'Compatible with 5-gallon bottles'],
  },
  {
    tag: 'USB Rechargeable',
    name: 'USB Electric Pump',
    image: '/images/pumps_product.png',
    desc: 'Modern USB rechargeable pump with desktop and bottle-top mounting options. Features volume selection for precise dispensing.',
    specs: ['Desktop & bottle-top compatible', 'Volume selection control', 'USB rechargeable battery', 'Quiet motor operation', 'Automatic shut-off safety'],
  },
]

export default function PumpsPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_pumps.png"
            alt="Pumps background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Pumps</span>
          <h1 className="page-hero__title">SEALPER Pumps</h1>
          <p className="page-hero__subtitle">
            Manual and electric water bottle pumps for effortless dispensing from 5-gallon bottles.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {pumps.map((p) => (
              <div key={p.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{p.tag}</span>
                  <h2 className={styles.productName}>{p.name}</h2>
                  <p className={styles.productDesc}>{p.desc}</p>
                  <div className={styles.productSpecs}>
                    {p.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Order Pumps Today</h2>
          <p className={styles.pageCtaSubtitle}>Contact us for bulk pricing and availability.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Request a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
