'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const footerNav = [
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
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/hamenathbdesigner',
  },
  {
    name: 'Twitter / X',
    icon: FiTwitter,
    url: 'https://x.com/HamenathOffi',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/919361661708?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.',
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
    <footer className="border-t border-[#eaeaea] bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#eaeaea]">
          {/* Brand Info */}
          <div className="max-w-sm">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, '#home')}
              className="text-lg font-semibold tracking-tight text-[#171717] font-heading inline-block mb-1.5"
            >
              Hamenath
            </a>
            <p className="text-xs text-[#737373] leading-relaxed">
              Designing and building thoughtful websites for businesses, startups, and personal brands.
            </p>
          </div>

          {/* Essential Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#737373]" aria-label="Footer Navigation">
            {footerNav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="hover:text-[#171717] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
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
                  className="w-8 h-8 rounded-full bg-[#f7f7f7] border border-[#eaeaea] flex items-center justify-center text-[#737373] hover:text-[#171717] hover:border-[#171717] transition-all"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3a3a3]">
          <p>&copy; {currentYear} Hamenath. All rights reserved.</p>
          <p>Based in Tamil Nadu · Built with Next.js</p>
        </div>

      </div>
    </footer>
  );
}
