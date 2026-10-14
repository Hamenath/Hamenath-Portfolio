'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business goals, target audience, competitive landscape, and key conversion metrics before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the sitemap, information architecture, page content requirements, and technical stack tailored to your budget and growth targets.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Craft a clean, minimal visual identity and mobile-first interface designed for clarity, high credibility, and intuitive navigation.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop with modern, high-speed frontend architecture, responsive layouts, fast asset delivery, and accessibility compliance.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deploy to global CDN hosting, configure custom domains, test on real devices, set up basic SEO, and ensure smooth post-launch operations.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-background border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              How We Work
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            A transparent, structured 5-step delivery process designed to eliminate confusion and ship on schedule.
          </p>
        </div>

        {/* Minimal Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col pt-6 border-t border-white/12 group relative"
            >
              {/* Subtle Step Number */}
              <span className="font-mono text-sm text-indigo-400 font-medium mb-3">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white tracking-tight mb-2.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
