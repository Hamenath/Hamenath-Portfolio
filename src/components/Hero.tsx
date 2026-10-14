'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Very subtle ambient gradient grid - strictly restrained */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)]" 
      />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="subtle-badge mb-8 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300">Available for select projects & consulting</span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] max-w-3xl"
        >
          Modern Websites.
          <span className="block text-slate-400 font-normal mt-1 sm:mt-2">
            Smarter Digital Experiences.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mt-6 leading-relaxed font-normal"
        >
          I design and build modern websites and AI-powered digital experiences for businesses, startups and personal brands.
        </motion.p>

        {/* Conversion Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary text-sm px-6 py-3.5"
          >
            <span>Start a Project</span>
            <FiArrowUpRight size={15} />
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="btn-secondary text-sm px-6 py-3.5"
          >
            <span>View My Work</span>
            <FiArrowDown size={14} className="text-slate-400" />
          </button>
        </motion.div>

        {/* Supporting Micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="text-xs text-slate-500 font-medium tracking-wide mt-6 flex items-center gap-2"
        >
          <span>Based in Tamil Nadu</span>
          <span className="text-slate-700">·</span>
          <span>Working locally and remotely worldwide</span>
        </motion.p>
      </div>
    </section>
  );
}
