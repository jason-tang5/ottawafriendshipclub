"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionLabel } from "./SectionLabel";
import type { Group } from "@/lib/content";

export function GroupsFeature({ groups }: { groups: Group[] }) {
  return (
    <section id="groups" className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <SectionLabel>Our Groups</SectionLabel>

      <div className="mt-8 grid gap-10 md:grid-cols-2 divide-y divide-border md:divide-y-0 md:divide-x md:[&>*:first-child]:pr-10 md:[&>*:last-child]:pl-10">
        {groups.map((group, i) => {
          const meta = [group.schedule, group.members]
            .filter(Boolean)
            .join(" · ");
          return (
            <ScrollReveal
              key={group.name}
              delay={i * 0.1}
              y={16}
              className="pt-8 first:pt-0 md:pt-0"
            >
              <article>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold">
                  {group.name}
                  {group.nameZh ? (
                    <span className="ml-2 text-primary font-normal">
                      {group.nameZh}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {meta}
                </p>
                <p className="mt-3 text-[1.0625rem] leading-[1.75]">
                  {group.body}
                </p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
