'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';
import { Squiggle } from '@/components/ui/GeometricDecoration';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isPersonal?: boolean;
  accentShadow?: string;
  badgeBg?: string;
}

const projects: Project[] = [
  {
    title: 'Lanzy',
    category: 'Marketplace Platform · AI Matchmaking',
    description: 'A discovery marketplace connecting creative professionals and businesses through curated portfolios and AI-assisted matchmaking.',
    image: '/images/project-lanzy.png',
    liveUrl: 'https://lanzy.online',
    githubUrl: 'https://github.com/Hamenath/Lanzy-production-1',
    isPersonal: true,
    accentShadow: 'shadow-[8px_8px_0px_#8B5CF6]',
    badgeBg: 'bg-accent text-white',
  },
  {
    title: 'Studio GENZ',
    category: 'Commercial Web Platform',
    description: 'A minimal, fast portfolio website showcasing bespoke web design and custom digital products for modern brands.',
    image: '/images/project-studiogenz.jpeg',
    liveUrl: 'https://studiogenz.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
    accentShadow: 'shadow-[8px_8px_0px_#F472B6]',
    badgeBg: 'bg-secondary text-foreground',
  },
  {
    title: 'ISER',
    category: 'Research Portal & Manuscript Tracking',
    description: 'An academic research platform streamlining paper submissions, peer reviews, and institutional manuscript tracking.',
    image: '/images/project-iser.png',
    githubUrl: 'https://github.com/hamenath',
    accentShadow: 'shadow-[8px_8px_0px_#FBBF24]',
    badgeBg: 'bg-tertiary text-foreground',
  },
  {
    title: 'SkillMate AI',
    category: 'AI Assistant & Career Learning Paths',
    description: 'An intelligent career assistant that analyzes technical skill gaps and generates tailored, milestone-based learning paths.',
    image: '/images/project-skillmate.png',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
    accentShadow: 'shadow-[8px_8px_0px_#34D399]',
    badgeBg: 'bg-quaternary text-foreground',
  },
  {
    title: 'Film Finder',
    category: 'Media Discovery & TMDB Hub',
    description: 'A curated movie discovery hub with trending collections, real-time search, and film metadata powered by TMDB API.',
    image: '/images/project-cinescope.png',
    liveUrl: 'https://flim-finder.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
    accentShadow: 'shadow-[8px_8px_0px_#8B5CF6]',
    badgeBg: 'bg-accent text-white',
  },
  {
    title: 'Weatherify',
    category: 'Web Utility & Forecast Engine',
    description: 'A clean, minimal weather web application with real-time conditions, location detection, and 5-day forecasts.',
    image: '/images/project-weatherify.png',
    liveUrl: 'https://weatherify-roan.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
    accentShadow: 'shadow-[8px_8px_0px_#F472B6]',
    badgeBg: 'bg-secondary text-foreground',
  },
];

export default function Projects() {
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

      // Scroll to Reveal & Expand each Project Sticker Card
      const items = gsap.utils.toArray<HTMLElement>('.project-card');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            scale: 0.92,
            y: 45,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'back.out(1.3)',
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section-padding bg-background border-t-2 border-foreground relative overflow-hidden"
    >
      {/* Background dot pattern patch */}
      <div
        className="absolute top-10 right-5 w-72 h-72 bg-dot-grid-subtle opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading Group */}
        <div ref={headerRef} className="max-w-2xl mb-14 sm:mb-18 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-foreground px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E293B] mb-3 select-none">
            <Sparkles size={13} className="text-accent stroke-[2.5]" />
            <span className="text-xs uppercase font-heading font-extrabold tracking-wider">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
            Recent Projects
          </h2>

          <div className="mt-2.5 -ml-1">
            <Squiggle color="#8B5CF6" width={130} height={20} className="w-28 sm:w-32 h-auto" />
          </div>

          <p className="text-foreground/80 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            A selection of websites, applications, and digital tools I have designed and engineered with craft and care.
          </p>
        </div>

        {/* Tactile Sticker Cards Grid */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`project-card relative bg-white border-2 border-foreground rounded-3xl p-6 sm:p-8 md:p-10 ${
                project.accentShadow || 'shadow-[8px_8px_0px_#1E293B]'
              } hover:-translate-y-1.5 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center group`}
            >
              {/* Half-in/half-out Number Badge */}
              <div
                className={`absolute -top-4 left-6 sm:left-8 w-9 h-9 rounded-full border-2 border-foreground ${
                  project.badgeBg || 'bg-accent text-white'
                } font-heading font-extrabold text-xs flex items-center justify-center shadow-[2px_2px_0px_#1E293B] select-none`}
              >
                0{idx + 1}
              </div>

              {/* Image Preview Container (with Blob/Border Mask) */}
              <div
                className={`w-full rounded-2xl overflow-hidden bg-background border-2 border-foreground shadow-[4px_4px_0px_#1E293B] relative group/img ${
                  idx % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'
                }`}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-dot-grid-subtle">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105 select-none"
                    sizes="(max-width: 1024px) 100vw, 680px"
                  />
                </div>
              </div>

              {/* Project Meta & Details */}
              <div
                className={`flex flex-col justify-center gap-4 ${
                  idx % 2 === 1 ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5 lg:order-2'
                }`}
              >
                {/* Category Sticker Tag */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-muted border-2 border-foreground text-xs font-heading font-bold text-foreground shadow-[2px_2px_0px_#1E293B]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Tactile Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-candy text-xs sm:text-sm px-5 py-2.5 shadow-[3px_3px_0px_#1E293B] group/btn"
                    >
                      <span>View Project</span>
                      <span className="w-5 h-5 rounded-full bg-white text-foreground flex items-center justify-center border border-foreground/30 group-hover/btn:rotate-45 transition-transform">
                        <FiExternalLink size={11} className="stroke-[2.5]" />
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs sm:text-sm px-5 py-2.5 shadow-[3px_3px_0px_#1E293B]"
                    >
                      <span>Source Code</span>
                      <span className="w-5 h-5 rounded-full bg-foreground text-white flex items-center justify-center">
                        <FiGithub size={11} className="stroke-[2.5]" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
