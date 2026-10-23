import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-tertiary selection:text-foreground">
      {/* Section B — Hero */}
      <Hero />

      {/* Section C — Selected Work */}
      <Projects />

      {/* Section D — Services */}
      <Services />

      {/* Section E — About */}
      <About />

      {/* Section F — Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
