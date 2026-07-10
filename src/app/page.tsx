import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: '5 Gallon Water Bottles Supplier | Sealper �?100% Canadian Owned',
  description: 'Sealper is a 100% Canadian-owned wholesale supplier for 5 gallon water bottles, caps, racks, and pumps. Same-day delivery in Vancouver, Calgary, Edmonton & Toronto. Serving Western Canada.',
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'FDA Approved & BPA Free',
    desc: 'All products meet strict food-grade safety standards �?guaranteed quality and safety for every customer.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Same-Day City Delivery',
    desc: 'Order before noon and receive your delivery the same day in Vancouver, Calgary, Edmonton, and Toronto.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: '100% Canadian Owned',
    desc: 'Proudly headquartered in Calgary with 4 warehouses across Canada �?local expertise, local service.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Custom Labels in 7 Days',
    desc: 'Brand your bottles with fully customized labels. From design submission to delivery in just 7 days.',
  },
]

const productCategories = [
  {
    title: 'Bottles',
    href: '/bottles',
    image: '/images/bottles_product.png',
    tag: 'Flagship Product',
    desc: "North America's only seamless IBW water bottle. Drop tested, cold tested, leak tested.",
  },
  {
    title: 'Caps',
    href: '/caps',
    image: '/images/caps_product.png',
    tag: 'Best Seller',
    desc: 'Premium non-spill caps with double sealing rings. FDA approved, 500 caps per box, ready to ship.',
  },
  {
    title: 'Racks',
    href: '/racks',
    image: '/images/racks_product.png',
    tag: 'Storage Solutions',
    desc: 'Single and double-row bottle racks in 3�? tiers. Ideal for depots, warehouses, and display.',
  },
  {
    title: 'Pumps',
    href: '/pumps',
    image: '/images/pumps_product.png',
    tag: 'Accessories',
    desc: 'Manual and USB rechargeable pumps. No batteries needed for manual model. Desktop & bottle-top options.',
  },
]

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: 'Same-Day', label: 'City Delivery' },
  { value: '7 Days', label: 'Custom Labels' },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <span className="badge badge--primary">🍁 100% Canadian Owned</span>
            <h1 className={styles.heroTitle}>
              Western Canada's
              <span className={styles.heroTitleAccent}> Premier</span>
              <br />Water Packaging Supplier
            </h1>
            <p className={styles.heroSubtitle}>
              One stop solution for 5 gallon bottles, caps, racks, pumps, and complete packaging supplies.
              Same-day delivery in Vancouver, Calgary, Edmonton &amp; Toronto.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/bottles" className="btn btn--primary btn--lg">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
              <Link href="/contact-us" className="btn btn--outline btn--lg">
                Get a Quote
              </Link>
            </div>
            <div className={styles.heroTrustRow}>
              <span className={styles.heroTrustItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                FDA Approved
              </span>
              <span className={styles.heroTrustItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                BPA Free
              </span>
              <span className={styles.heroTrustItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                4 Canadian Warehouses
              </span>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/images/hero_home.png"
            alt="Pristine glacial Canadian water �?Sealper wholesale water packaging"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroRightOverlay} />
          <div className={styles.heroWarehouses}>
            <span className={styles.heroWarehouseLabel}>Warehouse Locations</span>
            {['Vancouver', 'Calgary', 'Edmonton', 'Toronto'].map((city) => (
              <span key={city} className={styles.heroWarehouseCity}>{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ STATS ══════════════════════════ */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FEATURES ══════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Why Choose Sealper</span>
            <h2 className="section-header__title">Built on Trust, Quality &amp; Local Service</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              We are more than just suppliers �?we are your Canadian neighbours and strategic partners in bottled water packaging.
            </p>
          </div>
          <div className="grid grid--4">
            {features.map((feat) => (
              <div key={feat.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PRODUCTS ══════════════════════════ */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Our Products</span>
            <h2 className="section-header__title">Complete Packaging Solutions</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              From bottles to dispensing accessories �?everything your water business needs under one roof.
            </p>
          </div>
          <div className="grid grid--4">
            {productCategories.map((product) => (
              <Link key={product.title} href={product.href} className={`card ${styles.productCard}`}>
                <div className={styles.productCardImageWrap}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="card__image"
                  />
                </div>
                <div className="card__body">
                  <span className="card__tag">{product.tag}</span>
                  <h3 className="card__title">{product.title}</h3>
                  <p className="card__desc">{product.desc}</p>
                  <div className={styles.productCardCta}>
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.allProductsLink}>
            <Link href="/bottles" className="btn btn--outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT STRIP ══════════════════════════ */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.aboutStrip}>
            <div className={styles.aboutStripContent}>
              <span className="section-header__eyebrow" style={{ textAlign: 'left' }}>About SEALPER</span>
              <h2 className="heading-lg" style={{ marginBottom: '1rem', color: '#FFFFFF' }}>
                Western Canada's Fastest-Growing Bottled Water Packaging Supplier
              </h2>
              <p className={styles.aboutStripText}>
                Headquartered in Calgary, Alberta, Sealper is a 100% Canadian-owned supplier for bottled water
                packaging solutions. With warehouses in Vancouver, Calgary, Edmonton, and Toronto, we deliver
                to your door with speed and care �?same day within city, 2�? days across Western Canada.
              </p>
              <div className={styles.aboutHighlights}>
                {[
                  'Headquarters: Calgary, Alberta',
                  'Warehouses: Vancouver · Edmonton · Calgary · Toronto',
                  'Serving All of Western Canada',
                  '10+ Years of Industry Excellence',
                ].map((item) => (
                  <div key={item} className="spec-list__item" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/about-us" className="btn btn--outline-white" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Learn More About Us
              </Link>
            </div>
            <div className={styles.aboutStripImage}>
              <Image
                src="/images/about_banner.png"
                alt="Sealper Canadian warehouse and logistics"
                fill
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <FAQ />

      {/* ══════════════════════════ CTA ══════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Ready to Order?</span>
            <h2 className={styles.ctaTitle}>Let's Get Your Order Moving Today</h2>
            <p className={styles.ctaSubtitle}>
              Drop us a line and our Canadian team will get back to you with pricing and availability.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact-us" className="btn btn--primary btn--lg">
                Contact Us Today
              </Link>
              <a href="tel:4036675058" className="btn btn--outline-white btn--lg">
                403-667-5058
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
