import { site, tiers, hasLink } from '@/data/site';

export default function Sponsor() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.name + ' sponsorship')}`;
  return (
    <section id="sponsor" className="alt">
      <div className="wrap">
        <p className="eyebrow">Sponsorship</p>
        <h2>Put your name on the first one</h2>
        <p className="lede">
          A first-cycle MotoStudent programme runs to roughly {site.programCost} across three semesters, most
          of it raised from industry. In return: your mark on a prototype racing motorcycle photographed at a
          Grand Prix circuit, and first access to the students who built it.
        </p>
        <div className="tiers">
          {tiers.map((t) => (
            <div key={t.name} className={`tier${t.lead ? ' lead' : ''}`}>
              <div className="name">{t.name}</div>
              <div className="amt">{t.amount}</div>
              <ul>{t.perks.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="muted" style={{ fontSize: 15, marginTop: 22 }}>
          In-kind support — machining, raw stock, composites, suspension components, software seats, dyno or
          track time — is credited at value and often worth more to us than cash.
        </p>
        <div className="btns">
          <a className="btn" href={mailto}>Talk to us about sponsoring</a>
          {hasLink(site.links.donate) && <a className="btn ghost" href={site.links.donate}>Donate</a>}
        </div>
      </div>
    </section>
  );
}
