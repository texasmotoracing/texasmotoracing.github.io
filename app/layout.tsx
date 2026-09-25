import type { Metadata } from 'next';
import './globals.css';
import { site, asset } from '@/data/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  // TODO: set to your real URL once deployed — used for link previews.
  metadataBase: new URL('https://texasmotoracing.github.io'),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: `${site.name} is ${site.tagline}. Design it. Build it. Race it at MotorLand Aragón, Spain.`,
  openGraph: {
    title: site.name,
    description: `${site.name} is ${site.tagline}, competing in the MotoStudent International Competition.`,
    images: [asset('/art/og.jpg')],
    type: 'website',
  },
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
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
