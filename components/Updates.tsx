import { updates } from '@/data/site';

const fmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Team news, newest first. Renders nothing until `updates` in data/site.ts has entries. */
export default function Updates() {
  if (updates.length === 0) return null;
  return (
    <section id="updates">
      <div className="wrap">
        <p className="eyebrow">Paddock notes</p>
        <h2>Latest from the team</h2>
        <ol className="updates">
          {updates.slice(0, 4).map((u) => (
            <li key={u.date + u.title}>
              <time dateTime={u.date}>{fmt.format(new Date(u.date))}</time>
              <h3>{u.title}</h3>
              <p>{u.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
