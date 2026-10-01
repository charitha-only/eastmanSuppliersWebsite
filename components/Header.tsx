'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

export function Header() {
  const itemCount = useCartStore((state) => state.itemCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/80 bg-cream/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-5 sm:px-10 xl:px-16">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <a href="/" className="flex items-center gap-3" aria-label="EASTMAN SUPPLIERS home">
            <Image src="/logo.jpg" width={44} height={44} alt="Eastman logo" className="rounded-full border border-line bg-white" priority />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-ink sm:block">EASTMAN SUPPLIERS</span>
          </a>
        </div>
        
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          <a className="transition hover:text-ink" href="/#featured">Featured</a>
          <a className="transition hover:text-ink" href="/products">Products</a>
          <a className="transition hover:text-ink" href="/rent">Rent</a>
          <a className="transition hover:text-ink" href="/sell">Sell</a>
          <a className="transition hover:text-ink" href="/#about">About</a>
        </nav>
        
        <a href="/cart" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition hover:border-accent hover:text-accent" aria-label="Cart">
          <ShoppingBag size={19} />
          {itemCount > 0 ? (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-white">
              {itemCount}
            </span>
          ) : null}
        </a>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-line/80 bg-cream/95 backdrop-blur-xl px-5 py-4 md:hidden flex flex-col gap-4 text-base font-medium text-muted shadow-md">
          <a className="transition hover:text-ink block" href="/#featured" onClick={() => setIsMenuOpen(false)}>Featured</a>
          <a className="transition hover:text-ink block" href="/products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a className="transition hover:text-ink block" href="/rent" onClick={() => setIsMenuOpen(false)}>Rent</a>
          <a className="transition hover:text-ink block" href="/sell" onClick={() => setIsMenuOpen(false)}>Sell</a>
          <a className="transition hover:text-ink block" href="/#about" onClick={() => setIsMenuOpen(false)}>About</a>
        </nav>
      )}
    </header>
  );
}
