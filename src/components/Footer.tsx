'use client';

import PushpinTearFooter from '@/components/ui/pushpin-tear-footer';

export default function Footer() {
  return (
    <div id="footer" className="w-full relative z-20 border-t-2 border-foreground">
      <PushpinTearFooter
        brand="hamenath."
        name="Hamenath B"
        logoHref="#home"
        logo={
          <span className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight flex items-center gap-1.5 select-none hover:scale-105 transition-transform">
            <span>Hamenath</span>
            <span className="w-2.5 h-2.5 rounded-full bg-secondary border-2 border-white inline-block" />
          </span>
        }
        sheet="#8B5CF6"
        paper="#FFFDF5"
        sheetInk="#FFFFFF"
        paperInk="#1E293B"
        seed={26}
        email="hamenathmurali@gmail.com"
        newsletter={{
          label: "subscribe for new web projects & AI experiments",
          placeholder: "your@email.com",
        }}
        status={{
          label: "available for select freelance projects",
          href: "https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.",
        }}
        mark="HB / 2026"
        timeZone="Asia/Kolkata"
        timeLabel="IST"
        socials={[
          { icon: "github", label: "GitHub", href: "https://github.com/Hamenath" },
          { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/hamenathbdesigner" },
          { icon: "x", label: "X / Twitter", href: "https://x.com/HamenathOffi" },
          { icon: "ig", label: "Instagram", href: "https://www.instagram.com/editor_ak._?igsh=MXI0MmlhajI1YWRvNg==" },
        ]}
        columns={[
          {
            title: "navigation",
            links: [
              { label: "Home", href: "#home" },
              { label: "Work", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ],
            cta: { label: "say hello.", href: "mailto:hamenathmurali@gmail.com" },
          },
          {
            title: "selected work",
            links: [
              { label: "Lanzy", href: "https://lanzy.online" },
              { label: "ALLO AI", href: "https://allo-ai.vercel.app/" },
              { label: "iDEED", href: "https://ideed.onrender.com/" },
              { label: "SkillMate AI", href: "https://github.com/hamenath" },
            ],
            cta: {
              label: "let's build.",
              href: "https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.",
            },
          },
        ]}
        sideLinks={[
          { icon: "shield", label: "privacy policy", href: "#" },
          { icon: "doc", label: "freelance terms", href: "#" },
        ]}
        chat={{
          label: "chat on whatsapp",
          href: "https://wa.me/918778707086?text=Hi%20Hamenath,%20I%20would%20like%20to%20discuss%20a%20website%20project.",
        }}
        copyright="© 2026 Hamenath B. All rights reserved."
        credit="crafted with craft & care"
        handle={{ label: "@HamenathOffi", href: "https://x.com/HamenathOffi" }}
        height="min(860px, 100svh)"
        fontSans="var(--font-sans)"
      />
    </div>
  );
}
