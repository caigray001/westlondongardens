'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 52px' : '20px 52px',
      background: scrolled ? 'rgba(245,244,240,0.97)' : 'rgba(245,244,240,0.6)',
      borderBottom: scrolled ? '1px solid #ddd9d0' : '1px solid transparent',
      backdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
        <div style={{
          width: 40, height: 40, background: '#1e3d20', borderRadius: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C12 3 6 8.5 6 14a6 6 0 0012 0C18 8.5 12 3 12 3z" fill="rgba(255,255,255,0.9)"/>
            <path d="M12 14v5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            West London Gardens
          </div>
          <div style={{ fontSize: 11, fontWeight: 400, color: '#6b7561', marginTop: 1 }}>
            Professional Grounds Maintenance
          </div>
        </div>
      </Link>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {NAV_LINKS.map(l => (
          <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
        ))}
        <a
          href="tel:02088408799"
          style={{ fontSize: 13, fontWeight: 600, color: '#1e3d20', textDecoration: 'none' }}
        >
          020 8840 8799
        </a>
        <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px' }}>
          Get a Quote
        </Link>
      </div>
    </nav>
  )
}
