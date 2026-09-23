import Image from 'next/image';
import { site, leadership, asset } from '@/data/site';

const initials = (name: string) => name.split(' ').map((w) => w[0]).join('').slice(0, 2);

export default function Roster() {
  return (
    <section id="leadership">
      <div className="wrap">
        <p className="eyebrow">Leadership</p>
        <h2>Who runs it</h2>
        <p className="lede">
          The founding officers. Open roles are filled from the member application — apply and tell us which one you want.
        </p>
        <div className="roster">
          {leadership.map((m) => {
            const body = (
              <>
                <div className="face">
                  {m.photo
                    ? <Image src={asset(m.photo)} alt="" width={400} height={400} />
                    : <span>{m.name ? initials(m.name) : '?'}</span>}
                </div>
                <div className="who">{m.name || 'Open role'}</div>
                <div className="role">{m.role}</div>
              </>
            );
            return m.name
              ? <div key={m.role} className="person">{body}</div>
              : <a key={m.role} className="person vacant" href={site.links.application}>{body}</a>;
          })}
        </div>
      </div>
    </section>
  );
}
