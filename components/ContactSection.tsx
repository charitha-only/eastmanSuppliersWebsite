import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-10 xl:px-16">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Contact Us</h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Visit Our Store
          </p>
          <p className="mt-4 text-lg text-muted">
            Find the right spare parts for your machinery. Visit us or get in touch with our team.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center gap-8 rounded-2xl bg-cream p-8 sm:p-12">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Our Location</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  397/8 Bogahawila Road,<br />
                  Kottawa, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Phone</h3>
                <p className="mt-2 text-muted">
                  <a href="tel:+94771204302" className="transition hover:text-accent">+94 77 120 4302</a>
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Email</h3>
                <p className="mt-2 text-muted flex flex-col gap-1">
                  <a href="mailto:operation@eastmansuppliers.com" className="transition hover:text-accent">operation@eastmansuppliers.com</a>
                  <a href="mailto:eastman@sltnet.lk" className="transition hover:text-accent">eastman@sltnet.lk</a>
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] min-h-[400px] w-full overflow-hidden rounded-2xl border border-line shadow-sm lg:h-auto">
            <iframe
              src="https://maps.google.com/maps?q=397/8%20bogahawila%20road%20kottawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
