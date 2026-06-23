"use client";

import { Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EVENTS, type EventItem } from "@/lib/content";

function EventCard({ e }: { e: EventItem }) {
  const d = new Date(e.date + "T00:00:00");
  const month = d.toLocaleDateString("en-CA", { month: "short" });
  const day = d.getDate();
  const isPast = e.status === "past";

  return (
    <article
      className={`snap-start shrink-0 w-[300px] md:w-[360px] rounded-2xl border border-border bg-card p-7 flex flex-col gap-3 ${
        isPast ? "opacity-80" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-accent/12 text-accent w-14 py-2 shrink-0">
          <span className="text-xs uppercase font-medium">{month}</span>
          <span className="text-2xl font-heading leading-none">{day}</span>
        </div>
        <div className="flex flex-col gap-1">
          {isPast && (
            <span className="inline-flex w-fit rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Past
            </span>
          )}
          <h3 className="font-heading text-lg text-foreground">{e.title}</h3>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4 shrink-0" aria-hidden />
        <span>{e.time}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 shrink-0" aria-hidden />
        <span>{e.location}</span>
      </div>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {e.description}
      </p>
    </article>
  );
}

export function EventsRail() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <section id="events" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            What&apos;s coming up
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Drop in to a workshop or join us at our next gathering — everyone
            55+ is welcome.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]">
            {upcoming.map((e) => (
              <EventCard key={e.title} e={e} />
            ))}
          </div>
        </ScrollReveal>

        {past.length > 0 && (
          <ScrollReveal delay={0.12}>
            <h3 className="mt-12 text-sm uppercase tracking-wide text-muted-foreground">
              Recent gatherings
            </h3>
            <div className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]">
              {past.map((e) => (
                <EventCard key={e.title} e={e} />
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
