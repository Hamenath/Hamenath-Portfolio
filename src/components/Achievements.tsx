'use client';

import { motion } from 'framer-motion';
import { HiCheckBadge } from 'react-icons/hi2';
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
    <section id="achievements" className="section-padding bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              07 / Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
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
                    className="group relative flex items-center justify-center rounded-3xl apple-crystal min-h-70 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(234,179,8,0.02)]"
                  >
                    <Awards
                      variant="award"
                      title={item.title || ''}
                      subtitle={item.subtitle}
                      recipient={item.recipient}
                      date={item.date}
                      level={item.level}
                      className="w-full h-full text-white bg-transparent"
                    />
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex flex-col gap-4 p-6 rounded-3xl apple-crystal"
                >
                  {/* Category tag + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest font-heading text-slate-500">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-xl apple-badge-crystal text-slate-400 group-hover:text-blue-400 transition-all">
                      <HiCheckBadge size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold font-heading tracking-tight leading-snug text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-450">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1 text-slate-400">
                    {item.description}
                  </p>

                  {/* Date */}
                  <span className="text-xs font-semibold font-heading text-slate-500">
                    {item.date}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
