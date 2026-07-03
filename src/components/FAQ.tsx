'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What products does Sealper carry?',
    a: 'We offer a comprehensive range of bottled water packaging supplies including 5-gallon and 3-gallon PC bottles, non-spill and standard caps, bottle racks (single & double row, 3–5 tier), manual and USB-rechargeable pumps, folding and table cradles, water cooler dispensers, and customized label services.',
  },
  {
    q: 'What are your minimum order quantities (MOQ)?',
    a: 'MOQ varies by product. For bottles, we typically work with full pallet and container loads (FCL). Caps are sold in boxes of 500. Racks, pumps, and accessories can often be ordered in smaller quantities. Contact us directly and we\'ll work out an arrangement that fits your business size.',
  },
  {
    q: 'Do you ship to the United States?',
    a: 'Yes. We serve both Canada and the United States. Our Alberta distribution center is strategically positioned for cross-border shipments via FCL (Full Container Load), LTL (Less Than Truckload), and parcel services depending on your order volume.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery is 2–4 business days within Canada. U.S. delivery timelines vary based on destination and shipping method. For large volume FCL orders, lead times will be discussed at the time of order. We\'ll always give you a clear delivery estimate before you commit.',
  },
  {
    q: 'Are your products FDA approved and BPA free?',
    a: 'Yes. All of our bottles and caps meet strict food-grade safety standards. Our polycarbonate (PC) bottles are FDA approved, BPA free, and designed for repeated use. Our caps feature double sealing rings for leak-proof performance.',
  },
  {
    q: 'Can you print custom labels on our bottles?',
    a: 'Absolutely. We offer a customized label service so you can brand your bottles with your own logo, colors, and design. Simply send us your artwork and we\'ll handle the production. Custom labels are a great way to strengthen your brand presence in the market.',
  },
  {
    q: 'How do I get a quote or place an order?',
    a: 'The easiest way is to use our Contact Us form or call us directly at 403-667-5058. You can also reach us via WhatsApp. Describe your product needs and quantities, and our team will get back to you promptly with pricing and availability.',
  },
  {
    q: 'Do you offer volume discounts for large orders?',
    a: 'Yes. We offer competitive wholesale pricing with better rates for higher volume orders. We regularly work with water depot operators, distributors, and commercial buyers. Reach out to discuss your requirements and we\'ll provide a tailored quote.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Got Questions?</span>
          <h2 className="section-header__title">Frequently Asked Questions</h2>
          <div className="divider" />
          <p className="section-header__subtitle">
            Everything you need to know about our products, ordering, and delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.triggerText}>{faq.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
