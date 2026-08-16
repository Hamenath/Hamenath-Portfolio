'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'VEXA TECH',
    period: 'Nov 2024 - Present',
    description: 'Spearheading design and implementation of modern SaaS architectures. Orchestrated frontend performance boosts and designed clean reusable React components with optimized states.',
    highlights: [
      'Improved performance by 35% through next-gen code splitting and custom asset compression workflows.',
      'Built SaaS products using server-side rendering, robust REST endpoints, and secure token auth.',
      'Developed reusable architecture components to accelerate developer onboarding and feature delivery.',
    ],
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
  },
  {
    role: 'Founder',
    company: 'Studio GENZ',
    period: 'Feb 2024 - Present',
    description: 'Founder and Lead Developer. Built highly responsive custom websites and AI integrations for clients.',
    highlights: [
      'Built websites representing brands and digital portfolios with premium aesthetics.',
      'Successfully executed client projects from design handoff to cloud hosting deployments.',
      'Integrated AI automation nodes utilizing OpenAI, Gemini, and serverless background workers.',
    ],
    skills: ['React.js', 'Express.js', 'MongoDB', 'Firebase', 'OpenAI API', 'Framer Motion'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Lunewise Technologies',
    period: 'Jul 2024 - Oct 2024',
    description: 'Collaborated with cross-functional development teams on web infrastructure components, security updates, and test suite implementation.',
    highlights: [
      'Built backend APIs using Node.js, Express, and MongoDB with clean validation middleware.',
      'Conducted extensive automated API testing and automated code validation workflows.',
      'Assisted in containerizing application microservices using Docker for streamlined local setups.',
      'Integrated payment gateways and notification microservices.',
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Jest', 'REST APIs'],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="section-padding bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[30%] right-[-10%] w-[35%] h-[40%] rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              02 / Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Where I&apos;ve worked
            </h2>
          </div>

          {/* Experience List */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={idx}
                  layout="position"
                  onClick={() => toggleExpand(idx)}
                  className="p-6 md:p-8 rounded-3xl apple-crystal cursor-pointer group"
                >
                <div className="flex items-start justify-between gap-4">
                  {/* Top Details */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="text-xs font-semibold text-blue-400 font-heading uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-slate-400 font-heading md:border-l md:border-white/10 md:pl-6">
                      {exp.role}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="text-slate-400 group-hover:text-white transition-colors pt-1">
                    {isExpanded ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                  </div>
                </div>

                {/* Always visible description */}
                <p className="text-sm text-slate-400 leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Animated expandable highlights & skills */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/5 mt-6 flex flex-col gap-6">
                        {/* Achievements List */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                            Key Achievements
                          </span>
                          <ul className="flex flex-col gap-2.5 pl-4 list-disc text-slate-300 text-xs sm:text-sm">
                            {exp.highlights.map((highlight, hidx) => (
                              <li key={hidx} className="leading-relaxed hover:text-white transition-colors">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills/Technologies Badges */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                            Skills Applied
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, sidx) => (
                              <span 
                                key={sidx} 
                                className="px-3.5 py-1.5 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full select-none hover:border-blue-500/30 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
