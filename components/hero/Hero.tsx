import { CiInstagram } from "react-icons/ci";
import SocialMediaButton from "./SocialMediaButton";
import { RiFacebookLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { StaggeredFadeBlur } from "./StagerredFade";
import CurvedCard from "../CurvedCard";

export default function Hero({ className }: { className: string }) {
  return (
    <CurvedCard
      className={className}
      action={
        <>
          <SocialMediaButton src="https://www.instagram.com">
            <CiInstagram />
          </SocialMediaButton>
          <SocialMediaButton src="https://www.facebook.com">
            <RiFacebookLine />
          </SocialMediaButton>
          <SocialMediaButton src="/">
            <MdOutlinePhone />
          </SocialMediaButton>
        </>
      }
    >
      <video
        className="w-full h-full object-cover rounded-xl"
        autoPlay
        loop
        muted
      >
        <source src="/videos/test2.mp4" type="video/mp4" />
      </video>
      <div className="z-50 absolute bottom-14 left-14">
        <StaggeredFadeBlur
          className="w-[10ch] text-left text-8xl leading-30"
          text="SKONIŲ PAVASARIS"
        />
      </div>
    </CurvedCard>
  );
}
