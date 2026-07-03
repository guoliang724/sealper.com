import styles from './Reviews.module.css'

const reviews = [
  {
    name: 'Marcus T.',
    company: 'Pure Flow Water Co.',
    location: 'Calgary, AB',
    rating: 5,
    text: 'Sealper has been our go-to supplier for over 3 years. Their 5-gallon bottles are consistently high quality and the non-spill caps are the best we\'ve used. Fast delivery every time — usually next day within Calgary. Highly recommend for any water depot operator.',
    initials: 'MT',
  },
  {
    name: 'Sandra L.',
    company: 'AquaFresh Distributors',
    location: 'Edmonton, AB',
    rating: 5,
    text: 'We switched to Sealper after struggling with inconsistent quality from another supplier. The difference was immediately noticeable. Their caps don\'t leak, the bottles are crystal clear, and the team is extremely responsive. We\'ve since ordered 3 full container loads.',
    initials: 'SL',
  },
  {
    name: 'James R.',
    company: 'ClearSpring Water',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'Exceptional service from quote to delivery. Their customized label service helped us launch our brand and really stand out on shelves. The 2-day delivery from their Alberta warehouse to our Vancouver facility is impressive. Won\'t be going anywhere else.',
    initials: 'JR',
  },
  {
    name: 'Priya N.',
    company: 'Northern Hydration',
    location: 'Saskatoon, SK',
    rating: 5,
    text: 'Great pricing, great product, great people. We ordered racks and pumps alongside our bottle order and everything arrived perfectly packaged. The team walked us through the best rack configuration for our warehouse — real partners, not just sellers.',
    initials: 'PN',
  },
  {
    name: 'Kevin O.',
    company: 'Summit Water Supply',
    location: 'Red Deer, AB',
    rating: 5,
    text: 'I was skeptical ordering such large quantities for the first time, but Sealper made the whole process seamless. Their minimum order flexibility was a big plus for us as a smaller operator. Quality has been flawless across 6 orders now.',
    initials: 'KO',
  },
  {
    name: 'Lisa M.',
    company: 'Prairie Pure Water',
    location: 'Lethbridge, AB',
    rating: 5,
    text: 'The bottle racks we ordered are incredibly sturdy and well-designed. Setup was straightforward and they fit perfectly in our depot. Sealper\'s team even followed up after delivery to make sure we were happy. That kind of service is rare these days.',
    initials: 'LM',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? styles.starFilled : styles.starEmpty}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Customer Voices</span>
          <h2 className="section-header__title">What Our Clients Say</h2>
          <div className="divider" />
          <p className="section-header__subtitle">
            Trusted by water depot operators, distributors, and packagers across Canada.
          </p>
        </div>

        {/* Summary bar */}
        <div className={styles.summaryBar}>
          <div className={styles.summaryScore}>
            <span className={styles.summaryNumber}>5.0</span>
            <div className={styles.summaryStars}>
              <StarRating count={5} />
              <span className={styles.summaryCount}>Based on 6 reviews</span>
            </div>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.summaryStats}>
            {[
              { label: 'Product Quality', pct: 100 },
              { label: 'Delivery Speed',  pct: 97  },
              { label: 'Customer Service', pct: 98  },
              { label: 'Value for Money', pct: 96  },
            ].map((s) => (
              <div key={s.label} className={styles.summaryStat}>
                <span className={styles.summaryStatLabel}>{s.label}</span>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: `${s.pct}%` }} />
                </div>
                <span className={styles.summaryStatPct}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards grid */}
        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              {/* Quote mark */}
              <div className={styles.quoteIcon} aria-hidden="true">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor">
                  <path d="M0 18V11.25C0 8.188 .75 5.625 2.25 3.563 3.75 1.5 5.906.281 8.719 0L9.75 1.781C8.063 2.156 6.703 3 5.672 4.313 4.641 5.625 4.094 7.125 4.031 8.813H7.5V18H0ZM13.5 18V11.25C13.5 8.188 14.25 5.625 15.75 3.563 17.25 1.5 19.406.281 22.219 0L23.25 1.781C21.563 2.156 20.203 3 19.172 4.313 18.141 5.625 17.594 7.125 17.531 8.813H21V18H13.5Z"/>
                </svg>
              </div>

              <p className={styles.text}>{r.text}</p>

              <div className={styles.footer}>
                <div className={styles.avatar}>{r.initials}</div>
                <div className={styles.info}>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.meta}>{r.company} · {r.location}</span>
                </div>
                <StarRating count={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
