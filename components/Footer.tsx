import Image from 'next/image';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <Image src="/logos/mark.png" alt="" width={72} height={72} style={{ opacity: .95, display: 'block', marginBottom: 12 }} />
          <p style={{ margin: '0 0 4px' }}><strong>{site.name}</strong></p>
          <p className="muted" style={{ margin: 0 }}>A student organisation at {site.university}</p>
        </div>
        <div>
          <p style={{ margin: '0 0 6px' }}><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p style={{ margin: 0 }}><a href={site.links.instagram}>Instagram</a></p>
        </div>
      </div>
      <div className="wrap">
        <p className="legal">
          {site.name} is a student organisation at {site.university}; it does not speak for the university. MotoStudent is organised by
          the Moto Engineering Foundation; this site is not affiliated with or endorsed by MEF.
        </p>
      </div>
    </footer>
  );
}
