"use client";
import { cn } from "@/helpers/cn";
import { motion, useInView } from "framer-motion";
import * as React from "react";

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
};

export const StaggeredFadeBlur: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = "",
}) => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.07, duration: 1 },
    }),
  };

  const letters = text.split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={variants}
      viewport={{ once: true }}
      className={cn("", className)}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};
