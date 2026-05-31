'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const yTranslate = isMobile ? 0 : y;

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center bg-white pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center pt-8 pb-20 md:py-20">
        
        {/* Hero Left Content */}
        <motion.div 
          style={{ y: yTranslate }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 md:col-span-7 flex flex-col items-start gap-6 text-left order-2 md:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-100/80 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-950"></span>
            </span>
            <span className="text-xs font-semibold text-neutral-800 tracking-wide font-heading">
              Available for full stack & AI roles
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] font-heading">
            Hamenath B
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-500 font-heading">
            Full Stack Developer &amp; AI Builder
          </h2>

          {/* Intro Text */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
            Hi, I&apos;m a developer dedicated to crafting modern, premium web architectures and intelligent AI integrations. From concept to production, I build fluid digital products with a focus on speed, design, and usability.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-neutral-950 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow"
            >
              Contact Me
            </button>
            <a
              href="/HamenathResumefinal.pdf"
              download="Hamenath_B_Resume.pdf"
              className="px-6 py-3 bg-white text-neutral-800 text-sm font-semibold rounded-full border border-neutral-200 hover:bg-neutral-50 transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Hero Right: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="col-span-1 md:col-span-5 flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-[240px] h-[240px] min-[360px]:w-72 min-[360px]:h-72 sm:w-[380px] sm:h-[380px] overflow-hidden group">
            <Image
              src="/images/profile.jpeg"
              alt="Hamenath B - Full Stack Developer & AI Builder"
              fill
              priority
              className="object-cover object-center transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 240px, 380px"
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors pointer-events-none"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest font-heading">Scroll</span>
        <HiArrowDown size={14} />
      </motion.div>
    </section>
  );
}
