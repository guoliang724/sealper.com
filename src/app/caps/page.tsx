import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: '5 Gallon Water Bottle Caps Supplier Canada | Sealper' },
  description: 'One-Piece, Tri-Pierce and Non-Spill caps for 5 gallon water bottles. TPE sealing liner, 500 pcs loose pack, 4 colours in stock and custom cap labeling.',
}

const colors = [
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Green', hex: '#16A34A' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'White', hex: '#FFFFFF' },
]

const caps = [
  {
    name: 'One-Piece Cap',
    subname: 'Tri-Pierce Design',
    image: '/images/products/cap-tripierce.png',
    alt: '5 gallon tri-pierce water bottle cap',
    desc: 'A one-piece cap that leaves no loose plug in the bottle, designed for clean, controlled piercing when the bottle is loaded onto a dispenser.',
    specs: ['Tri-Pierce Design', 'TPE Sealing Liner', 'No Loose Plug', 'Easy-Tear Design', '500 pcs loose pack'],
    video: '/videos/one-piece-cap.mp4',
    poster: '/videos/one-piece-cap-poster.jpg',
  },
  {
    name: 'Non-Spill Cap',
    image: '/images/products/cap-non-spill.png',
    alt: '5 gallon non-spill water bottle cap',
    desc: 'A secure, leak-resistant seal designed to reduce leaks during handling, with an easy-peel label and tear perforation for a clean open.',
    specs: ['Secure, Leak-Resistant Seal', 'TPE Sealing Liner', 'Easy-Peel Label & Tear Perforation', '500 pcs loose pack'],
    video: '/videos/non-spill-cap.mp4',
    poster: '/videos/non-spill-cap-poster.jpg',
  },
]

const labelPoints = ['Local Labeling in Calgary — MOQ from 1 pallet', 'Factory-Direct Labeling — MOQ from 6 pallets']

export default function CapsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">Caps</h1>
          <p className="page-hero__subtitle">One-Piece, Tri-Pierce and Non-Spill caps for 5 gallon water bottles.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={`${styles.productsGrid} ${styles.productsGridPair}`}>
            {caps.map((c) => (
              <div key={c.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 600px" />
                </div>
                <div className={styles.productCardBody}>
                  <h2 className={styles.productName}>{c.name}</h2>
                  {c.subname && <p className={styles.productSubname}>{c.subname}</p>}
                  <p className={styles.productDesc}>{c.desc}</p>
                  <div className={styles.productSpecs}>
                    {c.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                  <div className={styles.colorRow}>
                    <span className={styles.colorLabel}>Colors in stock</span>
                    {colors.map((color) => (
                      <span
                        key={color.name}
                        role="img"
                        aria-label={color.name}
                        title={color.name}
                        className={styles.swatch}
                        style={{ background: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product videos */}
      <section className="section section--subtle">
        <div className="container">
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>See the Caps in Action</h2>
          </div>
          <div className={`${styles.productsGrid} ${styles.productsGridPair}`}>
            {caps.map((c) => (
              <figure key={c.name} className={styles.videoCard}>
                <video
                  className={styles.video}
                  src={c.video}
                  poster={c.poster}
                  controls
                  muted
                  playsInline
                  preload="none"
                  aria-label={`${c.name} product video`}
                />
                <figcaption className={styles.videoCaption}>{c.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Cap Label Service */}
      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/cap-labeling-machine.jpg"
                alt="Cap labeling machine applying custom labels to 5 gallon water bottle caps"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">Service</span>
              <h2 className={styles.splitTitle}>Custom Cap Labeling</h2>
              <div className={styles.productSpecs}>
                {labelPoints.map((p) => <div key={p} className={styles.productSpec}>{p}</div>)}
              </div>
              <Link href="/customized-labels" className="btn btn--outline">About Custom Cap Labeling</Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Order Caps" subtitle="Contact us for pricing and color availability." />
    </>
  )
}
