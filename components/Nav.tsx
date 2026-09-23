'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, asset } from '@/data/site';

const links = [
  ['/competition/', 'Competition'],
  ['/calendar/', 'Calendar'],
  ['/team/', 'Team'],
  ['/sponsor/', 'Sponsor'],
  ['/join/', 'Join'],
];

export default function Nav() {
  // trailingSlash is on, but normalise anyway so matching never depends on it.
  const path = usePathname().replace(/\/?$/, '/');
  return (
    <nav className="nav">
      <div className="wrap">
        <Link className="brand" href="/">
          <Image src={asset('/logos/crest.png')} alt="" width={38} height={38} />
          <b>{site.name}</b>
        </Link>
        {links.map(([href, label]) => (
          <Link key={href} className="lnk" href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
