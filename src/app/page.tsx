import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: '5 Gallon Water Bottles & HOD Packaging Supplier Canada | Sealper' },
  description: 'Sealper supplies 5 gallon PET and PC water bottles, caps, racks, dispensers and HOD accessories across Canada. BPA-free PET bottles manufactured in Calgary.',
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const featuredPoints = ['BPA-Free PET', 'Reinforced Rib Structure', 'Heat-Fused Handle', 'Designed for Commercial HOD Use']

const categories = [
  { title: 'Bottles', href: '/bottles', image: '/images/products/bottle-5gal-pet.png', alt: '5 gallon BPA-free PET water bottle', desc: '3 & 5 Gallon PET / PC Bottles' },
  { title: 'Caps', href: '/caps', image: '/images/products/cap-tripierce.png', alt: '5 gallon tri-pierce water bottle cap', desc: 'One-Piece, Tri-Pierce & Non-Spill Caps' },
  { title: 'Racks', href: '/racks', image: '/images/products/rack-double-5-tier.png', alt: '5-tier double row 5 gallon water bottle rack', desc: 'Home, Office & Commercial Racks' },
  { title: 'Water Dispensers', href: '/water-dispensers', image: '/images/products/dispenser-bottom-load.png', alt: 'bottom-load water dispenser', desc: 'Top-Load & Bottom-Load' },
  { title: 'Accessories', href: '/accessories', image: '/images/products/pump-manual.png', alt: 'manual pump for 5 gallon water bottles', desc: 'Pumps, Cradles, Carts & Fridge Packs' },
]

const reasons = [
  { title: 'Calgary Manufacturing', desc: 'BPA-free PET bottles manufactured locally in Calgary.' },
  { title: 'One Supply Source', desc: 'Bottles, caps, racks, dispensers and accessories for HOD operations.' },
  { title: 'Canadian Inventory', desc: 'Stocked products, custom cap labeling and flexible delivery options across Canada.' },
]

const services = [
  {
    title: 'Custom Cap Labeling',
    desc: 'Local labeling in Calgary from 1 pallet, or factory-direct labeling for larger-volume orders.',
    image: '/images/cap-labeling-machine.jpg',
    alt: 'Cap labeling machine applying custom labels to 5 gallon water bottle caps',
    href: '/customized-labels',
  },
  {
    title: 'Canadian Inventory & Delivery',
    desc: 'Products stocked in Canada, with local delivery, LTL freight, parcel shipping and full container loads.',
    image: '/images/warehouse.jpg',
    alt: 'Sealper warehouse stocked with 5 gallon bottles and HOD packaging products',
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
            <h1 className={styles.heroTitle}>5 Gallon Water Bottles &amp; One-Stop HOD Packaging Solutions</h1>
            <p className={styles.heroSlogan}>Locally Made. Globally Sourced. Reliably Supplied.</p>
            <p className={styles.heroSubtitle}>
              BPA-free PET bottles manufactured in Calgary, supported by Canadian inventory and global
              manufacturing capabilities for bottles, caps, racks, water dispensers and HOD accessories.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#products" className="btn btn--primary btn--lg">View Products</Link>
              <Link href="/contact-us" className="btn btn--outline btn--lg">Get a Quote</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/hero-bottle-caps.png"
              alt="5 gallon BPA-free PET water bottle with tri-pierce and non-spill caps"
              width={920}
              height={1075}
              loading="eager"
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 900px) 360px, 500px"
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
              alt="5 gallon BPA-free PET water bottle manufactured in Calgary"
              width={530}
              height={1000}
              quality={90}
              sizes="(max-width: 900px) 240px, 340px"
            />
          </div>
          <div className={styles.featuredContent}>
            <span className="eyebrow">Featured Product</span>
            <h2 className={styles.featuredTitle}>5 Gallon BPA-Free PET Bottle</h2>
            <p className={styles.featuredText}>
              Manufactured in Calgary, our BPA-free 5 gallon PET bottle features a reinforced structure and
              heat-fused handle for commercial HOD applications.
            </p>
            <p className={styles.productSlogan}>Built Tough. Sealed Better.</p>
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
            <h2 className={styles.sectionTitle}>One-Stop HOD Packaging Supply</h2>
            <p className={styles.sectionDesc}>
              Bottles, caps, racks, water dispensers and accessories for bottled water operations — all from
              one supply source.
            </p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((c) => (
              <Link key={c.title} href={c.href} className={styles.category}>
                <div className={styles.categoryImage}>
                  <Image src={c.image} alt={c.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px" />
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
            <h2 className={styles.sectionTitle}>Local Manufacturing. Global Supply.</h2>
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
            A Canadian-owned HOD packaging supplier headquartered in Calgary, Alberta.
          </p>
          <p className={styles.aboutSub}>
            We manufacture 5 gallon PET bottles in Calgary and operate our own overseas manufacturing
            facilities for complementary HOD packaging products — backed by Canadian inventory and
            distribution.
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
