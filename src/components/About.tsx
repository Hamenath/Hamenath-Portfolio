'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiCheck, FiAward, FiBriefcase, FiCode, FiMapPin } from 'react-icons/fi';
import { Sparkles, Heart } from 'lucide-react';
import { Squiggle } from '@/components/ui/GeometricDecoration';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: 'Next.js 15', color: 'bg-accent text-white' },
  { name: 'React 19', color: 'bg-tertiary text-foreground' },
  { name: 'TypeScript', color: 'bg-secondary text-foreground' },
  { name: 'AI Integrations', color: 'bg-quaternary text-foreground' },
  { name: 'GSAP Motion', color: 'bg-white text-foreground' },
  { name: 'Tailwind CSS', color: 'bg-accent text-white' },
  { name: 'UI/UX Design', color: 'bg-tertiary text-foreground' },
  { name: 'Creative Code', color: 'bg-secondary text-foreground' },
  { name: 'Full-Stack Apps', color: 'bg-quaternary text-foreground' },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // Left column pop in
      tl.fromTo(
        leftColRef.current,
        { scale: 0.92, y: 40, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.75, ease: 'back.out(1.4)' }
      )
        // Right column pop in
        .fromTo(
          rightColRef.current,
          { scale: 0.94, y: 40, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.75, ease: 'back.out(1.4)' },
          '-=0.5'
        )
        // Highlights stagger in
        .fromTo(
          '.about-highlight-card',
          { scale: 0.88, y: 20, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.5)' },
          '-=0.3'
        )
        // Skills pill tags pop in
        .fromTo(
          '.about-skill-pill',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'back.out(1.8)' },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding bg-background border-t-2 border-foreground relative overflow-hidden"
    >
      {/* Background Memphis Dots */}
      <div
        className="absolute top-1/2 -left-10 w-72 h-72 bg-dot-grid-subtle opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Playful Portrait & Speech Bubble */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-start">
            
            {/* Header Badge */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-foreground px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E293B] mb-3 select-none">
                <Sparkles size={13} className="text-secondary stroke-[2.5]" />
                <span className="text-xs uppercase font-heading font-extrabold tracking-wider">
                  Get To Know Me
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
                A Little About Me
              </h2>
              <div className="mt-2.5 -ml-1">
                <Squiggle color="#F472B6" width={130} height={20} className="w-28 sm:w-32 h-auto" />
              </div>
            </div>

            {/* Playful Asymmetric Portrait Frame with Backplates & Stickers */}
            <div className="relative w-full max-w-sm mt-3">
              {/* Dot Grid Backdrop */}
              <div
                className="absolute -top-4 -right-4 w-full h-full bg-dot-grid border-2 border-foreground rounded-4xl bg-white/60 shadow-[6px_6px_0px_#1E293B] -rotate-3 -z-10"
                aria-hidden="true"
              />

              {/* Offset Yellow Backing Plate */}
              <div
                className="absolute -bottom-4 -left-4 w-full h-full bg-tertiary border-2 border-foreground rounded-4xl rounded-tr-[4rem] rounded-bl-[4rem] shadow-[6px_6px_0px_#1E293B] rotate-2 -z-10"
                aria-hidden="true"
              />

              {/* Portrait Image Container */}
              <div className="relative rounded-4xl rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden bg-white border-2 border-foreground shadow-[8px_8px_0px_#1E293B]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Hamenath B"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-500 select-none"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>

              {/* Overlapping Floating Sticker 1: SIH Award */}
              <div className="absolute -top-3.5 -left-3.5 bg-tertiary border-2 border-foreground rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#1E293B] text-xs font-heading font-black text-foreground -rotate-6 flex items-center gap-1.5 hover:rotate-0 transition-transform select-none">
                <span>🏆 SIH 2025 WINNER</span>
              </div>

              {/* Overlapping Floating Sticker 2: Chai & Code */}
              <div className="absolute -bottom-3 -right-3 bg-secondary border-2 border-foreground rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#1E293B] text-xs font-heading font-black text-foreground rotate-6 flex items-center gap-1.5 hover:rotate-0 transition-transform select-none">
                <span>☕ CHAI &amp; CODE</span>
              </div>
            </div>

            {/* Tactile Speech Bubble Quote */}
            <div className="w-full max-w-sm rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none border-2 border-foreground bg-white p-5 shadow-[4px_4px_0px_#1E293B] mt-2 relative">
              <div className="flex items-center gap-2 mb-2">
                <Heart size={14} className="text-secondary fill-secondary" />
                <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-muted-foreground">
                  My Core Philosophy
                </span>
              </div>
              <p className="text-sm text-foreground/85 font-medium leading-relaxed">
                &ldquo;Great digital products should be as joyful to experience as they are effective for business growth.&rdquo;
              </p>
            </div>

          </div>

          {/* Right Column: Playful Story & Interactive Sticker Cards */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col gap-8 lg:pt-6">
            
            {/* Story Paragraphs */}
            <div className="flex flex-col gap-4 text-foreground/85 leading-relaxed font-medium">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground leading-snug tracking-tight">
                I&apos;m Hamenath, an engineer and digital craftsman turning bold ideas into tactile, responsive web experiences.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                I work directly with startup founders, ambitious businesses, and creators to engineer clean, memorable web applications. My philosophy blends high-speed performance and clean code with playful visual delight.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                From national hackathon-winning architectures to boutique brand platforms, I love obsessing over the micro-interactions, springy physics, and seamless responsiveness that make an interface feel alive.
              </p>
            </div>

            {/* Quick Facts & Experience Sticker Cards */}
            <div className="flex flex-col gap-3.5 pt-4">
              <span className="text-xs uppercase font-heading font-extrabold tracking-wider text-muted-foreground select-none">
                Highlights &amp; Milestones
              </span>

              {/* 1. SIH Winner Card */}
              <div className="about-highlight-card p-4 rounded-2xl bg-tertiary/20 border-2 border-foreground flex items-center gap-4 shadow-[4px_4px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1E293B] transition-all">
                <div className="w-10 h-10 rounded-full bg-tertiary border-2 border-foreground flex items-center justify-center shrink-0 text-foreground shadow-[1px_1px_0px_#1E293B]">
                  <FiAward size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-foreground">
                    Smart India Hackathon 2025 National Winner
                  </h4>
                  <p className="text-xs text-foreground/80 mt-0.5">
                    Awarded 1st place nationally for building high-impact software solutions.
                  </p>
                </div>
              </div>

              {/* 2. Makera Labs Partnership Card */}
              <div className="about-highlight-card p-4 rounded-2xl bg-quaternary/20 border-2 border-foreground flex items-center justify-between gap-4 shadow-[4px_4px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1E293B] transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-foreground flex items-center justify-center p-1.5 shrink-0 shadow-[1px_1px_0px_#1E293B]">
                    <Image
                      src="/images/makeralabs-logo.png"
                      alt="Makera Labs Logo"
                      width={38}
                      height={38}
                      className="w-full h-auto object-contain select-none"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-foreground">
                      Working Partner &amp; Digital Marketing · Makera Labs
                    </h4>
                    <p className="text-xs text-foreground/80 mt-0.5">
                      Driving digital growth, web strategy, and product delivery.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-foreground bg-quaternary border-2 border-foreground px-3 py-1 rounded-full font-heading font-bold shadow-[1px_1px_0px_#1E293B]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  Active
                </span>
              </div>

              {/* 3. Tech Background */}
              <div className="about-highlight-card p-4 rounded-2xl bg-accent/15 border-2 border-foreground flex items-center gap-4 shadow-[4px_4px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1E293B] transition-all">
                <div className="w-10 h-10 rounded-full bg-accent text-white border-2 border-foreground flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#1E293B]">
                  <FiCode size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-foreground">
                    Full-Stack Engineer &amp; Meta Front-End Certified
                  </h4>
                  <p className="text-xs text-foreground/80 mt-0.5">
                    Deep expertise in Next.js, React, Node.js, and modern animation stacks.
                  </p>
                </div>
              </div>

              {/* 4. Location & Reach */}
              <div className="about-highlight-card p-4 rounded-2xl bg-white border-2 border-foreground flex items-center gap-4 shadow-[4px_4px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1E293B] transition-all">
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-foreground flex items-center justify-center shrink-0 text-foreground shadow-[1px_1px_0px_#1E293B]">
                  <FiMapPin size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-foreground">
                    Tamil Nadu, India · Working Worldwide
                  </h4>
                  <p className="text-xs text-foreground/80 mt-0.5">
                    Collaborating with local founders and remote teams across global time zones.
                  </p>
                </div>
              </div>

            </div>

            {/* Playful Skills Pill Cloud */}
            <div className="pt-2">
              <span className="text-xs uppercase font-heading font-extrabold tracking-wider text-muted-foreground block mb-3 select-none">
                Interactive Toolkit
              </span>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`about-skill-pill inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border-2 border-foreground font-heading font-bold text-xs shadow-[2px_2px_0px_#1E293B] hover:-translate-y-1 hover:rotate-3 transition-transform cursor-default select-none ${skill.color}`}
                  >
                    <span>✦</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
