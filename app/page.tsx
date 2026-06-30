import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, ABOUT } from "@/lib/content";
import { Programs } from "@/components/sections/programs";
import { OurGroups } from "@/components/sections/our-groups";
import { Events } from "@/components/sections/events";
import { Gallery } from "@/components/sections/gallery";
import { Resources } from "@/components/sections/resources";
import { Contact } from "@/components/sections/contact";
import { AnimatedHero } from "@/components/ui/animated-hero";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "What we do" },
  { href: "#groups", label: "Our groups" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#resources", label: "Resources" },
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
                {ORG.nameZh}
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
                {ABOUT.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                {ABOUT.heading}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {ABOUT.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What we do */}
        <Programs />

        {/* Our groups */}
        <OurGroups />

        {/* Events */}
        <Events />

        {/* Gallery */}
        <Gallery />

        {/* Resources */}
        <Resources />

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
