import { CartView } from '@/components/CartView';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Cart | EASTMAN SUPPLIERS',
  description: 'Review selected sewing machine spare parts and quantities.'
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <CartView />
    </main>
  );
}
