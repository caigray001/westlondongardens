'use client'

const pillars = [
  {
    number: '01',
    title: 'We show up. Every time.',
    body: 'Unreliable contractors are the single biggest frustration for property managers. In over 30 years we have built our entire reputation on being where we say we\'ll be, when we say we\'ll be there. Our clients don\'t chase us — that\'s the standard we hold ourselves to.',
  },
  {
    number: '02',
    title: 'Direct communication, no runaround.',
    body: 'You deal with us directly. No call centres, no account managers who don\'t know your site. When you need something, you speak to someone who knows exactly which properties we maintain for you and what\'s been done.',
  },
  {
    number: '03',
    title: 'Fully compliant, fully insured.',
    body: 'We are SafeContractor accredited and fully insured. Our work meets all current health and safety regulations — important for managing agents who are accountable to leaseholders and freeholders for the contractors they appoint.',
  },
  {
    number: '04',
    title: 'Long-term relationships, not contracts.',
    body: 'Many of our clients have been with us for over 25 years. We don\'t win work on price then let standards slip. The way we retain clients is by maintaining the same quality on year five as we delivered on day one — which is why property managers keep renewing.',
  },
]

const iconPaths: Record<string, React.ReactNode> = {
  '01': <><circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7"/><path d="M12 7v5l3 3" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></>,
  '02': <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>,
  '03': <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>,
  '04': <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="rgba(255,255,255,0.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>,
}

export default function WhyUs() {
  return (
    <section className="px-5 md:px-[52px] py-16 md:py-[100px]" style={{ background: '#1e3d20' }}>
      <div className="max-w-[1360px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-12 md:mb-[72px]">
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16,
            }}>
              Why Choose Us
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 48px)',
              fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#fff', maxWidth: 480,
            }}>
              Built on reputation.<br />Proven by retention.
            </h2>
          </div>
          <p style={{
            fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 380,
          }}>
            Founded in 1994 by James Fletcher and now run by his son Tom,
            Green Crown Grounds has been built entirely on repeat business
            and referrals. Here&apos;s why.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mb-12 md:mb-[72px]">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="p-6 md:p-8 lg:p-11" style={{
              background: 'rgba(255,255,255,0.05)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, background: 'rgba(255,255,255,0.1)', borderRadius: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {iconPaths[pillar.number]}
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: 3 }}>
                    {pillar.number}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 pt-10 md:pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          {[
            { n: '1994', label: 'Year Founded' },
            { n: '30+', label: 'Years Operating' },
            { n: '25yr', label: 'Avg. Client Tenure' },
            { n: '100%', label: 'SafeContractor Compliant' },
          ].map((stat, i) => (
            <div key={stat.n} className={`px-4 md:px-6 lg:px-10 ${i === 0 ? 'pl-0' : i === 2 ? 'lg:border-l pl-0 lg:pl-10' : 'border-l'}`} style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="text-3xl md:text-[40px]" style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                {stat.n}
              </div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
