'use client'

import { useState } from 'react'

// Section 7 — FAQ
// This is the single biggest AEO opportunity on the homepage.
// Every question is written to match what a property manager or estate director
// would actually type into Google or ask an AI assistant.
// The answers are written to be complete and standalone — AI tools pull these
// directly. Vague answers don't get cited. Specific, factual answers do.
//
// Schema: FAQ schema is injected via script tag in layout.tsx — add the
// FAQPage schema there for full AEO benefit.

const faqs = [
  {
    q: 'Do you work with property management companies and managing agents?',
    a: 'Yes — the majority of our clients are property management companies, managing agents, and RMCs overseeing residential leasehold developments across London. We are experienced in working within the requirements of block management, including reporting, scheduled visits, and communication with both agents and residents.',
  },
  {
    q: 'Are you SafeContractor accredited?',
    a: 'Yes. West London Gardens is SafeContractor accredited and fully insured. SafeContractor accreditation demonstrates compliance with health and safety legislation, which is an important consideration for managing agents appointing contractors to work on leasehold developments.',
  },
  {
    q: 'What areas of London do you cover?',
    a: 'We are based in Ealing, West London and serve properties across London including Ealing, Kensington, Richmond, Hammersmith, Chelsea, Fulham, Westminster, Chiswick, Acton, and surrounding areas. If you are unsure whether we cover your site, call us on 020 8840 8799 and we will confirm straight away.',
  },
  {
    q: 'Do you offer scheduled maintenance contracts?',
    a: 'Yes. All of our work is available on scheduled maintenance contracts, which is the most common arrangement for managed properties. We visit your site, assess the grounds, and agree a tailored maintenance programme with set visit frequencies and a clear scope of work. Contracts can be reviewed annually.',
  },
  {
    q: 'How long have you been operating?',
    a: 'West London Gardens was founded in 1994 by Antony Kitcher and is now run by his son Luke. We have been providing grounds maintenance services to residential and commercial properties across London for over 30 years. Many of our clients have been with us for more than 25 years.',
  },
  {
    q: 'Can you maintain multiple sites under one contract?',
    a: 'Yes. We regularly work with managing agents and property management companies who have multiple sites across London. We can provide a single contract covering several properties, with consistent standards across all sites and consolidated reporting.',
  },
  {
    q: 'Do you provide maintenance reports or records?',
    a: 'Yes. We understand that managing agents and RMCs need to maintain accurate records for leaseholders and freeholders. We provide visit records and can supply maintenance documentation as required for your reporting needs.',
  },
  {
    q: 'How quickly can you respond to one-off maintenance requests?',
    a: 'For existing clients we aim to respond to urgent requests as quickly as possible, typically within the same week. We understand that unexpected issues — storm damage, overgrowth complaints from residents, post-event clearance — need to be dealt with promptly. Call us directly on 020 8840 8799 for urgent matters.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{ background: '#fff', padding: '100px 52px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          marginBottom: 64,
          alignItems: 'end',
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3d20', marginBottom: 16,
            }}>
              Frequently Asked Questions
            </div>
            <h2 style={{
              fontSize: 'clamp(30px, 3.2vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a1a1a',
            }}>
              Questions property managers<br />
              <span style={{ color: '#1e3d20' }}>ask us most.</span>
            </h2>
          </div>
          <p style={{
            fontSize: 15, color: '#5a5e52', lineHeight: 1.75,
          }}>
            If you have a question that isn&apos;t covered here, the quickest way
            to get an answer is to call us directly on{' '}
            <a href="tel:02088408799" style={{ color: '#1e3d20', fontWeight: 600, textDecoration: 'none' }}>
              020 8840 8799
            </a>
            . We don&apos;t use call centres — you&apos;ll speak to someone who knows the business.
          </p>
        </div>

        {/* FAQ accordion */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: openIndex === i ? '#f5f4f0' : '#f5f4f0',
                borderLeft: openIndex === i ? '3px solid #1e3d20' : '3px solid transparent',
                transition: 'border-color 0.2s',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* Question row */}
              <div style={{
                padding: '24px 28px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 16,
                userSelect: 'none',
              }}>
                <h3 style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: openIndex === i ? '#1e3d20' : '#1a1a1a',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s',
                }}>
                  {faq.q}
                </h3>
                <div style={{
                  width: 28, height: 28,
                  borderRadius: '50%',
                  background: openIndex === i ? '#1e3d20' : '#e8e4dc',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }}>
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    style={{
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <path d="M6 9l6 6 6-6"
                      stroke={openIndex === i ? '#fff' : '#5a5e52'}
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Answer */}
              {openIndex === i && (
                <div style={{
                  padding: '0 28px 28px',
                }}>
                  <p style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: '#5a5e52',
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div style={{
          marginTop: 48,
          padding: '32px 40px',
          background: '#f5f4f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>
              Still have a question?
            </div>
            <div style={{ fontSize: 13, color: '#7a7e72' }}>
              Mon–Fri 8am–6pm · We answer the phone.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:02088408799" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              020 8840 8799
            </a>
            <a href="/contact" className="btn-primary">
              Send a Message
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
