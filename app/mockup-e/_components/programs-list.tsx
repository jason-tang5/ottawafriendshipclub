import {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} from "lucide-react";

import type { Program } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const ICONS = {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} as const;

export function ProgramsList({ programs }: { programs: Program[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
      {programs.map((program, i) => {
        const Icon = ICONS[program.icon as keyof typeof ICONS];
        return (
          <ScrollReveal key={program.title} delay={i * 0.05}>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground">
                  {program.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{program.body}</p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
