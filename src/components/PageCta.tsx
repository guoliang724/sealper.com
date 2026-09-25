import Link from 'next/link'
import styles from '@/app/products.module.css'

export default function PageCta({
  title = 'Get a Quote',
  subtitle = 'Tell us what you need and we’ll reply with pricing and availability.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className={styles.pageCtaStrip}>
      <div className="container">
        <h2 className={styles.pageCtaTitle}>{title}</h2>
        <p className={styles.pageCtaSubtitle}>{subtitle}</p>
        <div className={styles.pageCtaBtns}>
          <Link href="/contact-us" className={`btn btn--lg ${styles.ctaPrimary}`}>Get a Quote</Link>
          <a href="tel:4036675058" className="btn btn--outline-white btn--lg">Call 403-667-5058</a>
        </div>
      </div>
    </section>
  )
}
