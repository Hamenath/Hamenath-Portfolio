'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) {
        setCount(end);
        return;
      }

      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={setRef} className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
      {count}{suffix}
    </span>
  );
}

const timelineEvents = [
  {
    year: 'Currently',
    role: 'Building Lanzy',
    company: 'Studio GENZ',
    description: 'Developing Lanzy, the next-generation freelancer marketplace for creative professionals, focusing on AI discovery and portfolio sharing.',
  },
  {
    year: '2026',
    role: 'Founder',
    company: 'Studio GENZ',
    description: 'Founded Studio GENZ to deliver premium digital products, client websites, and custom AI automations.',
  },
  {
    year: '2025',
    role: 'Smart India Hackathon Winner',
    company: 'National Award',
    description: 'Won the prestigious Smart India Hackathon at the national level by designing and building a high-impact software system.',
  },
  {
    year: '2025',
    role: 'Full Stack Developer',
    company: 'VEXA TECH',
    description: 'Built scalable SaaS applications and high-performance reusable backend/frontend architectures.',
  },
  {
    year: '2024',
    role: 'Full Stack Internship',
    company: 'Lunewise Technologies',
    description: 'Assisted in building custom APIs, unit testing pipelines, Docker containers, and payment integrations.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Split Layout: Bio & Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image & Bio */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
                01 / About Me
              </span>
              
              {/* Liquid Crystal Glass Image Frame */}
              <div className="relative w-full aspect-square rounded-3xl p-1 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-white/10 opacity-60 z-10 pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Hamenath B"
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading leading-snug">
                Building products with simple design and powerful technology.
              </h3>
              
              <div className="flex flex-col gap-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  I specialize in building scalable web applications using React, Next.js, Firebase, Node.js, and AI integrations.
                </p>
                <p>
                  I enjoy transforming ideas into production-ready digital products with clean architecture, smooth user experiences, and high-performance code.
                </p>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-8">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
                My Journey
              </span>

              <div className="relative border-l border-white/5 pl-8 ml-3 flex flex-col gap-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group p-5 rounded-2xl apple-crystal"
                  >
                    {/* Timeline Glass Node */}
                    <div className="absolute -left-11.25 top-5 w-8 h-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center transition-colors group-hover:border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                      <div className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-blue-500 animate-pulse' : 'bg-slate-600 group-hover:bg-blue-400'}`} />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-blue-400 font-heading">
                        {event.year}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight font-heading">
                        {event.role} <span className="text-slate-500 font-medium">at</span> {event.company}
                      </h4>
                      <p className="text-sm text-slate-400 max-w-xl mt-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Counter Section (Glass Cards) */}
          <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { val: 2, suff: "+", label: "Years Experience" },
              { val: 10, suff: "+", label: "Projects Built" },
              { val: 5, suff: "+", label: "Technologies" },
              { val: 3, suff: "", label: "Companies Worked" },
              { val: 1, suff: "", label: "National Award" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl apple-crystal">
                <Counter value={item.val} suffix={item.suff} />
                <span className="text-xs sm:text-sm text-slate-400 mt-2.5 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
