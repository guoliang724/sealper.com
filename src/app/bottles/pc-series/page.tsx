import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../../products.module.css'
import bottleStyles from '../page.module.css'

export const metadata: Metadata = {
  title: '5 Gallon PC Bottles — Material & Compliance Details | Sealper',
  description: "Full material details for Sealper's imported 840g heavy-duty PC 5-gallon water bottle. FDA compliant, seamless molded handle, engineered for high-temperature commercial refilling.",
}

const pcSpecs = [
  '840g heavy-duty PC for maximum rigidity',
  'FDA compliant, ideal for non-EU markets',
  'Seamless molded handle',
  'Classic aqua blue, frosted or clear finish',
  'Ultra-rigid, heat-resistant for high-temp refills',
  'Built for commercial refill stations and hot-wash uses',
]

export default function PcSeriesPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="page-hero__bg">
          <Image src="/images/hero_bottles.png" alt="Sealper PC water bottles" fill priority style={{ objectFit: 'cover' }} />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <Link href="/bottles" className={bottleStyles.backLink}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
            Back to Bottles
          </Link>
          <span className="page-hero__eyebrow">Products / Bottles / PC Series</span>
          <h1 className="page-hero__title">5 Gallon PC Bottles</h1>
          <p className="page-hero__subtitle">
            Imported polycarbonate engineered for rugged durability, FDA-compliant safety, and specialized high-temperature commercial refilling.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={bottleStyles.detailGrid}>
            <div className={bottleStyles.detailImageWrap}>
              <Image src="/images/bottle_pc_product.jpg" alt="5 Gallon PC Bottle" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <span className="section-header__eyebrow" style={{ textAlign: 'left', display: 'block' }}>Material &amp; Specifications</span>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Heavy-Duty PC, Built for High-Temp Duty</h2>
              <div className="spec-list">
                {pcSpecs.map((s) => <div key={s} className="spec-list__item">{s}</div>)}
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
            <h2 className="section-header__title">PC vs. PET — Which Is Right for You?</h2>
            <div className="divider" />
          </div>
          <div className={bottleStyles.compareTableWrap}>
            <table className={bottleStyles.compareTable}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>PC Series (this page)</th>
                  <th>PET Series</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Origin</td><td>Imported</td><td>Made in Canada</td></tr>
                <tr><td>BPA Content</td><td>BPA-based polycarbonate</td><td>100% BPA-Free</td></tr>
                <tr><td>EU 2024/3190 Compliance</td><td>Not for EU markets</td><td>Fully compliant</td></tr>
                <tr><td>Weight</td><td>Approx. 840g</td><td>Approx. 700g</td></tr>
                <tr><td>Best For</td><td>Commercial refill stations, hot-wash lines</td><td>Homes, premium offices, EU/NA markets</td></tr>
                <tr><td>Temperature Tolerance</td><td className={bottleStyles.compareHighlight}>High-temperature refill &amp; wash</td><td>Standard cold-chain use</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            For future-proof, EU-compliant purity, see our{' '}
            <Link href="/bottles/pet-series">PET Series details</Link>.
            {' '}Sources: <a href="https://eur-lex.europa.eu/eli/reg/2024/3190/oj" target="_blank" rel="noopener noreferrer">EU Law Portal (EUR-Lex) — Regulation (EU) 2024/3190</a>
            {' '}·{' '}
            <a href="https://www.efsa.europa.eu/en/topics/topic/bisphenol" target="_blank" rel="noopener noreferrer">EFSA BPA Safety Assessment &amp; Guidelines</a>
          </p>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Interested in Our PC Bottles?</h2>
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
