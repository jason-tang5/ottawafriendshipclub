"use client";

import { motion } from "framer-motion";
import { ORG, FUNDING } from "@/lib/content";

export function Masthead({ dateline }: { dateline: string }) {
  return (
    <header className="mx-auto max-w-6xl px-5 sm:px-8 pt-8 sm:pt-12 text-center">
      {/* Heavy teal double rule across the top */}
      <div className="border-t-2 border-primary mb-1" />
      <div className="border-t border-primary/60 mb-6" />

      {/* Dateline row */}
      <div className="flex items-center justify-between border-b border-border pb-3 mb-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>{ORG.city}</span>
        <span className="hidden sm:inline">Community Broadsheet</span>
        <span>{dateline}</span>
      </div>

      {/* Wordmark */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading font-semibold tracking-tight text-foreground text-5xl sm:text-6xl md:text-7xl"
      >
        {ORG.name}
      </motion.h1>

      {/* Meta line */}
      <p className="mt-4 text-sm sm:text-base text-muted-foreground">
        {ORG.city}
        <span className="text-primary"> · </span>
        Seniors 55+
        <span className="text-primary"> · </span>
        Funded {FUNDING.term}
      </p>

      {/* Closing double rule */}
      <div className="mt-6 border-t border-primary/60" />
      <div className="mt-1 border-t-2 border-primary" />
    </header>
  );
}
