'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Products',
    href: '#',
    children: [
      { label: 'Bottles', href: '/bottles', desc: '5 & 3 Gallon — North America\'s Only Seamless IBW' },
      { label: 'Caps', href: '/caps', desc: 'Non-spill & Standard Caps' },
      { label: 'Racks', href: '/racks', desc: 'Storage & Display Racks' },
      { label: 'Pumps', href: '/pumps', desc: 'Manual & USB Pumps' },
      { label: 'Cradles', href: '/cradles', desc: 'Folding & Table Cradles' },
      { label: 'Water Coolers', href: '/water-coolers', desc: 'Dispensers & Coolers' },
    ],
  },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Customized Labels', href: '/customized-labels', desc: 'Brand Your Bottles in 7 Days' },
      { label: 'Delivery', href: '/delivery', desc: 'Same-Day & 2–4 Day Canada Coverage' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* ── Top Announcement Bar ── */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <span className={styles.topBarText}>
              <span className={styles.maple}>🍁</span>
              100% Canadian Owned &amp; Operated
              <span className={styles.topBarDivider}>·</span>
              Same-day delivery in Vancouver · Calgary · Edmonton · Toronto
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className={styles.navBar}>
        <div className="container">
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={closeMobile}>
              <span className={styles.logoMark}>S</span>
              <span className={styles.logoText}>SEALPER</span>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.nav} aria-label="Main Navigation">
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className={styles.navItem}
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <>
                        <button className={styles.navLink} aria-haspopup="true" aria-expanded={activeDropdown === item.label}>
                          {item.label}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className={`${styles.chevron} ${activeDropdown === item.label ? styles.chevronOpen : ''}`}>
                            <path d="M6 8L1.5 3h9L6 8z"/>
                          </svg>
                        </button>
                        <div className={`${styles.dropdown} ${activeDropdown === item.label ? styles.dropdownOpen : ''} ${item.label === 'Products' ? styles.dropdownProducts : styles.dropdownServices}`}>
                          <div className={styles.dropdownGrid}>
                            {item.children.map((child) => (
                              <Link key={child.label} href={child.href} className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                                <span className={styles.dropdownItemLabel}>{child.label}</span>
                                <span className={styles.dropdownItemDesc}>{child.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} className={styles.navLink}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA + Hamburger */}
            <div className={styles.actions}>
              <Link href="/contact-us" className={`btn btn--primary btn--sm ${styles.ctaBtn}`}>
                Get a Quote
              </Link>
              <button
                className={styles.hamburger}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileOpen}
              >
                <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen1 : ''}`} />
                <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen2 : ''}`} />
                <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.hamburgerLineOpen3 : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`} onClick={closeMobile} />
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`} aria-hidden={!mobileOpen}>
        <div className={styles.mobileDrawerHeader}>
          <Link href="/" className={styles.logo} onClick={closeMobile}>
            <span className={styles.logoMark}>S</span>
            <span className={styles.logoText}>SEALPER</span>
          </Link>
          <button className={styles.mobileClose} onClick={closeMobile} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
            </svg>
          </button>
        </div>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <div key={item.label} className={styles.mobileNavItem}>
              {item.children ? (
                <>
                  <button
                    className={styles.mobileNavBtn}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" className={`${styles.chevron} ${mobileExpanded === item.label ? styles.chevronOpen : ''}`}>
                      <path d="M6 8L1.5 3h9L6 8z"/>
                    </svg>
                  </button>
                  <div className={`${styles.mobileSubmenu} ${mobileExpanded === item.label ? styles.mobileSubmenuOpen : ''}`}>
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className={styles.mobileSubLink} onClick={closeMobile}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className={styles.mobileNavLink} onClick={closeMobile}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.mobileDrawerFooter}>
          <Link href="/contact-us" className="btn btn--primary" onClick={closeMobile} style={{ width: '100%', justifyContent: 'center' }}>
            Get a Quote
          </Link>
          <p className={styles.mobileContact}>
            <a href="tel:4036675058">403-667-5058</a> &nbsp;|&nbsp;
            <a href="mailto:contact@sealper.com">contact@sealper.com</a>
          </p>
        </div>
      </div>
    </header>
  )
}
