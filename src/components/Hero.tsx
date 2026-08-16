'use client';

import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import AnimatedGradient from './ui/animated-gradient';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Animated Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[5rem_5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-10" />

      {/* Animated Gradient Background Component */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-90 z-0">
        <AnimatedGradient
          config={{
            preset: "custom",
            color1: "#020203",
            color2: "#e4184f",
            color3: "#020203",
            rotation: -50,
            proportion: 30,
            scale: 0.3,
            speed: 15,
            distortion: 6,
            swirl: 50,
            swirlIterations: 8,
            softness: 85,
          }}
        />
      </div>

      {/* Main Content (Clean, calm, premium layout - perfectly centered) */}
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center gap-6 z-10">
        
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-1.5 rounded-full apple-badge-crystal text-xs font-semibold text-slate-300 border border-white/8 bg-white/3 select-none"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
          Available for full stack & AI roles
        </motion.div>

        {/* Headline with Gothic Font Class */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-white leading-[1.05] font-heading mt-2"
        >
          <span className="block montenegrin-gothic-one-regular text-transparent bg-clip-text bg-linear-to-b from-white via-slate-100 to-slate-400">
            Hamenath B
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-blue-400 font-heading"
        >
          Full Stack Developer & AI Builder
        </motion.h2>

        {/* Short bio/description text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed font-heading mt-2"
        >
          Hi, I&apos;m a developer dedicated to crafting modern, premium web architectures and intelligent AI integrations. From concept to production, I build fluid digital products with a focus on speed, design, and usability.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="portfolio-pill-btn px-8 py-3.5 text-sm"
          >
            Contact Me
          </button>
          <a
            href="/HamenathResumefinal.pdf"
            download="Hamenath_B_Resume.pdf"
            className="portfolio-pill-btn px-8 py-3.5 text-sm"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest font-heading">Scroll Down</span>
        <HiArrowDown size={14} />
      </motion.div>
    </section>
  );
}
