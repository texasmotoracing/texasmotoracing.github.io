import Image from 'next/image';
import { site } from '@/data/site';

const links = [
  ['#competition', 'Competition'],
  ['#calendar', 'Calendar'],
  ['#team', 'Team'],
  ['#sponsor', 'Sponsor'],
  ['#join', 'Join'],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={site.name}>
          <Image src="/logos/bike.png" alt={site.name} width={1172} height={451} priority />
        </a>
        {links.map(([href, label]) => (
          <a key={href} className="lnk" href={href}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
