'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { scrollToSection } from '@/lib/lenis';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Hamenath',
    icon: FiGithub,
    label: 'Visit Hamenath’s GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
    icon: FiLinkedin,
    label: 'Connect with Hamenath on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:hamenathmurali@gmail.com',
    icon: FiMail,
    label: 'Send an email to Hamenath',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    // 1. Eyebrow fades in
    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
    )
      // 2. Main heading reveals with subtle vertical movement
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.65 },
        '-=0.3'
      )
      // 3. Professional descriptor appears
      .fromTo(
        descriptorRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.4'
      )
      // 4. Short description appears smoothly
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.4'
      )
      // 5. CTA buttons reveal with a short stagger
      .fromTo(
        '.hero-cta-btn',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        '-=0.35'
      )
      // 6. Social links appear with subtle pop
      .fromTo(
        '.hero-social-link',
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06 },
        '-=0.3'
      )
      // 7. Availability line appears
      .fromTo(
        availabilityRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.25'
      )
      // 8. Portrait fades in with subtle scale transition
      .fromTo(
        portraitRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.65'
      );
  }, { scope: containerRef });

  const scrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen min-h-svh flex flex-col justify-center items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-24 lg:pb-12 px-6 sm:px-8 bg-white overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column — Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center order-1">
            
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="mb-3 sm:mb-4">
              <span className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.16em] text-text-secondary inline-block">
                HELLO, I&apos;M HAMENATH
              </span>
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] tracking-[-0.035em] text-[#171717] leading-[1.04]"
            >
              Hamenath
            </h1>

            {/* Professional Descriptor */}
            <div ref={descriptorRef} className="mt-3 sm:mt-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#525252] tracking-tight">
                Web Developer · AI Builder
              </p>
            </div>

            {/* Short Description */}
            <p
              ref={descriptionRef}
              className="text-text-secondary text-sm sm:text-base md:text-lg leading-[1.65] max-w-xl mt-4 sm:mt-5 font-normal"
            >
              I build thoughtful websites and useful digital experiences for businesses, startups, and personal brands.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div
              ref={ctaGroupRef}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="hero-cta-btn btn-primary text-sm px-6 py-3 cursor-pointer group flex-1 sm:flex-initial"
              >
                <span>Start a Project</span>
                <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="hero-cta-btn btn-secondary text-sm px-6 py-3 cursor-pointer group flex-1 sm:flex-initial"
              >
                <span>Explore My Work</span>
                <FiArrowDown size={14} className="text-text-secondary group-hover:text-[#171717] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Social Links Row */}
            <div ref={socialsRef} className="flex items-center gap-3 mt-7 sm:mt-8">
              <span className="text-xs uppercase font-medium tracking-wider text-text-muted mr-1 hidden sm:inline-block">
                Connect:
              </span>
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={item.label}
                    title={item.name}
                    className="hero-social-link w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-[#171717] hover:border-[#171717] hover:bg-white transition-all shadow-2xs hover:-translate-y-0.5"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            {/* Subtle Availability Status Badge */}
            <div
              ref={availabilityRef}
              className="flex items-center gap-2.5 mt-5 sm:mt-6 text-xs text-text-secondary font-normal sm:font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for select freelance projects</span>
            </div>

          </div>

          {/* Right Column — Professional Portrait (Open, no card, no shadows) */}
          <div
            ref={portraitRef}
            className="lg:col-span-5 w-full flex items-center lg:items-center justify-center lg:justify-end order-2 mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-80 sm:max-w-100 md:max-w-110 lg:max-w-120 xl:max-w-130 flex justify-center lg:justify-end">
              <Image
                src="/images/profile.jpeg"
                alt="Hamenath - Web Developer & AI Builder"
                width={875}
                height={1024}
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 520px"
                className="w-full h-auto object-contain select-none pointer-events-none filter contrast-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
