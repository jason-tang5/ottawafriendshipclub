// Pure date-formatting helpers for the Weekly Almanac timeline.
// Server-safe (no "use client"): no hooks, no browser APIs at module scope.

export function fmtDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function fmtDay(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "long",
  });
}
