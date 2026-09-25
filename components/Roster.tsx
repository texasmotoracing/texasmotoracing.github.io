import Image from 'next/image';
import { site, leadership, asset } from '@/data/site';

// First and last name, skipping titles and suffixes: "Mario T Hernandez Jr" -> "MH", "Dr. Adrian Rodriguez" -> "AR".
const initials = (name: string) => {
  const words = name.split(' ').filter((w) => !/^(dr|prof|mr|ms|mrs|jr|sr|ii|iii|iv)\.?$/i.test(w));
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
};

export default function Roster() {
  const filled = leadership.filter((m) => m.name);
  const open = leadership.filter((m) => !m.name);
  return (
    <section id="leadership">
      <div className="wrap">
        <p className="eyebrow">Leadership</p>
        <h2>Who runs it</h2>
        <p className="lede">The founding officers, and the faculty tutor who signs off on the engineering.</p>
        <div className="leaders">
          {filled.map((m) => (
            <div key={m.role} className="leader">
              <div className="face">
                {m.photo
                  ? <Image src={asset(m.photo)} alt="" width={400} height={400} />
                  : <span>{initials(m.name)}</span>}
              </div>
              <div>
                <div className="role">{m.role}</div>
                <div className="who">{m.name}</div>
              </div>
            </div>
          ))}
        </div>
        {open.length > 0 && (
          <div className="openroles">
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>{open.length} lead roles open</p>
              <ul>{open.map((m) => <li key={m.role}>{m.role}</li>)}</ul>
            </div>
            <a className="btn" href={site.links.application}>Apply for a lead role</a>
          </div>
        )}
      </div>
    </section>
  );
}
