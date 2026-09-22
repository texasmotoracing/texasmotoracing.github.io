import Image from 'next/image';
import { site, asset } from '@/data/site';

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
        <a className="brand" href="#top">
          <Image src={asset('/logos/icon.png')} alt="" width={38} height={38} />
          <b>{site.name}</b>
        </a>
        {links.map(([href, label]) => (
          <a key={href} className="lnk" href={href}>{label}</a>
        ))}
      </div>
    </nav>
  );
}
