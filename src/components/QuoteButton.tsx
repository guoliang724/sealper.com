import Link from 'next/link'
import styles from '@/app/products.module.css'

// Per-product quote link; the contact form pre-fills the product name from ?product=
export default function QuoteButton({ product }: { product: string }) {
  return (
    <Link href={`/contact-us?product=${encodeURIComponent(product)}`} className={`btn btn--primary btn--sm ${styles.productQuote}`}>
      Get a Quote
    </Link>
  )
}
