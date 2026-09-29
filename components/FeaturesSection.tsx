import { ShieldCheck, Truck, Clock, Wrench } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Genuine Parts",
      description: "We guarantee 100% authentic spare parts for all major industrial sewing machine brands."
    },
    {
      icon: <Truck size={32} className="text-accent" />,
      title: "Island-wide Delivery",
      description: "Fast and reliable delivery to your garment factory or workshop anywhere in Sri Lanka."
    },
    {
      icon: <Wrench size={32} className="text-accent" />,
      title: "Expert Support",
      description: "Our technical team provides expert advice to help you find the exact part you need."
    },
    {
      icon: <Clock size={32} className="text-accent" />,
      title: "24/7 Availability",
      description: "Place your inquiries anytime. We ensure quick response times to minimize your downtime."
    }
  ];

  return (
    <section className="border-t border-line bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Why Choose Us</h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The Preferred Choice for Garment Factories
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center rounded-2xl bg-white p-8 shadow-sm border border-line transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
