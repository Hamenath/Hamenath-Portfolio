'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const milestones = [
  {
    year: '2026',
    role: 'Founder & Lead Developer',
    entity: 'Studio GENZ',
    summary: 'Building modern digital products, client websites, and custom AI automations for startups and local businesses.',
  },
  {
    year: '2025',
    role: 'National Winner',
    entity: 'Smart India Hackathon 2025',
    summary: 'Awarded 1st place nationally by engineering a high-impact software system under a 36-hour competitive sprint.',
  },
  {
    year: '2025',
    role: 'Full Stack Engineer',
    entity: 'VEXA TECH',
    summary: 'Architected scalable SaaS features, high-throughput backend services, and optimized client rendering pipelines.',
  },
  {
    year: '2024',
    role: 'Full Stack Developer Intern',
    entity: 'Lunewise Technologies',
    summary: 'Developed robust REST APIs, unit test suites, Docker containers, and automated deployment pipelines.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Profile Photo & Core Positioning */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Engineering with purpose. Designing with restraint.
              </h2>
            </div>

            {/* Profile Photo Card */}
            <div className="relative w-full aspect-4/5 max-w-sm rounded-2xl overflow-hidden bg-surface border border-white/8 shadow-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Hamenath B - AI and Web Engineer"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-md border border-white/8">
                <p className="text-xs font-medium text-white">Hamenath B</p>
                <p className="text-[11px] text-slate-400">AI &amp; Web Engineer · Madurai, Tamil Nadu</p>
              </div>
            </div>

            {/* Concise Bio */}
            <div className="flex flex-col gap-3 text-slate-400 text-sm leading-relaxed">
              <p>
                I am an AI and Web Engineer based in Tamil Nadu, dedicated to helping businesses, startups, and founders turn ideas into modern digital products.
              </p>
              <p>
                Rather than treating code as just syntax, I focus on the entire product lifecycle: clear communication, fast mobile performance, intuitive UI, and measurable business outcomes.
              </p>
            </div>
          </div>

          {/* Right Column: Track Record Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block mb-2">
                Experience &amp; Milestones
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Verified Background &amp; Delivery
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="enterprise-card p-5 sm:p-6 flex flex-col gap-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-indigo-400 font-mono">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {item.entity}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white tracking-tight">
                    {item.role}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Row */}
            <div className="pt-6 border-t border-white/6">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Professional Certifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3">
                  <FiCheckCircle className="text-indigo-400 shrink-0" size={16} />
                  <div>
                    <p className="text-xs font-medium text-white">Meta Front-End Developer</p>
                    <p className="text-[11px] text-slate-500">React, UI Testing &amp; Accessibility</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/3 border border-white/6 flex items-center gap-3">
                  <FiCheckCircle className="text-indigo-400 shrink-0" size={16} />
                  <div>
                    <p className="text-xs font-medium text-white">Full Stack Web Development</p>
                    <p className="text-[11px] text-slate-500">Node.js, Express, MongoDB &amp; APIs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
