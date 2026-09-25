import type { Metadata } from 'next';
import Competition from '@/components/Competition';
import Partners from '@/components/Partners';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Competition',
  description: 'How MotoStudent works: one engine kit, eighteen months, a jury-graded industrial project and a race at MotorLand Aragón.',
};

export default function Page() {
  return (
    <>
      <Competition />
      <Partners />
      <Gallery />
    </>
  );
}
