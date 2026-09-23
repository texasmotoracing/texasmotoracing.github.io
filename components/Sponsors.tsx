import Image from 'next/image';
import { site, sponsors, asset } from '@/data/site';

/** Sponsor logo wall. With no sponsors yet it shows a single "your logo here" tile. */
export default function Sponsors() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.name + ' sponsorship')}`;
  return (
    <section id="sponsors">
      <div className="wrap">
        <p className="eyebrow">Our sponsors</p>
        <h2>Built with</h2>
        <div className="logos">
          {sponsors.map((s) => {
            const logo = <Image src={asset(s.logo)} alt={s.name} width={320} height={160} />;
            return s.url
              ? <a key={s.name} className="logo" href={s.url} target="_blank" rel="noopener">{logo}</a>
              : <div key={s.name} className="logo">{logo}</div>;
          })}
          <a className="logo empty" href={mailto}>
            {sponsors.length ? 'Your logo here' : 'Your logo here — be the first'}
          </a>
        </div>
      </div>
    </section>
  );
}
