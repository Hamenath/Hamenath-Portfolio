'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(headlineRef.current, {
      y: 28,
      opacity: 0,
      duration: 0.85,
    })
      .from(
        copyRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.75,
        },
        '-=0.55'
      )
      .from(
        ctaRef.current,
        {
          y: 16,
          opacity: 0,
          duration: 0.65,
        },
        '-=0.45'
      )
      .from(
        labelRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        '-=0.3'
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
      className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center pt-32 pb-20 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#171717] leading-[1.08] max-w-3xl"
        >
          Thoughtful Websites.
          <span className="block text-[#737373] font-normal mt-1 sm:mt-2">
            Built for Your Next Step.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={copyRef}
          className="text-[#737373] text-base sm:text-lg md:text-xl max-w-xl mt-6 leading-relaxed font-normal"
        >
          I design and build modern websites for businesses, startups, and personal brands.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary text-sm px-6 py-3"
          >
            <span>Start a Project</span>
            <FiArrowUpRight size={14} />
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="btn-secondary text-sm px-6 py-3"
          >
            <span>View My Work</span>
            <FiArrowDown size={14} className="text-[#737373]" />
          </button>
        </div>

        {/* Location Label */}
        <p
          ref={labelRef}
          className="text-xs text-[#a3a3a3] font-medium tracking-wide mt-6"
        >
          Based in Tamil Nadu · Available for remote projects
        </p>
      </div>
    </section>
  );
}
