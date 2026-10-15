'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiCheck } from 'react-icons/fi';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const backgroundPoints = [
  'Based in Madurai, Tamil Nadu — collaborating with local clients and remote teams worldwide.',
  'Smart India Hackathon 2025 National Winner — awarded 1st place nationally for building high-impact software.',
  'Working Partner & Digital Marketing at Makera Labs — driving digital growth, marketing strategy, and modern web solutions.',
  'Professional background in full-stack web development (React, Next.js, Node.js) and Meta Front-End Certification.',
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (leftColRef.current && rightColRef.current) {
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power2.out',
      });
    }
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="section-padding bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Intro */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.14em] text-text-secondary block mb-2.5">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#171717] leading-tight">
                A Little About Me
              </h2>
            </div>

            {/* Clean Portrait Frame */}
            <div className="relative w-full aspect-4/5 max-w-sm rounded-2xl overflow-hidden bg-white border border-border shadow-xs">
              <Image
                src="/images/profile.jpeg"
                alt="Hamenath B"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>

          {/* Right Column: Authentic Story & Highlights */}
          <div ref={rightColRef} className="lg:col-span-7 flex flex-col gap-8 lg:pt-8">
            <div className="flex flex-col gap-4 text-base sm:text-lg text-[#171717] leading-relaxed">
              <p className="font-medium text-xl sm:text-2xl text-[#171717] leading-snug tracking-tight">
                I&apos;m Hamenath, a developer focused on building thoughtful websites and useful digital experiences.
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-[1.65]">
                I help business owners, startups, and founders translate their goals into clean, well-engineered web products. My approach is rooted in simplicity: clear communication, fast mobile loading, and interfaces that feel effortless to navigate.
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-[1.65]">
                Whether you need a new website to establish credibility or want to modernize an existing platform, I work directly with you from concept to launch.
              </p>
            </div>

            {/* Verified Highlights */}
            <div className="pt-6 border-t border-border flex flex-col gap-3.5">
              <span className="text-xs uppercase font-semibold tracking-wider text-text-muted">
                Quick Facts &amp; Experience
              </span>
              {backgroundPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center shrink-0 text-[#171717] mt-0.5">
                    <FiCheck size={11} />
                  </span>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}

              {/* Makera Labs Active Partnership Card */}
              <div className="mt-2 p-3.5 sm:p-4 rounded-xl bg-white border border-border flex items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-surface border border-border flex items-center justify-center p-1.5 shrink-0">
                    <Image
                      src="/images/makeralabs-logo.png"
                      alt="Makera Labs Logo"
                      width={44}
                      height={44}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-text-muted block">
                      Active Role &amp; Partnership
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#171717] leading-tight">
                      Working Partner · Digital Marketing
                    </h4>
                    <span className="text-xs text-text-secondary mt-0.5 inline-block">
                      Makera Labs
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full font-medium shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
