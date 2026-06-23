"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotatingWords({
  words,
  className,
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [words]);

  useEffect(() => {
    const id = setTimeout(
      () => setIndex((i) => (i === words.length - 1 ? 0 : i + 1)),
      interval
    );
    return () => clearTimeout(id);
  }, [index, words, interval]);

  return (
    <span className="relative inline-flex h-[1.25em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={className}
          initial={{ opacity: 0, y: "0.6em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.6em" }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
