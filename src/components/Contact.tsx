'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  FiMail, 
  FiCheckCircle, 
  FiArrowUpRight,
  FiSend,
  FiMapPin,
  FiClock,
  FiMessageSquare
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';
import { Squiggle } from '@/components/ui/GeometricDecoration';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projectTypes = [
  'Business Website',
  'Startup Platform',
  'Portfolio Website',
  'AI Integration',
  'Website Redesign',
  'Other / Custom',
];

const budgetOptions = [
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000+',
  'Let\'s discuss',
];

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
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Header reveal
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: 'back.out(1.4)',
      });

      // Left column (3D Kid Model card) reveal
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
        x: -30,
        scale: 0.94,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
      });

      // Right column (Form card) reveal & expand
      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: 'top 80%',
        },
        x: 30,
        scale: 0.94,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'back.out(1.4)',
      });
    },
    { scope: sectionRef }
  );

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

    const waUrl = `https://wa.me/918778707086?text=${encodeURIComponent(textMsg)}`;
    
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background border-t-2 border-foreground relative overflow-hidden"
    >
      {/* Background polka dots */}
      <div
        className="absolute top-1/4 right-0 w-80 h-80 bg-dot-grid-subtle opacity-40 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-2xl mb-14 sm:mb-18 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-foreground px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E293B] mb-3 select-none">
            <Sparkles size={13} className="text-secondary stroke-[2.5]" />
            <span className="text-xs uppercase font-heading font-extrabold tracking-wider">
              Let&apos;s Connect
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
            Have a Project in Mind?
          </h2>

          <div className="mt-2.5 -ml-1">
            <Squiggle color="#8B5CF6" width={130} height={20} className="w-28 sm:w-32 h-auto" />
          </div>

          <p className="text-foreground/80 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            Tell me what you&apos;re planning. Together, we&apos;ll build something useful, high-performing, and memorable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: 3D Kid Developer Model Card & Direct Channels */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 3D Kid Model Sticker Card */}
            <div className="bg-white border-2 border-foreground rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0px_#1E293B] relative overflow-hidden group">
              
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary border-2 border-foreground text-xs font-heading font-extrabold text-foreground shadow-[2px_2px_0px_#1E293B] select-none">
                  <span>✦</span>
                  <span>Say Hello!</span>
                </span>
                <span className="text-xs font-mono font-bold text-muted-foreground">
                  Tamil Nadu, IN
                </span>
              </div>

              {/* 3D Kid Character Showcase */}
              <div className="relative w-full aspect-square max-w-75 mx-auto rounded-2xl overflow-hidden border-2 border-foreground bg-background shadow-[4px_4px_0px_#1E293B] flex items-center justify-center p-2 mb-4 group-hover:scale-[1.02] transition-transform">
                
                {/* Memphis circle backdrop */}
                <div className="absolute inset-4 rounded-full bg-tertiary/30 border-2 border-foreground/15 -z-10" />
                
                {/* 3D Kid Avatar Image */}
                <Image
                  src="/images/kid-hamenath-3d.jpg"
                  alt="3D Hamenath Kid Developer Avatar"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain filter contrast-[1.02] select-none pointer-events-none animate-float"
                />

                {/* Floating Speech Bubble */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-tertiary border-2 border-foreground rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none px-3 py-1.5 shadow-[3px_3px_0px_#1E293B] -rotate-3 select-none">
                  <span className="font-heading font-black text-[11px] text-foreground flex items-center gap-1">
                    <span>Let&apos;s build!</span>
                    <span>🚀</span>
                  </span>
                </div>
              </div>

              {/* Friendly Description */}
              <div className="text-center sm:text-left">
                <h3 className="font-heading font-extrabold text-xl text-foreground">
                  Hamenath B
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 mt-1 font-medium leading-relaxed">
                  Friendly developer, creator, and AI builder. Reach out on WhatsApp for instant replies or drop a quick project brief!
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-3 mt-5">
                <a
                  href="https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3 px-5 text-xs sm:text-sm w-full justify-between group/btn shadow-[3px_3px_0px_#1E293B]"
                >
                  <span className="flex items-center gap-2 font-heading font-bold">
                    <FaWhatsapp size={17} />
                    <span>Chat on WhatsApp</span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white text-foreground flex items-center justify-center border border-foreground">
                    <FiArrowUpRight size={13} className="stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </span>
                </a>

                <a
                  href="mailto:hamenathmurali@gmail.com?subject=Project%20Enquiry%20from%20hamenath.online"
                  className="btn-secondary py-3 px-5 text-xs sm:text-sm w-full justify-between group/btn shadow-[3px_3px_0px_#1E293B]"
                >
                  <span className="flex items-center gap-2 font-heading font-bold text-foreground">
                    <FiMail size={16} />
                    <span>hamenathmurali@gmail.com</span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-foreground text-white group-hover/btn:bg-white group-hover/btn:text-foreground flex items-center justify-center transition-colors">
                    <FiArrowUpRight size={13} className="stroke-[2.5]" />
                  </span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-5 mt-5 border-t-2 border-foreground/10 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-xs font-medium text-foreground/80">
                  <FiClock className="text-accent shrink-0 stroke-[2.5]" size={15} />
                  <span>Prompt reply within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-foreground/80">
                  <FiMapPin className="text-secondary shrink-0 stroke-[2.5]" size={15} />
                  <span>Tamil Nadu, India · Collaborating worldwide</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Tactile Form Sticker Card */}
          <div ref={rightColRef} className="lg:col-span-7">
            <div className="bg-white border-2 border-foreground rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_#1E293B]">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-tertiary border-2 border-foreground text-foreground flex items-center justify-center shadow-[4px_4px_0px_#1E293B] animate-wiggle">
                    <FiCheckCircle size={32} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl text-foreground tracking-tight">
                    Awesome! Details Received
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 max-w-md leading-relaxed font-medium">
                    Your inquiry has been formatted. If WhatsApp did not open automatically, you can also send directly via email:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                    <a
                      href={`mailto:hamenathmurali@gmail.com?subject=Project%20Enquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
                        formData.description
                      )}`}
                      className="btn-candy text-xs sm:text-sm px-6 py-3"
                    >
                      <FiMail size={14} className="stroke-[2.5]" />
                      <span>Send via Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs sm:text-sm px-6 py-3"
                    >
                      <span>Submit Another</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                      Start a Project
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 font-medium mt-1">
                      Fill out the form below and I&apos;ll get back to you with ideas and next steps.
                    </p>
                  </div>

                  {/* Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                        Your Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-foreground text-foreground text-sm placeholder:text-muted-foreground focus:border-accent focus:shadow-[4px_4px_0px_#8B5CF6] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="business" className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Horizon Studios"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-foreground text-foreground text-sm placeholder:text-muted-foreground focus:border-accent focus:shadow-[4px_4px_0px_#8B5CF6] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                        Email Address <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. anand@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-foreground text-foreground text-sm placeholder:text-muted-foreground focus:border-accent focus:shadow-[4px_4px_0px_#8B5CF6] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-foreground text-foreground text-sm placeholder:text-muted-foreground focus:border-accent focus:shadow-[4px_4px_0px_#8B5CF6] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                      What are you looking to build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                          className={`px-3.5 py-1.5 rounded-full border-2 border-foreground text-xs font-heading font-bold transition-all cursor-pointer ${
                            formData.projectType === type
                              ? 'bg-accent text-white shadow-[3px_3px_0px_#1E293B] -translate-y-0.5'
                              : 'bg-white text-foreground hover:bg-tertiary hover:shadow-[2px_2px_0px_#1E293B]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                          className={`px-3.5 py-1.5 rounded-full border-2 border-foreground text-xs font-heading font-bold transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-tertiary text-foreground shadow-[3px_3px_0px_#1E293B] -translate-y-0.5'
                              : 'bg-white text-foreground hover:bg-secondary/30 hover:shadow-[2px_2px_0px_#1E293B]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-xs uppercase font-heading font-extrabold tracking-wider text-foreground">
                      Project Details &amp; Vision
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-foreground text-foreground text-sm placeholder:text-muted-foreground focus:border-accent focus:shadow-[4px_4px_0px_#8B5CF6] focus:outline-none transition-all resize-y min-h-28"
                    />
                  </div>

                  {/* Submit Candy Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-candy w-full py-4 text-base shadow-[5px_5px_0px_#1E293B] disabled:opacity-60 flex items-center justify-center gap-2 group/submit"
                  >
                    <span>{submitting ? 'Connecting...' : 'Send Inquiry via WhatsApp'}</span>
                    <span className="w-7 h-7 rounded-full bg-white text-foreground flex items-center justify-center border border-foreground/30 shadow-[1px_1px_0px_#1E293B] group-hover/submit:translate-x-1 transition-transform">
                      <FiSend size={13} className="stroke-[2.5]" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
