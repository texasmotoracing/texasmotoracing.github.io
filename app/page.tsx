import Hero from '@/components/Hero';
import Clock from '@/components/Clock';
import Series from '@/components/Series';
import Gallery from '@/components/Gallery';
import Machine from '@/components/Machine';
import Stripe from '@/components/Stripe';
import Updates from '@/components/Updates';
import Paths from '@/components/Paths';
import Sponsors from '@/components/Sponsors';
import { sponsors } from '@/data/site';

export default function Page() {
  return (
    <>
      <Hero />
      <Clock />
      <Series />
      <Gallery />
      <Stripe />
      <Machine />
      <Updates />
      <Paths />
      {sponsors.length > 0 && <Sponsors />}
    </>
  );
}
