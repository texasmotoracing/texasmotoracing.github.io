import type { Metadata } from 'next';
import Team from '@/components/Team';
import Roster from '@/components/Roster';
import Stripe from '@/components/Stripe';
import Identity from '@/components/Identity';

export const metadata: Metadata = { title: 'Team' };

export default function Page() {
  return (
    <>
      <Team />
      <Roster />
      <Stripe />
      <Identity />
    </>
  );
}
