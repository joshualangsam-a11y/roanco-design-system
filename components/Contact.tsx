"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const links = [
  { label: "Email", href: "mailto:josh@roanco.law" },
  { label: "GitHub", href: "https://github.com/joshualangsam-a11y" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/joshualangsam" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/josh-langsam" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative px-6 md:px-16 lg:px-24 py-28 md:py-44"
    >
      <div className="accent-line mb-20" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1200px]"
        style={{ y }}
      >
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
              <span className="font-mono text-accent/30 mr-1.5">04</span>
              Contact
            </span>
          </div>
          <h2 className="font-serif text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] tracking-[-0.02em]">
            Let&apos;s build
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] tracking-[-0.02em] text-accent">
            something.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs tracking-[0.12em] uppercase text-text-muted rounded-[8px] transition-all duration-300 hover:border-border-hover hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] mt-28 border-t border-border pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="block text-[11px] text-text-muted/50 tracking-wide">
              Josh Langsam
            </span>
            <span className="block text-[11px] text-text-muted/30 tracking-wide mt-1">
              Roan Co. &copy; {new Date().getFullYear()}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] text-text-muted/30 tracking-wide">
              Built in Jupiter, FL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
