import type { Metadata } from 'next';
import Team from '@/components/Team';
import Roster from '@/components/Roster';
import Stripe from '@/components/Stripe';
import Identity from '@/components/Identity';

export const metadata: Metadata = {
  title: 'Team',
  description: 'The founding class of Texas Moto Racing: six subteams, the officers leading them, and the seats still open.',
};

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
