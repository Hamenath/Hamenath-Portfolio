'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const footerNav = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/919361661708?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Hamenath',
  },
  {
    name: 'Twitter / X',
    icon: FiTwitter,
    url: 'https://x.com/HamenathOffi',
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:hamenathmurali@gmail.com',
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
    <footer className="border-t border-white/6 bg-[#07080c] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/6">
          {/* Brand Info */}
          <div className="max-w-sm">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="text-lg font-semibold tracking-tight text-white font-heading inline-block mb-2"
            >
              Hamenath B.
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing and building modern websites, web applications, and AI digital experiences for ambitious businesses, startups, and personal brands.
            </p>
            <p className="text-[11px] text-slate-500 mt-2">
              Based in Tamil Nadu, India · Collaborating locally &amp; globally.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400" aria-label="Footer Navigation">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full bg-white/3 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Hamenath B. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Engineered with Next.js, TypeScript &amp; Vanilla Design System</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
