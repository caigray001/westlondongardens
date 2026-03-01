import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactCTA from '@/components/ContactCTA'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | West London Gardens — 30+ Years of Grounds Maintenance',
  description: 'West London Gardens was founded in 1994 by Antony Kitcher and is now run by his son Luke. Over 30 years of professional grounds maintenance for residential estates, managed blocks, and commercial developments across London. SafeContractor accredited.',
  alternates: { canonical: 'https://www.westlondongardens.co.uk/about' },
}

const values = [
  {
    number: '01',
    title: 'Proactive & Efficient',
    body: 'We don\'t wait for issues to escalate. Our team anticipates problems and addresses them before they become complaints — ensuring maintenance needs are handled swiftly and effectively on every visit.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7"/>
        <path d="M12 7v5l3 3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Collaboration with Property Managers',
    body: 'We understand the importance of smooth communication. Our team works closely with property managers to ensure both they and their residents are satisfied with the work we carry out — no chasing required.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Reliable & Consistent Service',
    body: 'Our regular maintenance schedules ensure outdoor spaces remain well-kept all year round, providing peace of mind to property managers and residents alike. We show up when we say we will — every time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Friendly & Professional',
    body: 'Our approachable team is always ready to assist, bringing a positive, solutions-driven attitude to every project. We take pride in delivering high-quality work with a commitment to detail and customer satisfaction.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const timeline = [
  { year: '1994', text: 'Antony Kitcher founds West London Gardens, beginning with residential garden maintenance across Ealing and surrounding boroughs.' },
  { year: '2000s', text: 'The business expands into grounds maintenance for managed residential blocks and commercial developments, building long-term relationships with property managers across London.' },
  { year: '2010s', text: 'West London Gardens becomes SafeContractor accredited, formalising the health and safety standards the business had always operated to.' },
  { year: 'Today', text: 'Luke Kitcher now runs the business, continuing the same standards his father established. Many clients have been with us for over 25 years — a retention rate built entirely on consistent, reliable service.' },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section style={{
        paddingTop: 80,
        position: 'relative',
        height: 340,
        overflow: 'hidden',
        background: '#1e3d20',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1642541744624-7a2a89545a32?w=1400&q=80"
          alt="Maintained grounds"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            opacity: 0.25,
          }}
        />
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1360, margin: '0 auto',
          padding: '60px 52px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', height: '100%',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            marginBottom: 20,
          }}>
            About Us
          </div>
          <h1 style={{
            fontSize: 'clamp(30px, 3.2vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: 16,
          }}>
            Family-run since 1994.{' '}
            <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
              Built on reputation.
            </span>
          </h1>
          <p style={{
            fontSize: 15, fontWeight: 400, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.55)', maxWidth: 560,
          }}>
            Professional grounds maintenance for residential estates, commercial
            developments, and block management portfolios across London.
          </p>
        </div>
      </section>

      {/* ABOUT OUR COMPANY */}
      <section style={{ background: '#f5f4f0', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            alignItems: 'stretch',
          }}>
            {/* Image side */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 520,
              background: '#e8e4dc',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="West London Gardens team at work"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />
              {/* Overlay strip */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(30,61,32,0.95), transparent)',
                padding: '60px 36px 28px',
              }}>
                <div style={{
                  display: 'flex', gap: 32,
                }}>
                  {[
                    { n: '30+', label: 'Years' },
                    { n: '25yr', label: 'Avg. Client Tenure' },
                  ].map((s) => (
                    <div key={s.n}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content side */}
            <div style={{
              background: '#fff',
              padding: '52px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
              }}>
                About Our Company
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 2.8vw, 40px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.1, color: '#1a1a1a', marginBottom: 24,
              }}>
                30+ years of experience in gardening &amp; landscaping.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#5a5e52' }}>
                  West London Gardens was founded in 1994 by Antony Kitcher. Known
                  for reliability and competence, the family-run business continues
                  to deliver exceptional garden care for both commercial and
                  residential developments across London.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#5a5e52' }}>
                  We have established a loyal client base across London, with many
                  of our clients having been with us for over 25 years. Today,
                  Antony&apos;s son Luke upholds the legacy, ensuring consistent,
                  high-quality service on every site we maintain.
                </p>
              </div>

              {/* Vision & Values condensed */}
              <div style={{
                marginTop: 36, paddingTop: 32,
                borderTop: '1px solid #e8e4dc',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
              }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>
                    Our Vision
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a5e52' }}>
                    To be London&apos;s most trusted grounds maintenance partner for
                    property managers — delivering precision, reliability, and
                    tailored solutions that keep every development looking its best.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 10 }}>
                    Our Core Values
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a5e52' }}>
                    Professionalism, reliability, and exceptional service. We work
                    closely with property managers to provide proactive communication,
                    consistent results, and the highest standards of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section style={{ background: '#fff', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}>
            {/* Text side */}
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
              }}>
                Our Team
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 2.8vw, 42px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.1, color: '#1a1a1a', marginBottom: 24,
              }}>
                Dedicated, skilled, and built for the long term.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#5a5e52' }}>
                  At West London Gardens, we believe that a well-maintained outdoor
                  space starts with a dedicated and skilled team. Our experienced
                  gardeners take pride in delivering exceptional service, ensuring
                  every property we maintain is cared for with precision and
                  professionalism.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: '#5a5e52' }}>
                  We are a friendly, proactive, and highly reliable team of
                  gardeners, dedicated to keeping our sites looking their best. With
                  years of hands-on experience in grounds maintenance, we work
                  closely with property managers, landlords, and homeowners to
                  create tailored solutions that meet their needs.
                </p>
              </div>

              {/* Team qualities */}
              <div style={{
                marginTop: 32,
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
              }}>
                {[
                  'Hands-on experience',
                  'Fully trained & insured',
                  'Proactive communication',
                  'Consistent site teams',
                ].map((item) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 0',
                  }}>
                    <div style={{
                      width: 22, height: 22, background: '#e8f0e8', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#1e3d20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#3a3e32' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              height: 480,
              background: '#e8e4dc',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                alt="West London Gardens gardening team at work on residential estate"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: '#1e3d20', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 80, marginBottom: 64, alignItems: 'end',
          }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16,
              }}>
                Our Approach
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 2.8vw, 42px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.1, color: '#fff',
              }}>
                How we work with<br />property managers.
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
              We take pride in delivering high-quality gardening maintenance with a
              commitment to detail and customer satisfaction. Our approach is built
              around the needs of property managers and the developments they oversee.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {values.map((v) => (
              <div key={v.number} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '40px 44px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: 3 }}>
                      {v.number}
                    </div>
                    <h3 style={{
                      fontSize: 18, fontWeight: 700,
                      color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2,
                    }}>
                      {v.title}
                    </h3>
                  </div>
                </div>
                <p style={{
                  fontSize: 14, fontWeight: 400,
                  lineHeight: 1.8, color: 'rgba(255,255,255,0.6)',
                }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section style={{ background: '#f5f4f0', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 14,
            }}>
              Our Journey
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 2.8vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1a1a1a',
            }}>
              Three decades of dependable service.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {timeline.map((item, i) => (
              <div key={item.year} style={{
                background: '#fff', padding: '40px 36px',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Large year background */}
                <div style={{
                  position: 'absolute', top: -8, right: 12,
                  fontSize: 80, fontWeight: 900, color: '#f0ede6',
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}>
                  {item.year}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 36, height: 36, background: '#1e3d20', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                  </div>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, color: '#1e3d20',
                    letterSpacing: '-0.01em', marginBottom: 14,
                  }}>
                    {item.year}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a5e52' }}>
                    {item.text}
                  </p>
                </div>
                {/* Connector */}
                {i < timeline.length - 1 && (
                  <div style={{
                    position: 'absolute', top: '50%', right: -1,
                    width: 2, height: 40, background: '#e8e4dc',
                    transform: 'translateY(-50%)',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES & ACCREDITATIONS */}
      <section style={{ background: '#fff', padding: '80px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{
            background: '#1e3d20',
            padding: '52px 56px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 56,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16,
              }}>
                Certificates &amp; Accreditations
              </div>
              <h2 style={{
                fontSize: 'clamp(22px, 2.2vw, 32px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.2, color: '#fff', marginBottom: 20,
              }}>
                SafeContractor accredited.<br />Fully insured. Fully compliant.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: 560 }}>
                At West London Gardens, we uphold the highest standards of safety and
                professionalism. With over 30 years of experience, we have built a
                reputation for reliability and expertise across London. As a fully
                licensed and SafeContractor accredited company, our work meets all
                current health and safety regulations — providing peace of mind and
                quality assurance for all our clients.
              </p>
              <Link href="/contact" className="btn-outline-light" style={{ marginTop: 28, display: 'inline-flex' }}>
                Request a Site Visit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* SafeContractor badge area */}
            <div style={{
              width: 160, height: 160,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 12 }}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  SafeContractor
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>
                  Accredited
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
