"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FUNDING } from "@/lib/content";

export function FundingNote() {
  return (
    <ScrollReveal className="mx-auto my-16 max-w-3xl px-5 sm:my-24 sm:px-8">
      <section className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
          {FUNDING.funder} · {FUNDING.term}
        </p>
        <h2 className="mt-3 font-heading text-2xl sm:text-3xl">
          Funded by the {FUNDING.program}
        </h2>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-heading text-4xl sm:text-5xl">
            {FUNDING.amount}
          </span>
          <span className="text-sm text-primary-foreground/80">
            in grant funding, {FUNDING.term}
          </span>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/90">
          {FUNDING.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {FUNDING.uses.map((use) => (
            <span
              key={use}
              className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-sm"
            >
              {use}
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
