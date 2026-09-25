import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: 'Delivery — Local Delivery, LTL Freight & Parcel Shipping',
  description: 'Sealper delivery options from Canadian stock: local delivery, LTL (Less Than Truckload) freight, and parcel or sample shipping.',
}

const options = [
  {
    title: 'Local Delivery',
    desc: 'Local delivery from our stock in Vancouver, Calgary, Edmonton and Toronto.',
  },
  {
    title: 'LTL Freight',
    desc: 'Less Than Truckload shipping for pallet orders to other locations across Canada.',
  },
  {
    title: 'Parcel / Sample Shipping',
    desc: 'Courier shipping for small orders and product samples.',
  },
]

export default function DeliveryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Services</span>
          <h1 className="page-hero__title">Delivery</h1>
          <p className="page-hero__subtitle">
            Products stocked in Canada, shipped the way that suits your order.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.points}>
            {options.map((o) => (
              <div key={o.title} className={styles.point}>
                <h2 className={styles.pointTitle}>{o.title}</h2>
                <p className={styles.pointDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Need a Shipping Quote?" subtitle="Tell us your location and order size — we’ll recommend the best option." />
    </>
  )
}
