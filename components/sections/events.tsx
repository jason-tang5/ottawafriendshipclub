import { EVENTS, SECTIONS, type EventItem } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

function formatDate(dateStr: string): string {
  if (dateStr === "") return "Date TBD";
  // Append T00:00:00 to avoid timezone-shift issues when parsing YYYY-MM-DD
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function EventCard({ event, past }: { event: EventItem; past?: boolean }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6${past ? " opacity-80" : ""}`}
    >
      <h4 className="text-xl font-semibold text-foreground">{event.title}</h4>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-4 shrink-0 text-primary" />
          {formatDate(event.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-4 shrink-0 text-primary" />
          {event.time}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-4 shrink-0 text-primary" />
          {event.location}
        </span>
      </div>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        {event.description}
      </p>
      {event.capacity && (
        <div className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="size-4 shrink-0 text-primary" />
          {event.capacity}
        </div>
      )}
      {event.longDescription && (
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {event.longDescription}
        </p>
      )}
      {event.speakers && event.speakers.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-foreground">Guest speakers</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {event.speakers.map((speaker) => (
              <li key={speaker}>{speaker}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Events() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <section id="events" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Header */}
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {SECTIONS.events.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            {SECTIONS.events.heading}
          </h2>
        </ScrollReveal>

        {/* Upcoming events */}
        {upcoming.length > 0 && (
          <ScrollReveal delay={0.1}>
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground">
                Upcoming
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {upcoming.map((event) => (
                  <EventCard key={`${event.title}-${event.date}`} event={event} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mt-14">
              <h3 className="text-xl font-semibold text-foreground">
                Past events
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {past.map((event) => (
                  <EventCard
                    key={`${event.title}-${event.date}`}
                    event={event}
                    past
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
