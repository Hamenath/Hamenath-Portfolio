'use client';

import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiTrendingUp, 
  FiUserCheck, 
  FiCpu, 
  FiRefreshCw, 
  FiLifeBuoy,
  FiArrowUpRight,
  FiCheck
} from 'react-icons/fi';

const services = [
  {
    icon: FiBriefcase,
    title: 'Business Websites',
    description: 'Modern websites that help businesses establish a professional online presence, build instant customer trust, and generate direct customer inquiries.',
    outcomes: ['Mobile-optimized design', 'WhatsApp enquiry integration', 'Google search visibility'],
    projectType: 'Business Website',
  },
  {
    icon: FiTrendingUp,
    title: 'Startup Websites',
    description: 'High-quality landing pages and product websites for startups designed to explain complex products clearly and convert visitors into active users or leads.',
    outcomes: ['High-converting landing layouts', 'Investor & customer ready', 'Fast page loading speeds'],
    projectType: 'Startup Website',
  },
  {
    icon: FiUserCheck,
    title: 'Personal Websites',
    description: 'Professional portfolio and personal-brand websites for executives, consultants, doctors, and specialists who want an authoritative digital presence.',
    outcomes: ['Credibility & authority focus', 'Showcase of work & accolades', 'Direct consultation booking'],
    projectType: 'Personal Brand',
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Experiences',
    description: 'Custom AI chatbots and intelligent automation tools built into your website to handle customer questions 24/7 and streamline internal workflows.',
    outcomes: ['24/7 automated support', 'Tailored business knowledge', 'Smart lead qualification'],
    projectType: 'AI Integration',
  },
  {
    icon: FiRefreshCw,
    title: 'Website Redesign',
    description: 'Transform outdated, slow, or broken websites into sleek, modern digital experiences that look credible across all mobile phones and laptops.',
    outcomes: ['Complete visual overhaul', 'Mobile layout fixes', 'Faster load times & modern UX'],
    projectType: 'Website Redesign',
  },
  {
    icon: FiLifeBuoy,
    title: 'Ongoing Support',
    description: 'Peace of mind with continuous website maintenance, security updates, content changes, and technical support after your website is launched.',
    outcomes: ['Regular software updates', 'Fast turnaround for edits', 'Domain & hosting management'],
    projectType: 'Support & Maintenance',
  },
];

export default function Services() {
  const selectServiceForEnquiry = (type: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      // Fire custom event to set project type in form
      window.dispatchEvent(new CustomEvent('select-project-type', { detail: type }));
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              What I Build
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Engineered for real business outcomes: higher credibility, fast mobile load, and direct WhatsApp inquiries from local and global customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="enterprise-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors mb-5">
                    <Icon size={18} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2.5">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex flex-col gap-2 mb-6">
                    {service.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <FiCheck className="text-emerald-400 shrink-0" size={13} />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => selectServiceForEnquiry(service.projectType)}
                  className="text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1.5 transition-colors pt-2 cursor-pointer w-fit"
                >
                  <span>Start this project</span>
                  <FiArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
