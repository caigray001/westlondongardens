import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'West London Gardens | Professional Grounds Maintenance',
  description: 'West London Gardens provides professional grounds maintenance for residential estates, commercial developments and block management portfolios across London. Est. 1994. SafeContractor accredited.',
  keywords: 'grounds maintenance London, commercial grounds maintenance, block management gardening, estate grounds maintenance, West London gardening, property management grounds maintenance',
  alternates: { canonical: 'https://www.westlondongardens.co.uk' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.westlondongardens.co.uk',
    siteName: 'West London Gardens',
    title: 'West London Gardens | Professional Grounds Maintenance',
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
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. West London Gardens is SafeContractor accredited and fully insured. SafeContractor accreditation demonstrates compliance with health and safety legislation, which is an important consideration for managing agents appointing contractors to work on leasehold developments.' },
    },
    {
      '@type': 'Question',
      name: 'What areas of London do you cover?',
      acceptedAnswer: { '@type': 'Answer', text: 'We are based in Ealing, West London and serve properties across London including Ealing, Kensington, Richmond, Hammersmith, Chelsea, Fulham, Westminster, Chiswick, Acton, and surrounding areas.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer scheduled maintenance contracts?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of our work is available on scheduled maintenance contracts. We visit your site, assess the grounds, and agree a tailored maintenance programme with set visit frequencies and a clear scope of work. Contracts can be reviewed annually.' },
    },
    {
      '@type': 'Question',
      name: 'How long have you been operating?',
      acceptedAnswer: { '@type': 'Answer', text: 'West London Gardens was founded in 1994 by Antony Kitcher and is now run by his son Luke. We have been providing grounds maintenance services across London for over 30 years. Many of our clients have been with us for more than 25 years.' },
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
  name: 'West London Gardens',
  url: 'https://www.westlondongardens.co.uk',
  telephone: '02088408799',
  email: 'admin@westlondongardens.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '45 St Marys Road',
    addressLocality: 'Ealing',
    addressRegion: 'London',
    postalCode: 'W5 5RG',
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
  description: 'West London Gardens provides professional grounds maintenance for residential estates, commercial developments and block management portfolios across London. Established 1994. SafeContractor accredited.',
  foundingDate: '1994',
  areaServed: ['Ealing', 'Kensington', 'Richmond', 'Hammersmith', 'Chelsea', 'Fulham', 'Westminster', 'London'],
  hasCredential: 'SafeContractor Approved',
  sameAs: [
    'https://www.instagram.com/westlondongardens',
    'https://www.facebook.com/westlondongardens',
    'https://www.linkedin.com/company/west-london-gardens',
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
