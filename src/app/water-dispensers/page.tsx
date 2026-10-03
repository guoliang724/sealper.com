import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: 'Water Dispensers & HOD Equipment Canada | Sealper' },
  description: 'Top-load and bottom-load water dispensers for 3 and 5 gallon bottles, with hot, cold and room-temperature water. Supplied and stocked in Canada.',
}

const dispensers = [
  {
    name: 'Top-Load Water Dispenser',
    image: '/images/products/dispenser-top-load.png',
    alt: 'top-load water dispenser with lower storage cabinet',
    desc: 'A practical top-load dispenser with hot, cold and room-temperature water and built-in lower storage.',
    specs: ['Hot, cold & room-temperature water', 'Elevated dispensing height', 'Lower storage cabinet'],
  },
  {
    name: 'Bottom-Load Water Dispenser',
    image: '/images/products/dispenser-bottom-load.png',
    alt: 'bottom-load water dispenser',
    desc: 'Bottom-loading design reduces the need to lift full bottles onto the top of the dispenser.',
    specs: ['Hot, cold & room-temperature water', 'Fits 3 & 5 gallon bottles', 'Stainless steel finish'],
  },
]

export default function WaterDispensersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">Water Dispensers</h1>
          <p className="page-hero__subtitle">Top-load and bottom-load dispensers for home and office.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={`${styles.productsGrid} ${styles.productsGridPair}`}>
            {dispensers.map((d) => (
              <div key={d.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={d.image} alt={d.alt} fill sizes="(max-width: 768px) 100vw, 600px" />
                </div>
                <div className={styles.productCardBody}>
                  <h2 className={styles.productName}>{d.name}</h2>
                  <p className={styles.productDesc}>{d.desc}</p>
                  <div className={styles.productSpecs}>
                    {d.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Need Water Dispensers?" subtitle="Contact us for pricing and availability." />
    </>
  )
}
