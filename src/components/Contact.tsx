'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  FiMail, 
  FiCheckCircle, 
  FiArrowUpRight,
  FiSend,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef<HTMLElement>(null);

  // Listen to select-project-type events from Services
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

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.from('.contact-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, { scope: sectionRef });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const textMsg = `Hi Hamenath, I'm reaching out regarding a project:
- Name: ${formData.name}
- Business: ${formData.business || 'N/A'}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}
- Project Type: ${formData.projectType}
- Existing Site: ${formData.website || 'None'}
- Budget: ${formData.budget}
- Description: ${formData.description}`;

    const waUrl = `https://wa.me/919361661708?text=${encodeURIComponent(textMsg)}`;
    
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="contact-reveal max-w-2xl mb-14 sm:mb-16 md:mb-20">
          <span className="text-xs uppercase font-semibold tracking-[0.14em] text-text-secondary block mb-2.5">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#171717] leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3.5 sm:mt-4 leading-relaxed">
            Tell me what you&apos;re planning. Let&apos;s build something useful.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Direct Outreach Channels */}
          <div className="contact-reveal lg:col-span-5 flex flex-col gap-6">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                  Prefer a direct conversation? Message me on WhatsApp for the fastest reply or send an email with your project details.
                </p>
              </div>

              <div className="flex flex-col gap-3">
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
                  className="btn-secondary py-3 px-5 text-xs w-full justify-between group"
                >
                  <span className="flex items-center gap-2 font-medium text-[#171717]">
                    <FiMail size={15} />
                    <span>hamenathmurali@gmail.com</span>
                  </span>
                  <FiArrowUpRight size={14} className="text-text-secondary group-hover:text-[#171717] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="pt-6 border-t border-border flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <FiClock className="text-[#171717] shrink-0" size={15} />
                  <span>Prompt response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <FiMapPin className="text-[#171717] shrink-0" size={15} />
                  <span>Tamil Nadu, India · Working with clients worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-reveal lg:col-span-7">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="py-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#171717] text-white flex items-center justify-center">
                    <FiCheckCircle size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#171717] tracking-tight">
                    Thank You
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md leading-relaxed">
                    Your project details have been formatted. If WhatsApp did not open automatically, you can also send directly via email:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                    <a
                      href={`mailto:hamenathmurali@gmail.com?subject=Project%20Enquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
                        formData.description
                      )}`}
                      className="btn-primary text-xs"
                    >
                      <FiMail size={13} />
                      <span>Send via Email</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs"
                    >
                      <span>Submit Another</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-xl font-semibold text-[#171717] tracking-tight mb-1">
                    Start a Project
                  </h3>

                  {/* Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-[#171717]">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm placeholder:text-text-muted focus:border-[#171717] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className="text-xs font-medium text-[#171717]">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Horizon Studios"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm placeholder:text-text-muted focus:border-[#171717] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-[#171717]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anand@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm placeholder:text-text-muted focus:border-[#171717] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-medium text-[#171717]">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm placeholder:text-text-muted focus:border-[#171717] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className="text-xs font-medium text-[#171717]">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm focus:border-[#171717] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Startup Website">Startup Website</option>
                        <option value="Portfolio Website">Portfolio Website</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Other">Other / Consultation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="text-xs font-medium text-[#171717]">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm focus:border-[#171717] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000</option>
                        <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                        <option value="₹75,000+">₹75,000+</option>
                        <option value="$1,000 - $3,000 USD">$1,000 - $3,000 USD (Remote)</option>
                        <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-xs font-medium text-[#171717]">
                      Project Details &amp; Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Briefly describe what you'd like to build, your goals, or any reference websites you like..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-border text-[#171717] text-xs sm:text-sm placeholder:text-text-muted focus:border-[#171717] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-xs sm:text-sm font-semibold tracking-tight mt-1 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Start a Project</span>
                        <FiSend size={14} />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-text-secondary text-center">
                    No spam. Your information is kept completely private.
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
