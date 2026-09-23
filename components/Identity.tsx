import Image from 'next/image';
import { marks, wordmark } from '@/data/site';

export default function Identity() {
  return (
    <section id="identity">
      <div className="wrap">
        <p className="eyebrow">Identity</p>
        <h2>One team, one mark</h2>
        <p className="lede">
          The bike is the mark: the letters are the machine. It leads everything. The crest for anything with a
          signature on it, the number board for the bike, the speed mark for everything a student would actually wear.
        </p>
        <div className="kit">
          <figure className="wordmark">
            <Image src={wordmark.src} alt={wordmark.alt} width={1172} height={451} />
            <figcaption>{wordmark.caption}</figcaption>
          </figure>
          {marks.map((m) => (
            <figure key={m.src}>
              <Image src={m.src} alt={m.alt} width={700} height={700} />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
