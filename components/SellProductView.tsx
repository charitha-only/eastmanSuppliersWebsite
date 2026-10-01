'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { PhoneCall, CheckCircle2, ChevronLeft, ChevronRight, ZoomIn, X, Sparkles } from 'lucide-react';
import { sellMachines } from '@/data/sell-machines';

export function SellProductView({ machineId }: { machineId: string }) {
  const machine = sellMachines.find((m) => m.id === machineId);
  const [activeImg, setActiveImg] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  if (!machine) return <p className="py-20 text-center text-muted">Machine not found.</p>;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const prev = () => setActiveImg((i) => (i - 1 + machine.images.length) % machine.images.length);
  const next = () => setActiveImg((i) => (i + 1) % machine.images.length);

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <a href="/" className="hover:text-accent transition">Home</a>
        <span>/</span>
        <a href="/sell" className="hover:text-accent transition">Sell</a>
        <span>/</span>
        <span className="text-ink font-medium">{machine.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_0.9fr]">
        {/* ---- IMAGE GALLERY ---- */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {machine.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                  activeImg === i ? 'border-accent shadow-md' : 'border-line hover:border-accent/50'
                }`}
              >
                <Image src={img} alt={`${machine.name} view ${i + 1}`} fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>

          {/* Main Image with Zoom */}
          <div className="flex-1 flex flex-col gap-3">
            <div
              ref={imgRef}
              className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-white cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={machine.images[activeImg]}
                alt={machine.name}
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className={`object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
                priority
              />
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm opacity-0 group-hover:opacity-100 transition">
                <ZoomIn size={18} />
              </div>
              {/* Prev/Next arrows */}
              {machine.images.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm opacity-0 group-hover:opacity-100 transition hover:bg-white">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm opacity-0 group-hover:opacity-100 transition hover:bg-white">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                Hover to zoom • Click to expand
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2">
              {machine.images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`h-2 rounded-full transition-all ${activeImg === i ? 'w-6 bg-accent' : 'w-2 bg-line hover:bg-accent/50'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ---- PRODUCT DETAILS ---- */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent uppercase tracking-wider">{machine.brand}</span>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted uppercase tracking-wider border border-line">{machine.category}</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{machine.name}</h1>
            <p className="mt-4 text-base leading-7 text-muted">{machine.summary}</p>
          </div>

          {/* Specs Table */}
          <div className="rounded-2xl border border-line bg-white overflow-hidden">
            <p className="px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-accent bg-cream border-b border-line">Specifications</p>
            <div className="divide-y divide-line">
              {machine.specs.map((spec) => (
                <div key={spec.label} className="flex items-center px-5 py-3">
                  <span className="w-40 text-sm font-semibold text-muted">{spec.label}</span>
                  <span className="text-sm font-bold text-ink">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ink">Key Features</p>
            <div className="grid gap-2">
              {machine.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm leading-6 text-ink">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="rounded-xl bg-cream border border-line p-4 flex gap-3">
            <Sparkles size={18} className="shrink-0 text-accent mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Ideal For</p>
              <p className="text-sm leading-6 text-muted">{machine.idealFor}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/94771204302?text=Hi, I'm interested in the ${encodeURIComponent(machine.name)}. Can you give me more details?`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white shadow-md transition hover:bg-[#20b858]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.558 4.114 1.531 5.836L.057 23.25c-.073.27.018.557.235.738.143.12.32.18.5.18.083 0 .166-.013.247-.039l5.634-1.795A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.917a9.886 9.886 0 01-5.12-1.424l-.367-.218-3.344 1.065 1.019-3.226-.237-.375A9.863 9.863 0 012.083 12C2.083 6.506 6.506 2.083 12 2.083S21.917 6.506 21.917 12 17.494 21.917 12 21.917z"/></svg>
              WhatsApp to Inquire
            </a>
            <a
              href="tel:+94771204302"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-white text-sm font-bold text-ink transition hover:border-accent hover:text-accent"
            >
              <PhoneCall size={18} />
              Call +94 77 120 4302
            </a>
          </div>
        </div>
      </div>

      {/* ---- LIGHTBOX ---- */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={() => setLightboxOpen(false)}>
          <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
            <X size={22} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
            <ChevronLeft size={26} />
          </button>
          <div className="relative h-[80vh] w-[90vw] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={machine.images[activeImg]} alt={machine.name} fill className="object-contain" sizes="90vw" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition">
            <ChevronRight size={26} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60">
            {activeImg + 1} / {machine.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
