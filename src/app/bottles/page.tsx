import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import bottleStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Water Bottles — 5 & 3 Gallon PET and PC Bottles | Sealper',
  description: "Sealper water bottles: Canadian-made BPA-free 5 gallon PET bottles, 5 and 3 gallon PC bottles, and 12L & 8L fridge packs. Built tough, sealed better.",
}

const bottles = [
  {
    tag: 'Made in Canada',
    name: '5 Gallon PET Bottle',
    image: '/images/products/bottle-5gal-pet.png',
    detailHref: '/bottles/pet-series',
    desc: 'BPA-free PET bottle manufactured in Calgary — lightweight, durable and reusable.',
    specs: ['BPA-free', 'Made in Canada', '700 g', 'Heat-fused handle', 'Reinforced rib structure', 'Leak-resistant design'],
  },
  {
    tag: 'Heavy Duty',
    name: '5 Gallon PC Bottle',
    image: '/images/products/bottle-5gal-pc.png',
    detailHref: '/bottles/pc-series',
    desc: 'Strong polycarbonate bottle built for reliable repeated use.',
    specs: ['Strong and durable', 'Wide-grip handle', '800 g', 'Seamless neck', 'Recessed base', 'Wear-resistant contact surface'],
  },
  {
    tag: 'Compact',
    name: '3 Gallon PC Bottle',
    image: '/images/products/bottle-3gal-pc.png',
    desc: 'A lighter 3 gallon size with the same strong PC build.',
    specs: ['Strong and durable', 'Wide-grip handle', 'Seamless neck', 'Recessed base', 'Wear-resistant contact surface', 'Lightweight and reusable'],
  },
  {
    tag: 'Fridge Pack',
    name: '12L Fridge Pack',
    image: '/images/products/fridge-pack-12l.png',
    desc: 'Space-saving jug with an easy-pour tap for the fridge, office or campsite.',
    specs: ['38 × 16 × 26 cm', 'Space-saving design', 'Easy-pour tap', 'Durable & reusable', 'Ideal for refrigerator storage', 'Great for home, office & camping'],
  },
  {
    tag: 'Fridge Pack',
    name: '8L Fridge Pack',
    image: '/images/products/fridge-pack-8l.png',
    desc: 'Compact everyday jug with an easy-pour tap that fits easily in the fridge.',
    specs: ['31 × 18 × 24 cm', 'Compact & convenient', 'Easy-pour tap', 'Reusable design', 'Fits easily in the refrigerator', 'Ideal for everyday use'],
  },
]

const differentiators = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    title: '100% Ultra-Pure BPA-Free Material',
    desc: 'Zero chemical migration. Crafted from food-grade PET, eliminating BPA and endocrine disruptors. Fully compliant with strict EU and North American safety standards.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 3h5v3.5h-5z"/>
        <path d="M8 6.5h8a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2z"/>
        <path d="M18 10h1.5a2.5 2.5 0 0 1 0 5H18"/>
      </svg>
    ),
    title: 'Heavy-Duty Reinforced Ergonomic Handle',
    desc: 'Eliminates the slippery, hard-to-carry hassles of traditional jugs. Specially engineered for 5-gallon loads with a slip-free grip.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 6-3 12M15 3l-3 6 3 12"/>
      </svg>
    ),
    title: 'Crystal-Clear Shatter-Resistant Structure',
    desc: 'Combines glass-like transparency with superior impact resistance. Reinforced ribs absorb drops to prevent cracking, keeping water high-clarity and visible.',
  },
]

export default function BottlesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Bottles</span>
          <h1 className="page-hero__title">SEALPER <em>Bottles</em></h1>
          <p className="page-hero__subtitle">
            5 &amp; 3 gallon PET and PC bottles, plus 12L and 8L fridge packs. Built tough, sealed better.
          </p>
        </div>
      </div>

      {/* ── Product Lineup ── */}
      <section className="section">
        <div className="container">
          <div className={styles.productsGrid}>
            {bottles.map((b) => (
              <div key={b.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  {b.detailHref ? (
                    <Link href={b.detailHref} aria-label={`View ${b.name} details`}>
                      <Image src={b.image} alt={b.name} fill sizes="(max-width: 768px) 100vw, 400px" />
                    </Link>
                  ) : (
                    <Image src={b.image} alt={b.name} fill sizes="(max-width: 768px) 100vw, 400px" />
                  )}
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productTag}>{b.tag}</span>
                  <h2 className={styles.productName}>{b.name}</h2>
                  <p className={styles.productDesc}>{b.desc}</p>
                  <div className={styles.productSpecs}>
                    {b.specs.map((s) => (
                      <div key={s} className={styles.productSpec}>{s}</div>
                    ))}
                  </div>
                  {b.detailHref && (
                    <Link href={b.detailHref} className={bottleStyles.detailLink}>
                      View Material Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Our Bottle is Different ── */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">The Sealper Difference</span>
            <h2 className="section-header__title">Built for Performance, Engineered for Safety</h2>
            <div className="divider" />
          </div>
          <div className="grid grid--3">
            {differentiators.map((d) => (
              <div key={d.title} className={bottleStyles.diffCard}>
                <div className={bottleStyles.diffIcon}>{d.icon}</div>
                <h3 className={bottleStyles.diffTitle}>{d.title}</h3>
                <p className={bottleStyles.diffDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Quality ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Manufacturing Quality</span>
            <h2 className="section-header__title">Clean Air Behind Every Bottle</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              A 3-stage Walker Filtration system and a German-manufactured compressed air system deliver cleaner,
              drier air for consistent PET bottle production.
            </p>
          </div>
          <figure className={bottleStyles.infographic}>
            <Image
              src="/images/air-filtration.jpg"
              alt="Advanced air filtration for stable, safe blow molding: a 3-stage Walker Filtration system — 1.0 micron particulate filtration, 0.01 micron oil removal filtration, and .003 PPM oil vapour removal filtration — with a German-manufactured compressed air system and CRN-registered pressure vessels."
              width={950}
              height={1342}
              sizes="(max-width: 768px) 100vw, 640px"
              className={bottleStyles.infographicImage}
              style={{ maxWidth: '640px' }}
            />
          </figure>
        </div>
      </section>

      {/* ── Compliance & Regulatory Notice ── */}
      <section className={bottleStyles.complianceSection}>
        <div className="container">
          <div className={bottleStyles.complianceHeader}>
            <span className={bottleStyles.complianceEyebrow}>Compliance &amp; Regulatory Notice</span>
            <h2 className={bottleStyles.complianceHeading}>Choosing the Right Material for Your Market</h2>
            <div className={bottleStyles.complianceRule} />
          </div>
          <div className={bottleStyles.complianceCard}>
            <div className={bottleStyles.complianceCol}>
              <p className={bottleStyles.complianceText}>
                To help our partners stay ahead of changing safety trends, please note that international markets
                (such as EU Regulation 2024/3190) are banning BPA in food-contact packaging.
              </p>
              <ul className={bottleStyles.complianceList}>
                <li>
                  <strong>For Future-Proof &amp; Pure Safety Needs:</strong> We recommend our PET Series — 100% BPA-Free
                  with high toughness and zero chemical migration.
                </li>
                <li>
                  <strong>For High-Temperature Commercial Washing:</strong> Our PC Series remains fully FDA-compliant,
                  engineered for rugged durability and automated hot-wash lines.
                </li>
              </ul>
            </div>
            <div className={bottleStyles.complianceCol}>
              <h3 className={bottleStyles.sourcesTitle}>Official Regulatory Sources:</h3>
              <a
                href="https://eur-lex.europa.eu/eli/reg/2024/3190/oj"
                target="_blank"
                rel="noopener noreferrer"
                className={bottleStyles.sourceLink}
              >
                🔗 EU Law Portal (EUR-Lex)
                <span className={bottleStyles.sourceLinkDesc}>Commission Regulation (EU) 2024/3190 Text</span>
              </a>
              <a
                href="https://www.efsa.europa.eu/en/topics/topic/bisphenol"
                target="_blank"
                rel="noopener noreferrer"
                className={bottleStyles.sourceLink}
              >
                🔗 EFSA (European Food Safety Authority)
                <span className={bottleStyles.sourceLinkDesc}>BPA Safety Assessment &amp; Guidelines</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Interested in Our Bottles?</h2>
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
