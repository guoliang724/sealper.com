import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: '5 Gallon Bottles and Caps Supplier | Sealper Wholesale Store',
  description: 'Sealper is your trusted wholesale supplier for 5 gallon bottles, caps, racks, pumps, and complete bottled water packaging solutions. Based in Calgary, Canada.',
}

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    title: 'FDA Approved & BPA Free',
    desc: 'All products meet strict food-grade safety standards, ensuring quality and safety for your customers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    title: '2–4 Business Day Delivery',
    desc: 'Our Alberta logistics center ensures rapid delivery across Canada and the United States.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Premium Quality Guaranteed',
    desc: 'Locally sourced and quality-controlled products ensuring consistency, reliability, and competitive pricing.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.35C18 2.53 15.35 1 12.55 1c-1.96 0-3.73.98-4.55 2.44L12 8l4-4.56C16.55 3.03 17.8 3 18 3c1.1 0 2 .9 2 2 0 .83-.83 2-2 2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
    title: 'Customized Label Services',
    desc: 'Brand your bottles with custom labels to strengthen your identity in the market.',
  },
]

const productCategories = [
  {
    title: 'Bottles',
    href: '/bottles',
    image: '/images/bottles_product.png',
    tag: 'Flagship Product',
    desc: '5 & 3 gallon PC bottles with anti-skid orange peel bottom design. Durable, clear, and easy to carry.',
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
    desc: 'Single and double-row bottle racks in 3–5 tiers. Ideal for depots, warehouses, and display.',
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
  { value: '2-4', label: 'Day Delivery' },
  { value: '3', label: 'Delivery Modes' },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero_home.png"
            alt="Sealper wholesale water packaging facility"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <span className="badge badge--white label">Calgary, Alberta, Canada</span>
            <h1 className={styles.heroTitle}>
              Your Premier
              <span className={styles.heroTitleAccent}> Bottled Water</span>
              <br />Packaging Supplier
            </h1>
            <p className={styles.heroSubtitle}>
              One stop solution for 5 gallon bottles, caps, racks, pumps, and complete packaging supplies.
              Serving Canada and the United States with 2–4 business day delivery.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/bottles" className="btn btn--accent btn--lg">
                Explore Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
              <Link href="/contact-us" className="btn btn--outline-white btn--lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollDot} />
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
            <h2 className="section-header__title">Built on Trust, Quality, and Service</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              We are more than just suppliers — we are your strategic partners in bottled water packaging.
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
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Our Products</span>
            <h2 className="section-header__title">Complete Packaging Solutions</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              From bottles to dispensing accessories — everything your water business needs under one roof.
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
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                North America's Leading Bottled Water Packaging Supplier
              </h2>
              <p className={styles.aboutStripText}>
                Headquartered in Calgary, Alberta, Sealper is your trusted local supplier for bottled water
                packaging solutions. Our Alberta distribution center ensures fast, reliable delivery
                across Canada and the United States with uncompromising quality.
              </p>
              <div className={styles.aboutHighlights}>
                {['Headquarters: Calgary, Alberta', 'Distribution Center: Alberta, Canada', 'Serving Canada & USA', '10+ Years of Excellence'].map((item) => (
                  <div key={item} className="spec-list__item">
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
                alt="Sealper warehouse and logistics"
                fill
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ REVIEWS ══════════════════════════ */}
      <Reviews />

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <FAQ />

      {/* ══════════════════════════ CTA ══════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className="heading-lg">Ready to Order?</h2>
            <p style={{ fontSize: '1.1rem', marginTop: '0.75rem' }}>
              Drop us a line and our team will get back to you with pricing and availability.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact-us" className="btn btn--accent btn--lg">
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
