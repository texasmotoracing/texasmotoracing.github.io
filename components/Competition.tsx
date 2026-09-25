import { phases } from '@/data/site';

export default function Competition() {
  return (
    <section id="competition">
      <div className="wrap">
        <p className="eyebrow">The competition</p>
        <h2>Design it. Build it. Race it.</h2>
        <p className="lede">
          MotoStudent is the international engineering competition for prototype racing motorcycles, run by
          the Moto Engineering Foundation under FIM sanction. Every team gets the same component kit and the
          same eighteen months, then is judged in two independent phases. The rules require that registered
          students do all of the design, assembly and manufacturing — no professional engineers or mechanics
          touch the bike.
        </p>
        <div className="grid g2">
          <div className="phase">
            <span className="tag">{phases.ms1.tag}</span>
            <ul>{phases.ms1.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
          <div className="phase">
            <span className="tag">{phases.ms2.tag}</span>
            <ul>{phases.ms2.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="muted" style={{ fontSize: 15, marginTop: 18, marginBottom: 0 }}>{phases.ms2.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
