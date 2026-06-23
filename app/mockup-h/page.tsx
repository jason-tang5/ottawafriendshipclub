import { ORG, PROGRAMS, GROUPS, EVENTS } from "@/lib/content";
import { Masthead } from "./_components/Masthead";
import { ProgramsColumns } from "./_components/ProgramsColumns";
import { GroupsFeature } from "./_components/GroupsFeature";
import { EventsListing } from "./_components/EventsListing";
import { FundingNotice } from "./_components/FundingNotice";
import { ContactBackPage } from "./_components/ContactBackPage";

const NAV = [
  { href: "#lead", label: "The Club" },
  { href: "#programs", label: "What We Do" },
  { href: "#groups", label: "Our Groups" },
  { href: "#events", label: "Events" },
  { href: "#funding", label: "Funding" },
  { href: "#contact", label: "Contact" },
];

export default function MockupH() {
  const dateline = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const year = new Date().getFullYear();

  return (
    <main className="bg-background text-foreground">
      <Masthead dateline={dateline} />

      {/* Section nav */}
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 py-3 border-b border-border">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-medium uppercase tracking-[0.12em]">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-sm text-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Lead story */}
      <section
        id="lead"
        className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16"
      >
        <h2 className="font-heading font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl max-w-4xl">
          {ORG.tagline}
        </h2>
        <p className="mt-4 text-xl sm:text-2xl leading-snug text-muted-foreground font-heading italic max-w-3xl">
          {ORG.intro}
        </p>

        <div className="mt-6 mb-8 border-t border-border">
          <p className="pt-2 text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
            From the Ottawa Friendship Club
          </p>
        </div>

        <div className="md:columns-2 gap-10 [column-rule:1px_solid] [column-rule-color:var(--border)]">
          <p className="mb-4 text-[1.0625rem] leading-[1.75] break-inside-avoid first-letter:font-heading first-letter:text-accent first-letter:text-7xl first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold">
            Every week, older adults across Ottawa gather to move, learn, and
            stay connected. Two weekly dance groups keep members active, while
            hands-on workshops cover the things that matter most later in life —
            staying healthy, managing money safely, and using everyday
            technology with confidence.
          </p>
          <p className="mb-4 text-[1.0625rem] leading-[1.75] break-inside-avoid">
            Run entirely by volunteers, the club also offers gardening days and
            sessions on recognizing and preventing elder abuse. It is a place to
            make friends and to find practical help — a small community looking
            out for its seniors, 55 and over.
          </p>
        </div>

        <figure className="mt-10 border border-border p-2 bg-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/club-dance-wide.jpg"
            alt="Ottawa Friendship Club members dancing together in bright costumes at the Ottawa Chinatown street festival"
            className="w-full h-[300px] sm:h-[420px] object-cover"
          />
          <figcaption className="mt-2 text-sm text-muted-foreground italic px-1">
            Members of the club&apos;s weekly dance groups.
          </figcaption>
        </figure>
      </section>

      <ProgramsColumns programs={PROGRAMS} />
      <GroupsFeature groups={GROUPS} />
      <EventsListing events={EVENTS} />
      <FundingNotice />
      <ContactBackPage />

      {/* Footer */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="border-t-2 border-primary" />
        <div className="mt-1 border-t border-primary/60" />
      </div>
      <footer className="mx-auto max-w-6xl px-5 sm:px-8 py-8 text-center text-sm text-muted-foreground">
        <p className="font-heading text-lg text-foreground">{ORG.name}</p>
        <p className="mt-1">
          © {year} {ORG.name} · {ORG.city}
        </p>
        <p className="mt-1">A volunteer-run non-profit for seniors 55+.</p>
      </footer>
    </main>
  );
}
