import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'About Us — Canadian-Owned HOD Packaging Supplier',
  description: 'Sealper is a Canadian-owned company focused on the HOD bottled water industry, with BPA-free PET bottles manufactured in Calgary and a complete range of HOD packaging products stocked in Canada.',
}

const facts = [
  'Canadian-owned company',
  'Focused on the HOD bottled water industry',
  'BPA-Free PET bottles manufactured in Calgary',
  'Complete packaging and accessory supply',
  'Canadian stock and distribution network',
]

const locations = [
  { title: 'Calgary, AB', desc: 'Head office & PET bottle manufacturing' },
  { title: 'Vancouver, BC', desc: 'Stock location' },
  { title: 'Edmonton, AB', desc: 'Stock location' },
  { title: 'Toronto, ON', desc: 'Stock location' },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">About Us</span>
          <h1 className="page-hero__title">About Sealper</h1>
          <p className="page-hero__subtitle">
            Sealper specializes in BPA-Free 5 Gallon Bottles and provides complete HOD packaging solutions for
            the bottled water industry.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/warehouse.jpg"
                alt="Sealper warehouse stocked with HOD packaging products"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">Who We Are</span>
              <h2 className={styles.splitTitle}>Canadian-Owned, HOD Focused</h2>
              <p className={styles.splitText}>
                BPA-Free PET bottles manufactured in Calgary, supported by a complete range of HOD packaging
                products stocked in Canada.
              </p>
              <div className={styles.productSpecs}>
                {facts.map((f) => <div key={f} className={styles.productSpec}>{f}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>Stocked in Canada</h2>
          </div>
          <div className={styles.points}>
            {locations.map((l) => (
              <div key={l.title} className={styles.point}>
                <h3 className={styles.pointTitle}>{l.title}</h3>
                <p className={styles.pointDesc}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Work With Sealper" subtitle="Tell us about your water business and what you need." />
    </>
  )
}
