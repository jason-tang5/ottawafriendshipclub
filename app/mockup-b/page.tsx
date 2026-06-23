"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { Button } from "@/components/ui/button";
import { ShrinkNav } from "./_components/shrink-nav";
import { PinnedHero } from "./_components/pinned-hero";
import { PopSections } from "./_components/pop-section";
import { LangProvider, useLang } from "./_components/lang";

function IntroBand() {
  const { t } = useLang();
  return (
    <section className="relative z-10 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-heading text-2xl leading-relaxed text-foreground sm:text-3xl">
          {t.intro}
        </p>
      </div>
    </section>
  );
}

function ProximityCta() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLang();
  return (
    <section id="contact" className="relative z-10 mx-auto mb-32 max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="overflow-hidden rounded-[2rem] border border-border bg-primary px-8 py-20 text-center text-primary-foreground"
      >
        <div ref={ctaRef} className="relative inline-block">
          <TextCursorProximity
            key={lang}
            label={t.ctaLabel}
            className="font-heading text-4xl font-semibold sm:text-6xl"
            styles={{
              transform: { from: "scale(1)", to: "scale(1.3)" },
              color: { from: "#fdf6ec", to: "#fcd34d" },
            }}
            falloff="gaussian"
            radius={120}
            containerRef={ctaRef}
          />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
          {t.ctaBody}
        </p>
        <div className="mt-9">
          <Button
            render={<a href="#top" />}
            nativeButton={false}
            size="lg"
            variant="secondary"
          >
            {t.ctaButton}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt={t.brand}
          className="h-20 w-20 object-contain"
        />
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {t.values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">{t.footer}</p>
      </div>
    </footer>
  );
}

export default function MockupB() {
  return (
    <LangProvider>
      <main className="relative min-h-screen bg-background text-foreground">
        <ShrinkNav />
        <PinnedHero />
        <IntroBand />
        <PopSections />
        <ProximityCta />
        <Footer />
      </main>
    </LangProvider>
  );
}
