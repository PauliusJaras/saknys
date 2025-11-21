"use client";

import { motion } from "motion/react";
import ArrowButton from "./ArrowButton";
import FlopText from "./FlopText";

export default function TextButtonCard({ text }: { text: string }) {
  return (
    <motion.div
      variants={{
        initial: {},
        hovered: {},
      }}
      className="flex gap-4 items-center"
    >
      <FlopText text={text} />
      <ArrowButton />
    </motion.div>
  );
}
