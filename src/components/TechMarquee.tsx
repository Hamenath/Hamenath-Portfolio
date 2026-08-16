'use client';

import { Marquee } from './ui/marquee';
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaPython, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiFirebase, 
  SiMongodb, 
  SiOpenai, 
  SiTailwindcss, 
  SiCloudinary, 
  SiFramer 
} from 'react-icons/si';

const techs = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Java', icon: FaJava, color: 'text-red-400' },
  { name: 'Python', icon: FaPython, color: 'text-blue-300' },
  { name: 'OpenAI', icon: SiOpenai, color: 'text-emerald-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Cloudinary', icon: SiCloudinary, color: 'text-blue-500' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-purple-400' },
];

export default function TechMarquee() {
  return (
    <section className="py-12 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <span className="text-xs uppercase font-bold tracking-widest text-slate-500 font-heading">
          Tech Stack Suite
        </span>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s] border-y border-white/5 py-6 bg-white/2">
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-6 py-2.5 rounded-full apple-badge-crystal text-white select-none mx-2 hover:scale-102 transition-transform duration-300"
              >
                <Icon className={`text-xl ${tech.color}`} />
                <span className="text-sm font-semibold tracking-tight font-heading">{tech.name}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
