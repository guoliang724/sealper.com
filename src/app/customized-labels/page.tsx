import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: 'Custom Water Bottle Cap Labels Canada | Sealper' },
  description: 'Custom cap labeling for 5 gallon water bottle caps — local labeling in Calgary from 1 pallet, or factory-direct labeling from 6 pallets for larger-volume orders.',
}

const options = [
  {
    title: 'Local Labeling',
    desc: 'Custom labels applied in Calgary from stocked caps for flexible order quantities and shorter lead times.',
    moq: 'MOQ from 1 pallet',
  },
  {
    title: 'Factory-Direct Labeling',
    desc: 'Custom-labeled caps produced through our overseas manufacturing operations for larger-volume orders.',
    moq: 'MOQ from 6 pallets',
  },
]

export default function CustomizedLabelsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services</span>
          <h1 className="page-hero__title">Custom Cap Labeling</h1>
          <p className="page-hero__subtitle">Your Brand on Every Bottle</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/cap-labeling-machine.jpg"
                alt="Cap labeling machine applying custom labels to 5 gallon water bottle caps"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">How It Works</span>
              <h2 className={styles.splitTitle}>Send Us Your Artwork</h2>
              <p className={styles.splitText}>
                Send us your artwork and we&apos;ll apply your custom label to One-Piece or Non-Spill caps,
                ready to ship with your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--subtle">
        <div className="container">
          <div className={styles.points}>
            {options.map((o) => (
              <div key={o.title} className={styles.point}>
                <h3 className={styles.pointTitle}>{o.title}</h3>
                <p className={styles.productSubname}>{o.moq}</p>
                <p className={styles.pointDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Brand Your Caps" subtitle="Contact us to discuss your label design and quantities." />
    </>
  )
}
