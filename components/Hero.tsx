import Image from 'next/image';
import Link from 'next/link';
import { site, asset } from '@/data/site';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="bignum" aria-hidden="true">{site.bikeNumber}</div>
      <div className="wrap">
        <div>
          <p className="eyebrow">{site.edition}</p>
          <h1>Texas builds<br />a <em>race bike.</em></h1>
          <p className="lede">
            {site.name} is {site.tagline}. Eighteen months to design, manufacture and race a prototype
            competition motorcycle — finishing on track at MotorLand Aragón, a FIM Grand Prix circuit in Spain.
          </p>
          <p className="lede">More than twenty countries compete. No Texas university ever has.</p>
          <div className="btns">
            <Link className="btn" href="/join/">Join the founding class</Link>
            <Link className="btn ghost" href="/sponsor/">Sponsor the build</Link>
          </div>
        </div>
        <div className="hero-crest">
          <Image src={asset('/logos/crest.png')} alt={`${site.name} crest`} width={700} height={700} priority />
        </div>
      </div>
    </header>
  );
}
