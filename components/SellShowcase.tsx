'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, BadgeCheck, PhoneCall, Sparkles, HandCoins, Truck, Wrench } from 'lucide-react';
import { sellMachines } from '@/data/sell-machines';

const benefits = [
  { icon: Wrench, label: 'Fully Serviced & Checked' },
  { icon: HandCoins, label: 'Best Second-Hand Prices' },
  { icon: Truck, label: 'Island-wide Delivery' }
];

export function SellShowcase() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const activeMachine = sellMachines[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % sellMachines.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!visualRef.current || !copyRef.current) return;
    const visual = visualRef.current;
    const copyItems = Array.from(copyRef.current.querySelectorAll('.sell-copy'));

    const ctx = gsap.context(() => {
      gsap.timeline()
        .fromTo(visual, { autoAlpha: 0, x: 70, rotateY: -18, rotateX: 6, scale: 0.88 }, { autoAlpha: 1, x: 0, rotateY: 8, rotateX: 0, scale: 1, duration: 0.92, ease: 'back.out(1.45)' })
        .fromTo(copyItems, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.52, stagger: 0.07, ease: 'power3.out' }, '-=0.48');

      gsap.to(visual, {
        y: -12,
        rotateY: -7,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, rootRef);

    return () => ctx.revert();
  }, [active]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        '.sell-card',
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sell-grid',
            start: 'top 78%',
            once: true
          }
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef}>
      <section className="relative overflow-hidden rounded-lg border border-line bg-white p-5 shadow-soft sm:p-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div ref={copyRef}>
            <p className="sell-copy text-sm font-bold uppercase tracking-[0.2em] text-accent">Machines For Sale</p>
            <h1 className="sell-copy mt-4 text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              Buy quality used & reconditioned machinery.
            </h1>
            <p className="sell-copy mt-5 max-w-3xl text-lg leading-8 text-muted">
              EASTMAN SUPPLIERS offers a range of fully serviced second-hand sewing and finishing machines at the best prices in Sri Lanka.
            </p>

            <div className="sell-copy mt-7 grid gap-3 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-lg border border-line bg-cream p-4">
                  <Icon className="text-accent" size={22} />
                  <p className="mt-4 text-sm font-semibold leading-6">{label}</p>
                </div>
              ))}
            </div>

            <div className="sell-copy mt-8 flex flex-wrap gap-3">
              <a href="#sell-machines" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white transition hover:bg-[#df3f45]">
                View Machines <ArrowRight size={17} />
              </a>
              <a href="https://wa.me/94771204302" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-sm font-bold text-ink transition hover:border-accent hover:text-accent">
                <PhoneCall size={17} /> Contact to Buy
              </a>
            </div>
          </div>

          <div className="machine-preview-shell relative min-h-[420px] overflow-hidden rounded-lg border border-white/70 sm:min-h-[560px]">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-line bg-white/86 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted backdrop-blur">
              {String(active + 1).padStart(2, '0')} / {String(sellMachines.length).padStart(2, '0')}
            </div>
            <div className="absolute bottom-10 left-1/2 h-32 w-[68%] -translate-x-1/2 rounded-[50%] bg-ink/15 blur-2xl" />
            <div ref={visualRef} className="machine-preview-object absolute inset-0">
              <Image src={activeMachine.image} alt={activeMachine.name} fill sizes="(min-width: 1024px) 52vw, 92vw" className="object-contain p-8 sm:p-12" priority />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-line bg-white/88 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{activeMachine.category}</p>
              <h2 className="mt-1 text-2xl font-semibold">{activeMachine.name}</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="sell-machines" className="mt-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Available For Sale</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Machine Inventory</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Select a machine to spotlight it above, or scan our inventory for your factory needs.
          </p>
        </div>

        <div className="sell-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sellMachines.map((machine, index) => (
            <article
              key={machine.id}
              onMouseEnter={() => setActive(index)}
              className="sell-card group rounded-lg border border-line bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-soft"
            >
              <div className="relative flex aspect-[1.25] items-center justify-center overflow-hidden rounded-md bg-cream">
                <div className="absolute bottom-5 h-16 w-[72%] rounded-[50%] bg-ink/10 blur-xl" />
                <Image src={machine.image} alt={machine.name} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 92vw" className="object-contain p-5 transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{machine.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{machine.name}</h3>
                  </div>
                  <BadgeCheck className="shrink-0 text-accent" size={22} />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{machine.summary}</p>
                <div className="mt-4 grid gap-2">
                  {machine.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-semibold">
                      <Sparkles className="text-accent" size={15} />
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="mt-4 rounded-md bg-cream p-3 text-sm leading-6 text-muted">{machine.idealFor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-lg border border-line bg-ink p-6 text-white shadow-soft sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Sales Support</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Can't find the machine you need?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              Contact us directly with your requirements. We frequently update our inventory and can source specific machinery for your garment factory.
            </p>
          </div>
          <a href="tel:+94771204302" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white transition hover:bg-[#df3f45]">
            <PhoneCall size={18} /> Call us now
          </a>
        </div>
      </section>
    </div>
  );
}
