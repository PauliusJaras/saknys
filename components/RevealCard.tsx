"use client";

import { cn } from "@/helpers/cn";
import { motion } from "motion/react";
import { ReactNode } from "react";

type RevealCardProps = {
  children: ReactNode;
  className?: string;
};

export default function RevealCard({ children, className }: RevealCardProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
