import Link from 'next/link';
import { paths } from '@/data/site';

export default function Paths() {
  return (
    <section id="get-involved" className="alt">
      <div className="wrap">
        <p className="eyebrow">Get involved</p>
        <h2>Three ways onto the grid</h2>
        <div className="grid g3">
          {paths.map((p) => (
            <Link key={p.href} className="card path" href={p.href}>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <span className="go">{p.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
