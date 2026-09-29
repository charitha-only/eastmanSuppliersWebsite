import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';

export const metadata = {
  title: 'Products | EASTMAN SUPPLIERS',
  description: 'Browse sewing machine spare parts, knives, needles, and cutting equipment.'
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
