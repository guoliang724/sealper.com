import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import dStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Delivery & Shipping',
  description: 'Sealper delivery options: Full Container Load (FCL), Less Than Container Load (LTL), and parcel shipping for water packaging supplies.',
}

const services = [
  {
    code: 'FCL',
    name: 'Full Container Load',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8l-2-4H5L3 8M3 8h18M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8"/><path d="M8 12h8"/>
      </svg>
    ),
    desc: 'Optimal for large volume orders. A full 20ft or 40ft container is dedicated exclusively to your shipment, providing maximum efficiency and cost-effectiveness for large-scale orders.',
    features: ['Dedicated container space', '20ft and 40ft options', 'Best rate for large orders', 'Direct port-to-port shipping', 'Ideal for distributors & wholesalers'],
  },
  {
    code: 'LTL',
    name: 'Less Than Container Load',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    desc: 'Perfect for medium-sized orders that do not fill an entire container. Your goods are consolidated with other shipments, providing significant savings over parcel shipping at scale.',
    features: ['Share container space', 'Cost-effective for mid-size orders', 'Flexible scheduling', 'Regular shipping routes', 'Suitable for growing businesses'],
  },
  {
    code: 'Parcels',
    name: 'Parcel Shipping by Couriers',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    desc: 'Fast and reliable parcel delivery using trusted couriers. Ideal for smaller orders and sample shipments. 2-4 business day delivery available within Canada and the USA.',
    features: ['2-4 business day delivery', 'Trusted courier partners', 'Door-to-door delivery', 'Real-time tracking', 'Ideal for smaller orders & samples'],
  },
]

const coverage = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    title: 'Canada-wide',
    desc: 'Fast delivery to all Canadian provinces and territories.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'USA Delivery',
    desc: 'Reliable cross-border shipments to all US states.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'International',
    desc: 'Sea and air freight options for overseas customers.',
  },
]

export default function DeliveryPage() {
  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(72px + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services / Delivery</span>
          <h1 className="page-hero__title">Delivery &amp; Shipping</h1>
          <p className="page-hero__subtitle">
            Three flexible shipping modes to meet your needs — whether you are ordering a sample pack or a full container.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((s) => (
              <div key={s.code} className={dStyles.serviceCard}>
                <div className={dStyles.serviceCardHeader}>
                  <div className={dStyles.serviceIcon}>{s.icon}</div>
                  <div className={dStyles.serviceCode}>{s.code}</div>
                  <h2 className={dStyles.serviceName}>{s.name}</h2>
                </div>
                <div className={dStyles.serviceCardBody}>
                  <p className={dStyles.serviceDesc}>{s.desc}</p>
                  <div className={dStyles.serviceFeatures}>
                    {s.features.map((f) => (
                      <div key={f} className="spec-list__item">{f}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Logistics</span>
            <h2 className="section-header__title">Alberta Logistics Center</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Our strategically located logistics center in Alberta ensures timely delivery of high-quality,
              competitively priced products across Canada and the United States.
            </p>
          </div>
          <div className="grid grid--3">
            {coverage.map((item) => (
              <div key={item.title} className={dStyles.coverageCard}>
                <div className={dStyles.coverageIcon}>{item.icon}</div>
                <h3 className={dStyles.coverageTitle}>{item.title}</h3>
                <p className={dStyles.coverageDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Ready to Place an Order?</h2>
          <p className={styles.pageCtaSubtitle}>Contact us and we will recommend the best shipping option for your needs.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Get a Shipping Quote</Link>
            <a href="tel:4036675058" className="btn btn--outline-white btn--lg">403-667-5058</a>
          </div>
        </div>
      </div>
    </>
  )
}
