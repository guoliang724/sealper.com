import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import bottleStyles from './page.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Bottles — BPA-Free 5 Gallon PET & PC Water Bottles',
  description: 'Sealper HOD water bottles: BPA-free 5 gallon PET bottle manufactured in Calgary, plus 5 gallon and 3 gallon PC bottles.',
}

const petFeatures = ['BPA-Free PET', 'Reinforced Rib Structure', 'Heat-Fused Handle', 'Designed for HOD Water Packaging']

const pcBottles = [
  {
    name: '5 Gallon PC Bottle',
    image: '/images/products/bottle-5gal-pc.png',
    desc: 'Strong polycarbonate bottle built for repeated use.',
    specs: ['Wide-grip handle', 'Seamless neck', 'Recessed base'],
  },
  {
    name: '3 Gallon PC Bottle',
    image: '/images/products/bottle-3gal-pc.png',
    desc: 'A lighter 3 gallon size with the same PC build.',
    specs: ['Wide-grip handle', 'Seamless neck', 'Recessed base'],
  },
]

export default function BottlesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Products</span>
          <h1 className="page-hero__title">HOD Water Bottles</h1>
          <p className="page-hero__subtitle">
            BPA-Free 5 gallon PET bottles manufactured in Calgary, plus 5 and 3 gallon PC bottles.
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
                alt="Sealper BPA-free 5 gallon PET bottle"
                width={530}
                height={1000}
                quality={90}
                sizes="(max-width: 900px) 240px, 320px"
              />
            </div>
            <div className={bottleStyles.leadContent}>
              <span className="eyebrow">Made in Calgary</span>
              <h2 className={bottleStyles.leadTitle}>5 Gallon PET Bottle</h2>
              <p className={bottleStyles.leadText}>
                Our BPA-Free PET 5 gallon bottle is manufactured in Calgary and designed for strength, clean
                appearance and reliable HOD water packaging.
              </p>
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
            <p className={styles.groupDesc}>5 and 3 gallon polycarbonate bottles.</p>
          </div>
          <div className={`${styles.productsGrid} ${bottleStyles.pcGrid}`}>
            {pcBottles.map((b) => (
              <div key={b.name} className={styles.productCard}>
                <div className={`${styles.productImageWrap} ${bottleStyles.pcImage}`}>
                  <Image src={b.image} alt={b.name} fill sizes="(max-width: 768px) 100vw, 560px" />
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
