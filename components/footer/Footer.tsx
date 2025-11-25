import { CiInstagram } from "react-icons/ci";

import { RiFacebookLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";

import SocialMediaButton from "../hero/SocialMediaButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="md:hidden flex w-full p-4">
      <div className="flex border-current/15 border rounded-3xl w-full h-full flex-col py-8 items-center gap-4">
        <div className="flex gap-4">
          <SocialMediaButton src="https://www.instagram.com">
            <CiInstagram />
          </SocialMediaButton>
          <SocialMediaButton src="https://www.facebook.com">
            <RiFacebookLine />
          </SocialMediaButton>
          <SocialMediaButton src="/">
            <MdOutlinePhone />
          </SocialMediaButton>
        </div>
        <div>Saknys {currentYear}</div>
      </div>
    </footer>
  );
}
