'use client'

// Section 5 — Why West London Gardens
// Doesn't exist on the current site at all. Property managers choosing a grounds
// maintenance contractor have very specific concerns — reliability, communication,
// compliance, and consistency. This section addresses each one directly.
// AEO: structured to answer "what should I look for in a grounds maintenance
// contractor" and "why choose West London Gardens" style queries.

const pillars = [
  {
    number: '01',
    title: 'We show up. Every time.',
    body: 'Unreliable contractors are the single biggest frustration for property managers. In over 30 years we have built our entire reputation on being where we say we\'ll be, when we say we\'ll be there. Our clients don\'t chase us — that\'s the standard we hold ourselves to.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1e3d20" strokeWidth="1.7"/>
        <path d="M12 7v5l3 3" stroke="#1e3d20" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Direct communication, no runaround.',
    body: 'You deal with us directly. No call centres, no account managers who don\'t know your site. When you need something, you speak to someone who knows exactly which properties we maintain for you and what\'s been done.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#1e3d20" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Fully compliant, fully insured.',
    body: 'We are SafeContractor accredited and fully insured. Our work meets all current health and safety regulations — important for managing agents who are accountable to leaseholders and freeholders for the contractors they appoint.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#1e3d20" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Long-term relationships, not contracts.',
    body: 'Many of our clients have been with us for over 25 years. We don\'t win work on price then let standards slip. The way we retain clients is by maintaining the same quality on year five as we delivered on day one — which is why property managers keep renewing.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#1e3d20" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section style={{ background: '#1e3d20', padding: '100px 52px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 32,
          marginBottom: 72,
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
              marginBottom: 16,
            }}>
              Why Choose Us
            </div>
            <h2 style={{
              fontSize: 'clamp(30px, 3.2vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#fff',
              maxWidth: 480,
            }}>
              Built on reputation.<br />Proven by retention.
            </h2>
          </div>
          <p style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 380,
          }}>
            Founded in 1994 by Antony Kitcher and now run by his son Luke,
            West London Gardens has been built entirely on repeat business
            and referrals. Here&apos;s why.
          </p>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          marginBottom: 72,
        }}>
          {pillars.map((pillar) => (
            <div key={pillar.number} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '40px 44px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              transition: 'background 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {/* Re-render icon in white */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {pillar.number === '01' && <>
                      <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7"/>
                      <path d="M12 7v5l3 3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </>}
                    {pillar.number === '02' && <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>}
                    {pillar.number === '03' && <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>}
                    {pillar.number === '04' && <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>}
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: 3 }}>
                    {pillar.number}
                  </div>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700,
                    color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2,
                  }}>
                    {pillar.title}
                  </h3>
                </div>
              </div>

              <p style={{
                fontSize: 14, fontWeight: 400,
                lineHeight: 1.8, color: 'rgba(255,255,255,0.6)',
              }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: 48,
          gap: 0,
        }}>
          {[
            { n: '1994', label: 'Year Founded' },
            { n: '30+', label: 'Years Operating' },
            { n: '25yr', label: 'Avg. Client Tenure' },
            { n: '100%', label: 'SafeContractor Compliant' },
          ].map((stat, i) => (
            <div key={stat.n} style={{
              padding: '0 40px',
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)',
              paddingLeft: i === 0 ? 0 : 40,
            }}>
              <div style={{
                fontSize: 40, fontWeight: 800,
                color: '#fff', letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 8,
              }}>
                {stat.n}
              </div>
              <div style={{
                fontSize: 12, fontWeight: 500,
                color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
