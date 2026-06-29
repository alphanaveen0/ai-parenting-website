"use client";

import { motion } from "framer-motion";

export default function PageHero({
  emoji,
  title,
  sub,
}: {
  emoji: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="relative text-center pt-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="text-5xl md:text-6xl mb-4 animate-floaty inline-block">{emoji}</div>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl leading-tight">
          <span className="brand-gradient-text">{title}</span>
        </h1>
        <p className="text-soft mt-4 text-[15px] md:text-base leading-relaxed">{sub}</p>
      </motion.div>
    </section>
  );
}
