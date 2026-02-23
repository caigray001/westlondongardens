'use client'

// Section 2 — Social Proof Bar
// Appears immediately below the hero.
// Shows recognisable client company names + SafeContractor badge.
// Property managers will recognise FIRSTPORT and COLIN BIBRA — that's the point.

export default function SocialProofBar() {
  const clients = [
    { name: 'Firstport', desc: 'Property Management' },
    { name: 'Colin Bibra', desc: 'Estate Agents' },
    { name: 'High-End Residential', desc: 'Private Estates' },
    { name: 'Office Parks', desc: 'Commercial Developments' },
    { name: 'Block Management', desc: 'Leasehold Properties' },
  ]

  return (
    <section style={{
      background: '#fff',
      borderTop: '1px solid #e8e4dc',
      borderBottom: '1px solid #e8e4dc',
      padding: '28px 52px',
    }}>
      <div style={{
        maxWidth: 1360,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}>

        {/* Label */}
        <div style={{
          flexShrink: 0,
          paddingRight: 40,
          borderRight: '1px solid #e8e4dc',
          marginRight: 40,
        }}>
          <div style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9a9e92',
            whiteSpace: 'nowrap',
          }}>
            Trusted by
          </div>
        </div>

        {/* Client name placeholders */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          flex: 1,
          flexWrap: 'wrap',
        }}>
          {clients.map((client, i) => (
            <div key={client.name} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 36px',
              borderRight: i < clients.length - 1 ? '1px solid #e8e4dc' : 'none',
            }}>
              {/* Logo placeholder — replace with actual client logos */}
              <div style={{
                width: 100,
                height: 32,
                background: '#f0ede6',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 4,
              }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#9a9e92',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {client.name}
                </span>
              </div>
              <div style={{
                fontSize: 10,
                fontWeight: 400,
                color: '#b0b4a8',
                letterSpacing: '0.06em',
              }}>
                {client.desc}
              </div>
            </div>
          ))}
        </div>

        {/* SafeContractor badge */}
        <div style={{
          flexShrink: 0,
          paddingLeft: 40,
          borderLeft: '1px solid #e8e4dc',
          marginLeft: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}>
          {/* SafeContractor logo placeholder */}
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: '2px solid #1e3d20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 1,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1e3d20', textAlign: 'center', lineHeight: 1.3 }}>
            SafeContractor<br />Approved
          </div>
        </div>

      </div>
    </section>
  )
}
