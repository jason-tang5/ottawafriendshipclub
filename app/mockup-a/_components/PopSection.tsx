"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function PopSection({
  id,
  index,
  onActive,
  children,
}: {
  id: string;
  index: number;
  onActive: (id: string) => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (inView) onActive(id);
  }, [inView, id, onActive]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative flex min-h-screen snap-start flex-col justify-center px-6 py-24 md:px-16 lg:px-28"
    >
      <span className="pointer-events-none absolute right-6 top-24 text-[18vw] font-black leading-none text-white/[0.03] md:right-16 md:text-[12vw]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.7 }}
        className="relative z-10 max-w-3xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
