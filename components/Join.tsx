import Image from 'next/image';
import { site, membership, asset } from '@/data/site';

export default function Join() {
  return (
    <section id="join" className="band">
      <div className="wrap">
        <div>
          <p className="eyebrow">Join</p>
          <h2>No experience required. Follow-through is.</h2>
          <p>
            Most of us have never ridden a motorcycle. What we need is people who finish what they start,
            across three semesters — from any major. The business, finance and technical-writing work is
            graded, not support work.
          </p>
          <p>
            Start with the interest form. About a minute, and it is not an application — it puts you on the
            list for the info session and the full application.
          </p>
          <div className="btns">
            <a className="btn" href={site.links.interestForm}>Interest form</a>
            <a className="btn ghost" href={site.links.application}>Member application</a>
          </div>
          <dl className="facts">
            {membership.map((m) => (
              <div key={m.k}>
                <dt>{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Image src={asset('/logos/speed.png')} alt="" width={700} height={700} />
      </div>
    </section>
  );
}
