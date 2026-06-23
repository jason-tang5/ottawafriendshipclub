import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ORG,
  PROGRAMS,
  GROUPS,
  EVENTS,
  FUNDING,
  GROUP_CHAT,
} from "@/lib/content";
import { SiteHeader } from "./_components/site-header";
import { Hero } from "./_components/hero";
import { ProgramCard } from "./_components/program-card";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-bold tracking-wide text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export default function MockupG() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />

        {/* PROGRAMS */}
        <section id="programs" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What we do"
              title="Programs for staying healthy and connected"
              intro="Funded, friendly activities that help older adults in Ottawa stay informed, active, and never alone."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((program, i) => (
              <ProgramCard key={program.title} program={program} index={i} />
            ))}
          </div>
        </section>

        {/* DANCE GROUPS */}
        <section id="groups" className="bg-primary/5 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Move together"
                title="Our weekly dance groups"
                intro="Two lively groups that meet every week — come for the steps, stay for the friendships."
              />
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {GROUPS.map((group, i) => (
                <ScrollReveal key={group.name} delay={i * 0.08}>
                  <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {group.name}
                      </h3>
                      {group.nameZh ? (
                        <span className="text-xl text-muted-foreground">
                          {group.nameZh}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                        <CalendarDays className="size-4" aria-hidden="true" />
                        {group.schedule}
                      </span>
                      {group.members ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          <Users className="size-4" aria-hidden="true" />
                          {group.members}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {group.body}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section id="events" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Mark your calendar"
              title="Upcoming events"
              intro="Free to attend and open to all members. Come as you are."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {upcoming.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-3xl border-2 border-primary/20 bg-card p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                      Upcoming
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-base font-medium text-foreground">
                      <CalendarDays
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                      {formatDate(event.date)}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-base text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4" aria-hidden="true" />
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4" aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {past.length > 0 && (
            <div className="mt-14">
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Recently at the club
                </h3>
              </ScrollReveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {past.map((event, i) => (
                  <ScrollReveal key={event.title} delay={i * 0.06}>
                    <article className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-muted/40 p-6">
                      <span className="text-sm font-medium text-muted-foreground">
                        {formatDate(event.date)}
                      </span>
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {event.title}
                      </h4>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* FUNDING */}
        <section id="funding" className="bg-foreground py-20 text-background">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="text-center">
                <span className="text-sm font-bold tracking-wide text-background/70 uppercase">
                  Funded &amp; accountable
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                  Supported by the {FUNDING.funder}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-background/80">
                  {FUNDING.summary}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Grant amount", value: FUNDING.amount },
                  { label: "Funding term", value: FUNDING.term },
                  { label: "Program", value: FUNDING.program },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-background/15 bg-background/5 p-6 text-center"
                  >
                    <div className="font-heading text-2xl font-bold text-background">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-base text-background/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-background/15 bg-background/5 p-7">
                <h3 className="font-heading text-xl font-semibold text-background">
                  How the funding is used
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {FUNDING.uses.map((use) => (
                    <li
                      key={use}
                      className="flex items-start gap-3 text-base text-background/85"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-background"
                        aria-hidden="true"
                      />
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <div>
                <span className="text-sm font-bold tracking-wide text-accent uppercase">
                  Come say hello
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  We&apos;d love to meet you
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {ORG.tagline} Reach out by email or phone, or scan our{" "}
                  {GROUP_CHAT.platform}{" "}code to join the members&apos; group
                  chat.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={`mailto:${ORG.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40 hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-base">
                      <span className="block font-medium text-muted-foreground">
                        Email us
                      </span>
                      <span className="font-semibold text-foreground">
                        {ORG.email}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`tel:${ORG.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40 hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-base">
                      <span className="block font-medium text-muted-foreground">
                        Call us
                      </span>
                      <span className="font-semibold text-foreground">
                        {ORG.phone}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center gap-5 rounded-3xl bg-primary p-8 text-center text-primary-foreground">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary-foreground/15">
                  <MessageCircle className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-semibold">
                  {GROUP_CHAT.label}
                </h3>
                <p className="max-w-xs text-base leading-relaxed text-primary-foreground/85">
                  {GROUP_CHAT.note}
                </p>
                <div className="flex size-44 items-center justify-center rounded-2xl border-2 border-dashed border-primary-foreground/40 bg-primary-foreground/10 px-6 text-center text-base font-medium text-primary-foreground/80">
                  {GROUP_CHAT.platform} QR code coming soon
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-base text-muted-foreground sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt={`${ORG.name} logo`}
              className="size-9 rounded-full bg-card object-contain p-0.5 ring-1 ring-border"
            />
            <span className="font-heading font-semibold text-foreground">
              {ORG.name}
            </span>
          </div>
          <p>
            {ORG.city} · A volunteer-run non-profit for seniors 55+
          </p>
        </div>
      </footer>
    </div>
  );
}
