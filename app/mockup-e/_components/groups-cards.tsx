import { CalendarDays, Users } from "lucide-react";

import type { Group } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function GroupsCards({ groups }: { groups: Group[] }) {
  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.name}
            className="rounded-2xl border border-border bg-card p-6 lg:p-7"
          >
            <h3 className="font-heading text-xl text-foreground">
              {group.name}
              {group.nameZh && (
                <span className="ml-2 text-muted-foreground">{group.nameZh}</span>
              )}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {group.schedule}
              </span>
              {group.members && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  <Users className="h-3.5 w-3.5" />
                  {group.members}
                </span>
              )}
            </div>
            <p className="mt-4 text-muted-foreground">{group.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
