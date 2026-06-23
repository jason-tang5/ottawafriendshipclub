import Link from "next/link";

const MOCKUPS = [
  {
    href: "/mockup-a",
    name: "A — Snap Deck",
    desc: "Dark editorial. Full-viewport scroll-snap sections that spring/pop in on entry, live amber nav pill, cursor-magnetized hero headline.",
    tag: "Placeholder copy",
  },
  {
    href: "/mockup-b",
    name: "B — Sticky Pin Reveal",
    desc: "Warm magazine. Shrinking sticky nav and a pinned hero scrubbed directly by scroll (scale/blur/letter-spacing), bilingual EN/中文 toggle.",
    tag: "Real content",
  },
  {
    href: "/mockup-c",
    name: "C — Bento Pop",
    desc: "Colorful & playful. Sliding nav pill, asymmetric bento grid whose tiles pop up staggered with spring + rotate, gradient accents.",
    tag: "Placeholder copy",
  },
  {
    href: "/mockup-d",
    name: "D — Warm Marquee",
    desc: "Elegant horizontal motion. Infinite value marquee, scroll-snap program and event rails, calm cream palette with teal accents.",
    tag: "Real content",
  },
  {
    href: "/mockup-e",
    name: "E — Split Stage",
    desc: "Sticky left panel with a live active-section indicator beside a scrolling right column of editorial content blocks.",
    tag: "Real content",
  },
  {
    href: "/mockup-f",
    name: "F — Weekly Almanac",
    desc: "A vertical timeline spine that draws in on scroll — the club's weekly rhythm, programs, and dated events as milestones.",
    tag: "Real content",
  },
  {
    href: "/mockup-g",
    name: "G — Friendly & Accessible",
    desc: "The most accessibility-forward direction: a working text-size control, big soft cards, large tap targets, gentle motion.",
    tag: "Real content",
  },
  {
    href: "/mockup-h",
    name: "H — Community Broadsheet",
    desc: "Classic newspaper feel. Centered masthead, multi-column lead story with a drop cap, ruled listings — typography is the star.",
    tag: "Real content",
  },
  {
    href: "/mockup-i",
    name: "I — Bilingual Community",
    desc: "Warm, fully bilingual (EN + 中文) layout with the custom heart logo: photo hero, CONNECT·ENGAGE·ENRICH·THRIVE values, and Get Involved cards.",
    tag: "Real content · 中文",
  },
];

export default function MockupsIndex() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Ottawa Friendship Club
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground md:text-5xl">
        Landing page mockups
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Eight directions to compare for the club homepage. Each is a full,
        clickable page with its own layout and scroll-driven animation. Click any
        card to open it, then use your browser&rsquo;s back button to return here.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {MOCKUPS.map((m) => (
          <li key={m.href}>
            <Link
              href={m.href}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50 hover:bg-muted"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading text-2xl font-semibold text-foreground">
                  {m.name}
                </span>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {m.tag}
                </span>
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Open {m.href} →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-muted-foreground">
        The current homepage is at{" "}
        <Link
          href="/"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          /
        </Link>
        .
      </p>
    </main>
  );
}
