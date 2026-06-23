"use client";

import { Mail, Phone, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, GROUP_CHAT } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-3xl md:text-5xl text-foreground">
                Come say hello
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We&apos;d love to meet you. Reach out by phone or email, or join
                our WeChat group.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  render={<a href={`mailto:${ORG.email}`} />}
                  nativeButton={false}
                >
                  <Mail className="h-5 w-5" aria-hidden /> Email us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  render={<a href={`tel:${ORG.phone}`} />}
                  nativeButton={false}
                >
                  <Phone className="h-5 w-5" aria-hidden /> {ORG.phone}
                </Button>
              </div>

              <div className="mt-6 text-base text-muted-foreground">
                <p>{ORG.email}</p>
                <p>{ORG.city}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="rounded-3xl border border-border bg-card p-8 text-center">
              <span className="inline-flex rounded-full bg-primary/10 text-primary text-sm px-3 py-1">
                {GROUP_CHAT.platform}
              </span>
              <h3 className="mt-4 font-heading text-xl text-foreground">
                {GROUP_CHAT.label}
              </h3>

              {GROUP_CHAT.qrImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={GROUP_CHAT.qrImage}
                  alt="WeChat group QR code for the Ottawa Friendship Club"
                  className="mx-auto mt-6 h-44 w-44 rounded-xl"
                />
              ) : (
                <div className="mx-auto mt-6 flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-background">
                  <QrCode className="h-12 w-12 text-muted-foreground" aria-hidden />
                  <span className="text-sm text-muted-foreground">
                    QR code coming soon
                  </span>
                </div>
              )}

              <p className="mt-4 text-sm text-muted-foreground">
                {GROUP_CHAT.note}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
