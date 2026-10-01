import { Header } from '@/components/Header';
import { SellShowcase } from '@/components/SellShowcase';

export const metadata = {
  title: 'Machines For Sale',
  description: 'Buy quality used and reconditioned industrial sewing machines and cutting room equipment in Sri Lanka.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <section className="mx-auto max-w-[1536px] px-5 pb-20 pt-28 sm:px-10 xl:px-16">
        <SellShowcase />
      </section>
    </main>
  );
}
