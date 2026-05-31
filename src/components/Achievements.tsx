'use client';

import { motion } from 'framer-motion';
import { HiCheckBadge, HiAcademicCap } from 'react-icons/hi2';
import { Awards } from '@/components/ui/award';

const achievements = [
  {
    category: 'Hackathon',
    title: 'NATIONAL WINNER',
    subtitle: 'Smart India Hackathon 2025',
    recipient: 'Hamenath B',
    date: '2025',
    level: 'gold' as const,
    showAward: true,
  },
  {
    category: 'Award',
    title: 'SHINING STAR',
    subtitle: 'Sethu Institute of Technology',
    recipient: 'Hamenath B',
    date: '2025',
    level: 'gold' as const,
    showAward: true,
  },
  {
    category: 'Award',
    title: 'BEST DESIGNER',
    subtitle: 'Sethu Institute of Technology',
    recipient: 'Hamenath B',
    date: '2025',
    level: 'gold' as const,
    showAward: true,
  },
  {
    category: 'Certification',
    title: 'Meta Front-End Developer',
    subtitle: 'Meta (Coursera)',
    description:
      'Completed the professional certificate covering React.js fundamentals, component design, accessibility, advanced JavaScript patterns, and UI testing.',
    date: '2024',
    showAward: false,
  },
  {
    category: 'Certification',
    title: 'Full Stack Web Development',
    subtitle: 'Udemy — Angela Yu',
    description:
      'Mastered HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and RESTful API design through hands-on project building and real-world application development.',
    date: '2024',
    showAward: false,
  },
  {
    category: 'Internship',
    title: 'Full Stack Developer Intern',
    subtitle: 'Lunewise Technologies',
    description:
      'Completed a hands-on internship focused on backend API development, frontend optimization, and real-world teamwork in agile sprint cycles.',
    date: 'Jul – Oct 2024',
    showAward: false,
  },
  {
    category: 'Certification',
    title: 'Google IT Support Professional',
    subtitle: 'Google (Coursera)',
    description:
      'Gained proficiency in system administration, networking fundamentals, security protocols, and technical troubleshooting strategies.',
    date: '2023',
    showAward: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            05 / Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            Recognition &amp; Certifications
          </h2>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((item, idx) => {
            if (item.showAward) {
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex items-center justify-center rounded-3xl border bg-white border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 min-h-[280px] overflow-hidden"
                >
                  <Awards
                    variant="award"
                    title={item.title || ''}
                    subtitle={item.subtitle}
                    recipient={item.recipient}
                    date={item.date}
                    level={item.level}
                    className="w-full h-full text-neutral-900"
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col gap-4 p-6 rounded-3xl border bg-white border-neutral-100 hover:border-neutral-200 hover:shadow-xs transition-all duration-300"
              >
                {/* Category tag + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest font-heading text-neutral-400">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-xl bg-neutral-50 text-neutral-600 group-hover:text-neutral-900 transition-colors">
                    <HiCheckBadge size={18} />
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold font-heading tracking-tight leading-snug text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 text-neutral-500">
                  {item.description}
                </p>

                {/* Date */}
                <span className="text-xs font-semibold font-heading text-neutral-400">
                  {item.date}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
