"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

interface TimelineEntryProps {
  /** Content rendered inside the circular node (icon, dot, number). */
  node: ReactNode;
  /** Override styling for the circular node. */
  nodeClassName?: string;
  /** Running index across the whole spine, used to stagger entrances. */
  index: number;
  /** Subdue styling for past / quieter entries. */
  muted?: boolean;
  /** The card / content body for this entry. */
  children: ReactNode;
}

/**
 * Reusable timeline-entry shell. Every spine item (group, program, event,
 * section header) uses this so node + rail alignment stays pixel-identical.
 */
export function TimelineEntry({
  node,
  nodeClassName,
  index,
  muted = false,
  children,
}: TimelineEntryProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: EASE,
      }}
      className="flex items-start gap-4 sm:gap-6"
    >
      {/* node gutter — centered circle sits on the rail x */}
      <div className="relative z-10 flex w-8 shrink-0 justify-center sm:w-10">
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full shadow-sm sm:h-10 sm:w-10",
            muted
              ? "border border-border bg-muted text-muted-foreground"
              : "bg-primary text-primary-foreground",
            nodeClassName
          )}
        >
          {node}
        </span>
      </div>

      {/* card body */}
      <div
        className={cn(
          "min-w-0 flex-1",
          muted && "text-muted-foreground"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
