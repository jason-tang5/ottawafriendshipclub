"use client";

import { motion } from "framer-motion";
import { useLang } from "./lang";

export function PopSections() {
  const { t } = useLang();

  return (
    <section id="programs" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {t.sectionEyebrow}
        </p>
        <h2 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
          {t.sectionTitle}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {t.cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, scale: 0.85, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
              delay: (i % 2) * 0.08,
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <h3 className="absolute inset-x-0 bottom-0 p-6 font-heading text-2xl font-semibold text-white">
              {c.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
