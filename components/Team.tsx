import Link from 'next/link';
import { site, subteams } from '@/data/site';

export default function Team() {
  return (
    <section id="team" className="alt">
      <div className="wrap">
        <p className="eyebrow">The founding class</p>
        <h2>Six subteams, one bike</h2>
        <p className="lede">
          {site.interestCount} students raised their hands in the first week. Every subteam owns deliverables on
          the <Link href="/calendar/">regulation calendar</Link>, and the business and communications work is graded
          by the jury alongside the engineering.
        </p>
        <div className="grid g3">
          {subteams.map((t) => (
            <div key={t.name} className={`card${t.open ? ' open' : ''}`}>
              <h3>{t.name}</h3>
              <p>{t.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
