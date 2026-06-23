"use client";

import React from "react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SectionBlock({
  id,
  eyebrow,
  title,
  children,
  // The first/above-the-fold block renders its heading statically so it is
  // never stuck at opacity:0 — scroll-reveal can't trigger for content that
  // is already at the top of the page on initial load.
  revealHeading = true,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  revealHeading?: boolean;
}) {
  const heading = (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-3xl lg:text-4xl text-foreground">
        {title}
      </h2>
    </>
  );

  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border py-16 first:border-t-0 first:pt-10 lg:py-24"
    >
      {revealHeading ? <ScrollReveal>{heading}</ScrollReveal> : heading}
      <div className="mt-8">{children}</div>
    </section>
  );
}
