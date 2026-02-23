'use client'

// Section 4 — Services
// Existing site: 8 icon tiles, one-line descriptions. Feels like a brochure menu.
// New approach: 5 core services, each with a proper description written to answer
// specific questions a property manager would ask. AEO: content structured so AI
// tools can match queries like "hedge trimming for residential estates London" or
// "grounds maintenance pressure washing communal areas."

const services = [
  {
    number: '01',
    title: 'Ground & Lawn Maintenance',
    description: 'Our core service — regular scheduled visits to keep grass cut, borders tidy, leaves cleared, and communal outdoor areas in consistently good condition throughout the year. Tailored maintenance plans are drawn up for each site based on size, usage, and seasonal requirements.',
    details: ['Lawn mowing & edging', 'Leaf clearance', 'Seasonal plant care', 'Border maintenance', 'Litter & debris removal'],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
    imageAlt: 'Ground and lawn maintenance London residential estate',
  },
  {
    number: '02',
    title: 'Hedge Trimming & Pruning',
    description: 'Precisely cut hedges and well-shaped shrubs make a significant difference to the appearance of any managed property. We trim and prune to maintain structure, encourage healthy growth, and keep communal boundaries looking sharp — not just once, but consistently across the year.',
    details: ['Hedge shaping & cutting', 'Shrub pruning', 'Tree maintenance', 'Overgrowth clearance', 'Crown lifting'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80',
    imageAlt: 'Professional hedge trimming pruning West London',
  },
  {
    number: '03',
    title: 'Weeding & Planting',
    description: 'Persistent weeds in hard surfaces, beds, and borders are one of the most common complaints from residents on managed developments. We remove weeds thoroughly from all areas and ensure planted beds remain vibrant and well-maintained, with seasonal planting where required.',
    details: ['Bed & border weeding', 'Hard surface weed control', 'Seasonal planting', 'Mulching', 'Soil care'],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&q=80',
    imageAlt: 'Weeding planting communal gardens London',
  },
  {
    number: '04',
    title: 'Pressure Washing',
    description: 'Patios, pathways, car parks, and communal hard surfaces accumulate dirt, moss, and grime over time. Our pressure washing service restores them to a clean, safe condition — particularly important for managed blocks where slip hazards on communal paths are a compliance concern.',
    details: ['Pathway & patio cleaning', 'Car park surfaces', 'Communal entrances', 'Moss & algae removal', 'Drainage clearance'],
    image: 'https://images.unsplash.com/photo-1558618047-3c9f0b9a8b32?w=700&q=80',
    imageAlt: 'Pressure washing communal areas residential block London',
  },
  {
    number: '05',
    title: 'Seasonal Programmes',
    description: 'Grounds maintenance requirements change significantly across the year. We operate year-round with seasonal programmes that cover spring planting, summer growth management, autumn leaf clearance, and winter pathway safety — so your sites are always prepared for the current season.',
    details: ['Spring bulb planting', 'Summer maintenance schedules', 'Autumn leaf clearance', 'Winter pathway gritting', 'Seasonal reporting'],
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&q=80',
    imageAlt: 'Seasonal grounds maintenance programme London estates',
  },
]

export default function Services() {
  return (
    <section style={{ background: '#fff', padding: '100px 52px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
            }}>
              Our Services
            </div>
            <h2 style={{
              fontSize: 'clamp(30px, 3.2vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a1a1a',
            }}>
              Everything your site needs,<br />
              <span style={{ color: '#1e3d20' }}>handled properly.</span>
            </h2>
          </div>
          <a href="/services" style={{
            fontSize: 13, fontWeight: 600, color: '#1e3d20',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
            borderBottom: '1.5px solid #1e3d20', paddingBottom: 2, flexShrink: 0,
          }}>
            View all services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Service rows — alternating layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {services.map((service, i) => (
            <div key={service.number} style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 420px' : '420px 1fr',
              background: '#f5f4f0',
              overflow: 'hidden',
              minHeight: 260,
            }}>

              {/* Content — order flips for even rows */}
              <div style={{
                padding: '40px 44px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                order: i % 2 === 0 ? 1 : 2,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: '#1e3d20',
                    letterSpacing: '0.1em', opacity: 0.6,
                  }}>
                    {service.number}
                  </span>
                  <h3 style={{
                    fontSize: 22, fontWeight: 700,
                    color: '#1a1a1a', letterSpacing: '-0.01em', lineHeight: 1.2,
                  }}>
                    {service.title}
                  </h3>
                </div>

                <p style={{
                  fontSize: 14, fontWeight: 400, lineHeight: 1.75,
                  color: '#5a5e52', marginBottom: 24, maxWidth: 520,
                }}>
                  {service.description}
                </p>

                {/* Detail chips */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {service.details.map(d => (
                    <span key={d} style={{
                      fontSize: 11, fontWeight: 500, color: '#4a5242',
                      background: '#e8e4dc', padding: '4px 10px', borderRadius: 2,
                    }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                order: i % 2 === 0 ? 2 : 1,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                  }}
                />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 40,
          padding: '24px 32px',
          background: '#f5f4f0',
          borderLeft: '3px solid #1e3d20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: 14, color: '#5a5e52', lineHeight: 1.6, maxWidth: 620 }}>
            <strong style={{ color: '#1a1a1a' }}>All services are available on scheduled maintenance contracts.</strong>{' '}
            We&apos;ll visit your site, assess your requirements, and put together a tailored programme — with transparent pricing and no hidden costs.
          </p>
          <a href="/contact" className="btn-primary">
            Get a Site Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
