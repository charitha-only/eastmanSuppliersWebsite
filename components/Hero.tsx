'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { heroProducts } from '@/data/products';
import { useCartStore } from '@/store/cart-store';

export function Hero() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const product = heroProducts[active];
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % heroProducts.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = titleRef.current ? Array.from(titleRef.current.querySelectorAll('span')) : [];
      if (!words.length || !copyRef.current || !priceRef.current || !imageRef.current) return;
      gsap.timeline()
        .fromTo(words, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.055, ease: 'power3.out' })
        .fromTo(copyRef.current, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' }, '-=0.35')
        .fromTo(priceRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }, '-=0.28');
      gsap.fromTo(imageRef.current, { rotate: -18, scale: 0.78, opacity: 0, x: 80 }, { rotate: 0, scale: 1, opacity: 1, x: 0, duration: 0.95, ease: 'back.out(1.5)' });
    });
    return () => ctx.revert();
  }, [active]);

  return (
    <section className="min-h-screen bg-cream pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1536px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-muted">
            <ShieldCheck size={16} className="text-accent" />
            Industrial parts, ready for production
          </div>
          <h1 ref={titleRef} className="text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {product.name.split(' ').map((word) => (
              <span className="mr-3 inline-block overflow-hidden" key={`${product.id}-${word}`}>
                {word}
              </span>
            ))}
          </h1>
          <p ref={copyRef} className="mt-6 max-w-lg text-lg leading-8 text-muted">
            {product.description}
          </p>
          <div ref={priceRef} className="mt-8 flex flex-wrap items-center gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{product.subtitle}</p>
            </div>
            <button onClick={() => addItem(product)} className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white shadow-soft transition hover:bg-[#df3f45]">
              Add to cart <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-10 flex gap-3">
            {heroProducts.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${index === active ? 'w-10 bg-accent' : 'w-2.5 bg-line hover:bg-muted/40'}`}
                aria-label={`Show ${item.name}`}
              />
            ))}
          </div>
        </div>
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
          <div className="absolute inset-x-6 bottom-10 h-44 rounded-[50%] bg-white blur-3xl" />
          <div className="absolute right-4 top-10 h-36 w-36 rounded-full border border-line bg-white/60" />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            ref={imageRef}
            className="relative h-[360px] w-full max-w-[560px] sm:h-[520px]"
          >
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 48vw, 92vw" className="image-render object-contain" priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
