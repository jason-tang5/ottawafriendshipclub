import { GraduationCap, PiggyBank, ShieldCheck, Smartphone, Sprout, Music } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROGRAMS, SECTIONS } from "@/lib/content";

const ICONS = { GraduationCap, PiggyBank, ShieldCheck, Smartphone, Sprout, Music } as const;

export function Programs() {
  return (
    <section id="programs" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{SECTIONS.programs.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            {SECTIONS.programs.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {SECTIONS.programs.intro}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => {
            const Icon = ICONS[program.icon as keyof typeof ICONS];
            return (
              <ScrollReveal key={program.title} delay={index * 0.08}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{program.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{program.body}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
