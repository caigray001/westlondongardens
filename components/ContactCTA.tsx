'use client'

import { useState } from 'react'

// Section 8 — Closing CTA
// Final section of the homepage. Three jobs to do:
// 1. Give property managers a direct way to get in touch
// 2. Reinforce location and coverage area
// 3. Embed Google Maps for the Ealing address — good for local SEO and trust
// AEO: NAP (name, address, phone) all present and consistent. Borough list
// matches the areaServed in the LocalBusiness schema in layout.tsx.

const boroughs = [
  'Ealing', 'Kensington', 'Richmond', 'Hammersmith',
  'Chelsea', 'Fulham', 'Westminster', 'Chiswick',
  'Acton', 'Shepherd\'s Bush', 'Brentford', 'Twickenham',
]

export default function ContactCTA() {
  const [formState, setFormState] = useState({
    company: '', name: '', email: '', phone: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire up to form handler of choice (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  return (
    <section style={{ background: '#f5f4f0', padding: '100px 52px 0' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
          }}>
            Get In Touch
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 3.2vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            color: '#1a1a1a',
            marginBottom: 20,
          }}>
            Fast response. Clear communication.<br />
            <span style={{ color: '#1e3d20' }}>No chasing needed.</span>
          </h2>
          <p style={{
            fontSize: 16, color: '#5a5e52', lineHeight: 1.7,
            maxWidth: 520, margin: '0 auto',
          }}>
            Get in touch and we&apos;ll arrange a site visit at a time that suits you.
            We&apos;ll assess your grounds, understand your requirements, and come back
            with a clear maintenance proposal.
          </p>
        </div>

        {/* Three column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr 1fr',
          gap: 2,
          marginBottom: 2,
        }}>

          {/* LEFT — contact details */}
          <div style={{
            background: '#1e3d20',
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                marginBottom: 20,
              }}>
                Contact Details
              </div>

              {[
                {
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
                  label: 'Phone',
                  value: '020 8840 8799',
                  href: 'tel:02088408799',
                },
                {
                  icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
                  label: 'Email',
                  value: 'admin@westlondongardens.co.uk',
                  href: 'mailto:admin@westlondongardens.co.uk',
                },
                {
                  icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
                  label: 'Address',
                  value: '45 St Marys Road, Ealing, London W5 5RG',
                  href: 'https://maps.google.com/?q=West+London+Gardens+45+St+Marys+Road+Ealing',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Address' ? '_blank' : undefined}
                  rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    marginBottom: 24, textDecoration: 'none',
                  }}
                >
                  <div style={{
                    width: 36, height: 36, background: 'rgba(255,255,255,0.1)',
                    borderRadius: 2, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, marginTop: 2,
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Opening hours */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28 }}>
              <div style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14,
              }}>
                Opening Hours
              </div>
              {[
                { day: 'Monday – Friday', hours: '8:00am – 6:00pm' },
                { day: 'Saturday', hours: 'Closed' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(row => (
                <div key={row.day} style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: 8, fontSize: 13,
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.55)' }}>{row.day}</span>
                  <span style={{ color: row.hours === 'Closed' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Coverage */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28 }}>
              <div style={{
                fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14,
              }}>
                Areas We Cover
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {boroughs.map(b => (
                  <span key={b} style={{
                    fontSize: 11, color: 'rgba(255,255,255,0.65)',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '3px 9px', borderRadius: 2,
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTRE — contact form */}
          <div style={{ background: '#fff', padding: '48px 44px' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
              Request a Site Visit
            </div>
            <div style={{ fontSize: 13, color: '#7a7e72', marginBottom: 32 }}>
              Fill in the form and we&apos;ll be in touch within one business day.
            </div>

            {submitted ? (
              <div style={{
                padding: '40px 32px', background: '#e8f0e8',
                borderRadius: 2, textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1e3d20', marginBottom: 8 }}>
                  Message received
                </div>
                <div style={{ fontSize: 14, color: '#5a5e52' }}>
                  We&apos;ll be in touch within one business day.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { id: 'company', label: 'Company / Organisation', placeholder: 'e.g. Firstport, ABC Management', required: true },
                  { id: 'name', label: 'Your Name', placeholder: 'Full name', required: true },
                  { id: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
                  { id: 'phone', label: 'Phone Number', placeholder: '020 0000 0000', required: false },
                ].map(field => (
                  <div key={field.id}>
                    <label style={{
                      display: 'block', fontSize: 12, fontWeight: 600,
                      color: '#4a5242', marginBottom: 6, letterSpacing: '0.04em',
                    }}>
                      {field.label}{field.required && <span style={{ color: '#1e3d20' }}> *</span>}
                    </label>
                    <input
                      type={field.id === 'email' ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={e => setFormState(prev => ({ ...prev, [field.id]: e.target.value }))}
                      style={{
                        width: '100%', padding: '11px 14px',
                        border: '1.5px solid #e8e4dc', borderRadius: 2,
                        fontSize: 14, color: '#1a1a1a',
                        outline: 'none', background: '#fafaf8',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block', fontSize: 12, fontWeight: 600,
                    color: '#4a5242', marginBottom: 6, letterSpacing: '0.04em',
                  }}>
                    Tell us about your site <span style={{ color: '#1e3d20' }}>*</span>
                  </label>
                  <textarea
                    placeholder="e.g. residential block in Ealing, approx. 0.5 acres, currently no maintenance contract in place..."
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    style={{
                      width: '100%', padding: '11px 14px',
                      border: '1.5px solid #e8e4dc', borderRadius: 2,
                      fontSize: 14, color: '#1a1a1a',
                      outline: 'none', background: '#fafaf8',
                      fontFamily: 'inherit', resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
                  Send Request
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p style={{ fontSize: 11, color: '#9a9e92', textAlign: 'center', marginTop: 4 }}>
                  We don&apos;t share your details with third parties.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Google Maps */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 500 }}>
            <iframe
              title="West London Gardens location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4!2d-0.3024!3d51.5130!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d9e3c8b2b4d%3A0x6d1c9b2f2e8f4a3b!2s45%20St%20Marys%20Rd%2C%20Ealing%2C%20London%20W5%205RG!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                display: 'block',
                minHeight: 500,
                filter: 'grayscale(20%)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay label */}
            <div style={{
              position: 'absolute', bottom: 24, left: 24,
              background: '#fff',
              padding: '12px 16px',
              borderRadius: 2,
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a', marginBottom: 2 }}>
                West London Gardens
              </div>
              <div style={{ fontSize: 11, color: '#7a7e72' }}>
                45 St Marys Road, Ealing W5 5RG
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#111f12',
        padding: '48px 52px',
        marginTop: 2,
      }}>
        <div style={{
          maxWidth: 1360, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 24,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, background: '#1e3d20',
              borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3C12 3 6 8.5 6 14a6 6 0 0012 0C18 8.5 12 3 12 3z" fill="rgba(255,255,255,0.9)"/>
                <path d="M12 14v5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>West London Gardens</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>Est. 1994 · Ealing, London</div>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', gap: 32 }}>
            {['Services', 'About', 'Contact'].map(l => (
              <a key={l} href={`/${l.toLowerCase()}`} style={{
                fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}>
                {l}
              </a>
            ))}
          </div>

          {/* Right */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'right' }}>
            <div>© {new Date().getFullYear()} West London Gardens. All rights reserved.</div>
            <div style={{ marginTop: 4 }}>SafeContractor Accredited · Fully Insured</div>
          </div>
        </div>
      </footer>

    </section>
  )
}
