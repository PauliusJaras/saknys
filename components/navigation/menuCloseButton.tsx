"use client";

import { cn } from "@/helpers/cn";

export default function MenuCloseButton({
  onClick,
  className,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer relative p-4.75 rounded-lg bg-current/5 hover:bg-current/10 hover:border-current/25 border border-current/15 transition-all duration-500 ease-out-in group",
        className
      )}
    >
      <span className="rotate-45 group-hover:rotate-0 absolute h-px w-5 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
      <span className="-rotate-45 group-hover:rotate-0 absolute h-px w-5 bg-current top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out-in"></span>
    </button>
  );
}
