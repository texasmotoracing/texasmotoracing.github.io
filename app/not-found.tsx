import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section id="not-found">
      <div className="wrap">
        <p className="eyebrow">404 · Off track</p>
        <h2>This page ran wide</h2>
        <p className="lede">The address may have changed. Everything on the site is one click from here.</p>
        <div className="btns">
          <Link className="btn" href="/">Back to the pits</Link>
          <Link className="btn ghost" href="/contact/">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
