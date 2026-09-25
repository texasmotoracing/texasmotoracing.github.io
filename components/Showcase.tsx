import Image from 'next/image';
import { photos, asset } from '@/data/site';

/** Full-bleed statement photo on the home page. Uses the first entry in `photos`; hidden when there are none. */
export default function Showcase() {
  const p = photos[0];
  if (!p) return null;
  return (
    <section className="showcase" aria-label="The MotoStudent grid">
      <Image src={asset(p.src)} alt={p.alt} fill sizes="100vw" />
      <div className="showcase-scrim" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow">MotorLand Aragón · Alcañiz, Spain</p>
        <h2>This is the grid<br />we&apos;re building for.</h2>
        <p className="cap">
          {p.alt}.{' '}
          {p.source ? <a href={p.source} target="_blank" rel="noopener noreferrer">{p.credit}</a> : p.credit}
        </p>
      </div>
    </section>
  );
}
