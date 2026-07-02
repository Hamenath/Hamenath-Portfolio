'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiExternalLink, HiArrowRight } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const otherProjects = [
  {
    title: 'ISER',
    description: 'A comprehensive research management platform that streamlines academic workflows, paper submissions, and reviewer assignments — built for institutions seeking intelligent document handling.',
    image: '/images/project-iser.png',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://github.com/hamenath',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'SkillMate AI',
    description: 'AI-powered career assistant helping students and professionals discover personalized learning paths, skill gap analyses, and curated course recommendations.',
    image: '/images/project-skillmate.png',
    techStack: ['React.js', 'OpenAI API', 'Firebase', 'Express.js'],
    liveUrl: 'https://github.com/hamenath',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Studio GENZ',
    description: 'A beautiful website for a digital creative studio. Showcases modern portfolios, smooth animations, and high-performance design.',
    image: '/images/project-studiogenz.jpeg',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    liveUrl: 'https://studiogenz.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Weatherify',
    description: 'A clean, minimal weather web app with real-time data, animated weather icons, location detection, and 5-day forecasts — built for everyday use.',
    image: '/images/project-weatherify.png',
    techStack: ['React.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: 'https://weatherify-roan.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Film Finder',
    description: 'A movie discovery platform with curated collections, trending titles, smart search, and detailed film metadata powered by the TMDB API.',
    image: '/images/project-cinescope.png',
    techStack: ['Next.js', 'TMDB API', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://flim-finder.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Password Generator',
    description: 'A sleek, client-side cryptographic utility to generate highly secure, customizable passwords with live strength metrics and responsive customization panels.',
    image: '/images/project-password.png',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://password-generator-three-pi-59.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance management app with visual budgets, category-based analytics, recurring transactions, and clean monthly summary reports.',
    image: '/images/project-expense.png',
    techStack: ['React.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://expense-tracker-bay-mu.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
  {
    title: 'QR Generator',
    description: 'A fast, customizable QR code generator with branding options, multiple export formats, and integrated URL shortening for developers and creators.',
    image: '/images/project-qr.png',
    techStack: ['React.js', 'QR API', 'Node.js'],
    liveUrl: 'https://qr-generator-beta-lac.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
  },
];

export default function Projects() {
  const scrollToRoadmap = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('currently-building');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="section-padding bg-[#020203] border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[10%] left-[-15%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              04 / Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Featured Projects
            </h2>
          </div>

          {/* LANZY - HERO PROJECT */}
          <div className="mb-16">
            <div className="relative rounded-3xl apple-crystal overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(59,130,246,0.05)]">
              {/* Left/Top Content */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6 z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                      Hero Project
                    </span>
                    <span className="flex items-center gap-1.5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
                      Currently Building
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                    LANZY
                  </h3>
                  
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Lanzy is a modern freelancer marketplace connecting creative professionals and businesses through AI-powered discovery and premium portfolio experiences.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'OpenAI API'].map((tech, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 text-xs text-slate-300 apple-badge-crystal">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://lanzy.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 apple-btn-crystal text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <HiExternalLink size={16} />
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Hamenath/Lanzy-production-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-transparent text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-300 hover:translate-x-1"
                  >
                    <FiGithub size={16} />
                    View Repository
                  </a>
                </div>
              </div>

              {/* Right/Bottom Image Showcase */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto w-full h-full min-h-[250px] lg:min-h-[380px] bg-black/40 rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
                <Image
                  src="/images/lanzy.png"
                  alt="Lanzy Platform"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col rounded-3xl apple-crystal"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-black/40 overflow-hidden border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => {}}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-lg font-bold text-white font-heading tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-2.5 py-1 text-[10px] font-semibold text-slate-300 apple-badge-crystal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 apple-btn-crystal text-white text-xs font-semibold rounded-full"
                    >
                      <HiExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-white/5 text-slate-300 hover:text-white text-xs font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <FiGithub size={13} />
                      Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
