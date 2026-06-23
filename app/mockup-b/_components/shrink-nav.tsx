"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLang, LangToggle } from "./lang";

export function ShrinkNav() {
  const [shrunk, setShrunk] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        shrunk
          ? "border-border bg-background/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 transition-all duration-300 ease-out ${
          shrunk ? "py-3" : "py-6"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={t.brand}
            className={`w-auto shrink-0 object-contain transition-all duration-300 ease-out ${
              shrunk ? "h-9" : "h-12"
            }`}
          />
          <span
            className={`font-heading font-semibold tracking-tight text-foreground transition-all duration-300 ease-out ${
              shrunk ? "text-lg" : "text-2xl"
            }`}
          >
            {t.brand}
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {t.nav.map((n, i) => (
            <a
              key={`${n.href}-${i}`}
              href={n.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            size={shrunk ? "default" : "lg"}
          >
            {t.navCta}
          </Button>
        </div>
      </div>
    </header>
  );
}
