import type { Metadata } from 'next';
import './globals.css';
import { site, asset, hasLink } from '@/data/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: `${site.name} is ${site.tagline}. Design it. Build it. Race it at MotorLand Aragón, Spain.`,
  openGraph: {
    title: site.name,
    description: `${site.name} is ${site.tagline}, competing in the MotoStudent International Competition.`,
    images: [asset('/art/og.jpg')],
    type: 'website',
  },
};

// Tells search engines who the site belongs to.
const org = {
  '@context': 'https://schema.org',
  '@type': 'SportsTeam',
  name: site.name,
  sport: 'Motorcycle racing',
  url: site.url,
  logo: `${site.url}${asset('/logos/crest.png')}`,
  email: site.email,
  sameAs: [site.links.instagram, site.links.linkedin].filter(hasLink),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, '\\u003c') }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
