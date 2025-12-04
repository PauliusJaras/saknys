import { motion, Variant } from "motion/react";

export default function FlopText({
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
      className="relative overflow-hidden"
    >
      <motion.p
        variants={{
          initial: { y: 0 },
          hovered: { y: "150%" },
        }}
        className="uppercase"
      >
        {text}
      </motion.p>
      <motion.p
        variants={{
          initial: { y: "-150%" },
          hovered: { y: 0 },
        }}
        className="uppercase absolute inset-0"
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
