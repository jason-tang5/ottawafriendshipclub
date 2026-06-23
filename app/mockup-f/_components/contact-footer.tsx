"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, GROUP_CHAT } from "@/lib/content";

export function ContactFooter() {
  const telHref = `tel:${ORG.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <ScrollReveal>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: the join call */}
          <div>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
              GET IN TOUCH
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl">
              Come find us this week.
            </h2>
            <p className="mt-3 text-muted-foreground">{ORG.tagline}</p>

            <div className="mt-4 rounded-2xl border border-border bg-card p-5">
              <p className="font-medium">
                <MessageCircle className="mr-2 inline h-5 w-5 text-primary" />
                {GROUP_CHAT.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {GROUP_CHAT.note}
              </p>
            </div>
          </div>

          {/* Right: contact card */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${ORG.email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {ORG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={telHref}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {ORG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>{ORG.city}</span>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                size="lg"
                render={<a href={`mailto:${ORG.email}`} />}
                nativeButton={false}
              >
                Email the club
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Ottawa Friendship Club logo"
              className="h-9 w-auto"
            />
            <span className="font-heading">{ORG.name}</span>
          </div>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
            <span>
              {ORG.city} · © {new Date().getFullYear()} {ORG.name}
            </span>
            <a
              href="#timeline"
              className="font-mono transition-colors hover:text-foreground"
            >
              ↑ Back to the top
            </a>
          </div>
        </footer>
      </ScrollReveal>
    </section>
  );
}
