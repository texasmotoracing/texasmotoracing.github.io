import type { Metadata } from 'next';
import Join from '@/components/Join';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Join Texas Moto Racing. Any major, any year, no experience needed. Membership is free.',
};

export default function Page() {
  return <Join />;
}
