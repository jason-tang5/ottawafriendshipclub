"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/content";

const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Groups", href: "#groups" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/0"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-primary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Ottawa Friendship Club logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="hidden sm:block font-heading text-lg text-foreground">
            {ORG.name}
          </span>
        </a>

        <nav className="hidden md:flex gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors text-base rounded-sm focus-visible:outline-2 focus-visible:outline-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          size="default"
          render={<a href="#contact" />}
          nativeButton={false}
        >
          Contact us
        </Button>
      </div>
    </header>
  );
}
