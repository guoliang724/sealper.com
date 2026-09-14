import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Premier BPA-Free Water Packaging Experts in Western Canada | Sealper',
  description: 'Sealper is your local, single-source supplier for Canadian-manufactured 5-gallon bottles, caps, racks, and pumps. Fast, reliable fulfillment from local warehouses in Vancouver, Calgary, Edmonton & Toronto.',
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const heroPoints = ['Made in Calgary', '100% BPA-Free PET', 'Custom Cap Labels']

const features = [
  {
    icon: <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
    title: 'FDA Approved & BPA Free',
    desc: 'Food-grade materials you can trust.',
  },
  {
    icon: <svg {...iconProps}><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    title: 'Same-Day Delivery',
    desc: 'Order before noon in 4 major cities.',
  },
  {
    icon: <svg {...iconProps}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: '100% Canadian Owned',
    desc: 'Headquartered in Calgary, Alberta.',
  },
  {
    icon: <svg {...iconProps}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    title: 'Custom Cap Labels',
    desc: 'Your brand on every cap, from one pallet.',
  },
]

const products = [
  { title: 'Bottles', href: '/bottles', image: '/images/products/bottle-5gal-pet.png', desc: '5 & 3 gallon PET & PC' },
  { title: 'Caps', href: '/caps', image: '/images/products/cap-non-spill.png', desc: 'Non-spill & one piece caps' },
  { title: 'Storage Racks', href: '/racks', image: '/images/products/rack-double-5-tier.png', desc: 'Home, office & commercial' },
  { title: 'Accessories', href: '/accessories', image: '/images/products/pump-manual.png', desc: 'Pumps, carts & dispensers' },
]

const aboutFacts = [
  'BPA-free PET bottles manufactured in Calgary',
  'Warehouses in Vancouver, Calgary, Edmonton & Toronto',
  'Custom labeled caps from just one pallet',
]

const steps = [
  {
    title: 'Tell us what you need',
    desc: 'Call, email, or send the contact form with the products and quantities you need.',
  },
  {
    title: 'Get your quote',
    desc: 'Our team replies with pricing and availability, usually within one business day.',
  },
  {
    title: 'Receive your order',
    desc: 'Same day in Vancouver, Calgary, Edmonton & Toronto. 2–4 business days across Western Canada.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>🍁 Sealper Plastics &amp; Packaging Inc.</span>
            <h1 className={styles.heroTitle}>
              One-Stop Packaging for <span className={styles.heroTitleAccent}>Bottled Water</span> Businesses
            </h1>
            <p className={styles.heroSubtitle}>
              5-gallon bottles, caps, storage racks and accessories — made and stocked in Canada. Built tough, sealed better.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact-us" className="btn btn--primary btn--lg">
                Get a Quote
                <ArrowIcon />
              </Link>
              <Link href="#products" className="btn btn--outline btn--lg">
                View Products
              </Link>
            </div>
            <ul className={styles.heroPoints}>
              {heroPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/products/bottle-5gal-pet.png"
              alt="Sealper 5 gallon PET water bottle"
              width={530}
              height={1000}
              loading="eager"
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 900px) 160px, 260px"
              className={styles.heroBottle}
            />
            <Image
              src="/images/products/cap-non-spill.png"
              alt="Sealper non-spill cap"
              width={962}
              height={565}
              quality={90}
              sizes="(max-width: 900px) 140px, 230px"
              className={styles.heroCap}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FEATURES ══════════════════════════ */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            {features.map((feat) => (
              <div key={feat.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>{feat.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PRODUCTS ══════════════════════════ */}
      <section id="products" className={`section ${styles.products}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-header__eyebrow">Our Products</span>
            <h2 className={styles.sectionTitle}>Everything Your Water Business <em>Needs</em></h2>
            <p className={styles.sectionLead}>One supplier for bottles, closures, storage and dispensing.</p>
          </div>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <Link key={product.title} href={product.href} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 300px"
                  />
                </div>
                <div className={styles.productBody}>
                  <div>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productDesc}>{product.desc}</p>
                  </div>
                  <span className={styles.productArrow} aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT ══════════════════════════ */}
      <section className="section section--subtle">
        <div className="container">
          <div className={styles.about}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/warehouse.jpg"
                alt="Sealper warehouse stocked with water packaging supplies"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.aboutContent}>
              <span className="section-header__eyebrow">Who We Are</span>
              <h2 className={styles.sectionTitle}>Canadian Manufacturing, <em>Local</em> Service</h2>
              <p className={styles.aboutText}>
                Sealper Plastics &amp; Packaging Inc. is a Canadian manufacturer and one-stop supplier for the
                bottled water industry. Stock is held close to you, so orders ship fast and arrive when you need them.
              </p>
              <ul className={styles.checkList}>
                {aboutFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
              <Link href="/about-us" className="btn btn--outline">
                Learn More About Us
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ HOW TO ORDER ══════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-header__eyebrow">How to Order</span>
            <h2 className={styles.sectionTitle}>Ordering Takes 3 <em>Simple</em> Steps</h2>
          </div>
          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <FAQ />

      {/* ══════════════════════════ CTA ══════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to Place an <em>Order?</em></h2>
              <p className={styles.ctaSubtitle}>Tell us what you need and we&apos;ll send pricing and availability.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/contact-us" className={`btn btn--lg ${styles.ctaPrimary}`}>
                Get a Quote
                <ArrowIcon />
              </Link>
              <a href="tel:4036675058" className="btn btn--outline-white btn--lg">
                Call 403-667-5058
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
