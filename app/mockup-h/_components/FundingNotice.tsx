"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FUNDING } from "@/lib/content";

export function FundingNotice() {
  return (
    <section id="funding" className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <ScrollReveal y={16}>
        <div className="rounded-2xl border-2 border-primary bg-card p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Public Notice
          </p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-semibold">
            Funded by the {FUNDING.funder}
          </h2>

          <p className="mt-4 text-xl sm:text-2xl">
            <span className="text-accent font-heading font-bold text-3xl">
              {FUNDING.amount}
            </span>{" "}
            through the {FUNDING.program}
            <span className="text-primary"> · </span>
            {FUNDING.term}
          </p>

          <p className="mt-4 text-[1.0625rem] leading-[1.75] max-w-3xl">
            {FUNDING.summary}
          </p>

          <div className="mt-6 border-t border-border pt-4">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-semibold">
              This grant funds:
            </p>
            <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2 list-none">
              {FUNDING.uses.map((use) => (
                <li
                  key={use}
                  className="text-[1.0625rem] flex items-start gap-2"
                >
                  <span className="text-primary" aria-hidden>
                    •
                  </span>
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
