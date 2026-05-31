'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'ISER',
    description:
      'A comprehensive research management platform that streamlines academic workflows, paper submissions, and reviewer assignments — built for institutions seeking intelligent document handling.',
    image: '/images/project-iser.png',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://github.com/hamenath',
    githubUrl: 'https://github.com/hamenath',
    featured: true,
    inBuilding: true,
  },
  {
    title: 'SkillMate AI',
    description:
      'AI-powered career assistant helping students and professionals discover personalized learning paths, skill gap analyses, and curated course recommendations.',
    image: '/images/project-skillmate.png',
    techStack: ['React.js', 'OpenAI API', 'Firebase', 'Express.js'],
    liveUrl: 'https://github.com/hamenath',
    githubUrl: 'https://github.com/hamenath',
    featured: true,
    inBuilding: true,
  },
  {
    title: 'Lanzy',
    description:
      'A sleek link-in-bio tool for creators, with custom themes, analytics, and drag-and-drop link ordering. Designed to replace traditional link trees with a polished branded page.',
    image: '/images/project-lanzy.png',
    techStack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://github.com/hamenath',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
    inBuilding: true,
  },
  {
    title: 'Weatherify',
    description:
      'A clean, minimal weather web app with real-time data, animated weather icons, location detection, and 5-day forecasts — built for everyday use.',
    image: '/images/project-weatherify.png',
    techStack: ['React.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: 'https://weatherify-roan.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'Film Finder',
    description:
      'A movie discovery platform with curated collections, trending titles, smart search, and detailed film metadata powered by the TMDB API.',
    image: '/images/project-cinescope.png',
    techStack: ['Next.js', 'TMDB API', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://flim-finder.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'Password Generator',
    description:
      'A sleek, client-side cryptographic utility to generate highly secure, customizable passwords with live strength metrics and responsive customization panels.',
    image: '/images/project-password.png',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://password-generator-three-pi-59.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'Expense Tracker',
    description:
      'A personal finance management app with visual budgets, category-based analytics, recurring transactions, and clean monthly summary reports.',
    image: '/images/project-expense.png',
    techStack: ['React.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://expense-tracker-bay-mu.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'QR Generator',
    description:
      'A fast, customizable QR code generator with branding options, multiple export formats, and integrated URL shortening for developers and creators.',
    image: '/images/project-qr.png',
    techStack: ['React.js', 'QR API', 'Node.js'],
    liveUrl: 'https://qr-generator-beta-lac.vercel.app/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'Genz Studio',
    description:
      'A beautiful website for a digital creative studio. Showcases modern portfolios, smooth animations, and high-performance design.',
    image: '/images/project-studiogenz.jpeg',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    liveUrl: 'https://studiogenz.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
  {
    title: 'iDEED',
    description:
      'A collaborative productivity and social proof platform designed to log, track, and share verifiable accomplishments and small daily impact milestones.',
    image: '/images/project-ideed.png',
    techStack: ['React.js', 'Express.js', 'MongoDB', 'Node.js'],
    liveUrl: 'https://ideed.onrender.com/',
    githubUrl: 'https://github.com/hamenath',
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            04 / Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Things I&apos;ve built
          </h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col rounded-3xl border border-neutral-100 bg-neutral-50/50 hover:border-neutral-200 hover:shadow-sm overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => {}}
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-neutral-950 text-white rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-lg font-bold text-neutral-900 font-heading tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-1 text-[10px] font-semibold text-neutral-600 bg-white border border-neutral-200/80 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  {project.inBuilding ? (
                    <span className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-500 text-xs font-semibold rounded-full border border-neutral-200 select-none">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                      In Development
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      <HiExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-white text-neutral-700 text-xs font-semibold rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    <FiGithub size={13} />
                    Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
