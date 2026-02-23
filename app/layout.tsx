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
      </head>
      <body>{children}</body>
    </html>
  )
}
