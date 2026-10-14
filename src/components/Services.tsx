'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight } from 'react-icons/fi';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Give your business a professional online presence that builds trust and brings in genuine customer inquiries.',
    projectType: 'Business Website',
  },
  {
    number: '02',
    title: 'Startup Websites',
    description: 'Turn your product idea into a clear, modern website that explains your value and converts early visitors.',
    projectType: 'Startup Website',
  },
  {
    number: '03',
    title: 'Portfolio Websites',
    description: 'Showcase your work with a personal website designed to establish credibility and highlight your expertise.',
    projectType: 'Portfolio Website',
  },
  {
    number: '04',
    title: 'AI Integrations',
    description: 'Add useful AI-powered features to digital products, from intelligent conversational bots to automated workflows.',
    projectType: 'AI Integration',
  },
  {
    number: '05',
    title: 'Website Redesign',
    description: 'Give an existing website a cleaner, more modern experience with improved mobile performance and layout clarity.',
    projectType: 'Website Redesign',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray<HTMLElement>('.service-row');
    rows.forEach((row) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    });
  }, { scope: sectionRef });

  const selectService = (type: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      window.dispatchEvent(new CustomEvent('select-project-type', { detail: type }));
    }
  };

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white border-t border-[#eaeaea]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-14 sm:mb-20">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#737373] block mb-2">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] leading-tight">
            What I Do
          </h2>
          <p className="text-[#737373] text-base sm:text-lg mt-3 leading-relaxed">
            Thoughtful design and clean frontend engineering for businesses, startups, and individuals.
          </p>
        </div>

        {/* Minimal Editorial List */}
        <div className="flex flex-col border-t border-[#eaeaea]">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-row py-8 sm:py-10 border-b border-[#eaeaea] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start sm:items-center group"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-[#a3a3a3]">
                  {service.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] tracking-tight">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="md:col-span-2 flex md:justify-end pt-2 md:pt-0">
                <button
                  onClick={() => selectService(service.projectType)}
                  className="text-xs font-medium text-[#737373] group-hover:text-[#171717] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <FiArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
