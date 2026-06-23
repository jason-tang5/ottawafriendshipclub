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
import { PROGRAMS } from "@/lib/content";

const ICONS = {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} as const;

export function ProgramsRail() {
  return (
    <section id="programs" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            What we do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Real, funded activities that keep older adults healthy, informed,
            and connected.
          </p>
          <p className="mt-3 hidden md:block text-sm text-muted-foreground">
            Scroll sideways to see all six &rarr;
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-10 md:mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]">
            {PROGRAMS.map((p) => {
              const Icon = ICONS[p.icon as keyof typeof ICONS];
              return (
                <article
                  key={p.title}
                  className="snap-start shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-border bg-card p-7 flex flex-col gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
