"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function QrLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  // Close on Escape, and lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Thumbnail — click to enlarge */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge WeChat QR code"
        className="group relative cursor-zoom-in rounded-xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="size-44 rounded-xl border border-border bg-card object-contain transition group-hover:opacity-90"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-xs font-medium text-muted-foreground opacity-0 transition group-hover:opacity-100">
          Click to enlarge
        </span>
      </button>

      {/* Fullscreen overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WeChat QR code, enlarged"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="size-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] cursor-default rounded-2xl bg-white object-contain p-3 shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
