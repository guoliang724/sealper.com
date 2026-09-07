import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import bottleStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Premium Canadian-Made Water Bottles — PET & PC Series | Sealper',
  description: "Choose Sealper's Canadian-made 100% BPA-Free PET Series for top-tier purity and full EU/NA compliance, or our imported PC Series engineered for high-temperature commercial refilling. Same-day delivery in Vancouver, Calgary, Edmonton & Toronto.",
}

const bottles = [
  {
    tag: 'Flagship — BPA Free',
    name: '5 Gallon PET Bottles',
    image: '/images/bottle_pet_product.jpg',
    detailHref: '/bottles/pet-series',
    desc: 'Canadian-made, 100% BPA-free PET built for top-tier purity, fast local delivery, and full EU/North American compliance.',
    specs: [
      '100% BPA-Free, meets EU 2024/3190 standards',
      'Ergonomic external handle, non-slip and effortless',
      'Ultra-clear blue, easy water quality inspection',
      'High toughness, lightweight and shatter-resistant',
      'Ideal for homes, premium offices, and EU/NA markets',
    ],
  },
  {
    tag: 'High-Temperature Duty',
    name: '5 Gallon PC Bottles',
    image: '/images/bottle_pc_product.jpg',
    detailHref: '/bottles/pc-series',
    desc: 'Imported polycarbonate engineered for rugged durability and specialized high-temperature commercial refilling.',
    specs: [
      '840g heavy-duty PC for maximum rigidity',
      'FDA compliant, ideal for non-EU markets',
      'Seamless molded handle',
      'Classic aqua blue, frosted or clear finish',
      'Ultra-rigid, heat-resistant for high-temp refills',
      'Built for commercial refill stations and hot-wash uses',
    ],
  },
  {
    tag: 'Compact & Portable',
    name: '3 Gallon PC Bottles',
    image: '/images/bottles_product.png',
    desc: 'Narrow and tall design — clean, clear, and incredibly easy to carry and store. Ideal for smaller offices, camping, and household use.',
    specs: ['Narrow & tall design', 'Lightweight & easy to handle', 'Crystal clear visibility', 'FDA Approved & BPA Free', 'Easy to clean'],
  },
  {
    tag: 'Versatile',
    name: 'Fridge Pack Camping Jugs',
    image: '/images/bottles_product.png',
    desc: 'The most durable and versatile camping and fridge jug. Easy to carry, clean, and store. Designed for outdoor adventures and emergency readiness.',
    specs: ['Most durable design', 'Versatile multi-use application', 'Easy carry & clean', 'Compact for refrigerator storage', 'Suitable for outdoor use'],
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
      <div className="page-hero" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_bottles.png"
            alt="Sealper seamless IBW water bottles"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Bottles</span>
          <h1 className="page-hero__title">
            Premium Canadian-Made Water Bottles:<br />
            Engineered for Every Market Need
          </h1>
          <p className="page-hero__subtitle">
            Choose our Canadian-made 100% BPA-Free PET Series for top-tier purity, fast local delivery, and total compliance —
            or our Imported PC Series engineered for specialized high-temperature commercial refilling.
          </p>
        </div>
      </div>

      {/* ── Why Our Bottle is Different ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">The Sealper Difference</span>
            <h2 className="section-header__title">Built for Performance, Engineered for Safety</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              From precision Canadian-manufactured PET to robust imported PC, our water bottles are built to solve your
              daily operational challenges — offering zero leakage, effortless handling, and trusted quality.
            </p>
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
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Manufacturing Quality</span>
            <h2 className="section-header__title">Clean Air Behind Every Bottle</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Our blow molding line runs on a high-performance 3-stage Walker Filtration system, conditioning
              the compressed air that shapes every Sealper bottle — cleaner, drier, and oil-free.
            </p>
          </div>
          <figure className={bottleStyles.infographic}>
            <Image
              src="/images/filtration_infographic.jpg"
              alt="Advanced air filtration for our blow molding process: a 3-stage Walker Filtration system — 1.0 micron particulate filtration, 0.01 micron oil removal filtration, and .003 PPM oil vapour removal filtration. Features high efficiency push-on filter elements, externally accessible float operated auto-drains with manual overrides and plastic drain shields, differential pressure indicators, and die cast powder coated aluminum housings."
              width={1448}
              height={1086}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className={bottleStyles.infographicImage}
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

      {/* ── Product Lineup ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Product Lineup</span>
            <h2 className="section-header__title">Choose Your Size</h2>
            <div className="divider" />
          </div>
          <div className={styles.productsGrid}>
            {bottles.map((b) => (
              <div key={b.name} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  {b.detailHref ? (
                    <Link href={b.detailHref} aria-label={`View ${b.name} details`}>
                      <Image src={b.image} alt={b.name} fill style={{ objectFit: 'cover' }} />
                    </Link>
                  ) : (
                    <Image src={b.image} alt={b.name} fill style={{ objectFit: 'cover' }} />
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
