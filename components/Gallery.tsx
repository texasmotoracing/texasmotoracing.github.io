import Image from 'next/image';
import { photos, asset } from '@/data/site';

/** A band of real photos from the series. Renders nothing until `photos` in data/site.ts has entries. */
export default function Gallery() {
  if (photos.length === 0) return null;
  return (
    <section className="gallery" aria-label="Photos from the MotoStudent competition">
      <div className="wrap">
        <div className="shots">
          {photos.map((p) => (
            <figure key={p.src}>
              <Image src={asset(p.src)} alt={p.alt} width={1600} height={1000} />
              <figcaption>{p.alt} · <span>{p.source ? <a href={p.source} target="_blank" rel="noopener noreferrer">{p.credit}</a> : p.credit}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
