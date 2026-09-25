import type { Metadata } from 'next';
import Sponsor from '@/components/Sponsor';
import Sponsors from '@/components/Sponsors';

export const metadata: Metadata = {
  title: 'Sponsor',
  description: 'Sponsor the first motorcycle engineering team at The University of Texas at Austin. Download the sponsor packet.',
};

export default function Page() {
  return (
    <>
      <Sponsor />
      <Sponsors />
    </>
  );
}
