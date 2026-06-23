"use client";

import { Users, Heart, HandHeart, ChevronRight, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type Card = {
  en: string;
  zh: string;
  desc: string;
  link: string;
  href: string;
  Icon: LucideIcon;
  chip: string;
  text: string;
};

const CARDS: Card[] = [
  {
    en: "Join Activities",
    zh: "参加活动",
    desc: "Explore a variety of fun, educational and cultural programs.",
    link: "View Activities",
    href: "#activities",
    Icon: Users,
    chip: "bg-green-700",
    text: "text-green-700",
  },
  {
    en: "Volunteer",
    zh: "志愿服务",
    desc: "Share your time and skills and make a difference.",
    link: "Learn More",
    href: "#get-involved",
    Icon: Heart,
    chip: "bg-red-600",
    text: "text-red-600",
  },
  {
    en: "Support Us",
    zh: "支持我们",
    desc: "Your support helps us create a stronger, caring community.",
    link: "How to Support",
    href: "#sponsors",
    Icon: HandHeart,
    chip: "bg-violet-600",
    text: "text-violet-600",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-green-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Get Involved <span className="text-green-700">参与我们</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.en} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm">
                <span
                  className={
                    "flex h-12 w-12 items-center justify-center rounded-full " +
                    card.chip
                  }
                >
                  <card.Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <h3 className={"mt-4 text-xl font-bold " + card.text}>
                  {card.en}
                </h3>
                <p className={"text-sm font-medium " + card.text}>{card.zh}</p>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className={
                    "mt-5 inline-flex items-center gap-1 rounded-md font-semibold outline-none hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 " +
                    card.text
                  }
                >
                  {card.link}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
