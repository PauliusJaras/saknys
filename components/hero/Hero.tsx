import { CiInstagram } from "react-icons/ci";
import SocialMediaButton from "./SocialMediaButton";
import { RiFacebookLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";
import { StaggeredFadeBlur } from "./StagerredFade";
import CurvedCard from "../CurvedCard";
import { useTranslations } from "next-intl";

export default function Hero({
  className,
  hideActionOnMobile,
}: {
  className: string;
  hideActionOnMobile?: boolean;
}) {
  const t = useTranslations();

  return (
    <CurvedCard
      className={className}
      hideActionOnMobile={hideActionOnMobile}
      action={
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
      <div className="z-50 absolute bottom-14 left-1/2 md:left-14 -translate-x-1/2 md:translate-x-0">
        <StaggeredFadeBlur
          className="w-[10ch] text-center md:text-left text-6xl md:text-8xl leading-20 md:leading-30 font-bodoni uppercase"
          text={t("homepage.title")}
        />
      </div>
    </CurvedCard>
  );
}
