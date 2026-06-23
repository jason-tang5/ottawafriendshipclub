"use client";

import {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionLabel } from "./SectionLabel";
import type { Program } from "@/lib/content";

const ICONS = {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} as const;

export function ProgramsColumns({ programs }: { programs: Program[] }) {
  return (
    <section
      id="programs"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16"
    >
      <SectionLabel>What We Do</SectionLabel>

      <div className="mt-8 sm:columns-2 lg:columns-3 gap-8">
        {programs.map((program, i) => {
          const Icon = ICONS[program.icon as keyof typeof ICONS];
          return (
            <ScrollReveal
              key={program.title}
              delay={i * 0.06}
              y={14}
              className="break-inside-avoid"
            >
              <article className="mb-8 pb-6 border-b border-border last:border-0">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold leading-snug flex items-center gap-2">
                  <Icon className="size-5 text-primary shrink-0" aria-hidden />
                  {program.title}
                </h3>
                <p className="mt-2 text-[1.0625rem] leading-[1.7] text-foreground/90">
                  {program.body}
                </p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
