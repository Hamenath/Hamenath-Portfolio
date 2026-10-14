'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  tagline: string;
  role: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  approach: string;
  build: string;
  outcome: string;
  keyFeatures: string[];
}

const featuredCaseStudies: CaseStudy[] = [
  {
    id: 'lanzy',
    name: 'Lanzy',
    category: 'Marketplace & Digital Platform',
    tagline: 'A modern discovery platform connecting creative professionals and businesses with AI-assisted matchmaking.',
    role: 'Founder & Full Stack Engineer',
    image: '/images/project-lanzy.png',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'OpenAI API'],
    liveUrl: 'https://lanzy.online',
    githubUrl: 'https://github.com/Hamenath/Lanzy-production-1',
    challenge:
      'Independent creative professionals in design and development often struggle to showcase their specialized work through generic resumes, while founders lose hours sifting through unvetted portfolios.',
    approach:
      'Engineered a dedicated marketplace prioritizing high-fidelity visual portfolio previews, structured designer capabilities, and an intelligent recommendation layer to help businesses hire the right creative talent faster.',
    build:
      'Built with Next.js for high-speed server rendering, Firebase for user authentication and real-time state, styled with vanilla Tailwind CSS tokens, and integrated with OpenAI endpoints for contextual creator discovery.',
    outcome:
      'Successfully deployed live to production at lanzy.online with full onboarding flows, responsive creator galleries, and custom profile curation.',
    keyFeatures: [
      'Interactive creator profile showcases',
      'AI-assisted talent recommendation matching',
      'Instant responsive mobile & desktop UX',
      'Secure authentication & profile editor',
    ],
  },
  {
    id: 'studiogenz',
    name: 'Studio GENZ',
    category: 'Commercial Web Studio',
    tagline: 'Agency portfolio platform showcasing bespoke web design and custom AI automations for ambitious brands.',
    role: 'Founder & Lead Developer',
    image: '/images/project-studiogenz.jpeg',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    liveUrl: 'https://studiogenz.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
    challenge:
      'Growing businesses need authoritative digital experiences without bloated agency overhead or slow, clunky WordPress templates that hurt conversion.',
    approach:
      'Architected a minimal, high-aesthetic studio website demonstrating modern design systems, fluid motion physics, and clean service pricing structures.',
    build:
      'Developed with Next.js and optimized static generation, ensuring near-instant page paints and flawless mobile responsiveness.',
    outcome:
      'Currently acts as the primary agency vehicle delivering modern websites and customized automation workflows for clients.',
    keyFeatures: [
      'Modern dark-aesthetic layout',
      'Structured outcome-based service offerings',
      'Direct client enquiry workflows',
      'Sub-second page load times',
    ],
  },
  {
    id: 'iser',
    name: 'ISER',
    category: 'Academic Research Portal',
    tagline: 'Centralized document submission and peer-review platform built for institutional research workflows.',
    role: 'Full Stack Developer',
    image: '/images/project-iser.png',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    githubUrl: 'https://github.com/hamenath',
    challenge:
      'Academic departments and research institutions frequently struggle with disorganized email chains and manual spreadsheets to manage paper submissions, reviewer assignments, and revision rounds.',
    approach:
      'Designed a role-based research portal that separates author submissions, reviewer feedback loops, and administrative approvals into a clear, unified dashboard.',
    build:
      'Implemented robust REST API endpoints in Node.js/Express, a structured MongoDB schema with document versioning, and an intuitive Next.js frontend with clear status indicators.',
    outcome:
      'Engineered a complete end-to-end manuscript lifecycle from initial submission to final editorial decision.',
    keyFeatures: [
      'Role-based access control (Author, Reviewer, Admin)',
      'Document revision and submission tracking',
      'Evaluation rubric and review scorecards',
      'Clean tabular management dashboard',
    ],
  },
  {
    id: 'skillmate',
    name: 'SkillMate AI',
    category: 'AI Application',
    tagline: 'Intelligent career roadmap planner and technical skill gap advisor powered by OpenAI integrations.',
    role: 'AI & Full Stack Developer',
    image: '/images/project-skillmate.png',
    tech: ['React.js', 'OpenAI API', 'Express.js', 'Firebase'],
    githubUrl: 'https://github.com/hamenath',
    challenge:
      'Students and transitioning developers face an overwhelming flood of tutorials with no personalized guidance on their exact technical shortcomings.',
    approach:
      'Created an interactive AI advisor that evaluates user technical proficiency, targets missing competencies, and builds milestone-driven learning roadmaps.',
    build:
      'Constructed a lightweight React UI communicating with an Express backend that formats prompt chains and context memory for OpenAI models.',
    outcome:
      'Delivered functional interactive roadmap generation that adapts based on user background and targeted job roles.',
    keyFeatures: [
      'Personalized skill gap assessment',
      'Milestone-driven learning curriculum',
      'Interactive AI career prompt assistant',
      'Cloud state persistence via Firebase',
    ],
  },
];

const secondaryProjects = [
  {
    title: 'Film Finder',
    category: 'Media Discovery',
    description: 'Movie discovery web application featuring curated collections, real-time search, and deep metadata powered by TMDB API.',
    image: '/images/project-cinescope.png',
    tech: ['Next.js', 'TMDB API', 'Tailwind CSS'],
    liveUrl: 'https://flim-finder.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Weatherify',
    category: 'Weather Analytics',
    description: 'Fast, minimal weather utility with location detection, 5-day forecasts, and clean ambient condition visualizations.',
    image: '/images/project-weatherify.png',
    tech: ['React.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: 'https://weatherify-roan.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Expense Tracker',
    category: 'Fintech Utility',
    description: 'Personal finance dashboard with categorical budget limits, transaction analytics, and monthly spending charts.',
    image: '/images/project-expense.png',
    tech: ['React.js', 'Firebase', 'Chart.js'],
    liveUrl: 'https://expense-tracker-bay-mu.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Password Generator',
    category: 'Security Tool',
    description: 'Client-side cryptographic security utility with entropy scoring, customized rulesets, and instant clipboard exports.',
    image: '/images/project-password.png',
    tech: ['React.js', 'Web Crypto API', 'Tailwind CSS'],
    liveUrl: 'https://password-generator-three-pi-59.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
];

export default function Projects() {
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>('lanzy');

  const toggleCaseStudy = (id: string) => {
    setExpandedCaseStudy(expandedCaseStudy === id ? null : id);
  };

  return (
    <section id="work" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Production systems, client solutions, and commercial products engineered with precision, high performance, and human-centered design.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="flex flex-col gap-10 mb-16">
          {featuredCaseStudies.map((project, idx) => {
            const isExpanded = expandedCaseStudy === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="enterprise-card overflow-hidden p-6 sm:p-8 md:p-10"
              >
                {/* Top Header & Visual Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Context & Overview */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="subtle-badge text-indigo-300">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {project.role}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                        {project.name}
                      </h3>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.tagline}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs text-slate-400 bg-white/3 border border-white/6 px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs"
                        >
                          <span>Live Demo</span>
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
                          <span>Repository</span>
                          <FiGithub size={13} />
                        </a>
                      )}
                      <button
                        onClick={() => toggleCaseStudy(project.id)}
                        className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/6 hover:bg-white/4 transition-colors ml-auto cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Case Study' : 'Read Case Study'}</span>
                        {isExpanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-6 relative aspect-16/10 w-full rounded-xl overflow-hidden bg-[#0c0e15] border border-white/6">
                    <Image
                      src={project.image}
                      alt={`${project.name} interface preview`}
                      fill
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </div>

                {/* Collapsible Deep Case Study Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-white/6 mt-8 pt-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* The Challenge */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                            The Challenge
                          </span>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {/* The Approach */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                            The Approach
                          </span>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {project.approach}
                          </p>
                        </div>

                        {/* The Build & Outcome */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                            The Build &amp; Outcome
                          </span>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                            {project.build} {project.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Key Features Pill Row */}
                      <div className="mt-6 pt-6 border-t border-white/4 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-slate-500 mr-2">Key Highlights:</span>
                        {project.keyFeatures.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-xs text-slate-300 bg-white/4 px-3 py-1 rounded-full border border-white/6"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* Secondary Projects Grid */}
        <div className="pt-4 border-t border-white/6">
          <h3 className="text-base font-semibold text-slate-300 uppercase tracking-wider text-xs mb-6">
            Additional Products &amp; Utilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryProjects.map((p, pIdx) => (
              <div
                key={p.title}
                className="enterprise-card p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black/40 border border-white/6 mb-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <span className="text-[11px] font-medium text-indigo-400 uppercase tracking-wider block mb-1">
                    {p.category}
                  </span>
                  
                  <h4 className="text-base font-semibold text-white tracking-tight mb-2">
                    {p.title}
                  </h4>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/4">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Live</span>
                      <FiExternalLink size={12} />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Code</span>
                      <FiGithub size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
