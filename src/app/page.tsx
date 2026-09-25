import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'BPA-Free 5 Gallon Bottles & HOD Packaging Solutions | Sealper',
  description: 'Sealper specializes in BPA-free 5 gallon PET bottles manufactured in Calgary and provides complete HOD packaging solutions — caps, racks, water dispensers and accessories — for the bottled water industry.',
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const heroPoints = ['BPA-Free PET Bottles', 'Manufactured in Calgary', 'One-Stop HOD Packaging Solutions']

const featuredPoints = ['BPA-Free PET', 'Made in Calgary', 'Reinforced Structure', 'Heat-Fused Handle']

const categories = [
  { title: 'Bottles', href: '/bottles', image: '/images/products/bottle-5gal-pet.png', desc: '5 & 3 Gallon PET / PC Bottles' },
  { title: 'Caps', href: '/caps', image: '/images/products/cap-tripierce.png', desc: 'One-Piece & Non-Spill Caps' },
  { title: 'Racks', href: '/racks', image: '/images/products/rack-double-5-tier.png', desc: 'Home, Office & Commercial Racks' },
  { title: 'Water Dispensers', href: '/water-dispensers', image: '/images/products/dispenser-bottom-load.png', desc: 'Top Load & Bottom Load' },
  { title: 'Accessories', href: '/accessories', image: '/images/products/pump-manual.png', desc: 'Pumps, Cradles, Carts & Fridge Packs' },
]

const reasons = [
  { title: 'Canadian Manufacturing', desc: 'BPA-Free PET bottles manufactured in Calgary.' },
  { title: 'Complete HOD Solutions', desc: 'Bottles, caps, racks, dispensers and accessories from one supplier.' },
  { title: 'Local Stock & Service', desc: 'Canadian inventory, customized cap labels and flexible delivery options.' },
]

const services = [
  {
    title: 'Customized Cap Labels',
    desc: 'Put your brand on every cap, with flexible MOQ and local labeling.',
    image: '/images/cap-labeling-machine.jpg',
    alt: 'Cap labeling machine applying custom labels',
    href: '/customized-labels',
  },
  {
    title: 'Local Stock & Delivery',
    desc: 'Products stocked in Canada, with local delivery, LTL freight and parcel shipping.',
    image: '/images/warehouse.jpg',
    alt: 'Sealper warehouse stocked with HOD packaging products',
    href: '/delivery',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>BPA-Free 5 Gallon Bottles &amp; HOD Packaging Solutions</h1>
            <p className={styles.heroSubtitle}>
              Canadian-owned and serving the bottled water industry with 5 gallon bottles, caps, racks,
              water dispensers and accessories.
            </p>
            <ul className={styles.heroPoints}>
              {heroPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className={styles.heroCtas}>
              <Link href="#products" className="btn btn--primary btn--lg">View Products</Link>
              <Link href="/contact-us" className="btn btn--outline btn--lg">Get a Quote</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/hero-products.png"
              alt="Sealper BPA-free 5 gallon PET bottle with a water dispenser, bottle rack and caps"
              width={1206}
              height={1075}
              loading="eager"
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 900px) 92vw, 620px"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ══════════ FEATURED PRODUCT ══════════ */}
      <section className={styles.featured}>
        <div className={`container ${styles.featuredInner}`}>
          <div className={styles.featuredImage}>
            <Image
              src="/images/products/bottle-5gal-pet.png"
              alt="BPA-free 5 gallon PET bottle manufactured in Calgary"
              width={530}
              height={1000}
              quality={90}
              sizes="(max-width: 900px) 240px, 340px"
            />
          </div>
          <div className={styles.featuredContent}>
            <span className="eyebrow">Featured Product</span>
            <h2 className={styles.featuredTitle}>BPA-Free 5 Gallon PET Bottle</h2>
            <p className={styles.featuredText}>
              Manufactured in Calgary, our BPA-Free PET 5 gallon bottle is designed for strength, clean
              appearance and reliable HOD water packaging.
            </p>
            <ul className={styles.featuredPoints}>
              {featuredPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <Link href="/bottles" className="btn btn--primary">
              View Bottles
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ OUR PRODUCTS ══════════ */}
      <section id="products" className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Our Products</span>
            <h2 className={styles.sectionTitle}>Complete HOD Packaging</h2>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((c) => (
              <Link key={c.title} href={c.href} className={styles.category}>
                <div className={styles.categoryImage}>
                  <Image src={c.image} alt={c.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px" />
                </div>
                <h3 className={styles.categoryTitle}>{c.title}</h3>
                <p className={styles.categoryDesc}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY SEALPER ══════════ */}
      <section className="section section--subtle">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Why Sealper</span>
            <h2 className={styles.sectionTitle}>A Focused HOD Packaging Partner</h2>
          </div>
          <div className={styles.reasons}>
            {reasons.map((r) => (
              <div key={r.title} className={styles.reason}>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LABELS / STOCK / DELIVERY ══════════ */}
      <section className="section">
        <div className="container">
          <div className={styles.services}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} className={styles.service}>
                <div className={styles.serviceImage}>
                  <Image src={s.image} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceLink}>Learn more <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT ══════════ */}
      <section className="section section--subtle">
        <div className={`container ${styles.about}`}>
          <span className="eyebrow">About Sealper</span>
          <p className={styles.aboutText}>
            Sealper specializes in BPA-Free 5 Gallon Bottles and provides complete HOD packaging solutions
            for the bottled water industry.
          </p>
          <p className={styles.aboutSub}>
            A Canadian-owned company with BPA-Free PET bottles manufactured in Calgary, supported by a
            complete range of HOD packaging products stocked in Canada.
          </p>
          <Link href="/about-us" className="btn btn--outline">
            About Us
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ══════════ CONTACT / GET A QUOTE ══════════ */}
      <PageCta
        title="Get a Quote"
        subtitle="Tell us the products and quantities you need — we’ll reply with pricing and availability."
      />
    </>
  )
}
