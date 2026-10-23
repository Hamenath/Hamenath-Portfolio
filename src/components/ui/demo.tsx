"use client"

import PushpinTearFooter from "@/components/ui/pushpin-tear-footer"

// Re-branded: a print shop on vermilion stock, with its own copy and links.
export default function DemoEmber() {
  return (
    <div className="w-full bg-[#ff4a1c]">
      <PushpinTearFooter
        brand="ink."
        name="riso co."
        logoHref="#"
        logo={<span style={{ fontSize: "1.5em", fontWeight: 600, letterSpacing: "-0.03em" }}>ink.</span>}
        sheet="#ff4a1c"
        paper="#f1ede4"
        paperInk="#1b1712"
        seed={23}
        email="orders@example.com"
        newsletter={{ label: "new prints, every other friday", placeholder: "your@email" }}
        status={{ label: "taking print orders" }}
        mark="run 0412"
        timeZone="Europe/Berlin"
        timeLabel="BER"
        socials={[
          { icon: "ig", label: "Instagram", href: "#" },
          { icon: "x", label: "X", href: "#" },
        ]}
        columns={[
          {
            title: "shop",
            links: [{ label: "Zines", href: "#" }, { label: "Posters", href: "#" }, { label: "Paper", href: "#" }],
            cta: { label: "shop.", href: "#" },
          },
          {
            title: "studio",
            links: [{ label: "Stockists", href: "#" }, { label: "Wholesale", href: "#" }, { label: "Visit", href: "#" }],
            cta: { label: "order.", href: "mailto:orders@example.com" },
          },
        ]}
        sideLinks={[
          { icon: "globe", label: "shipping", href: "#" },
          { icon: "doc", label: "terms", href: "#" },
        ]}
        chat={{ label: "order" }}
        copyright="© 2026 ink. riso co."
        credit="printed in berlin"
        handle={{ label: "@ink.riso", href: "#" }}
      />
    </div>
  )
}
