import { GALLERY } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SECTIONS } from "@/lib/content";
import { GalleryGrid } from "@/components/ui/gallery-grid";

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {SECTIONS.gallery.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            {SECTIONS.gallery.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {SECTIONS.gallery.intro}
          </p>
        </ScrollReveal>

        <GalleryGrid photos={GALLERY} />
      </div>
    </section>
  );
}
