import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Water Dispensers — Top Load & Bottom Load',
  description: 'Sealper top load and bottom load water dispensers for 3 and 5 gallon bottles — hot, cold and room-temperature water for home and office.',
}

const dispensers = [
  {
    name: 'Top Load Water Dispenser',
    image: '/images/products/dispenser-top-load.png',
    desc: 'A practical, space-saving dispenser with a storage cabinet below.',
    specs: ['Hot, cold & room-temperature water', 'Elevated dispensing height', 'Lower storage cabinet'],
  },
  {
    name: 'Bottom Load Water Dispenser',
    image: '/images/products/dispenser-bottom-load.png',
    desc: 'Load the bottle at the base — no lifting onto the top.',
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
          <p className="page-hero__subtitle">Top load and bottom load dispensers for home and office.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={`${styles.productsGrid} ${styles.productsGridPair}`}>
            {dispensers.map((d) => (
              <div key={d.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={d.image} alt={d.name} fill sizes="(max-width: 768px) 100vw, 600px" />
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
