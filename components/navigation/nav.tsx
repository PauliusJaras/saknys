"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import MenuOpenButton from "./menuOpenButton";
import MenuDialog from "./menuDialog";
import { useState } from "react";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed md:absolute top-[4vh] lg:top-[8vh] lg:left-[75px] lg:translate-x-0 left-1/2 -translate-x-1/2 flex gap-2 justify-center items-center bg-[#090A09] p-2 uppercase rounded-xl transition-all shadow-md text-sm w-fit z-50">
        <MenuOpenButton onClick={() => setOpenMenu(true)} />
        <Link className="mb-1 w-[75px] sm:w-[99px] md:mr-1 mr-4" href={"/"}>
          <Image src={"/logo.svg"} alt="Saknys logo" width={99} height={350} />
        </Link>
        <Link
          className="hidden md:inline-block hover:bg-current/5 hover:border-current/15 border-transparent border rounded-lg py-2 px-4 text-md transition-all duration-500 ease-out-in"
          href={"/blog"}
        >
          blog
        </Link>
        <Link
          className="hidden md:inline-block hover:bg-current/5 hover:border-current/15 border-transparent border rounded-lg py-2 px-4 text-md transition-all duration-500 ease-out-in"
          href={"/about"}
        >
          about
        </Link>
        <Link
          className="bg-current/5 hover:bg-current/10 hover:border-current/25 rounded-lg py-2 px-4 text-md border border-current/15 transition-all duration-500 ease-out-in"
          href={"/"}
        >
          Užsisakyti
        </Link>
      </nav>
      <MenuDialog openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
