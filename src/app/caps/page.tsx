import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'

export const metadata: Metadata = {
  title: 'Bottle Caps',
  description: 'Sealper premium non-spill and standard water bottle caps. FDA Approved, BPA Free. 500 caps per box, ready to ship in 2-4 business days.',
}

const caps = [
  {
    tag: 'Premium',
    name: 'Premium Non-Spill Caps',
    image: '/images/caps_product.png',
    desc: 'Top-of-the-line non-spill cap with double sealing ring technology. Easy to put on and peel off. Customized labels available.',
    specs: ['Weight: 13g', 'Double sealing ring', 'Easily put on & peel off', 'FDA Approved & BPA Free', 'Customized label available'],
  },
  {
    tag: 'Standard',
    name: 'Standard One-Piece Caps',
    image: '/images/caps_product.png',
    desc: 'Reliable one-piece cap with long skirt design and floater-free engineering. Perfect for standard water bottle operations.',
    specs: ['Weight: 13g', 'Long skirt design', 'Floater free', 'Double sealing ring', 'FDA Approved & BPA Free'],
  },
  {
    tag: 'Economical',
    name: 'Basic Lightweight Caps',
    image: '/images/caps_product.png',
    desc: 'Cost-effective lightweight option with single sealing ring and floater-free design. Great for high-volume operations.',
    specs: ['Weight: 8g', 'Single sealing ring', 'Floater free', 'FDA Approved & BPA Free', 'Economical choice'],
  },
]

const shippingBadges = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    text: '500 Caps Per Box',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    text: '36 Boxes Per Pallet',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    text: '4 Colors In Stock',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    text: '2-4 Business Day Delivery',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    text: 'FDA Approved & BPA Free',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    text: 'Customized Label Available',
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

export default function CapsPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(72px + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_caps.png"
            alt="Caps background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Caps</span>
          <h1 className="page-hero__title">SEALPER Caps</h1>
          <p className="page-hero__subtitle">
            Premium, standard, and economical water bottle cap options. All FDA Approved and BPA Free.
            Ready to ship in 2-4 business days.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {caps.map((c) => (
              <div key={c.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <Image src={c.image} alt={c.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{c.tag}</span>
                  <h2 className={styles.productName}>{c.name}</h2>
                  <p className={styles.productDesc}>{c.desc}</p>
                  <div className={styles.productSpecs}>
                    {c.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Shipping &amp; Packaging</span>
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
