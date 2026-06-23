"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ORG, PHOTOS } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              About the Ottawa Friendship Club
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {ORG.intro}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Through a wide range of recreational, cultural, and educational
              activities, we promote physical, mental, and social well-being,
              empowering members to age healthily, stay connected, and lead
              fulfilling lives.
            </p>
            <Button
              render={<a href="#about" />}
              nativeButton={false}
              size="lg"
              className="mt-7 h-auto flex-col gap-0 bg-green-700 px-6 py-3 leading-tight text-white hover:bg-green-800"
            >
              <span className="text-base font-semibold">More About Us</span>
              <span className="text-xs font-normal text-green-50">关于我们</span>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTOS.groupArch}
              alt="Ottawa Friendship Club members gathered for a group portrait in front of the Chinatown Royal Arch"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
