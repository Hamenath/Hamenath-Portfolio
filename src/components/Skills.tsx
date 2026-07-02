'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaFigma,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiTailwindcss, 
  SiTypescript,
  SiOpenai,
  SiCloudinary
} from 'react-icons/si';
import { TbSettingsCog, TbApi } from 'react-icons/tb';
import { FaBrain } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-slate-300' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'REST APIs', icon: TbApi, color: 'text-purple-400' },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'OpenAI', icon: SiOpenai, color: 'text-green-300' },
      { name: 'Gemini', icon: FaBrain, color: 'text-blue-400' },
      { name: 'Prompt Eng.', icon: TbSettingsCog, color: 'text-pink-400' },
      { name: 'Automation', icon: TbSettingsCog, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
      { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
      { name: 'Cloudinary', icon: SiCloudinary, color: 'text-blue-500' },
      { name: 'VS Code', icon: FaCode, color: 'text-blue-400' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#020203] border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              03 / Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              My technology stack
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="p-6 md:p-8 rounded-3xl apple-crystal flex flex-col gap-6">
                <h3 className="text-lg font-bold text-white tracking-tight font-heading border-b border-white/5 pb-3">
                  {category.title}
                </h3>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {category.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="relative flex flex-col items-center justify-center p-4 rounded-full apple-badge-crystal border border-white/5 hover:border-blue-500/40 transition-all duration-300 group select-none cursor-pointer"
                      >
                        <div className="p-2 rounded-full text-slate-300 group-hover:text-white transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <span className="font-heading font-semibold text-[10px] text-slate-400 group-hover:text-white mt-1.5 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
