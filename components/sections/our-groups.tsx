import { GROUPS, type Group } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Users, CalendarClock } from "lucide-react";

function GroupCard({ group }: { group: Group }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <h3 className="text-2xl font-semibold text-foreground">{group.name}</h3>
      {group.nameZh && (
        <p className="mt-1 text-lg text-muted-foreground">{group.nameZh}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {group.members && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Users className="size-4 shrink-0" />
            {group.members}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <CalendarClock className="size-4 shrink-0" />
          {group.schedule}
        </span>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {group.body}
      </p>
    </div>
  );
}

export function OurGroups() {
  return (
    <section id="groups" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our groups
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Two dance groups, meeting every week
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {GROUPS.map((group) => (
              <GroupCard key={group.name} group={group} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
