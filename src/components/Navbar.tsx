'use client';

import React from 'react';
import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu';
import { scrollToSection } from '@/lib/lenis';

const socialItems: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/Hamenath' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/hamenathbdesigner' },
  { label: 'WhatsApp', link: 'https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.' },
  { label: 'X / Twitter', link: 'https://x.com/HamenathOffi' },
];

export default function Navbar() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const menuItems: StaggeredMenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home section', link: '#home', onClick: (e) => scrollTo(e, '#home') },
    { label: 'Work', ariaLabel: 'View selected projects', link: '#work', onClick: (e) => scrollTo(e, '#work') },
    { label: 'Services', ariaLabel: 'View freelance services', link: '#services', onClick: (e) => scrollTo(e, '#services') },
    { label: 'About', ariaLabel: 'About Hamenath', link: '#about', onClick: (e) => scrollTo(e, '#about') },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact', onClick: (e) => scrollTo(e, '#contact') },
  ];

  return (
    <StaggeredMenu
      position="right"
      isFixed={true}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      colors={['#8B5CF6', '#F472B6', '#FFFDF5']}
      menuButtonColor="#1E293B"
      openMenuButtonColor="#1E293B"
      accentColor="#8B5CF6"
      logoNode={
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="text-xl font-extrabold tracking-tight text-foreground font-heading hover:text-accent transition-colors flex items-center gap-1.5 group select-none"
          aria-label="Hamenath - Back to top"
        >
          <span>Hamenath</span>
          <span className="w-2.5 h-2.5 rounded-full bg-secondary border-2 border-foreground inline-block group-hover:scale-125 transition-transform" />
        </a>
      }
      extraContent={
        <div className="flex flex-col gap-3 pt-3">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn-candy w-full text-center text-sm py-3 justify-center shadow-[3px_3px_0px_#1E293B]"
          >
            Start a Project
          </a>
          <a
            href="https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full text-center text-sm py-3 justify-center shadow-[3px_3px_0px_#1E293B]"
          >
            Chat on WhatsApp
          </a>
        </div>
      }
    />
  );
}
