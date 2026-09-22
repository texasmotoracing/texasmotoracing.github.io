import type { Metadata } from 'next';
import Competition from '@/components/Competition';

export const metadata: Metadata = { title: 'Competition' };

export default function Page() {
  return <Competition />;
}
