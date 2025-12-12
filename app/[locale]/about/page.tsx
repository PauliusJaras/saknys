export const dynamic = "force-static";

import CurvedCard from "@/components/CurvedCard";
import { StaggeredFadeBlur } from "@/components/hero/StagerredFade";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function AboutPage() {
  const t = await getTranslations();

  return (
    <div className="grid grid-cols-12 h-full gap-4">
      <CurvedCard
        className="col-span-6 min-h-[400px] md:min-h-40 bg-black"
        hideAction={true}
      >
        <Image
          alt={"Image placeholder"}
          fill
          className="object-cover w-full h-full overflow-hidden mask-alpha mask-b-from-black mask-b-from-70% mask-b-to-transparent"
          src={"/images/placeholder.jpg"}
        ></Image>
        <div className="z-50 absolute bottom-14 left-1/2 md:left-14 -translate-x-1/2 md:translate-x-0">
          <StaggeredFadeBlur
            className="w-[10ch] text-center md:text-left text-6xl md:text-8xl leading-20 md:leading-30 font-bodoni uppercase"
            text={t("about.title")}
          />
        </div>
      </CurvedCard>
      <div className="col-span-6">about</div>
    </div>
  );
}
