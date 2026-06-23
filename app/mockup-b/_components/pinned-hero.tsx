"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RotatingWords } from "@/components/ui/rotating-words";
import { Button } from "@/components/ui/button";
import { useLang } from "./lang";

export function PinnedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  // Scroll progress across the TALL section drives the pinned content.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const eyebrowSpacing = useTransform(scrollYProgress, [0, 1], ["0.2em", "0.6em"]);

  return (
    // Tall section: 250vh gives the sticky child room to be scroll-scrubbed.
    <section ref={sectionRef} className="relative h-[250vh]" id="top">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* warm layered glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="absolute left-[10%] bottom-[14%] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <motion.div
          style={{ scale, opacity, y, filter }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={t.brand}
            className="mx-auto mb-6 h-28 w-28 object-contain sm:h-32 sm:w-32"
          />
          <motion.p
            style={{ letterSpacing: eyebrowSpacing }}
            className="mb-6 text-xs font-semibold uppercase text-primary"
          >
            {t.eyebrow}
          </motion.p>

          <h1 className="font-heading text-5xl font-semibold leading-[1.1] text-foreground sm:text-7xl md:text-8xl">
            <span className="block">{t.headLead}</span>
            <span className="block">
              <RotatingWords
                words={t.rotating}
                className="font-semibold text-primary"
              />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t.heroBody}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button render={<a href="#contact" />} nativeButton={false} size="lg">
              {t.heroPrimary}
            </Button>
            <Button
              render={<a href="#programs" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              {t.heroSecondary}
            </Button>
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          {t.scroll}
        </motion.div>
      </div>
    </section>
  );
}
