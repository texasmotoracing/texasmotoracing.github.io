import Image from 'next/image';
import { site, sponsors, asset } from '@/data/site';

/** Sponsor logo wall. With no sponsors yet it shows an invitation to be the first instead of an empty grid. */
export default function Sponsors() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.name + ' sponsorship')}`;
  if (sponsors.length === 0) {
    return (
      <section id="sponsors">
        <div className="wrap">
          <div className="first">
            <p className="eyebrow">Our sponsors</p>
            <h2>This wall is empty.<br /><em>Your name goes first.</em></h2>
            <p className="lede">
              The first company on it backs the first Texas team ever to enter MotoStudent — before anyone else
              has seen the bike.
            </p>
            <div className="btns">
              <a className="btn" href={mailto}>Become the first sponsor</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
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
          <a className="logo empty" href={mailto}>Your logo here</a>
        </div>
      </div>
    </section>
  );
}
