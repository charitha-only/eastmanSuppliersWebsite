'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, HandCoins, Truck, Wrench, PhoneCall } from 'lucide-react';
import { sellMachines } from '@/data/sell-machines';

const benefits = [
  { icon: Wrench, label: 'Fully Serviced & Checked' },
  { icon: HandCoins, label: 'Best Second-Hand Prices' },
  { icon: Truck, label: 'Island-wide Delivery' }
];

export function SellShowcase() {
  const featured = sellMachines[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Machines For Sale</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Buy quality used &amp; reconditioned machinery.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              EASTMAN SUPPLIERS offers fully serviced second-hand sewing and finishing machines at the best prices in Sri Lanka.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl border border-line bg-cream p-4">
                  <Icon className="text-accent" size={22} />
                  <p className="mt-3 text-sm font-semibold leading-6">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#sell-machines" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-bold text-white transition hover:bg-[#df3f45]">
                View Machines <ArrowRight size={17} />
              </a>
              <a href="https://wa.me/94771204302" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-sm font-bold text-ink transition hover:border-accent hover:text-accent">
                <PhoneCall size={17} /> Contact to Buy
              </a>
            </div>
          </div>

          {/* Featured machine preview */}
          {featured && (
            <Link href={`/sell/${featured.id}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-line bg-cream">
              <Image src={featured.images[0]} alt={featured.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 90vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{featured.brand} · {featured.category}</p>
                <p className="mt-1 text-xl font-semibold">{featured.name}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white/80">View details <ArrowRight size={15} /></p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Machine Grid */}
      <section id="sell-machines" className="mt-14">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Available For Sale</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Machine Inventory</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">Click any machine to view full specs, photos, and contact options.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sellMachines.map((machine) => (
            <Link
              key={machine.id}
              href={`/sell/${machine.id}`}
              className="group flex flex-col rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                <Image src={machine.images[0]} alt={machine.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 92vw" />
                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-accent backdrop-blur-sm border border-line">
                  {machine.brand}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">{machine.category}</p>
                    <h3 className="mt-1 text-lg font-semibold text-ink">{machine.name}</h3>
                  </div>
                  <BadgeCheck className="mt-1 shrink-0 text-accent" size={22} />
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{machine.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {machine.specs.slice(0, 2).map((s) => (
                      <span key={s.label} className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink border border-line">{s.value}</span>
                    ))}
                  </div>
                  <span className="ml-2 flex items-center gap-1 text-xs font-bold text-accent group-hover:underline">View <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-14 rounded-2xl border border-line bg-ink p-6 text-white sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Sales Support</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Can't find the machine you need?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Contact us directly with your requirements. We frequently update our inventory and can source specific machinery for your garment factory.
            </p>
          </div>
          <a href="tel:+94771204302" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-bold text-white transition hover:bg-[#df3f45] whitespace-nowrap">
            <PhoneCall size={18} /> Call us now
          </a>
        </div>
      </section>
    </div>
  );
}
