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
import type { Program } from "@/lib/content";

const ICONS = {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} as const;

export function ProgramCard({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  const Icon = ICONS[program.icon as keyof typeof ICONS];

  return (
    <ScrollReveal delay={index * 0.06} className="h-full">
      <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {Icon ? <Icon className="size-7" aria-hidden="true" /> : null}
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {program.title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {program.body}
        </p>
      </article>
    </ScrollReveal>
  );
}
