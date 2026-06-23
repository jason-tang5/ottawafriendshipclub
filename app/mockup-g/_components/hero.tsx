"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RotatingWords } from "@/components/ui/rotating-words";
import { ORG, HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background"
    >
      {/* soft decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <Sparkles className="size-4" aria-hidden="true" />
            For Ottawa seniors, 55 and over
          </span>

          <h1 className="mt-6 font-heading text-4xl leading-[1.1] font-bold text-foreground sm:text-5xl lg:text-6xl">
            A friendly,{" "}
            <RotatingWords
              words={HERO.rotatingWords}
              className="text-primary"
            />{" "}
            <br className="hidden sm:block" />
            place to belong.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {ORG.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-13 rounded-full px-7 text-base"
              render={<a href="#contact" />}
              nativeButton={false}
            >
              <HeartHandshake className="size-5" aria-hidden="true" />
              Get in touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-13 rounded-full px-7 text-base"
              render={<a href="#programs" />}
              nativeButton={false}
            >
              See what we do
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>

          <p className="mt-6 text-base text-muted-foreground">
            Based in{" "}
            <span className="font-semibold text-foreground">{ORG.city}</span>{" "}
            · Volunteer-run · Always welcoming new friends
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-primary/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO.heroImage}
              alt="Smiling older adults spending time together at a community gathering"
              className="aspect-[4/5] w-full object-cover sm:aspect-square"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-lg backdrop-blur"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <span className="text-base leading-tight">
              <span className="block font-semibold text-foreground">
                Everyone is welcome
              </span>
              <span className="text-muted-foreground">No fees to join in</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
