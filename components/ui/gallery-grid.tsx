"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { GalleryPhoto } from "@/lib/content";

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  // null = closed; otherwise the index of the open photo.
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );

  // Keyboard controls + body scroll lock while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <ScrollReveal key={photo.src} delay={index * 0.08}>
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Enlarge photo: ${photo.caption}`}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-card text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                {photo.caption}
              </figcaption>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo, enlarged"
          onClick={close}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="size-6" />
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:left-6"
            >
              <ChevronLeft className="size-7" />
            </button>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:right-6"
            >
              <ChevronRight className="size-7" />
            </button>
          )}

          {/* Image + caption */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-full cursor-default flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[active!].src}
              alt={photos[active!].caption}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 max-w-[90vw] text-center text-sm text-white/80">
              {photos[active!].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
