import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESOURCES, SECTIONS } from "@/lib/content";

export function Resources() {
  return (
    <section id="resources" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {SECTIONS.resources.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            {SECTIONS.resources.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {SECTIONS.resources.intro}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource, index) => (
            <ScrollReveal key={resource.label} delay={index * 0.08}>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{resource.label}</h3>
                  <ExternalLink className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">{resource.description}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
