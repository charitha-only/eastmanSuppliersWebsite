'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { machines } from '@/data/machines';

export function FeaturedPart() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const activeMachine = machines[active];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % machines.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!imageRef.current || !copyRef.current) return;
    const imageElement = imageRef.current;
    const copyItems = Array.from(copyRef.current.querySelectorAll('.machine-copy'));

    const ctx = gsap.context(() => {
      gsap.timeline()
        .fromTo(
          imageElement,
          { x: -72, rotate: -7, rotateY: -18, rotateX: 7, scale: 0.9, autoAlpha: 0 },
          { x: 0, rotate: 0, rotateY: 9, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.86, ease: 'back.out(1.45)' }
        )
        .fromTo(copyItems, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.56, stagger: 0.07, ease: 'power3.out' }, '-=0.46');

      gsap.to(imageElement, {
        y: -12,
        rotateY: -7,
        rotateX: 2,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo('.machine-panel', { y: 44, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="featured" ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-10 xl:px-16">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Featured machines</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">Industrial sewing machines for production floors.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">
            Explore key machine options with transparent product previews and technical details matched to garment workshop needs.
          </p>
        </div>

        <div className="machine-panel grid items-center gap-10 rounded-lg border border-line bg-cream p-5 shadow-soft sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="machine-preview-shell relative min-h-[360px] overflow-hidden rounded-lg border border-white/70 sm:min-h-[520px]">
            <div className="absolute inset-x-10 bottom-12 h-24 rounded-[50%] bg-accentSoft blur-2xl" />
            <div className="machine-floor-shadow absolute bottom-10 left-1/2 h-28 w-[62%] -translate-x-1/2 rounded-[50%]" />
            <div className="absolute left-6 top-6 rounded-full border border-line bg-cream px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted">
              {String(active + 1).padStart(2, '0')} / {String(machines.length).padStart(2, '0')}
            </div>
            <div ref={imageRef} className="machine-preview-object absolute inset-0">
              <Image src={activeMachine.image} alt={activeMachine.name} fill sizes="(min-width: 1024px) 50vw, 92vw" className="image-render object-contain p-7 sm:p-10" priority={active === 0} />
            </div>
          </div>

          <div ref={copyRef} className="lg:pl-3">
            <p className="machine-copy text-sm font-bold uppercase tracking-[0.2em] text-accent">{activeMachine.eyebrow}</p>
            <h3 className="machine-copy mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">{activeMachine.name}</h3>
            <p className="machine-copy mt-5 text-lg leading-8 text-muted">{activeMachine.summary}</p>

            <div className="machine-copy mt-7 grid gap-3">
              {activeMachine.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold leading-6">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="machine-copy mt-7 grid gap-3 sm:grid-cols-3">
              {activeMachine.specs.map((spec) => (
                <div key={spec.label} className="rounded-lg border border-line bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{spec.label}</p>
                  <p className="mt-2 text-sm font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="machine-copy mt-8 flex flex-wrap gap-3">
              {machines.map((machine, index) => (
                <button
                  key={machine.id}
                  onClick={() => setActive(index)}
                  className={`inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold transition ${
                    index === active ? 'border-accent bg-accent text-white' : 'border-line bg-white text-muted hover:border-accent hover:text-accent'
                  }`}
                >
                  {machine.name}
                  {index === active ? <ArrowRight size={16} /> : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
