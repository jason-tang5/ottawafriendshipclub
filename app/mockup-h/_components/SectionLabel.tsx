import React from "react";

/**
 * Newspaper section-label-on-rule kicker.
 * A hairline rule spanning the column with a cream chip overlapping it.
 */
export function SectionLabel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="relative border-t border-border">
      <span className="absolute -top-3 left-0 bg-background pr-3 sm:px-3 sm:-left-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}
