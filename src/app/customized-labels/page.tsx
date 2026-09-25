import Image from 'next/image'
import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Customized Cap Label Service',
  description: 'Sealper customized cap labels for 5 gallon water bottle caps — flexible MOQ, local labeling in Canada and fast turnaround.',
}

const points = [
  { title: 'Flexible MOQ', desc: 'Order quantities that suit small and growing water businesses.' },
  { title: 'Local Labeling Available', desc: 'Caps are labeled locally in Canada — no overseas lead times.' },
  { title: 'Fast Turnaround', desc: 'Quick production and easy reorders from local stock.' },
  { title: 'Build Your Brand on Every Cap', desc: 'Your logo on every bottle your customers receive.' },
]

export default function CustomizedLabelsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services</span>
          <h1 className="page-hero__title">Customized Cap Label Service</h1>
          <p className="page-hero__subtitle">Build your brand on every cap with locally applied custom labels.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitImage}>
              <Image
                src="/images/cap-labeling-machine.jpg"
                alt="Cap labeling machine applying custom labels to caps"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className={styles.splitContent}>
              <span className="eyebrow">Customized Cap Labels</span>
              <h2 className={styles.splitTitle}>Your Brand, Every Delivery</h2>
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
            {points.map((p) => (
              <div key={p.title} className={styles.point}>
                <h3 className={styles.pointTitle}>{p.title}</h3>
                <p className={styles.pointDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Brand Your Caps" subtitle="Contact us to discuss your label design and quantities." />
    </>
  )
}
