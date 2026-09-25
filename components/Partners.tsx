import Image from 'next/image';
import { partners, asset } from '@/data/site';

/** Organiser / sanctioning-body logos. Renders nothing until `partners` in data/site.ts has entries. */
export default function Partners() {
  if (partners.length === 0) return null;
  return (
    <div className="partners">
      <div className="wrap">
        <p className="eyebrow" style={{ margin: 0 }}>Competing in</p>
        <div className="partner-logos">
          {partners.map((p) => (
            <a key={p.src} href={p.href} target="_blank" rel="noopener noreferrer">
              <Image src={asset(p.src)} alt={p.name} width={400} height={160} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
