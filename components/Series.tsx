import Link from 'next/link';
import { series } from '@/data/site';

export default function Series() {
  return (
    <section id="series">
      <div className="wrap">
        <p className="eyebrow">The series</p>
        <h2>The international race for student-built bikes</h2>
        <p className="lede">
          MotoStudent gives every university the same engine kit and eighteen months. The jury grades the
          business plan and the engineering; the stopwatch grades the rest.
        </p>
        <dl className="figures">
          {series.figures.map((f) => (
            <div key={f.label}>
              <dd>{f.value}</dd>
              <dt>{f.label}</dt>
            </div>
          ))}
        </dl>
        <p className="muted source">
          Source: {series.source} <Link href="/competition/">How the competition works →</Link>
        </p>
      </div>
    </section>
  );
}
