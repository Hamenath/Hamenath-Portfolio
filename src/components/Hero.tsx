'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Eyebrow fades in
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      // 2. Headline reveals with subtle upward movement
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 },
        '-=0.3'
      )
      // 3. Supporting text fades in
      .fromTo(
        copyRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.4'
      )
      // 4. CTA buttons appear with a small stagger
      .fromTo(
        '.hero-cta-btn',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        '-=0.35'
      )
      // 5. Availability text appears subtly
      .fromTo(
        availabilityRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.25'
      );
  }, { scope: containerRef });

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
      ref={containerRef}
      className="relative min-h-[88vh] sm:min-h-[90vh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div
          ref={eyebrowRef}
          className="mb-4 sm:mb-5"
        >
          <span className="text-[11px] sm:text-xs uppercase font-medium tracking-[0.16em] text-[#737373]">
            INDEPENDENT DEVELOPER · TAMIL NADU, INDIA
          </span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-semibold tracking-[-0.035em] text-[#171717] leading-[1.1] sm:leading-[1.06] max-w-3xl"
        >
          <span className="block text-[#171717]">
            I turn ideas into
          </span>
          <span className="block text-[#525252] mt-1 sm:mt-1.5 font-medium">
            thoughtful digital experiences.
          </span>
        </h1>

        {/* Supporting Description */}
        <p
          ref={copyRef}
          className="text-[#737373] text-base sm:text-lg md:text-xl max-w-xl mx-auto mt-6 sm:mt-7 leading-relaxed font-normal"
        >
          I build modern websites and AI-powered experiences for businesses, startups, and personal brands.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div
          ref={ctaGroupRef}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="hero-cta-btn btn-primary text-sm px-6 py-3 cursor-pointer"
          >
            <span>Start a Project</span>
            <FiArrowUpRight size={14} />
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="hero-cta-btn btn-secondary text-sm px-6 py-3 cursor-pointer"
          >
            <span>Explore My Work</span>
            <FiArrowDown size={14} className="text-[#737373]" />
          </button>
        </div>

        {/* Small Availability Line with Live Pulse Indicator */}
        <div
          ref={availabilityRef}
          className="flex items-center justify-center gap-2 mt-7 sm:mt-8 text-xs text-[#737373] font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for select freelance projects</span>
        </div>

      </div>
    </section>
  );
}
