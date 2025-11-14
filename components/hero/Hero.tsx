import Card from "../Card";
import { CiInstagram } from "react-icons/ci";
import SocialMediaButton from "./SocialMediaButton";
import { RiFacebookLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
  return (
    <Card className="relative">
      <video
        className="w-full h-full object-cover rounded-xl"
        autoPlay
        loop
        muted
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="bg-background absolute bottom-0 right-0 pt-3.5 pl-4 flex gap-3 items-end rounded-tl-4xl">
        <SocialMediaButton src="https://www.instagram.com">
          <CiInstagram />
        </SocialMediaButton>
        <SocialMediaButton src="https://www.facebook.com">
          <RiFacebookLine />
        </SocialMediaButton>
        <SocialMediaButton src="/">
          <MdOutlinePhone />
        </SocialMediaButton>
        <div className="size-10 absolute -right-4 -top-10 flex items-end">
          <Image
            src={"/curve.svg"}
            height={24}
            width={24}
            alt="curve svg element"
          ></Image>
        </div>
        <div className="size-10 absolute -left-[23.3px] bottom-0 flex items-end">
          <Image
            src={"/curve.svg"}
            height={24}
            width={24}
            alt="curve svg element"
          ></Image>
        </div>
      </div>
    </Card>
  );
}
