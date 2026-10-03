import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import bottleStyles from './page.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: '5 Gallon PET & PC Water Bottles Canada | Sealper' },
  description: '5 gallon BPA-free PET water bottles manufactured in Calgary, plus 3 and 5 gallon PC bottles for HOD operations across Canada.',
}

const petFeatures = ['BPA-Free PET', 'Reinforced Rib Structure', 'Heat-Fused Handle', 'Designed for Commercial HOD Use']

const pcBottles = [
  {
    name: '5 Gallon PC Bottle',
    image: '/images/products/bottle-5gal-pc.png',
    alt: '5 gallon polycarbonate (PC) water bottle',
    desc: 'Reusable polycarbonate bottle designed for repeated handling in HOD operations.',
    specs: ['ISBM Construction', 'Seamless Neck Finish', 'Wide-Grip Handle', 'Recessed Base'],
  },
  {
    name: '3 Gallon PC Bottle',
    image: '/images/products/bottle-3gal-pc.png',
    alt: '3 gallon polycarbonate (PC) water bottle',
    desc: 'Reusable 3 gallon polycarbonate bottle for HOD operations.',
    specs: ['Seamless Neck Finish', 'Wide-Grip Handle', 'Recessed Base'],
  },
]

export default function BottlesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">5 Gallon PET &amp; PC Water Bottles</h1>
          <p className="page-hero__subtitle">
            BPA-free 5 gallon PET bottles manufactured in Calgary, plus 3 and 5 gallon PC bottles.
          </p>
        </div>
      </div>

      {/* ── Lead product: 5 Gallon PET ── */}
      <section className="section">
        <div className="container">
          <div className={bottleStyles.lead}>
            <div className={bottleStyles.leadImage}>
              <Image
                src="/images/products/bottle-5gal-pet.png"
                alt="5 gallon BPA-free PET water bottle manufactured in Calgary"
                width={530}
                height={1000}
                quality={90}
                sizes="(max-width: 900px) 240px, 320px"
              />
            </div>
            <div className={bottleStyles.leadContent}>
              <span className="eyebrow">Manufactured in Calgary</span>
              <h2 className={bottleStyles.leadTitle}>5 Gallon BPA-Free PET Bottle</h2>
              <p className={bottleStyles.leadText}>
                Manufactured in Calgary, our BPA-free 5 gallon PET bottle features a reinforced structure and
                heat-fused handle for commercial HOD applications.
              </p>
              <p className={styles.productSlogan}>Built Tough. Sealed Better.</p>
              <div className={styles.productSpecs}>
                {petFeatures.map((f) => <div key={f} className={styles.productSpec}>{f}</div>)}
              </div>
              <Link href="/contact-us" className="btn btn--primary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PC bottles ── */}
      <section className="section section--subtle">
        <div className="container">
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>PC Bottles</h2>
            <p className={styles.groupDesc}>3 and 5 gallon polycarbonate bottles.</p>
          </div>
          <div className={`${styles.productsGrid} ${bottleStyles.pcGrid}`}>
            {pcBottles.map((b) => (
              <div key={b.name} className={styles.productCard}>
                <div className={`${styles.productImageWrap} ${bottleStyles.pcImage}`}>
                  <Image src={b.image} alt={b.alt} fill sizes="(max-width: 768px) 100vw, 560px" />
                </div>
                <div className={styles.productCardBody}>
                  <h3 className={styles.productName}>{b.name}</h3>
                  <p className={styles.productDesc}>{b.desc}</p>
                  <div className={styles.productSpecs}>
                    {b.specs.map((s) => <div key={s} className={styles.productSpec}>{s}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing ── */}
      <section className="section">
        <div className="container">
          <div className={bottleStyles.manufacturing}>
            <div className={bottleStyles.manufacturingContent}>
              <span className="eyebrow">Manufacturing</span>
              <h2 className={styles.splitTitle}>Clean Air Behind Every Bottle</h2>
              <p className={styles.splitText}>
                Our Calgary PET production uses a 3-stage Walker Filtration system and a German-manufactured
                compressed air system for cleaner, drier air and consistent bottle quality.
              </p>
            </div>
            <Image
              src="/images/air-filtration.jpg"
              alt="Air filtration for blow molding: a 3-stage Walker Filtration system with a German-manufactured compressed air system and CRN-registered pressure vessels."
              width={950}
              height={1342}
              sizes="(max-width: 900px) 100vw, 480px"
              className={bottleStyles.manufacturingImage}
            />
          </div>
        </div>
      </section>

      <PageCta title="Interested in Our Bottles?" subtitle="Contact us for pricing, order quantities and delivery options." />
    </>
  )
}
