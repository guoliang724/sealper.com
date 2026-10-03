import type { Metadata } from 'next'
import styles from '../products.module.css'
import PageCta from '@/components/PageCta'

export const metadata: Metadata = {
  title: { absolute: 'HOD Packaging Delivery Across Canada | Sealper' },
  description: 'Sealper products are stocked in Canada and shipped by local delivery, LTL (Less-Than-Truckload) freight, parcel and sample shipping, or full container load (FCL).',
}

const options = [
  {
    title: 'Local Delivery',
    desc: 'Local delivery from our stock in Vancouver, Calgary, Edmonton and Toronto.',
  },
  {
    title: 'LTL Freight',
    desc: 'Less-Than-Truckload shipping for pallet orders to other locations across Canada.',
  },
  {
    title: 'Parcel & Sample Shipping',
    desc: 'Courier shipping for small orders and product samples.',
  },
  {
    title: 'Full Container Load (FCL)',
    desc: 'Full container shipments for large-volume orders.',
  },
]

export default function DeliveryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Delivery</span>
          <h1 className="page-hero__title">Flexible Shipping Across Canada</h1>
          <p className="page-hero__subtitle">
            Products are stocked in Canada and shipped based on order size, destination and delivery requirements.
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

      <PageCta
        title="Need a Shipping Quote?"
        subtitle="Send us your postal code and order quantity and we’ll recommend the most practical shipping option for your order."
      />
    </>
  )
}
