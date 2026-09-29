'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Minus, Plus, ShoppingCart, Zap } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart-store';

export function ProductGrid() {
  const items = useCartStore((state) => state.items);
  const favorites = useCartStore((state) => state.favorites);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const toggleFavorite = useCartStore((state) => state.toggleFavorite);

  return (
    <section id="products" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Parts catalog</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Production-ready spares</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            Fast-moving essentials for sewing, cutting, and maintenance teams.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const quantity = items[product.id]?.quantity ?? 0;
            const isFavorite = Boolean(favorites[product.id]);
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-lg border border-line bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative flex aspect-[1.1] items-center justify-center rounded-md bg-cream">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-accent hover:text-accent"
                    aria-label={`Favorite ${product.name}`}
                  >
                    <Heart size={18} className={isFavorite ? 'fill-accent text-accent' : ''} />
                  </button>
                  <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 92vw" className="object-contain p-7" />
                </div>
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{product.category}</p>
                      <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                    </div>
                    <p className="text-lg font-bold">${product.price}</p>
                  </div>
                  <p className="mt-3 min-h-[56px] text-sm leading-7 text-muted">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="flex h-11 items-center rounded-full border border-line bg-white">
                      <button onClick={() => removeItem(product.id)} className="flex h-10 w-10 items-center justify-center text-muted transition hover:text-accent" aria-label={`Remove ${product.name}`}>
                        <Minus size={16} />
                      </button>
                      <input
                        value={quantity}
                        onChange={(event) => setQuantity(product, Number(event.target.value))}
                        className="h-10 w-12 border-x border-line bg-transparent text-center text-sm font-semibold outline-none"
                        inputMode="numeric"
                        aria-label={`${product.name} quantity`}
                      />
                      <button onClick={() => addItem(product)} className="flex h-10 w-10 items-center justify-center text-muted transition hover:text-accent" aria-label={`Add ${product.name}`}>
                        <Plus size={16} />
                      </button>
                    </div>
                    <button onClick={() => addItem(product)} className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm font-bold transition hover:border-accent hover:text-accent">
                      <ShoppingCart size={17} /> Add
                    </button>
                  </div>
                  <button onClick={() => addItem(product)} className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-bold text-white transition hover:bg-[#df3f45]">
                    <Zap size={17} /> Buy Now
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
