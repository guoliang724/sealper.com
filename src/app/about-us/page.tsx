import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: 'About Sealper | Canadian HOD Packaging Supplier' },
  description: 'Sealper Plastics & Packaging Inc. is a Canadian-owned HOD packaging company headquartered in Calgary, Alberta, with BPA-free PET bottle manufacturing in Calgary, overseas manufacturing facilities and Canadian inventory.',
}

const capabilities = [
  'Calgary Manufacturing',
  'Global Production',
  'Canadian Inventory',
  'Canadian Distribution',
]

// TODO: list each overseas facility by city and what it produces.
const locations = [
  { title: 'Calgary, Alberta', desc: 'Head Office · PET Bottle Manufacturing · Canadian Inventory' },
  { title: 'Vancouver, BC', desc: 'Canadian Inventory' },
  { title: 'Edmonton, AB', desc: 'Canadian Inventory' },
  { title: 'Toronto, ON', desc: 'Canadian Inventory' },
  { title: 'Overseas', desc: 'Our own manufacturing facilities for complementary HOD packaging products' },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">About Us</span>
          <h1 className="page-hero__title">About Sealper</h1>
          <p className="page-hero__subtitle">Locally Made. Globally Sourced. Reliably Supplied.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/warehouse.jpg"
                alt="Sealper warehouse in Calgary stocked with 5 gallon bottles and HOD packaging products"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">Who We Are</span>
              <h2 className={styles.splitTitle}>Canadian-Owned HOD Packaging Company</h2>
              <p className={styles.splitText}>
                Sealper Plastics &amp; Packaging Inc. is a Canadian-owned HOD packaging company headquartered in
                Calgary, Alberta.
              </p>
              <p className={styles.splitText}>
                We manufacture BPA-free 5 gallon PET bottles in Calgary and operate overseas manufacturing
                facilities for complementary HOD packaging products. Combined with Canadian inventory and
                distribution, this gives our customers access to local manufacturing, global production and a
                dependable supply network.
              </p>
              <div className={styles.productSpecs}>
                {capabilities.map((c) => <div key={c} className={styles.productSpec}>{c}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>Manufacturing &amp; Supply Network</h2>
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
