"use client";

import Link from "next/link";
import FlopText from "../FlopText";
import MotionCard from "../MotionCard";
import MenuCloseButton from "./menuCloseButton";
import { cn } from "@/helpers/cn";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function MenuDialog({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const t = useTranslations();

  const menuCloseHandler = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => setOpenMenu(false), 300);
    }
  }, [pathname]);

  const links = [
    { href: "/about", text: t("Navigation.about") },
    { href: "/blog", text: t("Navigation.blog") },
    { href: "/contacts", text: t("Navigation.contact") },
    { href: "/reservation", text: t("Navigation.reservation") },
    { href: "/", text: t("Navigation.home") },
  ];

  return (
    <div
      className={cn(
        "w-screen h-screen bg-background absolute z-999 overflow-hidden transition-opacity duration-500 opacity-0 pointer-events-none p-4",
        {
          "opacity-100 visible pointer-events-auto transition-opacity duration-500":
            openMenu,
          "opacity-0": !openMenu,
        }
      )}
    >
      <div className="p-4 border border-current/15 w-full h-full relative rounded-xl flex items-center justify-center">
        <MenuCloseButton
          className={cn("absolute top-8 left-8", {
            hidden: !openMenu,
          })}
          onClick={menuCloseHandler}
        />
        <div className="flex gap-4 flex-col items-center justify-center">
          <div className="size-3 rotate-45 border border-current/15"></div>
          {links?.map((link, index) => (
            <Link key={index} href={link.href}>
              <MotionCard>
                <FlopText text={link.text} />
              </MotionCard>
            </Link>
          ))}
          <div className="size-3 rotate-45 border border-current/15"></div>
        </div>
      </div>
    </div>
  );
}
