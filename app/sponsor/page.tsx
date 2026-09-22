import type { Metadata } from 'next';
import Sponsor from '@/components/Sponsor';

export const metadata: Metadata = { title: 'Sponsor' };

export default function Page() {
  return <Sponsor />;
}
