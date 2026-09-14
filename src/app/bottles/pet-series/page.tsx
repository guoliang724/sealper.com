import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../../products.module.css'
import bottleStyles from '../page.module.css'

export const metadata: Metadata = {
  title: '5 Gallon PET Bottles — Material & Compliance Details | Sealper',
  description: "Full material details for Sealper's Canadian-made 100% BPA-Free PET 5-gallon water bottle. EU 2024/3190 compliant, ultra-clear, shatter-resistant, ergonomic handle.",
}

const petSpecs = [
  '100% BPA-Free, meets EU 2024/3190 standards',
  'Ergonomic external handle, non-slip and effortless',
  'Ultra-clear blue, easy water quality inspection',
  'High toughness, lightweight and shatter-resistant',
  'Ideal for homes, premium offices, and EU/NA markets',
  'Made in Canada · Approx. 700g',
]

export default function PetSeriesPage() {
  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <Link href="/bottles" className={bottleStyles.backLink}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
            Back to Bottles
          </Link>
          <span className="page-hero__eyebrow">Products / Bottles / PET Series</span>
          <h1 className="page-hero__title">5 Gallon <em>PET</em> Bottles</h1>
          <p className="page-hero__subtitle">
            Canadian-made, 100% BPA-free PET engineered for top-tier purity, fast local delivery, and full EU &amp; North American compliance.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={bottleStyles.detailGrid}>
            <div className={bottleStyles.detailImageWrap}>
              <Image src="/images/products/bottle-5gal-pet.png" alt="5 Gallon PET Bottle" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain', padding: '2rem' }} />
            </div>
            <div>
              <span className="section-header__eyebrow" style={{ textAlign: 'left', display: 'block' }}>Material &amp; Specifications</span>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>100% BPA-Free PET, Built for Purity</h2>
              <div className="spec-list">
                {petSpecs.map((s) => <div key={s} className="spec-list__item">{s}</div>)}
              </div>
              <Link href="/contact-us" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Material Comparison ── */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Material Comparison</span>
            <h2 className="section-header__title">PET vs. PC — Which Is Right for You?</h2>
            <div className="divider" />
          </div>
          <div className={bottleStyles.compareTableWrap}>
            <table className={bottleStyles.compareTable}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>PET Series (this page)</th>
                  <th>PC Series</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Origin</td><td className={bottleStyles.compareHighlight}>Made in Canada</td><td>Imported</td></tr>
                <tr><td>BPA Content</td><td className={bottleStyles.compareHighlight}>100% BPA-Free</td><td>BPA-based polycarbonate</td></tr>
                <tr><td>EU 2024/3190 Compliance</td><td className={bottleStyles.compareHighlight}>Fully compliant</td><td>Not for EU markets</td></tr>
                <tr><td>Weight</td><td>Approx. 700g</td><td>Approx. 800g</td></tr>
                <tr><td>Best For</td><td>Homes, premium offices, EU/NA markets</td><td>Commercial refill stations, hot-wash lines</td></tr>
                <tr><td>Temperature Tolerance</td><td>Standard cold-chain use</td><td className={bottleStyles.compareHighlight}>High-temperature refill &amp; wash</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Sources: <a href="https://eur-lex.europa.eu/eli/reg/2024/3190/oj" target="_blank" rel="noopener noreferrer">EU Law Portal (EUR-Lex) — Regulation (EU) 2024/3190</a>
            {' '}·{' '}
            <a href="https://www.efsa.europa.eu/en/topics/topic/bisphenol" target="_blank" rel="noopener noreferrer">EFSA BPA Safety Assessment &amp; Guidelines</a>
          </p>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Interested in Our PET Bottles?</h2>
          <p className={styles.pageCtaSubtitle}>Contact us for pricing, minimum order quantities, and same-day delivery options.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Request a Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
