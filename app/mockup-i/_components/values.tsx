"use client";

import { Users, Heart, BookOpen, Sprout, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type Value = {
  en: string;
  zh: string;
  desc: string;
  Icon: LucideIcon;
  chip: string;
  text: string;
};

const VALUES: Value[] = [
  {
    en: "CONNECT",
    zh: "联谊",
    desc: "Building connections and lasting friendships",
    Icon: Users,
    chip: "bg-green-700",
    text: "text-green-700",
  },
  {
    en: "ENGAGE",
    zh: "参与",
    desc: "Engaging in activities and community life",
    Icon: Heart,
    chip: "bg-red-600",
    text: "text-red-600",
  },
  {
    en: "ENRICH",
    zh: "丰富",
    desc: "Enriching minds through learning and culture",
    Icon: BookOpen,
    chip: "bg-orange-500",
    text: "text-orange-500",
  },
  {
    en: "THRIVE",
    zh: "成长",
    desc: "Thriving in health, happiness and well-being",
    Icon: Sprout,
    chip: "bg-violet-600",
    text: "text-violet-600",
  },
];

export function Values() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            {VALUES.map((v, i) => (
              <li
                key={v.en}
                className={
                  "flex flex-col items-center px-4 text-center " +
                  (i > 0 ? "md:border-l md:border-border" : "")
                }
              >
                <span
                  className={
                    "flex h-16 w-16 items-center justify-center rounded-full " +
                    v.chip
                  }
                >
                  <v.Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
                <h3 className={"mt-4 text-lg font-bold " + v.text}>{v.en}</h3>
                <p className={"text-sm font-medium " + v.text}>{v.zh}</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-snug text-muted-foreground">
                  {v.desc}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
