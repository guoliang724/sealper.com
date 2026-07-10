'use client'

import { useState } from 'react'
import styles from './page.module.css'

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    label: 'Phone',
    value: '403-667-5058',
    href: 'tel:4036675058',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'contact@sealper.com',
    href: 'mailto:contact@sealper.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: 'Address',
    value: '4069 112 Avenue SE, Calgary, Alberta T2C 0J4, Canada',
    href: 'https://maps.google.com/?q=4069+112+Avenue+SE,+Calgary,+Alberta',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Message us on WhatsApp',
    href: 'https://wa.me/14036675058',
  },
]

export default function ContactPageClient() {
  const [formState, setFormState] = useState({ company: '', name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero page-hero--gradient" style={{ paddingTop: 'calc(var(--header-h) + 4rem)' }}>
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Get In Touch</span>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__subtitle">
            Drop us a line! Whether you are in Canada, the United States, or elsewhere �?we are here to help.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.infoPanel}>
              <h2 className={styles.infoPanelTitle}>One Stop Solution for Your Bottled Water Packaging Supplies</h2>
              <p className={styles.infoPanelDesc}>
                Our team is ready to assist you with product inquiries, pricing, shipping logistics, and custom orders.
                Reach out via any of the channels below.
              </p>
              <div className={styles.infoItems}>
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={styles.infoItem}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={styles.infoItemIcon}>{item.icon}</div>
                    <div>
                      <div className={styles.infoItemLabel}>{item.label}</div>
                      <div className={styles.infoItemValue}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className={styles.mapEmbed}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapIcon}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className={styles.mapText}>
                    <strong>SEALPER</strong>
                    <span>4069 112 Avenue SE</span>
                    <span>Calgary, Alberta T2C 0J4</span>
                    <span>Canada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formPanel}>
              <h2 className={styles.formTitle}>Drop Us a Line!</h2>
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 1�? business days.</p>
                  <button className="btn btn--primary" onClick={() => { setSubmitted(false); setFormState({ company: '', name: '', email: '', message: '' }) }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" className="form-input" placeholder="Your company name" value={formState.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name <span style={{ color: 'var(--color-accent-dark)' }}>*</span></label>
                    <input id="name" name="name" type="text" className="form-input" placeholder="First and last name" value={formState.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address <span style={{ color: 'var(--color-accent-dark)' }}>*</span></label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="you@company.com" value={formState.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message <span style={{ color: 'var(--color-accent-dark)' }}>*</span></label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your requirements �?products, quantities, and delivery location..." value={formState.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" id="contact-submit-btn" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
