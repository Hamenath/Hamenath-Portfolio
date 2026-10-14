'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useGSAP(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, { scope: headerRef });

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#eaeaea] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Hamenath Wordmark */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="text-lg font-semibold tracking-tight text-[#171717] font-heading hover:opacity-80 transition-opacity"
            aria-label="Hamenath - Back to top"
          >
            Hamenath
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-[#737373] hover:text-[#171717] transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="btn-primary text-xs"
            >
              <span>Start a Project</span>
              <FiArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#171717] hover:text-black transition-colors focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 z-40 bg-white border border-[#eaeaea] rounded-2xl p-6 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-[#171717] hover:text-black transition-colors py-1.5 border-b border-[#eaeaea]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="btn-primary w-full text-center text-sm py-3"
              >
                Start a Project
              </a>
              <a
                href="https://wa.me/919361661708?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center text-sm py-3"
              >
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
