import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import wcStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Water Coolers & Dispensers',
  description: 'Sealper commercial and residential water cooler and dispenser equipment. Complete water dispensing solutions for your business.',
}

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
    title: 'Hot & Cold Options',
    desc: 'Available with hot, cold, and ambient water dispensing modes for any preference.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: 'Commercial Grade',
    desc: 'Built for high-volume commercial use in offices, depots, and facilities.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Residential Models',
    desc: 'Compact and stylish models perfect for home and small office environments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M20 12h-2M17.66 17.66l-1.41-1.41M12 20v-2M6.34 17.66l1.41-1.41M4 12h2M6.34 6.34l1.41 1.41"/>
      </svg>
    ),
    title: 'Easy Maintenance',
    desc: 'Designed for easy cleaning and maintenance to ensure long-lasting performance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
    title: 'Compatible Bottles',
    desc: 'Works seamlessly with our 3 and 5 gallon polycarbonate bottles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Energy Efficient',
    desc: 'Energy-saving modes to reduce power consumption without sacrificing performance.',
  },
]

export default function WaterCoolersPage() {
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 'calc(72px + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_coolers.png"
            alt="Water Coolers background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products / Water Coolers</span>
          <h1 className="page-hero__title">Water Coolers &amp; Dispensers</h1>
          <p className="page-hero__subtitle">
            Complete water dispensing equipment for commercial and residential applications.
            Contact us for our current product lineup and pricing.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Product Features</span>
            <h2 className="section-header__title">Premium Dispensing Equipment</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              We offer a range of water coolers and dispenser equipment tailored to commercial and residential needs.
              Contact us to discuss available models and custom configurations.
            </p>
          </div>
          <div className="grid grid--3">
            {features.map((f) => (
              <div key={f.title} className={wcStyles.featureCard}>
                <div className={wcStyles.featureIcon}>{f.icon}</div>
                <h3 className={wcStyles.featureTitle}>{f.title}</h3>
                <p className={wcStyles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Inquire About Water Coolers</h2>
          <p className={styles.pageCtaSubtitle}>Contact our team for current models, pricing, and availability.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Contact Us</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
