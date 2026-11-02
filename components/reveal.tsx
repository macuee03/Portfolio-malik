"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  animateOnLoad?: boolean;
  hoverLift?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  animateOnLoad = false,
  hoverLift = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -24, y: 0 }
      : direction === "right"
        ? { x: 24, y: 0 }
        : direction === "scale"
          ? { x: 0, y: 0, scale: 0.96 }
          : { x: 0, y: 20 };
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      animate={animateOnLoad ? visible : undefined}
      whileInView={animateOnLoad ? undefined : visible}
      viewport={animateOnLoad ? undefined : { once: false, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      whileHover={
        hoverLift && !reduceMotion ? { y: -5, scale: 1.01 } : undefined
      }
    >
      {children}
    </motion.div>
  );
}
