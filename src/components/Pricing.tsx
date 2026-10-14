'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Starter',
    audience: 'For individuals, professionals & local businesses',
    description: 'Establish a credible online presence with a fast, mobile-friendly website tailored to generate local enquiries.',
    features: [
      '1 to 3 custom designed pages',
      'Mobile-first responsive architecture',
      'Direct WhatsApp inquiry integration',
      'Fast loading speed & asset compression',
      'Basic search engine (SEO) setup',
      '1 week post-launch support',
    ],
    highlighted: false,
    projectType: 'Starter Package',
  },
  {
    name: 'Business',
    audience: 'For growing brands, services & retail companies',
    description: 'A comprehensive multi-page digital asset built to maximize brand credibility, showcase services, and capture qualified leads.',
    features: [
      'Up to 7 custom designed pages',
      'Interactive lead & enquiry forms',
      'Service / product catalog presentation',
      'Google Maps & business listing link',
      'High-speed global CDN deployment',
      'Full metadata & schema SEO integration',
      '2 weeks post-launch support',
    ],
    highlighted: true,
    projectType: 'Business Package',
  },
  {
    name: 'Custom',
    audience: 'For startups, SaaS & AI-powered web products',
    description: 'Bespoke web applications, custom platforms, and AI chatbot workflows tailored to specific business operations.',
    features: [
      'Full-stack architecture (Next.js / Node.js / DB)',
      'Custom AI integrations & automated agents',
      'Authentication & role-based dashboard',
      'Third-party APIs & payment gateway setup',
      'Custom design system & component library',
      'Scalable cloud infrastructure setup',
      'Dedicated 30-day post-launch support',
    ],
    highlighted: false,
    projectType: 'Custom / AI Product',
  },
];

export default function Pricing() {
  const selectPlan = (projectType: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      window.dispatchEvent(new CustomEvent('select-project-type', { detail: projectType }));
    }
  };

  return (
    <section id="pricing" className="section-padding bg-background border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
              Engagement Models
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
              Simple, Transparent Tiers
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Clear project scopes without hidden costs. Every engagement includes clean code, responsive layouts, and dedicated launch support.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`enterprise-card p-7 sm:p-8 flex flex-col justify-between relative ${
                plan.highlighted ? 'border-indigo-500/40 bg-[#121522]' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Recommended
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium mt-1">
                    {plan.audience}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="pt-6 border-t border-white/6 flex flex-col gap-3 mb-8">
                  <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">
                    Included Deliverables:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <FiCheck className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => selectPlan(plan.projectType)}
                className={`w-full py-3 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary hover:bg-white/8'
                }`}
              >
                <span>Get a Project Estimate</span>
                <FiArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
