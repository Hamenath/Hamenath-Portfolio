'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Sparkles, Globe, Rocket, UserCheck, Bot, RefreshCw } from 'lucide-react';
import { scrollToSection } from '@/lib/lenis';
import { Squiggle } from '@/components/ui/GeometricDecoration';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Give your business a professional online presence that builds trust and brings in genuine customer inquiries.',
    projectType: 'Business Website',
    icon: Globe,
    headerColor: 'bg-accent text-white',
    shadowColor: 'shadow-[6px_6px_0px_#1E293B]',
  },
  {
    number: '02',
    title: 'Startup Platforms',
    description: 'Turn your product idea into a clear, modern web application that explains your value proposition and converts early adopters.',
    projectType: 'Startup Website',
    icon: Rocket,
    headerColor: 'bg-secondary text-foreground',
    shadowColor: 'shadow-[6px_6px_0px_#1E293B]',
  },
  {
    number: '03',
    title: 'Portfolio Websites',
    description: 'Showcase your work with an expressive personal website designed to establish authority and highlight your craftsmanship.',
    projectType: 'Portfolio Website',
    icon: UserCheck,
    headerColor: 'bg-tertiary text-foreground',
    shadowColor: 'shadow-[6px_6px_0px_#1E293B]',
  },
  {
    number: '04',
    title: 'AI Integrations',
    description: 'Add intelligent AI-powered features to digital products, from automated customer assistants to smart workflow generators.',
    projectType: 'AI Integration',
    icon: Bot,
    headerColor: 'bg-quaternary text-foreground',
    shadowColor: 'shadow-[6px_6px_0px_#1E293B]',
  },
  {
    number: '05',
    title: 'Website Redesign',
    description: 'Transform an existing website into a delightful, high-converting digital experience with faster loading and modern aesthetics.',
    projectType: 'Website Redesign',
    icon: RefreshCw,
    headerColor: 'bg-white text-foreground',
    shadowColor: 'shadow-[6px_6px_0px_#1E293B]',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Header reveal
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: 'back.out(1.4)',
      });

      // Staggered pop-in for service cards
      const cards = gsap.utils.toArray<HTMLElement>('.service-card');
      gsap.fromTo(
        cards,
        {
          scale: 0.88,
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'back.out(1.5)',
        }
      );
    },
    { scope: sectionRef }
  );

  const selectService = (type: string) => {
    scrollToSection('contact');
    window.dispatchEvent(new CustomEvent('select-project-type', { detail: type }));
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-background border-t-2 border-foreground relative overflow-hidden"
    >
      {/* Background polka dot patch */}
      <div
        className="absolute bottom-5 left-5 w-64 h-64 bg-dot-grid-subtle opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div ref={headerRef} className="max-w-2xl mb-14 sm:mb-18 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-foreground px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E293B] mb-3 select-none">
            <Sparkles size={13} className="text-tertiary stroke-[2.5]" />
            <span className="text-xs uppercase font-heading font-extrabold tracking-wider">
              Capabilities
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
            What I Do
          </h2>

          <div className="mt-2.5 -ml-1">
            <Squiggle color="#FBBF24" width={130} height={20} className="w-28 sm:w-32 h-auto" />
          </div>

          <p className="text-foreground/80 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            Thoughtful design, tactile interactions, and clean frontend engineering for ambitious businesses and creators.
          </p>
        </div>

        {/* Tactile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`service-card bg-white border-2 border-foreground rounded-2xl overflow-hidden ${service.shadowColor} hover:-translate-y-2 hover:shadow-[10px_10px_0px_#1E293B] transition-all duration-300 flex flex-col justify-between group`}
              >
                {/* Colored Header Strip */}
                <div
                  className={`px-6 py-4 border-b-2 border-foreground flex items-center justify-between ${service.headerColor}`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white border border-foreground/30 flex items-center justify-center text-foreground shadow-[1px_1px_0px_#1E293B]">
                      <Icon size={16} className="stroke-[2.5]" />
                    </div>
                    <span className="font-heading font-extrabold text-xs uppercase tracking-wider">
                      {service.title}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-black opacity-80">
                    {service.number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6">
                  <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Interactive Button */}
                  <div className="pt-2 border-t-2 border-foreground/10 flex items-center justify-between">
                    <span className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wide">
                      Available now
                    </span>
                    <button
                      type="button"
                      onClick={() => selectService(service.projectType)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border-2 border-foreground font-heading font-bold text-xs text-foreground shadow-[2px_2px_0px_#1E293B] hover:bg-tertiary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#1E293B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#1E293B] transition-all cursor-pointer group/btn"
                    >
                      <span>Inquire</span>
                      <FiArrowUpRight size={13} className="stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
