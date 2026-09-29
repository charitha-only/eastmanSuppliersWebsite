import { Header } from '@/components/Header';
import { RentShowcase } from '@/components/RentShowcase';

export const metadata = {
  title: 'Rent Garment Machinery',
  description: 'Rent high-quality industrial sewing machines and cutting room equipment for your garment factory in Sri Lanka with flexible rental plans.',
};

export default function RentPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <section className="mx-auto max-w-[1536px] px-5 pb-20 pt-28 sm:px-8">
        <RentShowcase />
      </section>
    </main>
  );
}
