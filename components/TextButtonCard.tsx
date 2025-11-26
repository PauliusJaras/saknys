"use client";

import { motion, Variant } from "motion/react";
import ArrowButton from "./ArrowButton";
import FlopText from "./FlopText";

export default function TextButtonCard({
  text,
  initial = {},
  hovered = {},
}: {
  text: string;
  initial?: Variant;
  hovered?: Variant;
}) {
  return (
    <motion.div
      variants={{
        initial: initial,
        hovered: hovered,
      }}
      className="flex gap-4 items-center"
    >
      <FlopText text={text} />
      <ArrowButton />
    </motion.div>
  );
}
