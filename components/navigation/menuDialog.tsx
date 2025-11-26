"use client";

import FlopText from "../FlopText";
import MotionCard from "../MotionCard";
import TextButtonCard from "../TextButtonCard";
import MenuCloseButton from "./menuCloseButton";
import { cn } from "@/helpers/cn";

export default function MenuDialog({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "w-screen h-screen bg-background absolute z-999 overflow-hidden transition-opacity duration-150 opacity-0 invisible pointer-events-none p-4",
        {
          "opacity-100 visible pointer-events-auto": openMenu,
        }
      )}
    >
      <div className="p-4 border border-current/15 w-full h-full relative rounded-xl flex items-center justify-center">
        <MenuCloseButton
          className={cn("absolute top-8 left-8", {
            hidden: !openMenu,
          })}
          onClick={() => setOpenMenu(false)}
        />
        <div className="flex gap-4 flex-col items-center justify-center">
          <div className="size-3 rotate-45 border border-current/15"></div>
          <MotionCard>
            <FlopText text="test" />
          </MotionCard>
          <MotionCard>
            <FlopText text="test" />
          </MotionCard>
          <MotionCard>
            <FlopText text="test" />
          </MotionCard>
          <MotionCard>
            <FlopText text="test" />
          </MotionCard>
          <MotionCard>
            <FlopText text="test" />
          </MotionCard>
          <div className="size-3 rotate-45 border border-current/15"></div>
        </div>
      </div>
    </div>
  );
}
