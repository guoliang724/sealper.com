import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Bottle Caps',
  description: 'Sealper non-spill, one piece and TriPierce caps for 5-gallon water bottles. TPE liner, no foam liner, 500 pcs loose pack, 4 colors in stock. Custom labeled caps from one pallet.',
}

const colors = [
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Green', hex: '#16A34A' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'White', hex: '#FFFFFF' },
]

const caps = [
  {
    tag: 'Spill-Free',
    name: 'Non-Spill Cap',
    image: '/images/products/cap-non-spill.png',
    desc: 'Easy-peel label and perforation for a clean, spill-free open.',
    specs: ['Premium 13g weight', 'TPE liner — no foam liner', 'Cleaner, more hygienic & eco-friendly', 'Easy-peel label & easy-tear perforation', 'Spill free during handling', 'Secure & leak-resistant seal', '500 pcs loose pack'],
  },
  {
    tag: 'One Piece',
    name: 'One Piece Cap',
    image: '/images/products/cap-one-piece.png',
    desc: 'One-piece design that never drops plugs into the bottle or water.',
    specs: ['Premium 12g weight', 'TPE liner — no foam liner', 'Cleaner, more hygienic & eco-friendly', 'Easy-tear design', 'No plugs into bottle and water', 'Strong, reliable seal', '500 pcs loose pack'],
  },
  {
    tag: 'Tri-Pierce',
    name: 'Sealper TriPierce Cap',
    image: '/images/products/cap-tripierce.png',
    desc: 'Three-way clean-pierce design for fast, clean dispensing.',
    specs: ['Premium 12g weight', 'TPE liner — no foam liner', 'Three-way clean-pierce design', 'Easy-tear design', 'No plugs into bottle and water', 'Strong, reliable seal', '500 pcs loose pack'],
  },
]

const shippingBadges = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    text: '500 Pcs Loose Pack',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    text: '4 Colors In Stock',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    text: 'TPE Liner — No Foam',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    text: 'Custom Labels from 1 Pallet',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    text: 'Ready to Ship',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    text: 'Canada & USA Delivery',
  },
]

const labelPoints = [
  'Local Canadian private-label service — no overseas production or long lead times',
  'Custom labeled caps start from just one pallet, with no large-volume commitment',
  'Local inventory for quick reorders and consistent brand presentation',
]

export default function CapsPage() {
  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Caps</span>
          <h1 className="page-hero__title">SEALPER <em>Caps</em></h1>
          <p className="page-hero__subtitle">
            Non-spill, one piece and TriPierce caps with TPE liners. Designed smart, sealed better.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {caps.map((c) => (
              <div key={c.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={c.image} alt={c.name} fill sizes="(max-width: 768px) 100vw, 400px" />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{c.tag}</span>
                  <h2 className={styles.productName}>{c.name}</h2>
                  <p className={styles.productDesc}>{c.desc}</p>
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
                  <div className={styles.productSpecs}>
                    {c.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Label Service */}
      <section className="section section--light">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/cap-labeling-machine.jpg"
                alt="Sealper cap labeling machine applying custom labels to caps"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="section-header__eyebrow">Customized Label Service</span>
              <h2 className="heading-md">Your Brand on Every Cap</h2>
              <ul className="spec-list">
                {labelPoints.map((point) => (
                  <li key={point} className="spec-list__item">{point}</li>
                ))}
              </ul>
              <Link href="/customized-labels" className="btn btn--outline">Learn About Custom Labels</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Packaging &amp; Supply</span>
            <h2 className="section-header__title">Ready to Ship</h2>
            <div className="divider" />
          </div>
          <div className={styles.badgeGrid}>
            {shippingBadges.map((b) => (
              <div key={b.text} className={styles.infoBadge}>
                <span className={styles.infoBadgeIcon}>{b.icon}</span>
                <span className={styles.infoBadgeText}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Order Caps Now</h2>
          <p className={styles.pageCtaSubtitle}>Contact us for bulk pricing and color availability.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Request a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
