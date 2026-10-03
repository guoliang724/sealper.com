import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: '5 Gallon Water Bottle Accessories Canada | Sealper' },
  description: 'HOD accessories for 3 and 5 gallon water bottles — USB / electric pump, manual pump, table stand cradle, utility cart, and 8L / 12L fridge packs.',
}

const accessories = [
  {
    name: 'USB / Electric Pump',
    image: '/images/products/dispenser-usb.png',
    alt: 'USB rechargeable electric pump for 5 gallon water bottles',
    specs: ['USB rechargeable', 'Three preset dispensing volumes', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Manual Pump',
    image: '/images/products/pump-manual.png',
    alt: 'manual pump for 5 gallon water bottles',
    specs: ['Manual operation · No power required', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Table Stand Cradle',
    image: '/images/products/cradle-table-stand.png',
    alt: 'tabletop cradle stand for a 5 gallon water bottle',
    specs: ['Elevated spigot for filling cups and jugs', 'Compact tabletop design', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: 'Utility Cart',
    image: '/images/products/utility-cart.png',
    alt: 'convertible utility cart for moving 5 gallon water bottles',
    specs: ['Convertible design', 'Fits 3 & 5 gallon bottles'],
  },
  {
    name: '8L Fridge Pack',
    image: '/images/products/fridge-pack-8l.png',
    alt: '8L fridge pack water container with tap',
    specs: ['31 × 18 × 24 cm', 'Built-in tap', 'Sized for refrigerator shelves'],
  },
  {
    name: '12L Fridge Pack',
    image: '/images/products/fridge-pack-12l.png',
    alt: '12L fridge pack water container with tap',
    specs: ['38 × 16 × 26 cm', 'Built-in tap', 'Sized for refrigerator shelves'],
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
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 400px" />
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
