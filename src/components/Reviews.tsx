import styles from './Reviews.module.css'

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Customer Reviews</span>
          <h2 className="section-header__title">What Our Clients Are Saying</h2>
          <div className="divider" />
        </div>
        <div className={styles.placeholder}>
          <div className={styles.placeholderIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <h3 className={styles.placeholderTitle}>Real Reviews — Coming Soon</h3>
          <p className={styles.placeholderText}>
            We are currently collecting verified feedback from our clients across Western Canada.
            Check back soon — real words from real Canadian businesses.
          </p>
          <div className={styles.placeholderStars}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className={styles.placeholderNote}>Ratings will appear here once verified</p>
        </div>
      </div>
    </section>
  )
}
