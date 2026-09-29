'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/data/products';

type CartLine = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: Record<string, CartLine>;
  favorites: Record<string, boolean>;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (product: Product, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  itemCount: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: {},
      favorites: {},
      addItem: (product, quantity = 1) =>
        set((state) => {
          const current = state.items[product.id]?.quantity ?? 0;
          return {
            items: {
              ...state.items,
              [product.id]: { product, quantity: current + quantity }
            }
          };
        }),
      removeItem: (productId) =>
        set((state) => {
          const current = state.items[productId];
          if (!current) return state;
          if (current.quantity <= 1) {
            const { [productId]: _removed, ...rest } = state.items;
            return { items: rest };
          }
          return {
            items: {
              ...state.items,
              [productId]: { ...current, quantity: current.quantity - 1 }
            }
          };
        }),
      setQuantity: (product, quantity) =>
        set((state) => {
          const cleanQuantity = Math.max(0, Math.min(99, Math.floor(quantity || 0)));
          if (cleanQuantity === 0) {
            const { [product.id]: _removed, ...rest } = state.items;
            return { items: rest };
          }
          return {
            items: {
              ...state.items,
              [product.id]: { product, quantity: cleanQuantity }
            }
          };
        }),
      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: {
            ...state.favorites,
            [productId]: !state.favorites[productId]
          }
        })),
      itemCount: () => Object.values(get().items).reduce((total, line) => total + line.quantity, 0)
    }),
    {
      name: 'eastman-suppliers-cart',
      partialize: (state) => ({
        items: state.items,
        favorites: state.favorites
      })
    }
  )
);
