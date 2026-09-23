import type { Metadata } from 'next';
import Sponsor from '@/components/Sponsor';
import Sponsors from '@/components/Sponsors';

export const metadata: Metadata = { title: 'Sponsor' };

export default function Page() {
  return (
    <>
      <Sponsor />
      <Sponsors />
    </>
  );
}
