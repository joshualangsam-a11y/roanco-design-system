"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const isHorizontal = direction === "left" || direction === "right";

  const springTransition = {
    type: "spring" as const,
    damping: 25,
    stiffness: 150,
    delay,
  };

  const opacityTransition = {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        isHorizontal
          ? { x: springTransition, opacity: opacityTransition }
          : { y: springTransition, opacity: opacityTransition }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
