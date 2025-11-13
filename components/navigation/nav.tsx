import { Link } from "@/i18n/navigation";
import Image from "next/image";
import MenuOpenButton from "./menuOpenButton";

export default function Nav() {
  return (
    <nav className="fixed top-[5vh] left-1/2 -translate-x-1/2 flex gap-3 justify-center items-center bg-[#090A09] p-3 uppercase rounded-xl transition-all shadow-md text-sm">
      <MenuOpenButton />
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Saknys logo" width={99} height={350} />
      </Link>
      <Link
        className="hover:bg-current/5 hover:border-current/15 border-transparent border rounded-lg py-2 px-4 text-md transition-all duration-500 ease-out-in"
        href={"/blog"}
      >
        blog
      </Link>
      <Link
        className="hover:bg-current/5 hover:border-current/15 border-transparent border rounded-lg py-2 px-4 text-md transition-all duration-500 ease-out-in"
        href={"/about"}
      >
        about
      </Link>
      <Link
        className="bg-current/5 hover:bg-current/10 hover:border-current/25 rounded-lg py-3.5 px-4 text-md border border-current/15 transition-all duration-500 ease-out-in"
        href={"/"}
      >
        Užsisakyti
      </Link>
    </nav>
  );
}
