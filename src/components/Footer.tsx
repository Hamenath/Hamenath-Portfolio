'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles, Heart } from 'lucide-react';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Hamenath',
    hoverColor: 'hover:bg-accent hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
    hoverColor: 'hover:bg-secondary hover:text-foreground',
  },
  {
    name: 'Twitter / X',
    icon: FiTwitter,
    url: 'https://x.com/HamenathOffi',
    hoverColor: 'hover:bg-tertiary hover:text-foreground',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==',
    hoverColor: 'hover:bg-secondary hover:text-foreground',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.',
    hoverColor: 'hover:bg-quaternary hover:text-foreground',
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:hamenathmurali@gmail.com',
    hoverColor: 'hover:bg-tertiary hover:text-foreground',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
  };

  return (
    <footer className="border-t-2 border-foreground bg-background py-14 sm:py-16 relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-dot-grid-subtle opacity-30 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b-2 border-foreground/15">
          
          {/* Brand Info */}
          <div className="max-w-sm">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="text-2xl font-heading font-extrabold tracking-tight text-foreground flex items-center gap-2 mb-2 group select-none"
            >
              <span>Hamenath</span>
              <span className="w-2.5 h-2.5 rounded-full bg-secondary border-2 border-foreground inline-block group-hover:scale-125 transition-transform" />
            </a>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
              Designing and engineering thoughtful, high-impact digital experiences for ambitious businesses and personal brands.
            </p>
          </div>

          {/* Essential Navigation Links */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-heading font-bold" aria-label="Footer Navigation">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="px-3 py-1.5 rounded-full border border-transparent hover:border-foreground hover:bg-tertiary text-foreground transition-all select-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links Row */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className={`w-10 h-10 rounded-xl bg-white border-2 border-foreground shadow-[2px_2px_0px_#1E293B] flex items-center justify-center text-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#1E293B] hover:rotate-3 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#1E293B] transition-all ${item.hoverColor}`}
                >
                  <Icon size={16} className="stroke-[2.5]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading font-bold text-muted-foreground">
          <p>&copy; {currentYear} Hamenath B. All rights reserved.</p>
          <p>Tamil Nadu, India · Worldwide Remote</p>
        </div>

      </div>
    </footer>
  );
}
