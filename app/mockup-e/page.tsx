"use client";

import { useEffect, useState } from "react";

import {
  ORG,
  PROGRAMS,
  GROUPS,
  EVENTS,
  FUNDING,
  GROUP_CHAT,
} from "@/lib/content";

import { StickyPanel } from "./_components/sticky-panel";
import { SectionBlock } from "./_components/section-block";
import { ProgramsList } from "./_components/programs-list";
import { GroupsCards } from "./_components/groups-cards";
import { EventsTimeline } from "./_components/events-timeline";
import { FundingCard } from "./_components/funding-card";
import { ContactPanel } from "./_components/contact-panel";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "groups", label: "Groups" },
  { id: "events", label: "Events" },
  { id: "funding", label: "Funding" },
  { id: "contact", label: "Contact" },
] as const;

export default function MockupEPage() {
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — sticky editorial panel */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="py-10 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-16">
              <StickyPanel sections={SECTIONS} activeId={activeId} />
            </div>
          </div>

          {/* RIGHT — scrolling content blocks */}
          <div className="relative lg:col-span-7 xl:col-span-8 lg:border-l lg:border-border lg:pl-12">
            {/* subtle teal accent rail segment in the gutter (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-0 top-0 h-40 w-0.5 bg-primary"
            />

            <SectionBlock
              id="about"
              eyebrow="Who we are"
              title="About the club"
              revealHeading={false}
            >
              <p className="text-lg lg:text-xl leading-relaxed text-foreground max-w-prose">
                {ORG.intro}
              </p>
            </SectionBlock>

            <SectionBlock id="programs" eyebrow="What we do" title="Programs">
              <ProgramsList programs={PROGRAMS} />
            </SectionBlock>

            <SectionBlock id="groups" eyebrow="Move together" title="Dance groups">
              <GroupsCards groups={GROUPS} />
            </SectionBlock>

            <SectionBlock id="events" eyebrow="Coming up" title="Events">
              <EventsTimeline events={EVENTS} />
            </SectionBlock>

            <SectionBlock
              id="funding"
              eyebrow="Funded & accountable"
              title="How we're funded"
            >
              <FundingCard funding={FUNDING} />
            </SectionBlock>

            <SectionBlock id="contact" eyebrow="Join us" title="Get in touch">
              <ContactPanel org={ORG} groupChat={GROUP_CHAT} />
            </SectionBlock>
          </div>
        </div>
      </div>
    </main>
  );
}
