import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';

export const metadata = {
  title: 'All Products & Spare Parts',
  description: 'Browse our complete catalog of industrial sewing machine spare parts, cutting machines, genuine needles, and garment manufacturing accessories in Sri Lanka.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream">
      <Header />
      <div className="pt-20">
        <ProductGrid />
      </div>
    </main>
  );
}
