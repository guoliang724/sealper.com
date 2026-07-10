'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What products does Sealper carry?',
    a: 'Sealper offers a complete line of water packaging supplies including 5-gallon and 3-gallon polycarbonate bottles, premium non-spill caps, storage racks, manual and USB pumps, cradles, water coolers, and customized labels. We are your one-stop shop for bottled water packaging across Western Canada.',
  },
  {
    q: "What makes your bottles different from other 5-gallon bottles on the market?",
    a: "Our bottles are North America's only seamless injection-blow-molded (IBW) water bottles. Every other 5-gallon bottle is assembled from separately molded parts — our IBW process creates a single monolithic structure with no seam lines, no weak points, and uniform wall thickness throughout. They have been rigorously tested: drop tested from 1.5m, cold tested at −20°C, and leak tested inverted for 24 hours. Video evidence is available on our Bottles page.",
  },
  {
    q: 'Do you offer same-day delivery?',
    a: 'Yes! We offer same-day delivery in Vancouver, Calgary, Edmonton, and Toronto for orders placed before noon. Our network of four Canadian warehouses lets us get your order moving immediately. For all other locations across Western Canada — BC, Alberta, Saskatchewan, and Manitoba — expect delivery in 2–4 business days.',
  },
  {
    q: 'How long does delivery take across Western Canada?',
    a: 'Same-day delivery is available in Vancouver, Calgary, Edmonton, and Toronto (order before noon). For all other Western Canada destinations, standard delivery takes 2–4 business days. We ship via trusted Canadian courier partners with real-time tracking.',
  },
  {
    q: 'Are your products FDA approved and BPA free?',
    a: 'Absolutely. All Sealper bottles, caps, and accessories are manufactured to strict food-grade safety standards — FDA approved and 100% BPA free. Our products undergo quality control at our Canadian distribution centres before they reach you.',
  },
  {
    q: 'Can you print custom labels on our bottles?',
    a: 'Yes! Our customized label service lets you brand your bottles with full-colour, waterproof labels. From the moment you submit your design, we complete production and deliver in just 7 days. Minimum order quantities are flexible — contact us to discuss your specific needs.',
  },
  {
    q: 'What are your minimum order quantities (MOQ)?',
    a: 'MOQs vary by product. We work with businesses of all sizes — from small local water depots to large wholesale distributors. Contact us directly for a quote tailored to your volume and delivery requirements.',
  },
  {
    q: 'How do I get a quote or place an order?',
    a: 'You can reach us by phone at 403-667-5058, by email at contact@sealper.com, through the contact form on our website, or via the chat widget in the bottom corner. Our team typically responds within one business day.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Frequently Asked Questions</span>
          <h2 className="section-header__title">Common Questions</h2>
          <div className="divider" />
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 6.75L9 11.25L13.5 6.75"/>
                  </svg>
                </span>
              </button>
              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ''}`}>
                <p className={styles.answer}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
