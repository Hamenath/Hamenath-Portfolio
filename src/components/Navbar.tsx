'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-md border-b border-white/6 py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2 group text-white font-heading font-semibold text-base sm:text-lg tracking-tight"
            aria-label="Hamenath - Back to top"
          >
            <span>Hamenath</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="btn-primary text-xs tracking-tight"
            >
              <span>Start a Project</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-base font-medium text-slate-200 hover:text-white transition-colors py-1.5 border-b border-white/4"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
