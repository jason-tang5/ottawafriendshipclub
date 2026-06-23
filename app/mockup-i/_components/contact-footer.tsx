"use client";

import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG } from "@/lib/content";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border bg-white py-12">
      {/* Faint skyline silhouette decoration */}
      <svg
        viewBox="0 0 600 160"
        className="pointer-events-none absolute bottom-0 right-0 h-40 w-[600px] max-w-full text-green-700 opacity-10"
        fill="currentColor"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMax meet"
      >
        <rect x="60" y="100" width="50" height="60" />
        <rect x="120" y="80" width="40" height="80" />
        <path d="M300 20 L312 60 L288 60 Z" />
        <rect x="296" y="60" width="32" height="100" />
        <rect x="300" y="40" width="24" height="20" />
        <rect x="200" y="110" width="60" height="50" />
        <rect x="360" y="90" width="45" height="70" />
        <rect x="415" y="105" width="55" height="55" />
        <rect x="480" y="75" width="40" height="85" />
        <rect x="528" y="115" width="50" height="45" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Left: contact heading */}
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-700">
                <Mail className="h-7 w-7 text-white" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Contact Us <span className="text-green-700">联系我们</span>
                </h2>
                <p className="text-sm text-muted-foreground">
                  We&apos;d love to hear from you! 期待与您联系!
                </p>
              </div>
            </div>

            {/* Right: email */}
            <div className="md:text-right">
              <p className="text-sm font-medium text-muted-foreground">
                Email 邮箱
              </p>
              <a
                href={`mailto:${ORG.email}`}
                className="rounded-md text-lg font-bold text-green-700 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
              >
                {ORG.email}
              </a>
            </div>
          </div>
        </ScrollReveal>

        <p className="relative mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {year} {ORG.name}
        </p>
      </div>
    </footer>
  );
}
