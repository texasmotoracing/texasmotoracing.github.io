import Hero from '@/components/Hero';
import Clock from '@/components/Clock';
import Machine from '@/components/Machine';
import Stripe from '@/components/Stripe';
import Sponsors from '@/components/Sponsors';
import { sponsors } from '@/data/site';

export default function Page() {
  return (
    <>
      <Hero />
      <Clock />
      <Stripe />
      <Machine />
      {sponsors.length > 0 && <Sponsors />}
    </>
  );
}
