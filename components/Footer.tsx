import Image from 'next/image';
import { site, asset } from '@/data/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <Image src={asset('/logos/mark.png')} alt="" width={80} height={80} style={{ opacity: .9, display: 'block', marginBottom: 12, height: 'auto' }} />
          <p style={{ margin: '0 0 4px' }}><strong>{site.name}</strong></p>
          <p className="muted" style={{ margin: 0 }}>{site.university} · {site.department}</p>
        </div>
        <div>
          <p style={{ margin: '0 0 6px' }}><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p style={{ margin: 0 }}><a href={site.links.instagram}>Instagram</a></p>
        </div>
      </div>
      <div className="wrap">
        <p className="legal">
          {site.name} is a registered student organisation at {site.university}. The Longhorn silhouette is a
          trademark of {site.university}, used with permission. MotoStudent is organised by the Moto Engineering
          Foundation; this site is not affiliated with or endorsed by MEF.
        </p>
      </div>
    </footer>
  );
}
