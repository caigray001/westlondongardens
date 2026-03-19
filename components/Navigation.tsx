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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-[52px] backdrop-blur-[12px] transition-all duration-300"
        style={{
          paddingTop: scrolled ? 14 : 20,
          paddingBottom: scrolled ? 14 : 20,
          background: scrolled ? 'rgba(245,244,240,0.97)' : 'rgba(245,244,240,0.6)',
          borderBottom: scrolled ? '1px solid #ddd9d0' : '1px solid transparent',
        }}
      >
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
              Green Crown Grounds
            </div>
            <div className="hidden sm:block" style={{ fontSize: 11, fontWeight: 400, color: '#6b7561', marginTop: 1 }}>
              Professional Grounds Maintenance
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
          ))}
          <a href="tel:02030000000" style={{ fontSize: 13, fontWeight: 600, color: '#1e3d20', textDecoration: 'none' }}>
            020 3000 0000
          </a>
          <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px' }}>
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ width: 44, height: 44, background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <div style={{ width: 22, position: 'relative', height: 18 }}>
            <span style={{
              display: 'block', height: 2, width: '100%', background: '#1a1a1a', borderRadius: 1,
              transition: 'all 0.3s ease', position: 'absolute',
              top: menuOpen ? 8 : 0, transform: menuOpen ? 'rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', height: 2, width: '100%', background: '#1a1a1a', borderRadius: 1,
              transition: 'all 0.2s ease', position: 'absolute', top: 8,
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', height: 2, width: '100%', background: '#1a1a1a', borderRadius: 1,
              transition: 'all 0.3s ease', position: 'absolute',
              top: menuOpen ? 8 : 16, transform: menuOpen ? 'rotate(-45deg)' : 'none',
            }} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40" style={{ background: 'rgba(245,244,240,0.98)', paddingTop: 80 }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '32px 24px' }}>
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 22, fontWeight: 700, color: '#1a1a1a', textDecoration: 'none',
                  padding: '18px 0', borderBottom: '1px solid #e8e4dc', letterSpacing: '-0.01em',
                }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:02030000000" style={{
              fontSize: 18, fontWeight: 600, color: '#1e3d20', textDecoration: 'none', padding: '24px 0 8px',
            }}>
              020 3000 0000
            </a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary"
              style={{ marginTop: 24, justifyContent: 'center', padding: '16px 28px', fontSize: 15 }}
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
