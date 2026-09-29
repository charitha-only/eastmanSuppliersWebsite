import { AboutSection } from '@/components/AboutSection';
import { FeaturedPart } from '@/components/FeaturedPart';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <FeaturedPart />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
