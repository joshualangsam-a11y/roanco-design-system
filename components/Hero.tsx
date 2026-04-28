"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring" as const, damping: 25, stiffness: 150, delay: 0.5 + i * 0.12 },
      opacity: { duration: 0.6, delay: 0.5 + i * 0.12 },
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      {/* Sunset ambient glow */}
      <div className="hero-glow" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1200px]"
        style={{ opacity }}
      >
        {/* Name */}
        <div className="overflow-hidden">
          <motion.div style={{ y: y1 }}>
            <motion.h1
              className="font-serif text-[clamp(4.5rem,13vw,13rem)] leading-[0.85] tracking-[-0.03em]"
              variants={line}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Josh
            </motion.h1>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ y: y2 }}>
            <motion.h1
              className="font-serif text-[clamp(4.5rem,13vw,13rem)] leading-[0.85] tracking-[-0.03em] text-accent"
              variants={line}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Langsam
            </motion.h1>
          </motion.div>
        </div>

        {/* Role + description */}
        <motion.div className="mt-12 md:mt-16 max-w-lg">
          <motion.p
            className="text-sm tracking-wide text-text-muted"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Co-founder & CTO at{" "}
            <span className="text-accent">Roan Co.</span>
          </motion.p>

          <motion.p
            className="mt-4 text-base md:text-lg text-text-muted leading-relaxed"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I ship AI systems for industries that still run on spreadsheets.{" "}
            <span className="text-text">
              15 products. 47 agents. 4 published papers.
            </span>
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <a
              href="mailto:josh@roanco.law"
              className="inline-flex items-center bg-accent px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-bg font-medium rounded-[8px] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(232,115,90,0.25)] hover:scale-[1.02]"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-text-muted rounded-[8px] transition-all duration-300 hover:border-border-hover hover:text-text"
            >
              View work
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 3v10M4 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
