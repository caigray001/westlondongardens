'use client'

export default function SocialProofBar() {
  const clients = [
    { name: 'Firstport', desc: 'Property Management' },
    { name: 'Colin Bibra', desc: 'Estate Agents' },
    { name: 'Private Estates', desc: 'Residential' },
    { name: 'Office Parks', desc: 'Commercial' },
    { name: 'Block Management', desc: 'Leasehold' },
  ]

  return (
    <section className="bg-white border-t border-b px-5 md:px-[52px] py-4 md:py-6" style={{ borderColor: '#e8e4dc' }}>
      <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-0">

        {/* Label */}
        <div className="flex-shrink-0 md:pr-9 md:border-r md:mr-9" style={{ borderColor: '#e8e4dc' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#9a9e92', whiteSpace: 'nowrap',
          }}>
            Trusted by
          </div>
        </div>

        {/* Client logos — scroll on mobile, flex on desktop */}
        <div className="flex items-center gap-4 md:gap-0 overflow-x-auto md:overflow-visible flex-1 w-full md:w-auto pb-1 md:pb-0">
          {clients.map((client, i) => (
            <div key={client.name} className={`flex flex-col items-center gap-1 flex-shrink-0 px-3 md:px-7 ${i < clients.length - 1 ? 'md:border-r' : ''}`} style={{ borderColor: '#e8e4dc' }}>
              <div style={{
                height: 26, padding: '0 10px', background: '#f0ede6', borderRadius: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, color: '#7a7e72',
                  letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>
                  {client.name}
                </span>
              </div>
              <div style={{ fontSize: 10, color: '#b0b4a8', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                {client.desc}
              </div>
            </div>
          ))}
        </div>

        {/* SafeContractor badge */}
        <div className="hidden md:flex flex-shrink-0 pl-9 border-l items-center gap-3" style={{ borderColor: '#e8e4dc' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', border: '2px solid #1e3d20',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1e3d20', letterSpacing: '0.04em' }}>SafeContractor</div>
            <div style={{ fontSize: 10, color: '#9a9e92', marginTop: 1 }}>Approved Contractor</div>
          </div>
        </div>

      </div>
    </section>
  )
}
