import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Green Crown Grounds',
  description: 'Get in touch with Green Crown Grounds for a free site visit and grounds maintenance proposal. Serving residential estates, managed blocks and commercial developments across London.',
  alternates: { canonical: 'https://www.greencrowngrounds.co.uk/contact' },
}

const boroughs = [
  'North', 'South', 'East', 'West',
  'Central', 'Outer London', 'Home Counties',
]

const steps = [
  { number: '01', title: 'Get in touch', body: 'Call us or fill in the form. We get back to you the same day.' },
  { number: '02', title: 'Site visit', body: 'We visit your grounds, understand the scope, and ask the right questions. No charge.' },
  { number: '03', title: 'Proposal', body: 'A tailored maintenance programme with clear pricing. No hidden costs.' },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-2" style={{ background: '#f5f4f0' }}>

        {/* LEFT — all context */}
        <div className="p-6 md:p-10 lg:p-12 xl:pl-[52px] flex flex-col gap-10 lg:gap-14" style={{ background: '#fff', borderRight: undefined }}>
          <div className="hidden lg:block" style={{ borderRight: '1px solid #e8e4dc', position: 'absolute', right: 0, top: 0, bottom: 0, width: 1 }} />

          {/* Heading */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1e3d20', marginBottom: 18 }}>
              Get In Touch
            </div>
            <h1 style={{
              fontSize: 'clamp(28px, 3.2vw, 52px)', fontWeight: 800,
              letterSpacing: '-0.025em', lineHeight: 1.08, color: '#1a1a1a', marginBottom: 20,
            }}>
              Get in touch.
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: '#5a5e52', maxWidth: 420 }}>
              Whether you manage one property or a portfolio across London,
              the conversation starts the same way — tell us about your site
              and we&apos;ll take it from there.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-5">
            {[
              { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />, label: 'Phone', value: '020 3000 0000', href: 'tel:02030000000' },
              { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></>, label: 'Email', value: 'admin@greencrowngrounds.co.uk', href: 'mailto:admin@greencrowngrounds.co.uk' },
              { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>, label: 'Address', value: 'London', href: 'https://maps.google.com/?q=London+UK' },
            ].map(item => (
              <a key={item.label} href={item.href}
                target={item.label === 'Address' ? '_blank' : undefined}
                rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                style={{ display: 'flex', gap: 14, alignItems: 'flex-start', textDecoration: 'none' }}
              >
                <div style={{
                  width: 38, height: 38, background: '#e8f0e8', borderRadius: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1e3d20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#9a9e92', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a', lineHeight: 1.5 }}>{item.value}</div>
                </div>
              </a>
            ))}
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#9a9e92', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Opening Hours</div>
              {[
                { day: 'Monday – Friday', hours: '8:00am – 6:00pm' },
                { day: 'Saturday – Sunday', hours: 'Closed' },
              ].map(row => (
                <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: '#5a5e52' }}>{row.day}</span>
                  <span style={{ fontWeight: 600, color: row.hours === 'Closed' ? '#b0b4a8' : '#1a1a1a' }}>{row.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What happens next */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9a9e92', marginBottom: 20 }}>
              What happens next
            </div>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.number} style={{ display: 'flex', gap: 16, paddingBottom: 24, position: 'relative' }}>
                  {i < steps.length - 1 && (
                    <div style={{ position: 'absolute', left: 15, top: 36, width: 1, height: 'calc(100% - 12px)', background: '#e8e4dc' }} />
                  )}
                  <div style={{
                    width: 32, height: 32, background: '#1e3d20', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1,
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>{i + 1}</span>
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.65, color: '#5a5e52' }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9a9e92', marginBottom: 14 }}>
              Areas We Cover
            </div>
            <div className="flex flex-wrap gap-[6px]">
              {boroughs.map(b => (
                <span key={b} style={{ fontSize: 11, fontWeight: 500, color: '#4a5242', background: '#e8f0e8', padding: '4px 10px', borderRadius: 2 }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form + map */}
        <div className="flex flex-col">
          <div className="p-6 md:p-10 lg:p-12 flex-1">
            <div style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>Request a site visit</div>
            <div style={{ fontSize: 13, color: '#7a7e72', marginBottom: 36 }}>We&apos;ll be in touch within one business day.</div>
            <ContactForm />
          </div>
          <div className="h-[200px] md:h-[280px] relative flex-shrink-0">
            <iframe
              title="Green Crown Grounds location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.0!2d-0.1276!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
              width="100%" height="100%"
              style={{ border: 'none', display: 'block', filter: 'grayscale(15%)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 md:px-[52px] py-8 md:py-10" style={{ background: '#111f12' }}>
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, background: '#1e3d20', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 3C12 3 6 8.5 6 14a6 6 0 0012 0C18 8.5 12 3 12 3z" fill="rgba(255,255,255,0.9)"/>
                <path d="M12 14v5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Green Crown Grounds</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 1 }}>Est. 1994 · London</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {['Services', 'About', 'Contact'].map(l => (
              <a key={l} href={`/${l.toLowerCase()}`} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div className="text-center md:text-right" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            <div>© {new Date().getFullYear()} Green Crown Grounds. All rights reserved.</div>
            <div style={{ marginTop: 4 }}>SafeContractor Accredited · Fully Insured</div>
          </div>
        </div>
      </footer>
    </>
  )
}
