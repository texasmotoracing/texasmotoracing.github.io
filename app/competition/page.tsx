import type { Metadata } from 'next';
import Competition from '@/components/Competition';
import Partners from '@/components/Partners';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = { title: 'Competition' };

export default function Page() {
  return (
    <>
      <Competition />
      <Partners />
      <Gallery />
    </>
  );
}
