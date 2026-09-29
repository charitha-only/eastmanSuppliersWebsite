import { Header } from '@/components/Header';
import { RentShowcase } from '@/components/RentShowcase';

export const metadata = {
  title: 'Rent Machines | EASTMAN SUPPLIERS',
  description: 'Garment factory machine rental supplier in Sri Lanka.'
};

export default function RentPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8">
        <RentShowcase />
      </section>
    </main>
  );
}
