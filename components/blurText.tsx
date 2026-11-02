"use client";

import { motion, useReducedMotion } from "framer-motion";

type BlurTextProps = {
  children: string;
  className?: string;
};

export default function BlurText({ children, className }: BlurTextProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={className}>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={reduceMotion ? false : { opacity: 0, filter: "blur(10px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : index * 0.06,
            ease: "easeOut",
          }}
          className="mr-[0.28em] inline-block last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
