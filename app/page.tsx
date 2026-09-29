import { AboutSection } from '@/components/AboutSection';
import { FeaturedPart } from '@/components/FeaturedPart';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactSection } from '@/components/ContactSection';
import { BrandMarquee } from '@/components/BrandMarquee';
import { FeaturesSection } from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <BrandMarquee />
      <FeaturesSection />
      <FeaturedPart />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
