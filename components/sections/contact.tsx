import { ORG, GROUP_CHAT, SECTIONS } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { QrLightbox } from "@/components/ui/qr-lightbox";
import { Mail, MapPin, QrCode } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Header */}
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {SECTIONS.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            {SECTIONS.contact.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {SECTIONS.contact.intro}
          </p>
        </ScrollReveal>

        {/* Group chat — primary CTA panel */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-12">
            <div className="md:flex md:items-center md:gap-8">
              {/* Text side */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {GROUP_CHAT.platform}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {GROUP_CHAT.label}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {GROUP_CHAT.note}
                </p>
              </div>

              {/* QR code side */}
              <div className="mt-8 flex shrink-0 justify-center md:mt-0">
                {GROUP_CHAT.qrImage ? (
                  <QrLightbox
                    src={GROUP_CHAT.qrImage}
                    alt="WeChat group QR code"
                  />
                ) : (
                  <div className="flex size-44 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-primary/40 bg-card text-center text-sm text-muted-foreground">
                    <QrCode className="size-8" />
                    WeChat QR code
                    <span className="text-xs">(add your group QR here)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact details */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              render={<a href={`mailto:${ORG.email}`} />}
              nativeButton={false}
            >
              <Mail className="size-4" />
              {ORG.email}
            </Button>

            <span className="inline-flex items-center gap-1.5 text-base text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {ORG.city}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
