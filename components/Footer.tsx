import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream pt-16 sm:pt-24">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-10 xl:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-16">
          
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold tracking-widest text-ink">EASTMAN SUPPLIERS</p>
            <p className="text-sm leading-relaxed text-muted">
              Sri Lanka's premier supplier of industrial sewing machine spare parts, cutting room equipment, and garment machinery accessories since November 19, 1999.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:text-accent hover:-translate-y-1"><Facebook size={18} /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:text-accent hover:-translate-y-1"><Instagram size={18} /></a>
              <a href="https://wa.me/94771204302" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366] shadow-sm transition hover:-translate-y-1"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:pl-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm text-muted">
              <a href="/products" className="transition hover:text-accent">All Products</a>
              <a href="/rent" className="transition hover:text-accent">Rent Equipment</a>
              <a href="/#featured" className="transition hover:text-accent">Featured Parts</a>
              <a href="/#about" className="transition hover:text-accent">About Us</a>
              <a href="/#contact" className="transition hover:text-accent">Contact Location</a>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">Categories</h3>
            <nav className="flex flex-col gap-3 text-sm text-muted">
              <a href="/products" className="transition hover:text-accent">Sewing Machines</a>
              <a href="/products" className="transition hover:text-accent">Cutting Equipment</a>
              <a href="/products" className="transition hover:text-accent">Genuine Spare Parts</a>
              <a href="/products" className="transition hover:text-accent">Needles & Accessories</a>
              <a href="/products" className="transition hover:text-accent">Motors & Electronics</a>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-accent" />
                <span className="leading-relaxed">397/8 Bogahawila Road,<br />Kottawa, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <a href="tel:+94771204302" className="transition hover:text-accent">+94 77 120 4302</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <a href="mailto:operation@eastmansuppliers.com" className="transition hover:text-accent truncate">operation@eastmansuppliers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Eastman Suppliers. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Developed by Charitha</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
