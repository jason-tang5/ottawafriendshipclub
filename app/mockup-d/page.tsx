import { Music } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, GROUPS, FUNDING } from "@/lib/content";
import { SiteHeader } from "./_components/site-header";
import { Hero } from "./_components/hero";
import { ValueMarquee } from "./_components/value-marquee";
import { ProgramsRail } from "./_components/programs-rail";
import { EventsRail } from "./_components/events-rail";
import { Contact } from "./_components/contact";

export default function MockupD() {
  return (
    <main id="top" className="bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <ValueMarquee />
      <ProgramsRail />

      {/* Groups */}
      <section id="groups" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">
              Our dance groups
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Two active groups that meet every week to move, learn, and stay
              connected.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {GROUPS.map((g, i) => (
              <ScrollReveal key={g.name} delay={i * 0.12}>
                <article className="relative rounded-3xl border border-border bg-card p-8 md:p-10 h-full">
                  <Music
                    className="absolute right-8 top-8 h-7 w-7 text-primary/40"
                    aria-hidden
                  />
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground pr-10">
                    {g.name}
                    {g.nameZh && (
                      <span className="text-primary/70 text-xl ml-2 font-heading">
                        {g.nameZh}
                      </span>
                    )}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-sm px-3 py-1">
                      {g.schedule}
                    </span>
                    {g.members && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-sm px-3 py-1">
                        {g.members}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                    {g.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Funding strip — the single dark section */}
      <section className="w-full bg-foreground text-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <ScrollReveal>
            <p className="text-sm tracking-[0.18em] uppercase text-background/70">
              Proudly funded by
            </p>
            <h2 className="mt-3 font-heading text-2xl md:text-4xl text-background">
              {FUNDING.funder} &middot; {FUNDING.program}
            </h2>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-accent font-heading text-3xl md:text-4xl">
                  {FUNDING.amount}
                </p>
                <p className="mt-1 text-sm text-background/70">Federal grant</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl text-background">
                  {FUNDING.term}
                </p>
                <p className="mt-1 text-sm text-background/70">Funding term</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl text-background">
                  {FUNDING.uses.length}
                </p>
                <p className="mt-1 text-sm text-background/70">
                  Funded programs
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl text-background">
                  Ottawa
                </p>
                <p className="mt-1 text-sm text-background/70">Where we serve</p>
              </div>
            </div>

            <p className="mt-10 text-base md:text-lg text-background/85 max-w-3xl leading-relaxed">
              {FUNDING.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {FUNDING.uses.map((u) => (
                <span
                  key={u}
                  className="rounded-full border border-background/25 px-3 py-1 text-sm text-background/80"
                >
                  {u}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <EventsRail />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Ottawa Friendship Club logo"
              className="h-10 w-auto"
            />
            <span className="font-heading text-lg text-foreground">
              {ORG.name}
            </span>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>{ORG.tagline}</p>
            <p>{ORG.city}</p>
            <a
              href={`mailto:${ORG.email}`}
              className="text-primary hover:underline"
            >
              {ORG.email}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 md:px-8 mt-8 text-xs text-muted-foreground">
          <p>
            &copy; 2026 Ottawa Friendship Club. A volunteer-run non-profit.
          </p>
          <p>Supported by the Government of Canada.</p>
        </div>
      </footer>
    </main>
  );
}
