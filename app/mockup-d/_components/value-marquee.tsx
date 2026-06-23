"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { PROGRAMS } from "@/lib/content";

function Group() {
  return (
    <div className="flex shrink-0 items-center gap-10 md:gap-16 pr-10 md:pr-16">
      {PROGRAMS.map((p) => (
        <div key={p.title} className="flex items-center gap-10 md:gap-16">
          <span className="font-heading text-3xl md:text-5xl whitespace-nowrap text-foreground/85">
            {p.title}
          </span>
          <span
            className="h-2.5 w-2.5 rounded-full bg-primary shrink-0"
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

export function ValueMarquee() {
  const controls = useAnimationControls();

  const run = () =>
    controls.start({
      x: "-50%",
      transition: { duration: 28, ease: "linear", repeat: Infinity },
    });

  useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden border-y border-border bg-card py-8 md:py-12"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => run()}
    >
      <span className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10" />

      <div className="flex">
        <motion.div className="flex" animate={controls} initial={{ x: "0%" }}>
          <Group />
          <Group />
        </motion.div>
      </div>
    </section>
  );
}
