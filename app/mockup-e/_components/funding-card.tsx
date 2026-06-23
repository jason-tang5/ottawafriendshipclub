import { Check } from "lucide-react";

import type { FUNDING as FundingType } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FundingCard({ funding }: { funding: typeof FundingType }) {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-border bg-primary/5 p-6 lg:p-8">
        <p className="text-muted-foreground">
          Supported by the{" "}
          <span className="font-medium text-foreground">{funding.funder}</span> —{" "}
          {funding.program}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col">
            <span className="font-heading text-2xl lg:text-3xl text-primary">
              {funding.amount}
            </span>
            <span className="text-sm text-muted-foreground">Grant</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl lg:text-3xl text-primary">
              {funding.term}
            </span>
            <span className="text-sm text-muted-foreground">Funding term</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl lg:text-3xl text-primary">
              {String(funding.uses.length)}
            </span>
            <span className="text-sm text-muted-foreground">
              Funded programs
            </span>
          </div>
        </div>

        <p className="mt-6 text-foreground max-w-prose">{funding.summary}</p>

        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {funding.uses.map((use) => (
            <li
              key={use}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Check className="h-4 w-4 text-primary shrink-0" />
              {use}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
