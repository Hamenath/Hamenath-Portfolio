'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Sparkles, Terminal } from 'lucide-react';
import { scrollToSection } from '@/lib/lenis';
import {
  Squiggle,
  GeometricStar,
  GeometricCross,
  GeometricTriangle,
  GeometricDonut,
} from '@/components/ui/GeometricDecoration';

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
  const headingGroupRef = useRef<HTMLDivElement>(null);
  const descriptorRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const yellowCircleRef = useRef<HTMLDivElement>(null);
  const confettiGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: 'back.out(1.6)' },
      });

      // 0. Yellow background circle expands with bounce
      tl.fromTo(
        yellowCircleRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' }
      )
        // 1. Floating confetti shapes pop in
        .fromTo(
          '.hero-confetti',
          { scale: 0, opacity: 0, rotate: -25 },
          { scale: 1, opacity: 1, rotate: 0, duration: 0.6, stagger: 0.08 },
          '-=0.5'
        )
        // 2. Eyebrow sticker badge pops in
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          '-=0.4'
        )
        // 3. Main heading & squiggle reveal
        .fromTo(
          headingGroupRef.current,
          { opacity: 0, y: 24, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65 },
          '-=0.35'
        )
        // 4. Role tag stickers pop in with stagger
        .fromTo(
          '.hero-role-tag',
          { opacity: 0, y: 14, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08 },
          '-=0.3'
        )
        // 5. Short description appears
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        // 6. Tactile CTA buttons bounce in
        .fromTo(
          '.hero-cta-btn',
          { opacity: 0, y: 16, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          '-=0.35'
        )
        // 7. Social sticker buttons pop in
        .fromTo(
          '.hero-social-link',
          { opacity: 0, y: 12, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06 },
          '-=0.3'
        )
        // 8. Availability pill badge
        .fromTo(
          availabilityRef.current,
          { opacity: 0, y: 10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45 },
          '-=0.25'
        )
        // 9. Right column portrait composition pops in
        .fromTo(
          portraitRef.current,
          { opacity: 0, y: 30, scale: 0.92, rotate: -2 },
          { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.75, ease: 'back.out(1.4)' },
          '-=0.7'
        )
        // 10. Overlapping portrait stickers pop out
        .fromTo(
          '.hero-portrait-badge',
          { opacity: 0, scale: 0, rotate: 0 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12 },
          '-=0.3'
        );
    },
    { scope: containerRef }
  );

  const scrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen min-h-svh flex flex-col justify-center items-center pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-24 lg:pb-14 px-6 sm:px-8 bg-background overflow-hidden"
    >
      {/* Decorative Background Confetti Shapes */}
      <div
        ref={confettiGroupRef}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-left cross */}
        <div className="hero-confetti absolute top-20 left-8 sm:left-16 animate-float hidden sm:block">
          <GeometricCross color="#8B5CF6" size={24} />
        </div>

        {/* Top-center star */}
        <div className="hero-confetti absolute top-14 left-1/2 -translate-x-1/2 animate-float-delayed hidden md:block">
          <GeometricStar color="#FBBF24" size={32} />
        </div>

        {/* Top-right triangle */}
        <div className="hero-confetti absolute top-24 right-12 sm:right-24 animate-float hidden sm:block">
          <GeometricTriangle color="#F472B6" size={28} rotation={25} />
        </div>

        {/* Bottom-left violet donut */}
        <div className="hero-confetti absolute bottom-16 left-10 animate-float-delayed hidden lg:block">
          <GeometricDonut color="#8B5CF6" size={30} />
        </div>

        {/* Bottom-right emerald triangle */}
        <div className="hero-confetti absolute bottom-20 right-16 animate-float hidden md:block">
          <GeometricTriangle color="#34D399" size={26} rotation={-15} />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column — Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center order-1 relative">
            
            {/* Massive Playful Yellow Circle (Behind the text) */}
            <div
              ref={yellowCircleRef}
              className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-tertiary/25 border-2 border-foreground/15 -z-10 pointer-events-none select-none"
              aria-hidden="true"
            />

            {/* Eyebrow Sticker Badge */}
            <div ref={eyebrowRef} className="mb-4">
              <div className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-foreground px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E293B] hover:-rotate-1 transition-transform">
                <Sparkles size={14} className="text-secondary stroke-[2.5]" />
                <span className="text-xs uppercase font-heading font-extrabold tracking-wider">
                  HELLO, I&apos;M HAMENATH
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-quaternary border border-foreground ml-0.5" />
              </div>
            </div>

            {/* Main Heading Group */}
            <div ref={headingGroupRef} className="relative">
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] tracking-tight text-foreground leading-[1.02]">
                Hamenath
              </h1>
              {/* Memphis Squiggle Accent */}
              <div className="mt-2.5 sm:mt-3 -ml-1">
                <Squiggle color="#F472B6" width={140} height={22} className="w-28 sm:w-36 h-auto" />
              </div>
            </div>

            {/* Professional Role Tags (Confetti sticker pills) */}
            <div ref={descriptorRef} className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <span className="hero-role-tag inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-heading font-bold text-xs sm:text-sm border-2 border-foreground shadow-[3px_3px_0px_#1E293B] hover:-translate-y-0.5 hover:rotate-1 transition-all">
                ✦ Web Developer
              </span>
              <span className="hero-role-tag inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary text-foreground font-heading font-bold text-xs sm:text-sm border-2 border-foreground shadow-[3px_3px_0px_#1E293B] hover:-translate-y-0.5 hover:-rotate-1 transition-all">
                ★ AI Builder
              </span>
              <span className="hero-role-tag inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground font-heading font-bold text-xs sm:text-sm border-2 border-foreground shadow-[3px_3px_0px_#1E293B] hover:-translate-y-0.5 hover:-rotate-1 transition-all">
                ● Creative Engineer
              </span>
            </div>

            {/* Short Description */}
            <p
              ref={descriptionRef}
              className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mt-8 sm:mt-9 md:mt-10 font-medium"
            >
              I build thoughtful websites and useful digital experiences for businesses, startups, and personal brands.
            </p>

            {/* Tactile Playful CTA Buttons */}
            <div
              ref={ctaGroupRef}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto"
            >
              {/* Primary Candy Button */}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="hero-cta-btn btn-candy text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 group flex-1 sm:flex-initial"
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white text-foreground flex items-center justify-center border border-foreground/30 shadow-[1px_1px_0px_#1E293B] group-hover:rotate-45 transition-transform">
                  <FiArrowUpRight size={14} className="stroke-[2.5]" />
                </span>
              </button>

              {/* Secondary Button with Yellow Fill on Hover */}
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="hero-cta-btn btn-secondary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 group flex-1 sm:flex-initial"
              >
                <span>Explore My Work</span>
                <span className="w-6 h-6 rounded-full bg-foreground text-white group-hover:bg-white group-hover:text-foreground flex items-center justify-center border border-foreground transition-colors group-hover:translate-y-0.5">
                  <FiArrowDown size={13} className="stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Social Links Row (Chunky Sticker Chips) */}
            <div ref={socialsRef} className="flex items-center gap-3 mt-7 sm:mt-8">
              <span className="text-xs uppercase font-heading font-bold tracking-wider text-muted-foreground mr-1 hidden sm:inline-block">
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
                    className="hero-social-link w-11 h-11 rounded-xl bg-white border-2 border-foreground shadow-[3px_3px_0px_#1E293B] flex items-center justify-center text-foreground hover:bg-tertiary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#1E293B] hover:rotate-3 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#1E293B] transition-all"
                  >
                    <Icon size={18} className="stroke-[2.5]" />
                  </a>
                );
              })}
            </div>

            {/* Tactile Availability Status Badge */}
            <div
              ref={availabilityRef}
              className="mt-6 sm:mt-7"
            >
              <div className="inline-flex items-center gap-2.5 bg-white border-2 border-foreground rounded-full px-4 py-2 shadow-[3px_3px_0px_#1E293B] text-xs sm:text-sm font-heading font-bold text-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quaternary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-quaternary border border-foreground"></span>
                </span>
                <span>Available for select freelance projects</span>
              </div>
            </div>

          </div>

          {/* Right Column — Geometric Masked Portrait Composition */}
          <div
            ref={portraitRef}
            className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-80 sm:max-w-95 md:max-w-105 lg:max-w-112.5">
              
              {/* Memphis Dot Grid Backdrop */}
              <div
                className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-64 h-64 sm:w-80 sm:h-80 bg-dot-grid border-2 border-foreground rounded-3xl bg-white/60 shadow-[6px_6px_0px_#1E293B] -rotate-3 -z-10"
                aria-hidden="true"
              />

              {/* Offset Pink Backing Plate */}
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 w-full h-full bg-secondary border-2 border-foreground rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] shadow-[6px_6px_0px_#1E293B] rotate-2 -z-10"
                aria-hidden="true"
              />

              {/* Blob Masked Portrait Card */}
              <div className="relative rounded-[2.5rem] rounded-tr-[5rem] rounded-bl-[5rem] border-2 border-foreground bg-white overflow-hidden shadow-[8px_8px_0px_#1E293B] transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Hamenath - Web Developer & AI Builder"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 460px"
                  className="w-full h-auto object-cover object-center scale-115 sm:scale-120 origin-[50%_35%] select-none pointer-events-none filter contrast-[1.03]"
                />
              </div>

              {/* Overlapping Playful Sticker 1: Top-Right Craft Badge */}
              <div className="hero-portrait-badge absolute -top-4 -right-3 sm:-top-5 sm:-right-4 bg-tertiary border-2 border-foreground rounded-full px-4 py-1.5 shadow-[4px_4px_0px_#1E293B] text-xs font-heading font-black text-foreground rotate-6 flex items-center gap-1.5 hover:rotate-12 transition-transform cursor-default select-none">
                <Sparkles size={13} className="text-foreground stroke-[2.5]" />
                <span>100% CRAFTED</span>
              </div>

              {/* Overlapping Playful Sticker 2: Bottom-Left Tech Badge */}
              <div className="hero-portrait-badge absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 bg-quaternary border-2 border-foreground rounded-2xl px-3.5 py-2 shadow-[4px_4px_0px_#1E293B] -rotate-6 flex items-center gap-2 hover:rotate-0 transition-transform cursor-default select-none">
                <div className="w-6 h-6 rounded-full bg-white border border-foreground flex items-center justify-center">
                  <Terminal size={13} className="text-foreground stroke-[2.5]" />
                </div>
                <span className="text-xs font-heading font-black text-foreground">
                  NEXT.JS & AI
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
