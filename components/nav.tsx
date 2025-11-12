import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-[5vh] left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center bg-[#090A09] py-2 px-8 uppercase rounded-xl transition-all ">
      <button>x</button>
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Saknys logo" width={99} height={350} />
      </Link>
      <Link
        className="hover:bg-[black]/80 hover:border rounded-lg py-2 px-4 text-md transition-all duration-100 ease-out-in"
        href={"/blog"}
      >
        blog
      </Link>
      <Link
        className="hover:bg-[black]/80 hover:border rounded-lg py-2 px-4 text-md transition-all duration-100 ease-out-in"
        href={"/about"}
      >
        about
      </Link>
      <Link
        className="bg-[black]/80 hover:bg-[black]/50 rounded-lg py-2 px-4 text-md border transition-all duration-100 ease-out-in"
        href={"/"}
      >
        Užsisakyti
      </Link>
    </nav>
  );
}
