import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import bottleStyles from './page.module.css'

export const metadata: Metadata = {
  title: "Water Bottles �?North America's Only Seamless IBW Bottle | Sealper",
  description: "Sealper's 5 gallon water bottles are North America's only seamless injection-blow-molded (IBW) bottles. Drop tested, cold tested, leak tested. FDA approved, BPA free. Same-day delivery in Vancouver, Calgary, Edmonton & Toronto.",
}

const bottles = [
  {
    tag: 'Most Popular',
    name: '5 Gallon PC Bottles',
    image: '/images/bottles_product.png',
    desc: 'Premium polycarbonate 5-gallon bottle with anti-skid orange peel bottom for maximum stability. Perfect for home and office water dispensers.',
    specs: ['Weight: 840g', 'Anti-skid embossed bottom pattern', 'Crystal clear polycarbonate', 'FDA Approved & BPA Free', 'Compatible with standard dispensers'],
  },
  {
    tag: 'Compact & Portable',
    name: '3 Gallon PC Bottles',
    image: '/images/bottles_product.png',
    desc: 'Narrow and tall design �?clean, clear, and incredibly easy to carry and store. Ideal for smaller offices, camping, and household use.',
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
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    title: 'Seamless IBW Process',
    desc: 'Injection-blow-molded in a single operation �?zero welding seams, zero weak points. Unlike conventional bottles assembled from multiple parts, our IBW process creates a monolithic structure with uniform wall thickness throughout.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Anti-Skid Orange Peel Bottom',
    desc: 'The unique embossed orange-peel texture on the base provides exceptional grip on wet surfaces �?a critical safety feature for water dispensing environments. Prevents accidental tipping with or without a rack.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    title: '100% Food-Grade Safety',
    desc: 'FDA approved and BPA free polycarbonate. Every batch is quality-controlled at our Canadian distribution centres. Crystal-clear material lets you inspect water quality at a glance.',
  },
]

const videoTests = [
  {
    id: 'drop',
    label: 'Drop Test',
    icon: '⬇️',
    claim: 'Dropped from 1.5m �?zero cracks',
    desc: 'The seamless IBW structure absorbs impact forces evenly. No seam lines to split, no weak points to crack.',
    src: '/videos/drop-test.mp4',
    poster: '/images/bottles_product.png',
  },
  {
    id: 'cold',
    label: 'Cold Test',
    icon: '🧊',
    claim: 'Withstands �?0°C without brittleness',
    desc: 'High-grade polycarbonate retains flexibility at sub-zero temperatures �?ideal for cold-chain storage and winter delivery.',
    src: '/videos/cold-test.mp4',
    poster: '/images/bottles_product.png',
  },
  {
    id: 'leak',
    label: 'Leak Test',
    icon: '💧',
    claim: 'Inverted for 24 hours �?zero leakage',
    desc: 'Seamless sidewalls combined with our premium non-spill cap system guarantee a perfect seal under full static load.',
    src: '/videos/leak-test.mp4',
    poster: '/images/bottles_product.png',
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
            North America's Only<br />
            <em>Seamless</em> IBW Water Bottle
          </h1>
          <p className="page-hero__subtitle">
            Injection-blow-molded in a single operation. Zero seams. Zero weak points.
            Drop tested, cold tested, leak tested �?and backed by a Canadian team.
          </p>
        </div>
      </div>

      {/* ── Why Our Bottle is Different ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">The Sealper Difference</span>
            <h2 className="section-header__title">Why Our Bottles Stand Alone</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Every other 5-gallon bottle on the North American market is assembled from separately molded parts.
              Ours is formed in a single seamless process �?a fundamental difference in strength and reliability.
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

      {/* ── Test Evidence Videos ── */}
      <section className={`section section--subtle ${bottleStyles.videoSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Verified Performance</span>
            <h2 className="section-header__title">See the Tests for Yourself</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              We don't just claim durability �?we prove it on camera. Watch our three core performance tests.
            </p>
          </div>
          <div className="grid grid--3">
            {videoTests.map((test) => (
              <div key={test.id} className={bottleStyles.videoCard}>
                <div className={bottleStyles.videoWrap}>
                  <video
                    className={bottleStyles.video}
                    poster={test.poster}
                    controls
                    preload="none"
                    playsInline
                    aria-label={`${test.label} video`}
                  >
                    <source src={test.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={bottleStyles.videoBadge}>{test.icon} {test.label}</div>
                </div>
                <div className={bottleStyles.videoBody}>
                  <p className={bottleStyles.videoClaim}>{test.claim}</p>
                  <p className={bottleStyles.videoDesc}>{test.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={bottleStyles.videoNote}>
            Videos are filmed under controlled conditions. Results reflect the standard IBW manufacturing process applied to all Sealper bottles.
          </p>
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
                  <Image src={b.image} alt={b.name} fill style={{ objectFit: 'cover' }} />
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
