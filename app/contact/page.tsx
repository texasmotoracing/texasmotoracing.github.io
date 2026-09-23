import type { Metadata } from 'next';
import { site, hasLink } from '@/data/site';

export const metadata: Metadata = { title: 'Contact' };

const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(`${site.name} — ${subject}`)}`;

export default function Page() {
  const social = [
    ['Instagram', site.links.instagram],
    ['LinkedIn', site.links.linkedin],
  ].filter(([, url]) => hasLink(url));
  return (
    <section id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch</h2>
        <p className="lede">
          One inbox, read by the officers: <a href={`mailto:${site.email}`}>{site.email}</a>. Pick the line that fits
          and it arrives with the right subject.
        </p>
        <div className="grid g3">
          <div className="card">
            <h3>Joining</h3>
            <p>Any major, any year. Start with the interest form; the full application follows.</p>
            <div className="btns">
              <a className="btn" href={site.links.interestForm}>Interest form</a>
              <a className="btn ghost" href={site.links.application}>Apply</a>
            </div>
          </div>
          <div className="card">
            <h3>Sponsoring</h3>
            <p>Cash, parts, machining, software or track time — we&apos;ll send the sponsorship packet.</p>
            <div className="btns">
              <a className="btn" href={mail('Sponsorship')}>Email us</a>
              {hasLink(site.links.donate) && <a className="btn ghost" href={site.links.donate}>Donate</a>}
            </div>
          </div>
          <div className="card">
            <h3>Press &amp; everything else</h3>
            <p>Media, faculty, other MotoStudent teams, or anything that doesn&apos;t fit above.</p>
            <div className="btns">
              <a className="btn" href={mail('Hello')}>Email us</a>
            </div>
          </div>
        </div>
        {social.length > 0 && (
          <p className="muted" style={{ marginTop: 32 }}>
            Follow the build:{' '}
            {social.map(([label, url], i) => (
              <span key={label}>{i > 0 && ' · '}<a href={url}>{label}</a></span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
