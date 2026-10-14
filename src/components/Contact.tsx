'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiCheckCircle, 
  FiArrowUpRight,
  FiSend,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    projectType: 'Business Website',
    website: '',
    budget: '₹25,000 - ₹50,000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Listen to select-project-type events from Services and Pricing
  useEffect(() => {
    const handleSelectType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, projectType: customEvent.detail }));
      }
    };
    window.addEventListener('select-project-type', handleSelectType);
    return () => window.removeEventListener('select-project-type', handleSelectType);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Format a comprehensive message for direct WhatsApp outreach or email
    const textMsg = `Hi Hamenath, I'm reaching out regarding a project:
- Name: ${formData.name}
- Business: ${formData.business || 'N/A'}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}
- Project Type: ${formData.projectType}
- Existing Site: ${formData.website || 'None'}
- Budget: ${formData.budget}
- Description: ${formData.description}`;

    // Create WhatsApp URL
    const waUrl = `https://wa.me/919361661708?text=${encodeURIComponent(textMsg)}`;
    
    // Also prepare mailto fallback link
    const mailtoUrl = `mailto:hamenathmurali@gmail.com?subject=${encodeURIComponent(
      `Project Enquiry: ${formData.projectType} - ${formData.name}`
    )}&body=${encodeURIComponent(textMsg)}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Automatically open WhatsApp in new tab for fastest communication
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="section-padding bg-background border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-indigo-400 block mb-2">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tell me what you&apos;re building. I&apos;ll help you figure out the right digital solution, technical architecture, and realistic timeline.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Info / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Quick Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="enterprise-card p-6 sm:p-7 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Prefer a quick chat? Reach out directly via WhatsApp for fastest response or send an email with your project brief.
              </p>

              <div className="flex flex-col gap-3.5 pt-2">
                <a
                  href="https://wa.me/919361661708?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3 px-5 text-xs w-full justify-between group"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <FaWhatsapp size={16} />
                    <span>Chat on WhatsApp</span>
                  </span>
                  <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="mailto:hamenathmurali@gmail.com?subject=Project%20Enquiry%20from%20hamenath.online"
                  className="btn-secondary py-3 px-5 text-xs w-full justify-between group hover:bg-white/6"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <FiMail size={15} />
                    <span>Email Me Directly</span>
                  </span>
                  <FiArrowUpRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Guarantees & Location */}
              <div className="pt-6 border-t border-white/6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <FiClock className="text-indigo-400 shrink-0" size={15} />
                  <span>Prompt response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <FiMapPin className="text-indigo-400 shrink-0" size={15} />
                  <span>Tamil Nadu, India · Available for local &amp; remote projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="enterprise-card p-6 sm:p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <FiCheckCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    Enquiry Prepared!
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                    Thank you! Your project details have been formulated. If WhatsApp did not open automatically, you can also send directly via email:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                    <a
                      href={`mailto:hamenathmurali@gmail.com?subject=Project%20Enquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
                        formData.description
                      )}`}
                      className="btn-primary text-xs"
                    >
                      <FiMail size={13} />
                      <span>Send Email Copy</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs"
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                    Project Enquiry Form
                  </h3>

                  {/* Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className="text-xs font-medium text-slate-300">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Horizon Logistics"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anand@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-medium text-slate-300">
                        WhatsApp / Phone <span className="text-indigo-400 text-[10px]">(Fastest reply)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className="text-xs font-medium text-slate-300">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-hover border border-white/8 text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Startup Website">Startup Website</option>
                        <option value="Personal Brand">Personal Portfolio / Brand</option>
                        <option value="AI Integration">AI Chatbot / Automation</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Starter Package">Starter Package</option>
                        <option value="Business Package">Business Package</option>
                        <option value="Custom / AI Product">Custom / AI Product</option>
                        <option value="Other">Other / Consultation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="text-xs font-medium text-slate-300">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-hover border border-white/8 text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (Starter)</option>
                        <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000 (Business)</option>
                        <option value="₹75,000+">₹75,000+ (Custom / Web App)</option>
                        <option value="$1,000 - $3,000 USD">$1,000 - $3,000 USD (Remote)</option>
                        <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Existing Website */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="website" className="text-xs font-medium text-slate-300">
                      Existing Website <span className="text-slate-500">(If redesigning)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://mycurrentwebsite.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-xs font-medium text-slate-300">
                      Project Description &amp; Goals <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe what you are looking to build, your key goals, and any specific requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-xs sm:text-sm font-semibold tracking-tight mt-2 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Preparing Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <FiSend size={14} />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    No spam. Your contact info is kept completely private.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
