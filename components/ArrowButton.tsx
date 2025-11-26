"use client";

import { cn } from "@/helpers/cn";
import { motion, Variant } from "motion/react";
import { GoArrowRight } from "react-icons/go";

export default function ArrowButton({
  className,
  initial = {},
  hovered = {},
}: {
  className?: string;
  initial?: Variant;
  hovered?: Variant;
}) {
  return (
    <motion.div
      variants={{
        initial: initial,
        hovered: hovered,
      }}
      className={cn(
        "overflow-hidden relative rounded-full p-2 cursor-pointer bg-current/5 group-hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in",
        className
      )}
    >
      <motion.div
        variants={{
          initial: { x: 0 },
          hovered: { x: "150%" },
        }}
      >
        <GoArrowRight />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        variants={{
          initial: { x: "-150%" },
          hovered: { x: 0 },
        }}
      >
        <GoArrowRight />
      </motion.div>
    </motion.div>
  );
}
