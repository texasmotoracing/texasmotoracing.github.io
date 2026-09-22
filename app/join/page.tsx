import type { Metadata } from 'next';
import Join from '@/components/Join';

export const metadata: Metadata = { title: 'Join' };

export default function Page() {
  return <Join />;
}
