import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen">
      {/* Hero & Credibility */}
      <Hero />
      <TrustBar />

      {/* Services: What I Build for Businesses & Startups */}
      <Services />

      {/* Selected Work & Deep Case Studies */}
      <Projects />

      {/* Professional About & Verified Background */}
      <About />

      {/* Structured 5-Step Delivery Process */}
      <Process />

      {/* Transparent Pricing & Engagement Models */}
      <Pricing />

      {/* High-Converting Project Enquiry Form & Conversion Hub */}
      <Contact />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
