import Image from 'next/image';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <header className="hero" id="top">
      {/* Commissioned illustration — see public/art/README.md for the credit and usage notes. */}
      <div className="hero-art" aria-hidden="true">
        <Image src="/art/hero-bike.jpg" alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">{site.edition}</p>
          <h1>Texas builds<br />a <em>race bike.</em></h1>
          <p className="lede">
            {site.name} is {site.tagline}. Eighteen months to design, manufacture and race a prototype
            competition motorcycle — finishing on track at MotorLand Aragón, a FIM Grand Prix circuit in Spain.
          </p>
          <p className="lede">More than twenty countries compete. No Texas university ever has.</p>
          <div className="btns">
            <a className="btn" href="#join">Join the founding class</a>
            <a className="btn ghost" href="#sponsor">Sponsor the build</a>
          </div>
        </div>
      </div>
      {site.artist && <p className="hero-credit">Illustration: {site.artist}</p>}
    </header>
  );
}
