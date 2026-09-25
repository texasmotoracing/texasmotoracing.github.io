import type { Metadata } from 'next';
import Calendar from '@/components/Calendar';

export const metadata: Metadata = {
  title: 'Calendar',
  description: 'Every MotoStudent 2026–27 deadline Texas Moto Racing works to, straight from the competition regulations.',
};

export default function Page() {
  return <Calendar />;
}
