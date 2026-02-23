import Navigation from '@/components/Navigation'
import SocialProofBar from '@/components/SocialProofBar'
import WhoWeWorkWith from '@/components/WhoWeWorkWith'
import ServicesSection from '@/components/ServicesSection'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ContactCTA from '@/components/ContactCTA'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        padding: '0 52px',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        position: 'relative',
        background: '#f5f4f0',
      }}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          width: '100%',
          maxWidth: 1360,
          margin: '0 auto',
          paddingTop: 100,
          paddingBottom: 80,
        }}>

          {/* LEFT — copy */}
          <div style={{ flex: '0 0 auto', width: '52%', paddingRight: 16 }}>

            {/* Trust pills */}
            <div className="fade-up-1" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
              <span className="trust-pill">
                <span style={{ width: 20, height: 20, background: '#e8f0e8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#1e3d20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                SafeContractor Accredited
              </span>
              <span className="trust-pill">
                <span style={{ width: 20, height: 20, background: '#e8f0e8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#1e3d20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Est. 1994 · Fully Insured
              </span>
            </div>

            <h1 className="fade-up-2" style={{
              fontSize: 'clamp(38px, 4.2vw, 62px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: '#1a1a1a',
              marginBottom: 24,
            }}>
              London&apos;s Trusted<br />
              <span style={{ color: '#1e3d20' }}>Grounds Maintenance</span><br />
              Partner.
            </h1>

            <p className="fade-up-3" style={{
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#5a5e52',
              maxWidth: 480,
              marginBottom: 40,
            }}>
              We keep the grounds of London&apos;s residential estates, commercial
              developments, and managed blocks in immaculate condition — year round,
              without the hassle.
            </p>

            <div className="fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/contact" className="btn-primary">
                Request a Site Visit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary">View Services</Link>
            </div>

            {/* Stats */}
            <div className="fade-up-5" style={{ display: 'flex', paddingTop: 40, borderTop: '1px solid #d4d0c8' }}>
              {[
                { n: '30+', label: 'Years in Operation' },
                { n: '25yr', label: 'Avg. Client Relationship' },
                { n: '100%', label: 'SafeContractor Compliant' },
              ].map((s, i) => (
                <div key={s.n} style={{
                  padding: '0 32px',
                  borderLeft: i === 0 ? 'none' : '1px solid #d4d0c8',
                  paddingLeft: i === 0 ? 0 : 32,
                }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: '#1e3d20', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#7a7e72', marginTop: 5, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div style={{
            flex: 1,
            position: 'relative',
            height: 'calc(100vh - 120px)',
            minHeight: 480,
            maxHeight: 720,
          }}>
            {/* Main image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
              alt="Professional grounds maintenance London"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                display: 'block',
              }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)',
              borderRadius: 2,
            }} />

            {/* Borough card */}
            <div style={{
              position: 'absolute',
              background: '#1e3d20',
              color: '#fff',
              padding: '18px 22px',
              bottom: 32,
              left: -28,
              minWidth: 200,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 6 }}>Currently Serving</div>
              <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4 }}>Ealing · Kensington · Richmond<br />Hammersmith · Chelsea & Beyond</div>
            </div>

            {/* Compliance badge */}
            <div style={{
              position: 'absolute', top: 24, right: 24,
              background: 'rgba(245,244,240,0.95)',
              padding: '12px 16px',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 36, height: 36, background: '#e8f0e8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a' }}>Fully Compliant</div>
                <div style={{ fontSize: 11, color: '#6b7561' }}>Health & Safety Certified</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SocialProofBar />
      <WhoWeWorkWith />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}
