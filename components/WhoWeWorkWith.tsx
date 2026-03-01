'use client'

// Section 3 — Who We Work With
// The existing site treats this as a generic list. We're making it a proper B2B
// targeting section — each client type gets its own card with specific language
// that mirrors how property managers actually describe their own work.
// AEO: each card contains specific query-matching language that AI tools can surface.

const clients = [
  {
    type: 'Residential Block Management',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
      </svg>
    ),
    headline: 'Managing agents & leaseholder blocks',
    body: 'We work directly with managing agents and RMCs to maintain communal grounds across leasehold developments. Our regular schedules mean your residents always come home to well-kept surroundings — and your maintenance logs stay clean.',
    tags: ['Communal Ground Maintenance', 'Scheduled Visits', 'Maintenance Reporting'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    imageAlt: 'Residential block communal grounds London',
  },
  {
    type: 'Commercial & Office Developments',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Office parks, business centres & retail sites',
    body: 'First impressions matter for commercial tenants and their clients. We maintain the exterior grounds of office parks, business centres, and retail developments to a consistently high standard — keeping external spaces presentable year round.',
    tags: ['Office Park Grounds', 'Entrance Maintenance', 'Year-Round Contracts'],
    image: 'https://images.unsplash.com/photo-1743178207584-4a0c1109975e?w=600&q=80',
    imageAlt: 'Commercial office park grounds maintenance London',
  },
  {
    type: 'Private Estates & Large Properties',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    headline: 'Large residential estates & private grounds',
    body: 'For estate managers and private landlords overseeing significant land, we provide a dedicated, discreet service built on long-term relationships. Many of our private estate clients have been with us for over two decades.',
    tags: ['Private Estate Grounds', 'Long-Term Contracts', 'Dedicated Team'],
    image: 'https://images.unsplash.com/photo-1683849086278-acaa9c0d8eb6?w=600&q=80',
    imageAlt: 'Private estate grounds maintenance West London',
  },
]

export default function WhoWeWorkWith() {
  return (
    <section style={{
      background: '#f5f4f0',
      padding: '100px 52px',
    }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1e3d20',
            marginBottom: 16,
          }}>
            Who We Work With
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(30px, 3.2vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a1a1a',
              maxWidth: 520,
            }}>
              Built for the people who manage<br />
              <span style={{ color: '#1e3d20' }}>London&apos;s properties.</span>
            </h2>
            <p style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#5a5e52',
              maxWidth: 400,
            }}>
              We don&apos;t work with everyone. We specialise in grounds maintenance for
              property managers, managing agents, and estate directors who need a
              contractor they can rely on completely.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}>
          {clients.map((client) => (
            <div key={client.type} style={{
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}>
              {/* Image */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.image}
                  alt={client.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)',
                }} />
                {/* Type label on image */}
                <div style={{
                  position: 'absolute',
                  bottom: 16, left: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                }}>
                  {client.type}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon + headline */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{
                    width: 48, height: 48,
                    background: '#e8f0e8',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {client.icon}
                  </div>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: '#1a1a1a',
                    letterSpacing: '-0.01em',
                    paddingTop: 4,
                  }}>
                    {client.headline}
                  </h3>
                </div>

                <p style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#5a5e52',
                  marginBottom: 24,
                  flex: 1,
                }}>
                  {client.body}
                </p>

                {/* Tags — AEO keyword signals */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {client.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#1e3d20',
                      background: '#e8f0e8',
                      padding: '4px 10px',
                      borderRadius: 2,
                      letterSpacing: '0.02em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: 2,
          background: '#1e3d20',
          padding: '28px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              Not sure if we&apos;re the right fit?
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              Call us and we&apos;ll tell you honestly within 5 minutes.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:02088408799" className="btn-outline-light">
              020 8840 8799
            </a>
            <a href="/contact" className="btn-primary" style={{ background: '#fff', color: '#1e3d20' }}>
              Request a Site Visit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
