'use client'

const testimonials = [
  {
    quote: "Working with your team has been an absolute pleasure. Your professionalism, attention to detail, and reliable service have made a noticeable difference in the appearance and upkeep of estates we manage. I would highly recommend your services to anyone looking for exceptional grounds maintenance.",
    name: 'Sarvesh Balannavar',
    title: 'Branch Director',
    company: 'Colin Bibra',
    companyType: 'Estate Agents',
    tenure: 'Long-term client',
    initial: 'SB',
  },
  {
    quote: "I have been working with Green Crown Grounds for over 10 years. They are professional, communicative and reliable. The management team provide a personal service on every project — it's a genuine pleasure working with them and I wouldn't hesitate to recommend them.",
    name: 'Siobhan Hurst BA (Hons) ATPI',
    title: 'Associate Director',
    company: 'Firstport',
    companyType: 'Property Management',
    tenure: '10+ year client',
    initial: 'SH',
  },
  {
    quote: "Green Crown Grounds have consistently provided reliable and responsive service to our residents. Their attention to communal spaces and willingness to go beyond the basics makes a real difference. Their service is a genuinely valuable asset to our community.",
    name: 'Rita Da Silva',
    title: 'Property Manager',
    company: 'Firstport',
    companyType: 'Property Management',
    tenure: 'Long-term client',
    initial: 'RD',
  },
]

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#1e3d20">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="px-5 md:px-[52px] py-16 md:py-[100px]" style={{ background: '#f5f4f0' }}>
      <div className="max-w-[1360px] mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
          }}>
            Client Testimonials
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 48px)',
              fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1a1a1a',
            }}>
              Trusted by London&apos;s leading<br />
              <span style={{ color: '#1e3d20' }}>property managers.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#5a5e52', lineHeight: 1.7, maxWidth: 360 }}>
              Our clients don&apos;t just renew their contracts — they recommend us.
              These are the people who manage some of London&apos;s most prestigious
              residential and commercial properties.
            </p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-[60px] items-center p-6 md:p-10 lg:p-14 mb-[2px]" style={{ background: '#fff' }}>
          <div>
            <StarRating />
            <blockquote style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              fontWeight: 500, lineHeight: 1.6, color: '#1a1a1a',
              letterSpacing: '-0.01em', margin: '24px 0 32px', fontStyle: 'normal',
            }}>
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 48, height: 48, background: '#1e3d20', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{testimonials[0].initial}</span>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>{testimonials[0].name}</div>
                <div style={{ fontSize: 13, color: '#7a7e72', marginTop: 2 }}>
                  {testimonials[0].title} · <span style={{ color: '#1e3d20', fontWeight: 600 }}>{testimonials[0].company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company card — hidden on mobile */}
          <div className="hidden lg:block" style={{
            padding: '32px 36px', background: '#f5f4f0', borderRadius: 2, textAlign: 'center', minWidth: 180,
          }}>
            <div style={{
              width: 64, height: 64, background: '#e8e4dc', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
            }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#9a9e92' }}>{testimonials[0].company.charAt(0)}</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{testimonials[0].company}</div>
            <div style={{ fontSize: 11, color: '#9a9e92', marginBottom: 16 }}>{testimonials[0].companyType}</div>
            <div style={{
              fontSize: 11, fontWeight: 600, color: '#1e3d20', background: '#e8f0e8',
              padding: '5px 12px', borderRadius: 100, display: 'inline-block',
            }}>
              {testimonials[0].tenure}
            </div>
          </div>
        </div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {testimonials.slice(1).map((t) => (
            <div key={t.name} className="p-5 md:p-8 lg:p-11" style={{ background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <StarRating />
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#1e3d20', background: '#e8f0e8',
                  padding: '4px 10px', borderRadius: 100,
                }}>
                  {t.tenure}
                </span>
              </div>
              <blockquote style={{
                fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: '#3a3a3a',
                fontStyle: 'normal', marginBottom: 32,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1px solid #e8e4dc' }}>
                <div style={{
                  width: 42, height: 42, background: '#1e3d20', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.initial}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#7a7e72', marginTop: 2 }}>
                    {t.title} · <span style={{ color: '#1e3d20', fontWeight: 600 }}>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
