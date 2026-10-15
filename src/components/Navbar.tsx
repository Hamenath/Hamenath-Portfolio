'use client';

import React from 'react';
import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu';

const socialItems: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/Hamenath' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/hamenathbdesigner' },
  { label: 'WhatsApp', link: 'https://wa.me/919361661708?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.' },
  { label: 'X / Twitter', link: 'https://x.com/HamenathOffi' },
];

export default function Navbar() {
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
      colors={['#171717', '#262626', '#f0f0f0']}
      menuButtonColor="#171717"
      openMenuButtonColor="#171717"
      accentColor="#171717"
      logoNode={
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="text-lg font-semibold tracking-tight text-[#171717] font-heading hover:opacity-80 transition-opacity"
          aria-label="Hamenath - Back to top"
        >
          Hamenath
        </a>
      }
      extraContent={
        <div className="flex flex-col gap-3 pt-2">
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
      }
    />
  );
}
