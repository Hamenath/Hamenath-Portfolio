'use client';

import { motion } from 'framer-motion';
import { FaBoxes } from 'react-icons/fa';
import { HiCheckCircle, HiCalendar } from 'react-icons/hi';

const roadmapItems = [
  { name: 'Authentication System', completed: true },
  { name: 'Designer Profiles & Portfolios', completed: true },
  { name: 'AI-powered Marketplace Engine', completed: false },
  { name: 'Real-time Messaging System', completed: false },
  { name: 'Secured Stripe Escrow Payments', completed: false },
];

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="section-padding bg-[#020203] border-t border-white/5 relative overflow-hidden">
      {/* Background glow offsets */}
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="apple-section-glass p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-heading">
              05 / Public Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Building in Public
            </h2>
          </div>

          {/* Lanzy Showcase Card */}
          <div className="relative rounded-3xl apple-crystal p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(59,130,246,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Info, Progress & Expected Launch */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/5 text-blue-400 rounded-2xl border border-white/10">
                    <FaBoxes size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-heading">Active Project</span>
                    <h3 className="text-2xl font-bold text-white font-heading">Lanzy</h3>
                  </div>
                </div>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Building next-generation workflows and customized digital portfolio templates for global creatives. I write code, design custom UI, and share the build metrics live.
                </p>

                {/* Progress Bar */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-400 uppercase tracking-wider">Overall Progress</span>
                    <span className="text-blue-400 font-bold">65% Complete</span>
                  </div>
                  <div className="w-full h-3.5 bg-black/40 border border-white/10 rounded-full overflow-hidden p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Expected Launch */}
                <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-white/3 border border-white/10 text-slate-300 text-xs sm:text-sm shadow-inner">
                  <HiCalendar className="text-blue-400" size={18} />
                  <span>Expected Launch: <strong className="text-white">Coming Soon</strong></span>
                </div>
              </div>

              {/* Right: Roadmap Items Checklist */}
              <div className="lg:col-span-5 p-6 rounded-2xl apple-crystal flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading border-b border-white/5 pb-2">
                  Development Roadmap
                </span>
                <div className="flex flex-col gap-3">
                  {roadmapItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                      {item.completed ? (
                        <HiCheckCircle size={18} className="text-green-400 shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-white/20 shrink-0" />
                      )}
                      <span className={item.completed ? 'text-slate-500 line-through' : 'font-medium text-slate-200'}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
