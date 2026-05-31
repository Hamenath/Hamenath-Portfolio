'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FiVideo, FiImage, FiPenTool, FiSliders } from 'react-icons/fi';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiTailwindcss, 
  SiOpenai,
} from 'react-icons/si';

const devSkills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'AI Integration', icon: SiOpenai },
];

const designSkills = [
  { name: 'Photoshop', icon: FiImage },
  { name: 'Illustrator', icon: FiPenTool },
  { name: 'Premiere Pro', icon: FiVideo },
  { name: 'After Effects', icon: FiVideo },
  { name: 'Lightroom', icon: FiSliders },
  { name: 'CapCut', icon: FiVideo },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 font-heading">
            03 / Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 font-heading">
            My technology suite
          </h2>
        </div>

        {/* Development Suite */}
        <div className="mb-12">
          <h3 className="text-sm uppercase font-bold tracking-wider text-neutral-400 font-heading mb-6">
            Development Suite
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {devSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200/80 hover:shadow-2xs transition-all duration-300 group select-none"
                >
                  <div className="p-2 rounded-xl bg-neutral-50 text-neutral-600 group-hover:text-neutral-950 group-hover:bg-neutral-100 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="font-heading font-semibold text-sm text-neutral-700 group-hover:text-neutral-950 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Design & Editing Suite */}
        <div>
          <h3 className="text-sm uppercase font-bold tracking-wider text-neutral-400 font-heading mb-6">
            Design &amp; Editing Suite
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {designSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200/80 hover:shadow-2xs transition-all duration-300 group select-none"
                >
                  <div className="p-2 rounded-xl bg-neutral-50 text-neutral-600 group-hover:text-neutral-950 group-hover:bg-neutral-100 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="font-heading font-semibold text-sm text-neutral-700 group-hover:text-neutral-950 transition-colors">
                    {skill.name}
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
