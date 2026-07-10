import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import dStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Delivery �?Same-Day & 2�? Day Western Canada Coverage',
  description: 'Sealper offers same-day delivery in Vancouver, Calgary, Edmonton, and Toronto. Fast 2�? day coverage across Western Canada. FCL, LTL, and parcel shipping options.',
}

const warehouses = [
  { city: 'Vancouver', province: 'British Columbia', note: 'Same-Day Available' },
  { city: 'Calgary', province: 'Alberta', note: 'Same-Day Available · HQ' },
  { city: 'Edmonton', province: 'Alberta', note: 'Same-Day Available' },
  { city: 'Toronto', province: 'Ontario', note: 'Same-Day Available' },
]

const services = [
  {
    code: 'FCL',
    name: 'Full Container Load',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8l-2-4H5L3 8M3 8h18M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8"/><path d="M8 12h8"/>
      </svg>
    ),
    desc: 'Optimal for large volume orders. A full 20ft or 40ft container is dedicated exclusively to your shipment �?maximum efficiency and lowest per-unit cost for large-scale Canadian operations.',
    features: ['Dedicated container space', '20ft and 40ft options', 'Best rate for large orders', 'Direct port-to-port shipping', 'Ideal for distributors & wholesalers'],
  },
  {
    code: 'LTL',
    name: 'Less Than Container Load',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    desc: 'Perfect for medium-sized orders. Your goods are consolidated with other shipments, delivering significant cost savings over parcel shipping at mid-scale volumes.',
    features: ['Share container space', 'Cost-effective for mid-size orders', 'Flexible scheduling', 'Regular Canadian shipping routes', 'Suitable for growing businesses'],
  },
  {
    code: 'Parcel',
    name: 'Parcel Shipping by Couriers',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    desc: 'Fast door-to-door delivery via trusted Canadian couriers. Ideal for smaller orders and samples. 2�? business days across Western Canada.',
    features: ['2�? business day delivery', 'Trusted Canadian courier partners', 'Door-to-door delivery', 'Real-time tracking', 'Ideal for smaller orders & samples'],
  },
]

export default function DeliveryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services / Delivery</span>
          <h1 className="page-hero__title">Fast, Reliable Delivery<br />Across Western Canada</h1>
          <p className="page-hero__subtitle">
            Four Canadian warehouses. Same-day delivery in major cities.
            2�? business days across BC, AB, SK &amp; MB.
          </p>
        </div>
      </div>

      {/* ── Same-Day Highlight ── */}
      <section className={`section ${dStyles.sameDaySection}`}>
        <div className="container">
          <div className={dStyles.sameDayCard}>
            <div className={dStyles.sameDayLeft}>
              <span className={dStyles.sameDayEyebrow}>�?Same-Day Delivery</span>
              <h2 className={dStyles.sameDayTitle}>Order Before Noon �?Delivered Today</h2>
              <p className={dStyles.sameDayDesc}>
                Place your order by noon local time and receive it the same business day.
                Available in all four of our warehouse cities.
              </p>
            </div>
            <div className={dStyles.sameDayCities}>
              {warehouses.map((w) => (
                <div key={w.city} className={dStyles.cityCard}>
                  <div className={dStyles.cityDot} />
                  <div>
                    <p className={dStyles.cityName}>{w.city}</p>
                    <p className={dStyles.cityProvince}>{w.province}</p>
                    <p className={dStyles.cityNote}>{w.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2�? Day Western Canada ── */}
      <section className="section section--subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Full Coverage</span>
            <h2 className="section-header__title">2�? Days Across Western Canada</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Our strategically located warehouses ensure fast, reliable delivery to every corner of Western Canada �?British Columbia, Alberta, Saskatchewan, and Manitoba.
            </p>
          </div>
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
