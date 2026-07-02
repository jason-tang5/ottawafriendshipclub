"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ORG, HERO } from "@/lib/content";

export function AnimatedHero() {
  const [index, setIndex] = useState(0);
  const words = useMemo(() => HERO.rotatingWords, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i === words.length - 1 ? 0 : i + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [index, words]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO.heroImage}
        alt="Members of the Ottawa Friendship Club together"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Dark overlay for legible, high-contrast text (important for 55+) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-6 py-24 md:min-h-[82vh]">
        <p className="text-base font-semibold text-white/90">
          {HERO.eyebrow}
        </p>

        <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
          {HERO.heading}
          <span className="relative mt-3 flex h-[1.3em] w-full items-center overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="absolute left-0 font-semibold text-amber-300"
                initial={{ opacity: 0, y: 60 }}
                transition={{ type: "spring", stiffness: 60, damping: 14 }}
                animate={
                  index === i
                    ? { y: 0, opacity: 1 }
                    : { y: index > i ? -80 : 80, opacity: 0 }
                }
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <p className="mt-6 max-w-prose text-lg leading-relaxed text-white/85">
          {ORG.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
            {HERO.primaryButton}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            render={<a href="#programs" />}
            nativeButton={false}
          >
            {HERO.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
