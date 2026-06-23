"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Music,
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";
import { GROUPS, PROGRAMS, EVENTS } from "@/lib/content";
import { TimelineEntry } from "./timeline-entry";
import { fmtDate, fmtDay } from "./format";

const ICONS = {
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Sprout,
  Music,
} as const;

const upcoming = EVENTS.filter((e) => e.status === "upcoming").sort((a, b) =>
  a.date.localeCompare(b.date)
);
const past = EVENTS.filter((e) => e.status === "past").sort((a, b) =>
  b.date.localeCompare(a.date)
);

/** Hollow-ring node used by section header entries. */
const ringNode =
  "h-8 w-8 sm:h-10 sm:w-10 border-2 border-primary bg-background text-primary";

export function TimelineSpine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // running index across the entire spine drives top-to-bottom stagger
  let i = 0;
  const next = () => i++;

  return (
    <section id="timeline" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <div ref={ref} className="relative">
        {/* RAIL — static faint track */}
        <div className="absolute top-0 bottom-0 left-[15px] w-[2px] bg-border sm:left-[19px]" />
        {/* RAIL — animated drawing progress */}
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 bottom-0 left-[15px] w-[2px] origin-top bg-primary sm:left-[19px]"
        />

        <div className="space-y-12 sm:space-y-16">
          {/* ===== GROUP A: Weekly rhythm ===== */}
          <SectionHeader
            index={next()}
            eyebrow={`${String(GROUPS.length).padStart(2, "0")} GROUPS`}
            title="Weekly rhythm"
          />

          {GROUPS.map((group) => (
            <TimelineEntry
              key={group.name}
              index={next()}
              node={<Music className="h-4 w-4 sm:h-5 sm:w-5" />}
            >
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl">{group.name}</h3>
                  {group.nameZh && (
                    <span className="text-base font-normal text-muted-foreground">
                      {group.nameZh}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 font-mono text-sm text-secondary-foreground">
                    {group.schedule}
                  </span>
                  {group.members && (
                    <span className="rounded-full border border-accent/40 px-3 py-1 text-sm text-accent">
                      {group.members}
                    </span>
                  )}
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {group.body}
                </p>
              </div>
            </TimelineEntry>
          ))}

          {/* ===== GROUP B: What we do ===== */}
          <SectionHeader
            index={next()}
            eyebrow={`${String(PROGRAMS.length).padStart(2, "0")} PROGRAMS`}
            title="What we do"
          />

          {PROGRAMS.map((program) => {
            const Icon = ICONS[program.icon as keyof typeof ICONS];
            return (
              <TimelineEntry
                key={program.title}
                index={next()}
                node={<Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
              >
                <div className="pl-0">
                  <h3 className="font-heading text-lg text-foreground sm:text-xl">
                    {program.title}
                  </h3>
                  <p className="mt-1.5 text-muted-foreground">{program.body}</p>
                </div>
              </TimelineEntry>
            );
          })}

          {/* ===== GROUP C: On the calendar ===== */}
          <SectionHeader
            index={next()}
            eyebrow="UPCOMING & PAST"
            title="On the calendar"
          />

          {upcoming.map((e) => (
            <TimelineEntry
              key={e.title}
              index={next()}
              nodeClassName="bg-accent text-accent-foreground"
              node={<CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />}
            >
              <div className="rounded-2xl border border-accent/30 bg-card p-5 shadow-sm sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-medium text-accent">
                    {fmtDate(e.date)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {fmtDay(e.date)}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-xl sm:text-2xl">{e.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    <Clock className="mr-1 inline h-4 w-4" />
                    {e.time}
                  </span>
                  <span>
                    <MapPin className="mr-1 inline h-4 w-4" />
                    {e.location}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{e.description}</p>
              </div>
            </TimelineEntry>
          ))}

          {/* sub-label separating upcoming from past */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-8 shrink-0 sm:w-10" />
            <p className="min-w-0 flex-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              — Earlier this year —
            </p>
          </div>

          {past.map((e) => (
            <TimelineEntry
              key={e.title}
              index={next()}
              muted
              node={<CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />}
            >
              <div className="rounded-2xl border border-border bg-card/60 p-5 opacity-90 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    Past
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {fmtDate(e.date)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {fmtDay(e.date)}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-xl text-foreground sm:text-2xl">
                  {e.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    <Clock className="mr-1 inline h-4 w-4" />
                    {e.time}
                  </span>
                  <span>
                    <MapPin className="mr-1 inline h-4 w-4" />
                    {e.location}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{e.description}</p>
              </div>
            </TimelineEntry>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: number;
  eyebrow: string;
  title: string;
}) {
  return (
    <TimelineEntry
      index={index}
      nodeClassName={ringNode}
      node={<span className="h-2 w-2 rounded-full bg-primary" />}
    >
      <div className="pt-0.5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-heading text-2xl sm:text-3xl">{title}</h2>
      </div>
    </TimelineEntry>
  );
}
