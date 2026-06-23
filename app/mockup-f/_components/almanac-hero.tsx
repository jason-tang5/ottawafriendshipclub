"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/ui/rotating-words";
import { ORG, HERO, GROUPS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function AlmanacHero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-left"
      >
        {/* a) masthead row */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            OTTAWA · WEEKLY ALMANAC
          </span>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            This week: {GROUPS.length} dance groups meeting
          </span>
        </motion.div>

        {/* b) headline with rotating teal word */}
        <motion.h1
          variants={item}
          className="mt-8 max-w-3xl font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl"
        >
          Every week, our community comes together —{" "}
          <span className="block">
            <RotatingWords words={HERO.rotatingWords} className="text-primary" />
          </span>
        </motion.h1>

        {/* c) intro */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {ORG.intro}
        </motion.p>

        {/* d) buttons */}
        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
            Get in touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#timeline" />}
            nativeButton={false}
          >
            See the week ahead
          </Button>
        </motion.div>

        {/* e) tagline */}
        <motion.p variants={item} className="mt-6 text-sm text-muted-foreground">
          {ORG.tagline}
        </motion.p>
      </motion.div>
    </section>
  );
}
