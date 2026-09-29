'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, PackageCheck, Wrench } from 'lucide-react';

const values = [
  { icon: BadgeCheck, label: 'Verified industrial brands' },
  { icon: PackageCheck, label: 'Packed for workshop handling' },
  { icon: Wrench, label: 'Support for service teams' }
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">About us</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">Spare parts supply for serious sewing and cutting operations.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            EASTMAN SUPPLIERS brings together reliable cutting equipment, needles, knives, and workshop essentials in a clean ordering experience built for repeat buyers.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-lg border border-line bg-cream p-4">
                <Icon className="text-accent" size={22} />
                <p className="mt-4 text-sm font-semibold leading-6">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-lg border border-line bg-cream shadow-soft">
          <video
            className="aspect-[4/3] h-full min-h-[420px] w-full object-cover"
            src="/media/about-workshop.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Workshop video preview"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
