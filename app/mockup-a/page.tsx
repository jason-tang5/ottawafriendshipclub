"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { LOREM, LOREM_SECTIONS, LOREM_NAV } from "@/lib/lorem";
import { PopSection } from "./_components/PopSection";

export default function MockupA() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("one");

  const handleActive = useCallback((id: string) => setActive(id), []);

  const heroInView = useInView(heroRef, { amount: 0.5 });
  useEffect(() => {
    if (heroInView) setActive("one");
  }, [heroInView]);

  return (
    <div className="bg-neutral-950 text-white">
      {/* Fixed nav with active-section indicator */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#one" className="text-sm font-black uppercase tracking-[0.3em] text-amber-400">
            Snap&nbsp;Deck
          </a>
          <ul className="flex items-center gap-1 md:gap-2">
            {LOREM_NAV.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors md:text-sm ${
                      isActive ? "text-neutral-950" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-amber-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Snap scroll container */}
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {/* HERO */}
        <section
          id="one"
          className="relative flex min-h-screen snap-start flex-col justify-center px-6 md:px-16 lg:px-28"
        >
          <div ref={heroRef} className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-amber-400"
            >
              {LOREM_SECTIONS[0].eyebrow}
            </motion.p>
            <h1 className="font-heading text-6xl font-semibold leading-[0.95] md:text-8xl lg:text-9xl">
              <TextCursorProximity
                label="LOREM IPSUM"
                className="block"
                styles={{
                  transform: { from: "scale(1)", to: "scale(1.35)" },
                  color: { from: "#ffffff", to: "#f59e0b" },
                }}
                falloff="gaussian"
                radius={120}
                containerRef={heroRef}
              />
              <TextCursorProximity
                label="DOLOR SIT"
                className="block text-white/40"
                styles={{
                  transform: { from: "scale(1)", to: "scale(1.35)" },
                  color: { from: "#525252", to: "#f59e0b" },
                }}
                falloff="gaussian"
                radius={120}
                containerRef={heroRef}
              />
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 max-w-xl text-lg text-white/60"
          >
            {LOREM.medium}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex gap-3"
          >
            <Button render={<a href="#two" />} nativeButton={false} size="lg">
              Lorem ipsum
            </Button>
            <Button
              render={<a href="#four" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              Dolor sit amet
            </Button>
          </motion.div>
          <span className="absolute bottom-10 left-6 animate-pulse text-xs uppercase tracking-[0.3em] text-white/30 md:left-16">
            Scroll&nbsp;&darr;
          </span>
        </section>

        {/* CONTENT SNAP SECTIONS */}
        {LOREM_SECTIONS.slice(1).map((s, i) => {
          const id = LOREM_NAV[i + 1].href.slice(1);
          return (
            <PopSection key={id} id={id} index={i + 1} onActive={handleActive}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-amber-400">
                {s.eyebrow}
              </p>
              <h2 className="font-heading text-5xl font-semibold leading-tight md:text-7xl">
                {s.title}
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl">{s.body}</p>
              <div className="mt-10 h-px w-32 bg-amber-400" />
            </PopSection>
          );
        })}
      </main>
    </div>
  );
}
