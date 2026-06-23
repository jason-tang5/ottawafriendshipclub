"use client";

import { QrCode, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionLabel } from "./SectionLabel";
import { ORG, GROUP_CHAT } from "@/lib/content";

export function ContactBackPage() {
  const telHref = "tel:" + ORG.phone.replace(/[^0-9+]/g, "");
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
      <SectionLabel>Get in Touch</SectionLabel>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {/* WeChat block */}
        <ScrollReveal y={16}>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-heading text-2xl font-semibold">
              {GROUP_CHAT.label}
            </h3>
            <p className="mt-2 text-muted-foreground">{GROUP_CHAT.note}</p>
            <div className="mt-4 aspect-square w-40 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
              <QrCode className="size-10 text-primary" aria-hidden />
              WeChat QR
            </div>
            <span className="mt-4 inline-block text-xs uppercase tracking-[0.15em] text-primary font-semibold">
              {GROUP_CHAT.platform}
            </span>
          </div>
        </ScrollReveal>

        {/* Direct contact */}
        <ScrollReveal y={16} delay={0.1}>
          <div>
            <h3 className="font-heading text-2xl font-semibold">
              Reach the club directly
            </h3>
            <dl className="mt-4">
              <div className="flex items-center gap-3 py-2 text-lg">
                <Mail className="size-5 text-primary shrink-0" aria-hidden />
                <a
                  href={`mailto:${ORG.email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {ORG.email}
                </a>
              </div>
              <div className="flex items-center gap-3 py-2 text-lg">
                <Phone className="size-5 text-primary shrink-0" aria-hidden />
                <a
                  href={telHref}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {ORG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 py-2 text-lg">
                <MapPin className="size-5 text-primary shrink-0" aria-hidden />
                <span>{ORG.city}</span>
              </div>
            </dl>
            <div className="mt-6">
              <Button
                size="lg"
                render={<a href={`mailto:${ORG.email}`} />}
                nativeButton={false}
              >
                Email us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
