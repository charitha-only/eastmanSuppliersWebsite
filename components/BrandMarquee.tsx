import Image from 'next/image';

export function BrandMarquee() {
  // We expect these image files to be inside the "public/brands" folder.
  const brands = [
    { name: "JUKI", file: "juki.png" },
    { name: "BROTHER", file: "brother.png" },
    { name: "JACK", file: "jack.png" },
    { name: "SIRUBA", file: "siruba.png" },
    { name: "PEGASUS", file: "pegasus.png" },
    { name: "KANSAI", file: "kansai.png" },
    { name: "YAMATO", file: "yamato.png" },
  ];
  
  return (
    <section className="border-t border-line bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-12">Trusted Brands We Supply</p>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="group flex aspect-[3/2] items-center justify-center rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="relative h-full w-full">
                <Image 
                  src={`/brands/${brand.file}`} 
                  alt={`${brand.name} logo`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 15vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
