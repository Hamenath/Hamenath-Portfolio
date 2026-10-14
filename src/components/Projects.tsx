'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

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
}

const projects: Project[] = [
  {
    title: 'Lanzy',
    category: 'Personal Project · Marketplace Platform',
    description: 'A discovery marketplace connecting creative professionals and businesses through curated portfolios and AI-assisted matchmaking.',
    image: '/images/project-lanzy.png',
    liveUrl: 'https://lanzy.online',
    githubUrl: 'https://github.com/Hamenath/Lanzy-production-1',
    isPersonal: true,
  },
  {
    title: 'Studio GENZ',
    category: 'Commercial Web Project',
    description: 'A minimal, fast portfolio website showcasing bespoke web design and custom digital products for modern brands.',
    image: '/images/project-studiogenz.jpeg',
    liveUrl: 'https://studiogenz.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'ISER',
    category: 'Web Application · Research Portal',
    description: 'An academic research platform streamlining paper submissions, peer reviews, and institutional manuscript tracking.',
    image: '/images/project-iser.png',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'SkillMate AI',
    category: 'Personal Project · AI Assistant',
    description: 'An intelligent career assistant that analyzes technical skill gaps and generates tailored, milestone-based learning paths.',
    image: '/images/project-skillmate.png',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
  },
  {
    title: 'Film Finder',
    category: 'Personal Project · Media Discovery',
    description: 'A curated movie discovery hub with trending collections, real-time search, and film metadata powered by TMDB API.',
    image: '/images/project-cinescope.png',
    liveUrl: 'https://flim-finder.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
  },
  {
    title: 'Weatherify',
    category: 'Personal Project · Web Utility',
    description: 'A clean, minimal weather web application with real-time conditions, location detection, and 5-day forecasts.',
    image: '/images/project-weatherify.png',
    liveUrl: 'https://weatherify-roan.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    isPersonal: true,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.project-item');
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-16 md:mb-20">
          <span className="text-xs uppercase font-semibold tracking-[0.14em] text-text-secondary block mb-2.5">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#171717] leading-tight">
            Recent Projects
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3.5 sm:mt-4 leading-relaxed">
            A selection of websites, applications, and digital tools I have designed and engineered.
          </p>
        </div>

        {/* Editorial Projects Layout */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`project-item grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Preview Container */}
              <div
                className={`w-full rounded-2xl overflow-hidden bg-white border border-border shadow-xs group ${
                  idx % 2 === 1 ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'
                }`}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-surface-hover">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
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
                <span className="text-xs font-medium text-text-secondary">
                  {project.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#171717] tracking-tight">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs"
                    >
                      <span>View Project</span>
                      <FiExternalLink size={13} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs"
                    >
                      <span>Source Code</span>
                      <FiGithub size={13} />
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
