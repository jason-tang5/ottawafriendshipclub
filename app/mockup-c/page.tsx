"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { LOREM, LOREM_SECTIONS, LOREM_NAV } from "@/lib/lorem";

// --- Bento tiles: mix LOREM_SECTIONS with extra lorem tiles, varied sizes ---
const TILE_GRADIENTS = [
  "from-fuchsia-500 to-amber-400",
  "from-cyan-400 to-blue-600",
  "from-emerald-400 to-teal-600",
  "from-rose-500 to-orange-400",
  "from-violet-500 to-fuchsia-500",
  "from-amber-300 to-pink-500",
];

const TILES = [
  { ...LOREM_SECTIONS[0], span: "md:col-span-2 md:row-span-2", grad: TILE_GRADIENTS[0] },
  { ...LOREM_SECTIONS[1], span: "md:col-span-1 md:row-span-1", grad: TILE_GRADIENTS[1] },
  { eyebrow: "Lorem five", title: "Sed do eiusmod", body: LOREM.short, span: "md:col-span-1 md:row-span-1", grad: TILE_GRADIENTS[2] },
  { ...LOREM_SECTIONS[2], span: "md:col-span-1 md:row-span-2", grad: TILE_GRADIENTS[3] },
  { ...LOREM_SECTIONS[3], span: "md:col-span-2 md:row-span-1", grad: TILE_GRADIENTS[4] },
  { eyebrow: "Lorem six", title: "Ut labore", body: LOREM.short, span: "md:col-span-1 md:row-span-1", grad: TILE_GRADIENTS[5] },
];

function Nav() {
  const [active, setActive] = useState(LOREM_NAV[0].href);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-background/70 border-b border-border">
      <span className="font-heading text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
        Bento Pop
      </span>
      <ul className="flex items-center gap-1">
        {LOREM_NAV.map((item) => (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              onClick={() => setActive(item.href)}
              className="relative z-10 block px-4 py-2 text-sm font-medium text-foreground transition-colors"
            >
              {item.label}
            </a>
            {active === item.href && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-amber-400/20 ring-1 ring-fuchsia-500/40"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BentoTile({ tile, index }: { tile: (typeof TILES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={`${tile.span} group relative overflow-hidden rounded-3xl bg-gradient-to-br ${tile.grad} p-6 text-white shadow-lg`}
      initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.09 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-2xl transition-transform group-hover:scale-150" />
      <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
        {tile.eyebrow}
      </p>
      <h3 className="mt-2 font-heading text-2xl font-bold leading-tight">{tile.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/90">{tile.body}</p>
    </motion.div>
  );
}

export default function MockupC() {
  const proximityRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section id="one" className="px-6 pt-32 pb-16 text-center">
        <span className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
          {LOREM_NAV[0].label} Ipsum
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
          Lorem ipsum{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            dolor sit
          </span>{" "}
          amet
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{LOREM.medium}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button render={<a href="#two" />} nativeButton={false} size="lg">
            Lorem ipsum
          </Button>
          <Button variant="outline" render={<a href="#three" />} nativeButton={false} size="lg">
            Dolor amet
          </Button>
        </div>
      </section>

      {/* Bento grid */}
      <section id="two" className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3">
          {TILES.map((tile, i) => (
            <BentoTile key={i} tile={tile} index={i} />
          ))}
        </div>
      </section>

      {/* Interactive cursor-proximity statement */}
      <section
        id="three"
        className="flex flex-col items-center justify-center px-6 py-28 text-center"
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Move your cursor
        </p>
        <div ref={proximityRef} className="relative cursor-default">
          <TextCursorProximity
            label="LOREM IPSUM"
            className="font-heading text-5xl font-black md:text-8xl"
            styles={{
              transform: { from: "scale(1)", to: "scale(1.35)" },
              color: { from: "#0f172a", to: "#db2777" },
            }}
            falloff="gaussian"
            radius={130}
            containerRef={proximityRef}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="four"
        className="mx-6 mb-16 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 px-6 py-20 text-center text-white"
      >
        <h2 className="mx-auto max-w-2xl font-heading text-4xl font-extrabold md:text-5xl">
          Consectetur adipiscing elit
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/90">{LOREM.short}</p>
        <div className="mt-8 flex justify-center">
          <Button
            variant="secondary"
            render={<a href="#one" />}
            nativeButton={false}
            size="lg"
          >
            Lorem ipsum dolor
          </Button>
        </div>
      </section>
    </main>
  );
}
