export const dynamic = "force-static";

import CurvedCard from "@/components/CurvedCard";
import { StaggeredFadeBlur } from "@/components/hero/StagerredFade";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ReservationPage() {
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
          className="object-cover w-full h-full overflow-hidden mask-alpha mask-b-from-black mask-b-from-60% mask-b-to-transparent"
          src={"/images/placeholder2.jpg"}
        ></Image>
        <div className="z-50 absolute bottom-14 left-1/2 md:left-14 -translate-x-1/2 md:translate-x-0">
          <StaggeredFadeBlur
            className="w-[10ch] text-center md:text-left text-6xl md:text-8xl leading-20 md:leading-30 font-bodoni uppercase"
            text={t("reservation.title")}
          />
        </div>
      </CurvedCard>
      <div className="col-span-6">reservation</div>
    </div>
  );
}
