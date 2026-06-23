"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ORG, PHOTOS } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[520px] items-center overflow-hidden lg:min-h-[600px]"
    >
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTOS.danceWide}
        alt="Ottawa Friendship Club members dancing in bright costumes at the Chinatown street festival"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Left-to-right dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
            Connecting
            <br />
            Seniors,
            <br />
            Building Friendships
          </h1>
          <p className="mt-4 text-xl font-medium text-amber-300 sm:text-2xl">
            联谊交流 · 健康生活
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            {ORG.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<a href="#about" />}
              nativeButton={false}
              size="lg"
              className="h-auto flex-col gap-0 bg-green-700 px-6 py-3 leading-tight text-white hover:bg-green-800"
            >
              <span className="text-base font-semibold">Learn More</span>
              <span className="text-xs font-normal text-green-50">了解更多</span>
            </Button>
            <Button
              render={<a href="#get-involved" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-auto flex-col gap-0 border-white/70 bg-white/10 px-6 py-3 leading-tight text-white hover:bg-white/20 hover:text-white"
            >
              <span className="text-base font-semibold">Get Involved</span>
              <span className="text-xs font-normal text-white/80">参与我们</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
