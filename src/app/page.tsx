import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CurrentlyBuilding from '@/components/CurrentlyBuilding';
import TechMarquee from '@/components/TechMarquee';
import Achievements from '@/components/Achievements';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CurrentlyBuilding />
      <TechMarquee />
      <Achievements />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
