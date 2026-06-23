import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, FUNDING } from "@/lib/content";
import { Programs } from "@/components/sections/programs";
import { OurGroups } from "@/components/sections/our-groups";
import { Events } from "@/components/sections/events";
import { Contact } from "@/components/sections/contact";
import { AnimatedHero } from "@/components/ui/animated-hero";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "What we do" },
  { href: "#groups", label: "Our groups" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt={`${ORG.name} logo`}
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-lg font-semibold text-foreground">
                {ORG.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {ORG.tagline}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-base text-foreground/80 transition hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button
            size="lg"
            className="hidden sm:inline-flex"
            render={<a href="#contact" />}
            nativeButton={false}
          >
            Contact us
          </Button>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <AnimatedHero />

        {/* About */}
        <section id="about" className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                About the club
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                A place to stay active, informed, and connected
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  The {ORG.name} is run by volunteers for adults aged 55 and
                  over. We bring older members of our community together to move,
                  learn, and look out for one another.
                </p>
                <p>
                  Two dance groups meet every week, and throughout the year we
                  run practical workshops — on health, money, staying safe from
                  fraud and abuse, using technology, and gardening. Everything we
                  do is free for members and open to newcomers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What we do */}
        <Programs />

        {/* Our groups */}
        <OurGroups />

        {/* Funding & accountability */}
        <section id="funding" className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <div className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Funding &amp; accountability
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                  Supported by the {FUNDING.funder}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {FUNDING.summary}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="font-heading text-3xl font-semibold text-foreground">
                      {FUNDING.amount}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Federal grant ({FUNDING.term})
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="font-heading text-3xl font-semibold text-foreground">
                      55+
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Seniors served
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="font-heading text-3xl font-semibold text-foreground">
                      2 groups
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Meeting every week
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-medium text-foreground">
                    The grant funds:
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {FUNDING.uses.map((u) => (
                      <li
                        key={u}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  Funded in part through the{" "}
                  <span className="font-medium text-foreground">
                    {FUNDING.program}
                  </span>
                  . {/* TODO: confirm program name */}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Events */}
        <Events />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt={`${ORG.name} logo`}
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div className="font-heading text-lg font-semibold text-foreground">
                {ORG.name}
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A volunteer-run non-profit for seniors 55+ in {ORG.city}.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Supported by the {FUNDING.funder}.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground transition hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {ORG.name}
        </div>
      </footer>
    </div>
  );
}
