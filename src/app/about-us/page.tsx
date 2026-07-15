import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Us — 100% Canadian Owned',
  description: 'Sealper is a 100% Canadian-owned wholesale supplier headquartered in Calgary, Alberta. With 4 warehouses across Canada, we deliver water packaging supplies to Western Canada with same-day options.',
}

const pillars = [
  {
    title: 'Our Mission',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    content: 'To continuously innovate and provide the best bottled water packaging materials to meet customer and market demands. We are committed to quality, affordability, and timely delivery.',
  },
  {
    title: 'Our Services',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    content: 'We are more than just suppliers — we are partners. We offer water purification equipment, blow molding machinery, filling equipment, and complete production lines.',
  },
  {
    title: 'Our Reputation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    content: 'We have earned a strong reputation in the North American market over the years, thanks to our customers\' trust in our product quality and outstanding service.',
  },
]

const offices = [
  { label: 'Headquarters', location: 'Calgary, Alberta', detail: '4069 112 Avenue SE, Calgary, AB T2C 0J4 · Same-Day Delivery' },
  { label: 'Warehouse', location: 'Vancouver, BC', detail: 'Serving Lower Mainland & all of British Columbia · Same-Day Delivery' },
  { label: 'Warehouse', location: 'Edmonton, Alberta', detail: 'Serving Northern Alberta and surrounding regions · Same-Day Delivery' },
  { label: 'Warehouse', location: 'Toronto, Ontario', detail: 'Serving the GTA and Eastern Canada · Same-Day Delivery' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="page-hero__bg">
          <Image
            src="/images/hero_about.png"
            alt="About us background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">About SEALPER</span>
          <h1 className="page-hero__title">100% Canadian Owned &amp; Western Canada Focused</h1>
          <p className="page-hero__subtitle">
            Locally owned and operated — proudly serving Western Canada from our 4 Canadian warehouses.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <Image
                src="/images/about_banner.png"
                alt="Sealper warehouse facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
            <div className={styles.storyContent}>
              <span className="section-header__eyebrow" style={{ textAlign: 'left', display: 'block' }}>Our Story</span>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
                A Decade of Excellence — Built Right Here in Canada
              </h2>
              <div className="divider divider--left" />
              <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                Sealper is a 100% Canadian-owned supplier of bottled water packaging materials,
                headquartered in Calgary, Alberta. With four warehouses — in Vancouver, Calgary, Edmonton,
                and Toronto — we deliver to your door with speed and care.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                Our product line includes North America's only seamless IBW 5-gallon water bottles,
                premium non-spill caps, storage racks, manual and USB pumps, cradles, water coolers,
                and fully customized labels — ready in 7 days.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                We are a fast-growing, locally focused company that puts Canadian businesses first —
                providing same-day delivery in major cities and 2-4 day coverage across Western Canada.
              </p>
              <Link href="/contact-us" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">What Drives Us</span>
            <h2 className="section-header__title">Mission, Services &amp; Reputation</h2>
            <div className="divider" />
          </div>
          <div className="grid grid--3">
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canadian Network */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Our Canadian Network</span>
            <h2 className="section-header__title">4 Warehouses Across Canada</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Strategically positioned across Canada — so your order ships fast, from a city near you.
            </p>
          </div>
          <div className="grid grid--4">
            {offices.map((office, i) => (
              <div key={i} className={styles.officeCard}>
                <div className={styles.officeLabel}>{office.label}</div>
                <h3 className={styles.officeLocation}>{office.location}</h3>
                <p className={styles.officeDetail}>{office.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Ready to Work With Us?
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Feel free to reach out for assistance and support. We look forward to providing you with exceptional products and services.
          </p>
          <Link href="/contact-us" className="btn btn--accent btn--lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
