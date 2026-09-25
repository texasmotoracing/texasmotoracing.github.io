import { site, hasLink, asset } from '@/data/site';

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
        <div className="packet">
          <div>
            <p className="eyebrow" style={{ marginBottom: 8 }}>Sponsor packet · 2026–27</p>
            <p style={{ margin: 0 }}>
              Three partnership levels, what each one puts on the bike and in front of the students, the budget,
              and the calendar. Six pages.
            </p>
          </div>
          <div className="btns" style={{ marginTop: 0 }}>
            <a className="btn" href={asset(site.sponsorPacket)} download>Download the packet (PDF)</a>
            <a className="btn ghost" href={mailto}>Talk to us</a>
          </div>
        </div>
        <p className="muted" style={{ fontSize: 15, marginTop: 22 }}>
          In-kind support — machining, raw stock, composites, suspension components, software seats, dyno or
          track time — is credited at value and often worth more to us than cash.
        </p>
        {hasLink(site.links.donate) && (
          <div className="btns">
            <a className="btn ghost" href={site.links.donate}>Donate</a>
          </div>
        )}
      </div>
    </section>
  );
}
