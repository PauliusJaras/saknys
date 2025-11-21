"use client";

import { cn } from "@/helpers/cn";
import Image from "next/image";
import MotionCard from "./MotionCard";
import { motion } from "motion/react";

export default function CurvedCard({
  className,
  children,
  action,
}: {
  className?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <MotionCard className={cn("relative ", className)}>
      {children}
      <motion.div className="bg-background absolute bottom-0 right-0 pt-4.5 pl-4 flex gap-3 items-end rounded-tl-4xl ">
        {action}

        <div className="size-10 absolute -right-4 -top-10 flex items-end">
          <Image
            src={"/curve.svg"}
            height={24}
            width={24}
            alt="curve svg element"
          ></Image>
        </div>
        <div className="size-10 absolute -left-[23.2px] bottom-0 flex items-end">
          <Image
            src={"/curve.svg"}
            height={24}
            width={24}
            alt="curve svg element"
          ></Image>
        </div>
      </motion.div>
    </MotionCard>
  );
}
