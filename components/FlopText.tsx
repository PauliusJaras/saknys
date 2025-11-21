import { motion } from "motion/react";

export default function FlopText({ text }: { text: string }) {
  return (
    <motion.div
      variants={{
        initial: {},
        hovered: {},
      }}
      className="relative overflow-hidden text-lg"
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
