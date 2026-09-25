import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Caps — One-Piece & Non-Spill Caps',
  description: 'Sealper caps for 5 gallon water bottles: One-Piece Cap with Tri-Pierce design and Non-Spill Cap. TPE liner, 500 pcs loose pack, 4 colors in stock, customized cap labels.',
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
    desc: 'A one-piece cap that leaves no loose plug in the bottle. Its Tri-Pierce design gives a clean, easy pierce when the bottle is loaded onto a dispenser.',
    specs: ['Tri-Pierce design', 'TPE liner — no foam liner', 'Easy-tear design', '500 pcs loose pack'],
    video: '/videos/one-piece-cap.mp4',
    poster: '/videos/one-piece-cap-poster.jpg',
  },
  {
    name: 'Non-Spill Cap',
    image: '/images/products/cap-non-spill.png',
    desc: 'Easy-peel label and tear perforation for a clean open, with a secure seal during handling.',
    specs: ['Spill-free during handling', 'TPE liner — no foam liner', 'Easy-peel label & tear perforation', '500 pcs loose pack'],
    video: '/videos/non-spill-cap.mp4',
    poster: '/videos/non-spill-cap-poster.jpg',
  },
]

const labelPoints = ['Flexible MOQ', 'Local Labeling Available', 'Fast Turnaround']

export default function CapsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">Caps</h1>
          <p className="page-hero__subtitle">One-Piece and Non-Spill caps for 5 gallon water bottles.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={`${styles.productsGrid} ${styles.productsGridPair}`}>
            {caps.map((c) => (
              <div key={c.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={c.image} alt={c.name} fill sizes="(max-width: 768px) 100vw, 600px" />
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
                alt="Cap labeling machine applying custom labels to caps"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">Customized Cap Label Service</span>
              <h2 className={styles.splitTitle}>Build Your Brand on Every Cap</h2>
              <div className={styles.productSpecs}>
                {labelPoints.map((p) => <div key={p} className={styles.productSpec}>{p}</div>)}
              </div>
              <Link href="/customized-labels" className="btn btn--outline">About Customized Labels</Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Order Caps" subtitle="Contact us for pricing and color availability." />
    </>
  )
}
