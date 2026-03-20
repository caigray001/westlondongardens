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
      <section className="min-h-screen px-5 md:px-[52px] relative" style={{ background: '#f5f4f0', overflow: 'hidden' }}>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 w-full max-w-[1360px] mx-auto pt-24 lg:pt-[100px] pb-12 lg:pb-20">

          {/* LEFT — copy */}
          <div className="w-full lg:w-[52%] lg:pr-4">

            {/* Trust pills */}
            <div className="fade-up-1 flex gap-2 flex-wrap mb-7 lg:mb-9">
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
              fontSize: 'clamp(32px, 4.2vw, 62px)',
              fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em',
              color: '#1a1a1a', marginBottom: 24,
            }}>
              Your Grounds.<br />
              <span style={{ color: '#1e3d20' }}>Our Problem.</span><br />
              Since 1994.
            </h1>

            <p className="fade-up-3" style={{
              fontSize: 17, fontWeight: 400, lineHeight: 1.7,
              color: '#5a5e52', maxWidth: 480, marginBottom: 40,
            }}>
              We keep the grounds of London&apos;s residential estates, commercial
              developments, and managed blocks in immaculate condition — year round,
              without the hassle.
            </p>

            <div className="fade-up-4 flex gap-3 flex-wrap mb-10 lg:mb-14">
              <Link href="/contact" className="btn-primary">
                Request a Site Visit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary">View Services</Link>
            </div>

            {/* Stats */}
            <div className="fade-up-5 flex flex-wrap gap-y-4 pt-8 lg:pt-10 border-t" style={{ borderColor: '#d4d0c8' }}>
              {[
                { n: '30+', label: 'Years in Operation' },
                { n: '25yr', label: 'Avg. Client Relationship' },
                { n: '100%', label: 'SafeContractor Compliant' },
              ].map((s, i) => (
                <div key={s.n} className={`pr-6 lg:pr-8 ${i === 0 ? '' : 'pl-6 lg:pl-8 border-l'}`} style={{ borderColor: '#d4d0c8' }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color: '#1e3d20', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#7a7e72', marginTop: 5, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="w-full lg:flex-1 relative h-[300px] sm:h-[400px] lg:h-[calc(100vh-120px)] lg:min-h-[480px] lg:max-h-[720px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1642541744624-7a2a89545a32?w=900&q=85"
              alt="Professional grounds maintenance London"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2, display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)',
              borderRadius: 2,
            }} />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 md:px-6 md:py-[18px]" style={{ background: '#1e3d20', color: '#fff' }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 5 }}>Currently Serving</div>
              <div className="text-xs md:text-[13px]" style={{ fontWeight: 700, lineHeight: 1.5 }}>Grounds Maintenance Across London</div>
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
