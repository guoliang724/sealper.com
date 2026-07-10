import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import clStyles from './page.module.css'

export const metadata: Metadata = {
  title: 'Customized Labels �?Ready in 7 Days',
  description: 'Sealper custom label services for water bottles and caps. From design submission to delivery in just 7 days. Brand your bottled water products with professional full-colour waterproof labels.',
}

const benefits = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    title: 'Full Color Printing',
    desc: 'Vibrant, professional full-color printing to make your brand stand out on every bottle.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    title: 'Custom Sizing',
    desc: 'Labels tailored to fit perfectly on 3-gallon and 5-gallon bottles, as well as caps.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>,
    title: 'Waterproof Materials',
    desc: 'Durable, waterproof label materials that maintain their quality even when bottles are refrigerated or wet.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: 'Fast 7-Day Turnaround',
    desc: 'From design submission to delivery in just 7 business days. Rush 3-day orders available �?contact us for details.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    title: 'Cap Labels Available',
    desc: 'Customized labels available for our cap products to complete the branded look.',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>,
    title: 'Minimum Order Flexibility',
    desc: 'Flexible minimum order quantities for small businesses and large enterprises alike.',
  },
]

const steps = [
  { step: '01', title: 'Submit Your Design', desc: 'Send us your artwork or let our team help with design.' },
  { step: '02', title: 'Review & Approve', desc: 'We send a proof for your review and approval within 24 hours.' },
  { step: '03', title: 'Production', desc: 'Labels are printed with high-quality, durable waterproof materials.' },
  { step: '04', title: 'Delivery �?Day 7', desc: 'Labels delivered to you or applied before shipping. Total process: 7 business days.' },
]

export default function CustomizedLabelsPage() {
  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services / Customized Labels</span>
          <h1 className="page-hero__title">Custom Labels<br />Ready in 7 Days</h1>
          <p className="page-hero__subtitle">
            From design submission to delivery in 7 business days. Waterproof, full-colour, branded labels for every bottle and cap.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Label Services</span>
            <h2 className="section-header__title">Brand Your Water Bottles</h2>
            <div className="divider" />
            <p className="section-header__subtitle">
              Stand out in the market with professional custom labels designed to showcase your brand.
              Available for both bottles and caps.
            </p>
          </div>
          <div className="grid grid--3">
            {benefits.map((b) => (
              <div key={b.title} className={clStyles.benefitCard}>
                <div className={clStyles.benefitIcon}>{b.icon}</div>
                <h3 className={clStyles.benefitTitle}>{b.title}</h3>
                <p className={clStyles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Process</span>
            <h2 className="section-header__title">How It Works</h2>
            <div className="divider" />
          </div>
          <div className="grid grid--4">
            {steps.map((s) => (
              <div key={s.step} className={clStyles.stepCard}>
                <div className={clStyles.stepNumber}>{s.step}</div>
                <h3 className={clStyles.stepTitle}>{s.title}</h3>
                <p className={clStyles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.pageCtaStrip}>
        <div className="container">
          <h2 className={styles.pageCtaTitle}>Ready to Brand Your Bottles?</h2>
          <p className={styles.pageCtaSubtitle}>Contact us to discuss your label design and requirements.</p>
          <div className={styles.pageCtaBtns}>
            <Link href="/contact-us" className="btn btn--accent btn--lg">Start Your Order</Link>
            <a href="mailto:contact@sealper.com" className="btn btn--outline-white btn--lg">contact@sealper.com</a>
          </div>
        </div>
      </div>
    </>
  )
}
