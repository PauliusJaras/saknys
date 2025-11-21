"use client";

import { cn } from "@/helpers/cn";
import { motion } from "motion/react";

export default function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn("rounded-xl w-full h-full overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
