import { AlmanacHero } from "./_components/almanac-hero";
import { TimelineSpine } from "./_components/timeline-spine";
import { FundingNote } from "./_components/funding-note";
import { ContactFooter } from "./_components/contact-footer";

export default function MockupFPage() {
  return (
    <main className="relative bg-background text-foreground">
      {/* faint almanac dotted-grid paper texture */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.46 0.085 168 / 0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <AlmanacHero />
      <TimelineSpine />
      <FundingNote />
      <ContactFooter />
    </main>
  );
}
