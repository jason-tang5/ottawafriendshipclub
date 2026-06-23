import { CalendarDays, Clock, MapPin } from "lucide-react";

import type { EventItem } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function formatDate(date: string) {
  // Append a local-midnight time so "YYYY-MM-DD" is parsed in the local
  // timezone, not UTC — otherwise it can render as the previous day.
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function EventRow({ event }: { event: EventItem }) {
  const past = event.status === "past";
  return (
    <div
      className={
        "rounded-xl border border-border bg-card p-5 " +
        (past ? "opacity-90" : "")
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="font-heading text-lg text-foreground">{event.title}</h4>
          <p className="mt-1 text-muted-foreground max-w-prose">
            {event.description}
          </p>
        </div>
        <span
          className={
            "inline-flex shrink-0 items-center rounded-full px-3 py-1 text-sm " +
            (past
              ? "bg-muted text-muted-foreground"
              : "bg-primary/10 text-primary")
          }
        >
          {past ? "Past" : "Upcoming"}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-primary shrink-0" />
          {formatDate(event.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-primary shrink-0" />
          {event.time}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-primary shrink-0" />
          {event.location}
        </span>
      </div>
    </div>
  );
}

export function EventsTimeline({ events }: { events: EventItem[] }) {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="space-y-10">
      <ScrollReveal>
        <h3 className="font-heading text-lg text-foreground">Upcoming</h3>
        <div className="mt-4 space-y-4">
          {upcoming.map((event) => (
            <EventRow key={event.title} event={event} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <h3 className="font-heading text-lg text-muted-foreground">Past</h3>
        <div className="mt-4 space-y-4">
          {past.map((event) => (
            <EventRow key={event.title} event={event} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
