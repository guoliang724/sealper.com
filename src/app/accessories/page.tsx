import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Accessories & Water Dispensers',
  description: 'Sealper accessories for 3 & 5 gallon water bottles — USB rechargeable dispenser, manual pump, table stand cradle, utility cart, and top & bottom load water dispensers.',
}

type Product = {
  tag: string
  name: string
  image: string
  specs: string[]
}

const accessories: Product[] = [
  {
    tag: 'Electric',
    name: 'USB Rechargeable Dispenser',
    image: '/images/products/dispenser-usb.png',
    specs: ['Dual-motor, fast-flow design', 'Dual outlet & low-noise operation', '3-level quantitative dispensing', 'USB rechargeable', 'Fits 3 & 5 gallon bottles'],
  },
  {
    tag: 'Manual',
    name: 'Manual Water Bottle Pump',
    image: '/images/products/pump-manual.png',
    specs: ['Built tough for everyday use', 'Reliable manual operation', 'No power required', 'Simple & easy to use', 'Fits 3 & 5 gallon bottles'],
  },
  {
    tag: 'Cradle',
    name: 'Table Stand Cradle with Spigot',
    image: '/images/products/cradle-table-stand.png',
    specs: ['Elevated spigot for easy cup filling', 'Quick assembly & disassembly', 'Stable, compact & space-saving', 'Fits 3 & 5 gallon bottles'],
  },
  {
    tag: 'Cart',
    name: 'Convertible Bottle Utility Cart',
    image: '/images/products/utility-cart.png',
    specs: ['Built tough for everyday use', 'Simple & easy to use', 'Fits 3 & 5 gallon bottles'],
  },
]

const dispensers: Product[] = [
  {
    tag: 'Top Load',
    name: 'Top Load Water Dispenser',
    image: '/images/products/dispenser-top-load.png',
    specs: ['Hot, cold & room-temperature water', 'Elevated dispensing height — no bending', 'Fits up to 1L bottles & tumblers', 'Lower storage cabinet for cups & supplies', 'Practical, durable & space-saving'],
  },
  {
    tag: 'Bottom Load',
    name: 'Bottom Load Water Dispenser',
    image: '/images/products/dispenser-bottom-load.png',
    specs: ['Hot, cold & room-temperature water', 'Fits 3 & 5 gallon bottles', 'Elevated dispensing height — no bending', 'Fits up to 1L bottles & tumblers', 'Premium stainless steel finish'],
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageWrap}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 400px" />
      </div>
      <div className={styles.productCardBody}>
        <span className={styles.productTag}>{product.tag}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productSpecs}>
          {product.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
        </div>
      </div>
    </div>
  )
}

export default function AccessoriesPage() {
  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Accessories</span>
          <h1 className="page-hero__title">SEALPER <em>Accessories</em></h1>
          <p className="page-hero__subtitle">
            Pumps, cradles, carts and water dispensers to complete your 3 &amp; 5 gallon bottle setup.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.group}>
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>Bottle Accessories</h2>
              <p className={styles.groupDesc}>Dispense, pour and move bottles with ease.</p>
            </div>
            <div className={styles.productsGrid}>
              {accessories.map((p) => <ProductCard key={p.name} product={p} />)}
            </div>
          </div>

          <div className={styles.group}>
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>Water Dispensers</h2>
              <p className={styles.groupDesc}>Hot, cold and room-temperature water for home and office.</p>
            </div>
            <div className={styles.productsGrid}>
              {dispensers.map((p) => <ProductCard key={p.name} product={p} />)}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Order Accessories Today</h2>
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
