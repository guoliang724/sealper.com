import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Accessories — Pumps, Cradles, Carts & Fridge Packs',
  description: 'Sealper accessories for 3 and 5 gallon water bottles — USB / electric pump, manual pump, table stand cradle, utility cart, and 8L / 12L fridge packs.',
}

const accessories = [
  {
    name: 'USB / Electric Pump',
    image: '/images/products/dispenser-usb.png',
    specs: ['USB rechargeable', '3-level quantitative dispensing', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Manual Pump',
    image: '/images/products/pump-manual.png',
    specs: ['No power required', 'Simple & easy to use', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Table Stand Cradle',
    image: '/images/products/cradle-table-stand.png',
    specs: ['Elevated spigot for easy filling', 'Stable & compact', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Utility Cart',
    image: '/images/products/utility-cart.png',
    specs: ['Convertible design', 'Built for everyday use', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: '8L Fridge Pack',
    image: '/images/products/fridge-pack-8l.png',
    specs: ['31 × 18 × 24 cm', 'Easy-pour tap', 'Fits easily in the refrigerator'],
  },
  {
    name: '12L Fridge Pack',
    image: '/images/products/fridge-pack-12l.png',
    specs: ['38 × 16 × 26 cm', 'Easy-pour tap', 'Space-saving design'],
  },
]

export default function AccessoriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">Accessories</h1>
          <p className="page-hero__subtitle">Pumps, cradles, carts and fridge packs for 3 and 5 gallon bottles.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {accessories.map((p) => (
              <div key={p.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div className={styles.productCardBody}>
                  <h2 className={styles.productName}>{p.name}</h2>
                  <div className={styles.productSpecs}>
                    {p.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Order Accessories" subtitle="Contact us for pricing and availability." />
    </>
  )
}
