"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionLabel } from "./SectionLabel";
import type { EventItem } from "@/lib/content";

function longDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function monthAbbr(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
    month: "short",
  });
}

function dayNum(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
    day: "numeric",
  });
}

function EventRow({ event, i }: { event: EventItem; i: number }) {
  const upcoming = event.status === "upcoming";
  return (
    <ScrollReveal delay={i * 0.05} y={14}>
      <article className="grid grid-cols-[auto_1fr] gap-5 py-5 border-b border-border last:border-0">
        <time className="text-center" dateTime={event.date}>
          <span
            className={`block text-sm uppercase tracking-wide font-semibold ${
              upcoming ? "text-accent" : "text-muted-foreground"
            }`}
          >
            {monthAbbr(event.date)}
          </span>
          <span className="block font-heading text-3xl sm:text-4xl font-bold leading-none">
            {dayNum(event.date)}
          </span>
        </time>
        <div>
          <span
            className={`inline-block text-xs uppercase tracking-[0.15em] font-semibold ${
              upcoming ? "text-accent" : "text-muted-foreground"
            }`}
          >
            {upcoming ? "Upcoming" : "Past"}
          </span>
          <h4 className="font-heading text-xl font-semibold">{event.title}</h4>
          <p className="text-sm text-muted-foreground">
            {longDate(event.date)} · {event.time} · {event.location}
          </p>
          <p className="mt-1 text-[1.0625rem] leading-[1.7]">
            {event.description}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function EventsListing({ events }: { events: EventItem[] }) {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <section id="events" className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <SectionLabel>Events &amp; Notices</SectionLabel>

      {upcoming.length > 0 && (
        <>
          <h3 className="mt-8 mb-4 font-heading text-2xl font-semibold border-b-2 border-primary pb-1">
            Upcoming
          </h3>
          <div>
            {upcoming.map((event, i) => (
              <EventRow key={event.title} event={event} i={i} />
            ))}
          </div>
        </>
      )}

      {past.length > 0 && (
        <>
          <h3 className="mt-10 mb-4 font-heading text-2xl font-semibold border-b border-border pb-1 text-muted-foreground">
            Past
          </h3>
          <div>
            {past.map((event, i) => (
              <EventRow key={event.title} event={event} i={i} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
