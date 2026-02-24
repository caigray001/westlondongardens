import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact Us | West London Gardens',
  description: 'Get in touch with West London Gardens for a free site visit and grounds maintenance proposal. Serving residential estates, managed blocks and commercial developments across London.',
  alternates: { canonical: 'https://www.westlondongardens.co.uk/contact' },
}

const steps = [
  {
    number: '01',
    title: 'Get in touch',
    body: 'Call us, email, or fill in the form. Tell us about your site and what you need — we\'ll get back to you the same day.',
  },
  {
    number: '02',
    title: 'We visit your site',
    body: 'We arrange a convenient time to walk your grounds, understand the scope, and ask the right questions. No charge, no obligation.',
  },
  {
    number: '03',
    title: 'You receive a proposal',
    body: 'We put together a tailored maintenance programme with clear pricing. No hidden costs, no vague estimates.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section style={{
        background: '#f5f4f0',
        padding: '160px 52px 80px',
        borderBottom: '1px solid #e8e4dc',
      }}>
        <div style={{
          maxWidth: 1360, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 20,
            }}>
              Get In Touch
            </div>
            <h1 style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              color: '#1a1a1a',
            }}>
              Let&apos;s talk about<br />
              <span style={{ color: '#1e3d20' }}>your site.</span>
            </h1>
          </div>
          <div>
            <p style={{
              fontSize: 17, lineHeight: 1.75, color: '#5a5e52', marginBottom: 28,
            }}>
              Whether you manage one property or a portfolio across London,
              the conversation starts the same way — tell us about your site
              and we&apos;ll take it from there.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <a href="tel:02088408799" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                textDecoration: 'none',
              }}>
                <div style={{
                  width: 40, height: 40, background: '#1e3d20', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#9a9e92', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Call us</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#1e3d20' }}>020 8840 8799</div>
                </div>
              </a>
              <div style={{ width: 1, background: '#e8e4dc', alignSelf: 'stretch' }} />
              <a href="mailto:admin@westlondongardens.co.uk" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                textDecoration: 'none',
              }}>
                <div style={{
                  width: 40, height: 40, background: '#e8f0e8', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#9a9e92', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email us</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1e3d20' }}>admin@westlondongardens.co.uk</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section style={{ background: '#fff', padding: '72px 52px', borderBottom: '1px solid #e8e4dc' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#9a9e92', marginBottom: 40,
            textAlign: 'center',
          }}>
            What happens after you get in touch
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{
                padding: '36px 40px',
                background: '#f5f4f0',
                position: 'relative',
              }}>
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '50%', right: -12,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    width: 24, height: 24,
                    background: '#fff',
                    border: '1px solid #e8e4dc',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#9a9e92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16,
                }}>
                  <div style={{
                    width: 36, height: 36,
                    background: '#1e3d20', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                  </div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: '#1a1a1a',
                    letterSpacing: '-0.01em',
                  }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5e52' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION — reuses ContactCTA but this IS the page */}
      <ContactCTA />
    </>
  )
}
