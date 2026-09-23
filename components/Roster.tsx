import Image from 'next/image';
import { site, leadership, asset } from '@/data/site';

// First and last name, skipping titles and suffixes: "Mario T Hernandez Jr" -> "MH", "Dr. Adrian Rodriguez" -> "AR".
const initials = (name: string) => {
  const words = name.split(' ').filter((w) => !/^(dr|prof|mr|ms|mrs|jr|sr|ii|iii|iv)\.?$/i.test(w));
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
};

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
