"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/ui/rotating-words";
import { ORG, HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 25%, oklch(0.62 0.13 50 / 0.10), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        className="mx-auto max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm md:text-base tracking-[0.18em] uppercase text-primary font-medium mb-6">
          {ORG.tagline}
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[1.05] text-foreground">
          An Ottawa club that&apos;s <br className="hidden sm:block" />{" "}
          <RotatingWords
            words={HERO.rotatingWords}
            className="text-primary italic"
          />
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {ORG.intro}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
            Get in touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#programs" />}
            nativeButton={false}
          >
            See what we do
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
