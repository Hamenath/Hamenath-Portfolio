'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'VEXA TECH',
    period: 'Nov 2024 - Present',
    description: 'Spearheading design and implementation of modern SaaS architectures. Orchestrated frontend performance boosts and designed clean reusable React components with optimized states.',
    highlights: [
      'Reduced initial page load time by 35% through next-gen code splitting and image caching.',
      'Developed real-time dashboard modules powered by WebSockets and Next.js server components.',
      'Maintained 99.8% server uptime by restructuring backend APIs and database queries.',
    ],
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
  },
  {
    role: 'Founder',
    company: 'Genz Studio',
    period: 'Feb 2024 - Present',
    description: 'Founder and Lead Developer. Making websites and modern software tools for clients.',
    highlights: [
      'Built and launched over 5 modern web applications for clients.',
      'Set up simple content management tools so clients can edit their websites easily.',
      'Connected OpenAI (AI tools), Firebase, and secure payment systems.',
    ],
    skills: ['React.js', 'Express.js', 'MongoDB', 'Firebase', 'OpenAI API', 'Framer Motion'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Lunewise Technologies',
    period: 'Jul 2024 - Oct 2024',
    description: 'Collaborated with cross-functional development teams on web infrastructure components, security updates, and test suite implementation.',
    highlights: [
      'Wrote comprehensive end-to-end integration tests reducing production bugs by 12%.',
      'Assisted in containerizing application microservices using Docker for streamlined local setups.',
      'Integrated payment gateways and multi-channel notification services.',
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Jest', 'REST APIs'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            02 / Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Where I&apos;ve worked
          </h2>
        </div>

        {/* Experience List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 md:p-8 rounded-3xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300 group flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8"
            >
              {/* Timing & Company Name */}
              <div className="md:col-span-4 flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-neutral-400 font-heading uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 font-heading">
                  {exp.company}
                </h3>
                <span className="text-sm font-medium text-neutral-500 font-heading">
                  {exp.role}
                </span>
              </div>

              {/* Work Details */}
              <div className="md:col-span-8 flex flex-col gap-4">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <ul className="flex flex-col gap-2 pl-4 list-disc text-neutral-500 text-xs sm:text-sm">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="leading-relaxed hover:text-neutral-900 transition-colors">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Skills/Technologies Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sidx) => (
                    <span 
                      key={sidx} 
                      className="px-3 py-1 text-[11px] font-semibold text-neutral-600 bg-white border border-neutral-200/80 rounded-full select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
