'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Minus, PackageCheck, Plus, ShieldCheck, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export function CartView() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const lines = Object.values(items);
  const subtotal = lines.reduce((total, line) => total + line.product.price * line.quantity, 0);
  const serviceFee = subtotal > 0 ? Math.max(12, subtotal * 0.03) : 0;
  const total = subtotal + serviceFee;

  if (lines.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8">
        <div className="rounded-lg border border-line bg-white p-8 text-center shadow-soft sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accentSoft text-accent">
            <ShoppingBag size={28} />
          </div>
          <h1 className="mt-6 text-4xl font-semibold">Your cart is empty</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            Add spare parts from the product catalog and they will appear here with quantity controls and order totals.
          </p>
          <a href="/products" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white transition hover:bg-[#df3f45]">
            Browse Products <ArrowRight size={17} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Shopping cart</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Review your order</h1>
        </div>
        <a href="/products" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-sm font-bold text-ink transition hover:border-accent hover:text-accent">
          Continue Shopping <ArrowRight size={17} />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.38fr]">
        <div className="grid gap-4">
          {lines.map((line, index) => (
            <motion.article
              key={line.product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
              className="grid gap-4 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[150px_1fr] sm:p-5"
            >
              <div className="relative aspect-square overflow-hidden rounded-md bg-cream">
                <Image src={line.product.image} alt={line.product.name} fill sizes="150px" className="object-contain p-4" />
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{line.product.category}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{line.product.name}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{line.product.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex h-11 items-center rounded-full border border-line bg-white">
                    <button onClick={() => removeItem(line.product.id)} className="flex h-10 w-10 items-center justify-center text-muted transition hover:text-accent" aria-label={`Remove one ${line.product.name}`}>
                      <Minus size={16} />
                    </button>
                    <input
                      value={line.quantity}
                      onChange={(event) => setQuantity(line.product, Number(event.target.value))}
                      className="h-10 w-14 border-x border-line bg-transparent text-center text-sm font-semibold outline-none"
                      inputMode="numeric"
                      aria-label={`${line.product.name} quantity`}
                    />
                    <button onClick={() => addItem(line.product)} className="flex h-10 w-10 items-center justify-center text-muted transition hover:text-accent" aria-label={`Add one ${line.product.name}`}>
                      <Plus size={16} />
                    </button>
                  </div>

                  <button onClick={() => setQuantity(line.product, 0)} className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-bold text-muted transition hover:border-accent hover:text-accent">
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="h-fit rounded-lg border border-line bg-white p-5 shadow-soft sm:p-6">
          <h2 className="text-2xl font-semibold">Order summary</h2>

          <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white transition hover:bg-[#df3f45]">
            Request Checkout <ArrowRight size={17} />
          </button>

          <div className="mt-6 grid gap-3">
            <div className="flex gap-3 rounded-lg bg-cream p-4 text-sm leading-6">
              <ShieldCheck className="mt-0.5 shrink-0 text-accent" size={19} />
              <span>Order details can be confirmed by EASTMAN SUPPLIERS before dispatch.</span>
            </div>
            <div className="flex gap-3 rounded-lg bg-cream p-4 text-sm leading-6">
              <PackageCheck className="mt-0.5 shrink-0 text-accent" size={19} />
              <span>Spare parts are packed for workshop and production-floor handling.</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
