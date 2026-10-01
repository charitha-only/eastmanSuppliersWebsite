import { Header } from '@/components/Header';
import { SellProductView } from '@/components/SellProductView';
import { sellMachines } from '@/data/sell-machines';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return sellMachines.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const machine = sellMachines.find((m) => m.id === params.id);
  if (!machine) return {};
  return {
    title: `${machine.name} For Sale`,
    description: machine.summary,
  };
}

export default function SellProductPage({ params }: { params: { id: string } }) {
  const machine = sellMachines.find((m) => m.id === params.id);
  if (!machine) notFound();

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <div className="mx-auto max-w-[1536px] px-5 pb-20 pt-28 sm:px-10 xl:px-16">
        <SellProductView machineId={params.id} />
      </div>
    </main>
  );
}
