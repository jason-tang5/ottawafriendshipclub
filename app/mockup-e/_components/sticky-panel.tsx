"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { ORG } from "@/lib/content";
import { Button } from "@/components/ui/button";

type Section = { id: string; label: string };

export function StickyPanel({
  sections,
  activeId,
}: {
  sections: readonly Section[];
  activeId: string;
}) {
  return (
    <div>
      {/* Brand */}
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Ottawa Friendship Club logo"
          className="h-12 w-12 object-contain"
        />
        <span className="font-heading text-xl text-foreground leading-tight">
          {ORG.name}
        </span>
      </div>

      {/* Tagline (single page h1) */}
      <h1 className="mt-6 font-heading text-2xl lg:text-3xl leading-snug text-foreground">
        {ORG.tagline}
      </h1>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
          Get in touch
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={<a href="#programs" />}
          nativeButton={false}
        >
          See our programs
        </Button>
      </div>

      {/* Active-section nav (desktop only) */}
      <nav className="hidden lg:block mt-10" aria-label="Page sections">
        <ul className="space-y-3">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <li key={s.id} className="relative">
                {active && (
                  <motion.div
                    layoutId="active-rail"
                    className="absolute -left-3 top-1 bottom-1 w-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <a
                  href={`#${s.id}`}
                  aria-current={active ? "true" : undefined}
                  className={
                    "inline-block text-base transition-colors " +
                    (active
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Contact details */}
      <div className="mt-10 border-t border-border pt-6 space-y-3">
        <a
          href={`mailto:${ORG.email}`}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-4 w-4 text-primary shrink-0" />
          <span>{ORG.email}</span>
        </a>
        <a
          href={`tel:${ORG.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="h-4 w-4 text-primary shrink-0" />
          <span>{ORG.phone}</span>
        </a>
        <p className="flex items-center gap-3 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary shrink-0" />
          <span>{ORG.city}</span>
        </p>
      </div>
    </div>
  );
}
