'use client';

import { motion } from 'framer-motion';
import { FiAward, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';

const credentials = [
  {
    icon: FiAward,
    highlight: 'National Winner',
    label: 'Smart India Hackathon 2025',
  },
  {
    icon: FiLayers,
    highlight: 'Studio GENZ',
    label: 'Founder & Lead Developer',
  },
  {
    icon: FiCode,
    highlight: 'VEXA TECH',
    label: 'Full Stack Engineer',
  },
  {
    icon: FiCheckCircle,
    highlight: 'Meta Certified',
    label: 'Front-End UI Engineer',
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Verified Credentials" className="border-y border-white/6 bg-[#0c0e15] py-6 sm:py-7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-colors">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-medium text-white tracking-tight truncate">
                    {cred.highlight}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 truncate">
                    {cred.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
