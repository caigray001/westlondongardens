import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Green Crown Grounds | Professional Grounds Maintenance',
  description: 'Green Crown Grounds provides professional grounds maintenance for residential estates, commercial developments and block management portfolios across London. Est. 1994. SafeContractor accredited.',
  keywords: 'grounds maintenance London, commercial grounds maintenance, block management gardening, estate grounds maintenance, grounds maintenance London, property management grounds maintenance',
  alternates: { canonical: 'https://www.greencrowngrounds.co.uk' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.greencrowngrounds.co.uk',
    siteName: 'Green Crown Grounds',
    title: 'Green Crown Grounds | Professional Grounds Maintenance',
    description: 'Trusted grounds maintenance for London residential estates, commercial sites and block management portfolios. 30+ years experience. SafeContractor accredited.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you work with property management companies and managing agents?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the majority of our clients are property management companies, managing agents, and RMCs overseeing residential leasehold developments across London. We are experienced in working within the requirements of block management, including reporting, scheduled visits, and communication with both agents and residents.' },
    },
    {
      '@type': 'Question',
      name: 'Are you SafeContractor accredited?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Green Crown Grounds is SafeContractor accredited and fully insured. SafeContractor accreditation demonstrates compliance with health and safety legislation, which is an important consideration for managing agents appointing contractors to work on leasehold developments.' },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve properties across London and the surrounding areas.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer scheduled maintenance contracts?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of our work is available on scheduled maintenance contracts. We visit your site, assess the grounds, and agree a tailored maintenance programme with set visit frequencies and a clear scope of work. Contracts can be reviewed annually.' },
    },
    {
      '@type': 'Question',
      name: 'How long have you been operating?',
      acceptedAnswer: { '@type': 'Answer', text: 'Green Crown Grounds was founded in 1994 by James Fletcher and is now run by his son Tom. We have been providing grounds maintenance services across London for over 30 years. Many of our clients have been with us for more than 25 years.' },
    },
    {
      '@type': 'Question',
      name: 'Can you maintain multiple sites under one contract?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly work with managing agents and property management companies who have multiple sites across London. We can provide a single contract covering several properties, with consistent standards across all sites and consolidated reporting.' },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Green Crown Grounds',
  url: 'https://www.greencrowngrounds.co.uk',
  telephone: '02030000000',
  email: 'admin@greencrowngrounds.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: '',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.513,
    longitude: -0.302,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '08:00',
      closes: '18:00',
    }
  ],
  description: 'Green Crown Grounds provides professional grounds maintenance for residential estates, commercial developments and block management portfolios across London. Established 1994. SafeContractor accredited.',
  foundingDate: '1994',
  areaServed: ['London', 'Greater London'],
  hasCredential: 'SafeContractor Approved',
  sameAs: [
    'https://www.instagram.com/greencrowngrounds',
    'https://www.facebook.com/greencrowngrounds',
    'https://www.linkedin.com/company/green-crown-grounds',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
