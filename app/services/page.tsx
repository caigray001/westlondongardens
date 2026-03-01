import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Grounds Maintenance Services | West London Gardens',
  description: 'Professional grounds maintenance services for residential estates, managed blocks, and commercial developments across London. Scheduled contracts, seasonal programmes, and block management services.',
  alternates: { canonical: 'https://www.westlondongardens.co.uk/services' },
}

const coreServices = [
  {
    id: 'ground-lawn',
    label: 'Ongoing Maintenance',
    number: '01',
    title: 'Ground & Lawn Maintenance',
    body: 'The foundation of any grounds maintenance contract. We carry out regular scheduled visits to mow grass, edge borders, clear debris, and keep communal outdoor areas in consistently good condition throughout the year. Maintenance plans are drawn up per site based on size, usage, and seasonal requirements — so every visit has a clear scope and nothing gets overlooked.',
    bullets: ['Lawn mowing & edging', 'Leaf & debris clearance', 'Border maintenance', 'Communal path sweeping', 'Litter removal'],
    image: 'https://images.unsplash.com/photo-1642541744624-7a2a89545a32?w=800&q=80',
    imageAlt: 'Ground and lawn maintenance London residential estate',
  },
  {
    id: 'hedge-pruning',
    label: 'Ongoing Maintenance',
    number: '02',
    title: 'Hedge Trimming & Pruning',
    body: 'Well-maintained hedges and shrubs significantly affect the appearance of any managed property. We cut and shape to maintain structure, encourage healthy growth, and keep communal boundaries looking sharp year round. Overgrown hedges encroaching on pathways or entrances are also dealt with promptly — a common issue on older residential estates.',
    bullets: ['Hedge shaping & cutting', 'Shrub pruning', 'Boundary maintenance', 'Overgrowth clearance', 'Crown lifting'],
    image: 'https://images.unsplash.com/photo-1761024300173-91f065d30a9a?w=800&q=80',
    imageAlt: 'Professional hedge trimming pruning West London',
  },
  {
    id: 'weeding-planting',
    label: 'Ongoing Maintenance',
    number: '03',
    title: 'Weeding & Planting',
    body: 'Persistent weeds in hard surfaces, beds, and borders are one of the most common resident complaints on managed developments. We remove weeds thoroughly across all areas — not just beds but driveways, pathways, and communal paving — and keep planted areas vibrant and well-presented. Seasonal planting is available where required to keep grounds looking their best throughout the year.',
    bullets: ['Bed & border weeding', 'Hard surface weed control', 'Seasonal planting', 'Mulching', 'Soil care'],
    image: 'https://images.unsplash.com/photo-1762286769757-4367cbd54eb7?w=800&q=80',
    imageAlt: 'Weeding planting communal gardens London',
  },
  {
    id: 'pressure-washing',
    label: 'Ongoing Maintenance',
    number: '04',
    title: 'Pressure Washing',
    body: 'Patios, pathways, car parks, and communal hard surfaces accumulate dirt, moss, and algae over time. Beyond appearance, this creates genuine slip hazards — a compliance concern for managing agents responsible for communal areas on leasehold developments. Our pressure washing service restores surfaces to a clean, safe condition and is available as part of a scheduled contract or as a standalone visit.',
    bullets: ['Pathway & patio cleaning', 'Car park surfaces', 'Communal entrances', 'Moss & algae removal', 'Drainage clearance'],
    image: 'https://images.unsplash.com/photo-1640653488366-f7771cd7292d?w=800&q=80',
    imageAlt: 'Pressure washing communal areas residential block London',
  },
  {
    id: 'seasonal',
    label: 'Seasonal & Specialist',
    number: '05',
    title: 'Seasonal Programmes',
    body: 'Grounds maintenance requirements change significantly across the year. Our seasonal programmes ensure your site is always prepared for the current season — spring bulb planting and fresh growth management, summer cutting and watering, autumn leaf clearance before it becomes a hazard, and winter pathway maintenance to keep communal areas safe. All included as part of an annual maintenance contract.',
    bullets: ['Spring bulb planting', 'Summer growth management', 'Autumn leaf clearance', 'Winter gritting & pathway safety', 'Seasonal reporting'],
    image: 'https://images.unsplash.com/photo-1733286125300-b4c5563295ad?w=800&q=80',
    imageAlt: 'Seasonal grounds maintenance programme London estates',
  },
  {
    id: 'grounds-inspection',
    label: 'Seasonal & Specialist',
    number: '06',
    title: 'Grounds Inspection',
    body: 'For managing agents who need documented evidence of site condition, we carry out formal grounds inspections and provide written records of findings and work completed. This is particularly useful for RMCs and freeholders who need to demonstrate due diligence to leaseholders, or for properties changing management company and requiring a baseline assessment.',
    bullets: ['Condition assessments', 'Written inspection records', 'Photographic documentation', 'Maintenance recommendations', 'Handover inspections'],
    image: 'https://images.unsplash.com/photo-1770822662831-c361f15790ea?w=800&q=80',
    imageAlt: 'Grounds inspection residential estate London',
  },
  {
    id: 'clearance',
    label: 'Seasonal & Specialist',
    number: '07',
    title: 'One-Off Clearance',
    body: 'Storm damage, neglected sites, or end-of-tenancy clearance requirements sometimes call for a one-off visit rather than a scheduled contract. We handle clearance work for existing clients and for new sites where grounds have been allowed to deteriorate. This is often the starting point for properties that then move onto a regular maintenance contract.',
    bullets: ['Storm damage clearance', 'Overgrowth removal', 'Site reinstatement', 'Waste disposal', 'Pre-contract preparation'],
    image: 'https://images.unsplash.com/photo-1719763462298-dfd3ae24febc?w=800&q=80',
    imageAlt: 'One-off garden clearance West London',
  },
]

const blockServices = [
  {
    title: 'Multi-Site Contracts',
    body: 'Managing agents with multiple properties across London can consolidate all sites under a single contract. We maintain consistent standards across every site and provide a single point of contact for all queries.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="#1e3d20" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: 'Scheduled Visit Programmes',
    body: 'All contracts include agreed visit frequencies with a clear scope of work for each visit. You know exactly when we will be on site and what will be done — no guessing, no chasing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1e3d20" strokeWidth="1.6"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#1e3d20" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Maintenance Records',
    body: 'We provide visit records and maintenance documentation as required. Useful for leaseholder reporting, AGMs, or demonstrating compliance to freeholders and insurers.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Responsive Communication',
    body: 'You deal with us directly — not a call centre. When a resident raises a complaint or a site issue needs attention, you speak to someone who knows your sites and can act.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#1e3d20" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const steps = [
  {
    number: '01',
    title: 'Site Visit',
    body: 'We visit your site at a time that suits you, walk the grounds, and get a clear picture of what\'s needed. No charge, no obligation.',
  },
  {
    number: '02',
    title: 'Tailored Proposal',
    body: 'We put together a maintenance programme specific to your site — visit frequency, scope of work, and a clear price. No hidden costs.',
  },
  {
    number: '03',
    title: 'Ongoing Contract',
    body: 'Once agreed, we get started. You\'ll receive scheduled visit dates in advance and a direct contact for any queries or one-off requests.',
  },
]

// Group services by label
const ongoingServices = coreServices.filter(s => s.label === 'Ongoing Maintenance')
const seasonalServices = coreServices.filter(s => s.label === 'Seasonal & Specialist')

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '75vh',
        paddingTop: 80,
        overflow: 'hidden',
      }}>
        {/* LEFT — dark green, headline */}
        <div style={{
          background: '#1e3d20',
          padding: '80px 60px 80px 52px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Grid texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
              marginBottom: 24,
            }}>
              Our Services
            </div>

            <h1 style={{
              fontSize: 'clamp(34px, 3.8vw, 58px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              color: '#fff',
              marginBottom: 28,
            }}>
              Everything your site<br />needs to stay<br />
              <span style={{ color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}>
                in good order.
              </span>
            </h1>

            <p style={{
              fontSize: 16, fontWeight: 400, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.58)', maxWidth: 440, marginBottom: 44,
            }}>
              All services are available on scheduled maintenance contracts
              for residential estates, managed blocks, and commercial
              developments across London.
            </p>

            {/* Quick service links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Ground & Lawn Maintenance',
                'Hedge Trimming & Pruning',
                'Weeding & Planting',
                'Pressure Washing',
                'Seasonal Programmes',
              ].map((s, i) => (
                <div key={s} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.1em', width: 20, flexShrink: 0,
                  }}>
                    0{i + 1}
                  </span>
                  <span style={{
                    fontSize: 13, fontWeight: 500,
                    color: 'rgba(255,255,255,0.65)',
                  }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — 3 stacked image panels */}
        <div style={{
          display: 'grid',
          gridTemplateRows: '1.2fr 1fr 0.8fr',
          gap: 2,
          background: '#f5f4f0',
        }}>
          {[
            {
              src: 'https://images.unsplash.com/photo-1642541744624-7a2a89545a32?w=800&q=80',
              alt: 'Lawn maintenance London estate',
            },
            {
              src: 'https://images.unsplash.com/photo-1761024300173-91f065d30a9a?w=800&q=80',
              alt: 'Hedge trimming West London',
            },
            {
              src: 'https://images.unsplash.com/photo-1640653488366-f7771cd7292d?w=800&q=80',
              alt: 'Pressure washing communal areas',
            },
          ].map((img) => (
            <div key={img.alt} style={{ position: 'relative', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ONGOING MAINTENANCE */}
      <section style={{ background: '#f5f4f0', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{ marginBottom: 56 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 14,
            }}>
              Ongoing Maintenance
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 2.8vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.02em',
              lineHeight: 1.1, color: '#1a1a1a', maxWidth: 480,
            }}>
              The core of every<br />maintenance contract.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {ongoingServices.map((service) => (
              <div key={service.id} style={{
                background: '#fff',
                padding: '36px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}>
                {/* Thumbnail + title row */}
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  {/* Small thumbnail */}
                  <div style={{
                    width: 80, height: 80, flexShrink: 0,
                    overflow: 'hidden', borderRadius: 2,
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div>
                    <div style={{
                      fontSize: 10, fontWeight: 700, color: '#1e3d20',
                      letterSpacing: '0.12em', opacity: 0.6, marginBottom: 6,
                    }}>
                      {service.number}
                    </div>
                    <h3 style={{
                      fontSize: 19, fontWeight: 700, color: '#1a1a1a',
                      letterSpacing: '-0.01em', lineHeight: 1.2,
                    }}>
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: '#e8e4dc' }} />

                {/* Description */}
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5e52', flex: 1 }}>
                  {service.body}
                </p>

                {/* Bullets as a clean list rather than chips */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {service.bullets.map(b => (
                    <li key={b} style={{
                      fontSize: 13, fontWeight: 500, color: '#3a3e32',
                      display: 'flex', alignItems: 'center', gap: 10,
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#1e3d20', flexShrink: 0,
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL & SPECIALIST */}
      <section style={{ background: '#fff', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{ marginBottom: 56 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 14,
            }}>
              Seasonal & Specialist
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 2.8vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.02em',
              lineHeight: 1.1, color: '#1a1a1a', maxWidth: 480,
            }}>
              Beyond the regular visit.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {seasonalServices.map((service) => (
              <div key={service.id} style={{ background: '#f5f4f0', overflow: 'hidden' }}>
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.imageAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 14, left: 18,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)',
                  }}>
                    {service.number}
                  </div>
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, color: '#1a1a1a',
                    letterSpacing: '-0.01em', marginBottom: 12,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5e52', marginBottom: 20 }}>
                    {service.body}
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {service.bullets.map(b => (
                      <span key={b} style={{
                        fontSize: 11, fontWeight: 500, color: '#4a5242',
                        background: '#e8e4dc', padding: '4px 10px', borderRadius: 2,
                      }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section style={{ background: '#f5f4f0', padding: '80px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
              }}>
                Also Available
              </div>
              <h2 style={{
                fontSize: 'clamp(24px, 2.4vw, 36px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.15, color: '#1a1a1a', marginBottom: 16,
              }}>
                Not all sites are the same.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5a5e52' }}>
                The services listed above cover the majority of what we do,
                but our work varies considerably from site to site. If you have
                a specific requirement not listed here, call us — we&apos;ve
                likely done it before.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px 40px',
            }}>
              {[
                'Turfing & lawn renovation',
                'Tree stump removal',
                'Raised bed installation',
                'Irrigation system maintenance',
                'Artificial grass maintenance',
                'Gravel path maintenance',
                'Pond & water feature care',
                'Post-construction clearance',
                'Planting scheme design',
                'Wildflower meadow management',
                'Sports pitch maintenance',
                'Fencing & gate maintenance',
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 0',
                  borderBottom: '1px solid #e8e4dc',
                  fontSize: 13, fontWeight: 500, color: '#3a3e32',
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: '#1e3d20', flexShrink: 0,
                  }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK MANAGEMENT */}
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
                For Managing Agents
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 2.8vw, 42px)',
                fontWeight: 800, letterSpacing: '-0.02em',
                lineHeight: 1.1, color: '#fff',
              }}>
                Built for block management<br />and multi-site portfolios.
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
              The majority of our clients are managing agents and RMCs with multiple
              properties across London. We understand the reporting requirements, the
              resident expectations, and the need for a contractor who simply gets
              on with it — without needing to be chased.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {blockServices.map((s) => (
              <div key={s.title} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '36px 40px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {s.icon.props.children}
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#f5f4f0', padding: '100px 52px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 14,
            }}>
              How It Works
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 2.8vw, 42px)',
              fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1a1a1a',
            }}>
              Simple to get started.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {steps.map((step, i) => (
              <div key={step.number} style={{
                background: '#fff', padding: '44px 40px',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Large number background */}
                <div style={{
                  position: 'absolute', top: -10, right: 20,
                  fontSize: 100, fontWeight: 900, color: '#f0ede6',
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}>
                  {step.number}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 36, height: 36, background: '#1e3d20', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                  </div>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, color: '#1a1a1a',
                    letterSpacing: '-0.01em', marginBottom: 14,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5e52' }}>
                    {step.body}
                  </p>
                </div>
                {/* Connector line — not on last */}
                {i < steps.length - 1 && (
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

      <ContactCTA />
    </>
  )
}
