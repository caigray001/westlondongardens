'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    company: '', name: '', email: '', phone: '', message: '', source: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to Formspree, Resend, or similar
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #e8e4dc',
    borderRadius: 2,
    fontSize: 14,
    color: '#1a1a1a',
    outline: 'none',
    background: '#fafaf8',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 12,
    fontWeight: 600,
    color: '#4a5242',
    marginBottom: 6,
    letterSpacing: '0.04em',
  }

  if (submitted) {
    return (
      <div style={{
        padding: '52px 32px',
        background: '#e8f0e8',
        borderRadius: 2,
        textAlign: 'center',
      }}>
        <div style={{
          width: 52, height: 52, background: '#1e3d20', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#1e3d20', marginBottom: 10 }}>
          Message received
        </div>
        <div style={{ fontSize: 14, color: '#5a5e52', lineHeight: 1.7 }}>
          We&apos;ll be in touch within one business day to arrange a site visit.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* Company */}
      <div>
        <label style={labelStyle}>
          Company / Organisation <span style={{ color: '#1e3d20' }}>*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Firstport, ABC Block Management"
          required
          value={form.company}
          onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
          style={inputStyle}
        />
      </div>

      {/* Name + Phone side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>
            Your Name <span style={{ color: '#1e3d20' }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            required
            value={form.name}
            onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="020 0000 0000"
            value={form.phone}
            onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>
          Email Address <span style={{ color: '#1e3d20' }}>*</span>
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          required
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>
          Tell us about your site <span style={{ color: '#1e3d20' }}>*</span>
        </label>
        <textarea
          placeholder="e.g. Residential block in Ealing, approx. 0.5 acres of communal grounds, currently no maintenance contract in place..."
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {/* How did you hear */}
      <div>
        <label style={labelStyle}>How did you hear about us?</label>
        <select
          value={form.source}
          onChange={e => setForm(p => ({ ...p, source: e.target.value }))}
          style={{ ...inputStyle, cursor: 'pointer', color: form.source ? '#1a1a1a' : '#9a9e92' }}
        >
          <option value="" disabled>Select an option</option>
          <option value="google">Google search</option>
          <option value="recommendation">Recommendation / referral</option>
          <option value="existing-client">Existing client of ours</option>
          <option value="safecontractor">SafeContractor directory</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          marginTop: 8,
          padding: '14px 28px',
          background: '#1e3d20',
          color: '#fff',
          border: 'none',
          borderRadius: 2,
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          letterSpacing: '0.02em',
          fontFamily: 'inherit',
        }}
      >
        Send Request
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <p style={{ fontSize: 11, color: '#b0b4a8', textAlign: 'center', marginTop: 2 }}>
        We don&apos;t share your details with third parties.
      </p>

    </form>
  )
}
