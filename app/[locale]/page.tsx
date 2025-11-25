import CurvedCard from "@/components/CurvedCard";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import TextButtonCard from "@/components/TextButtonCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      imgSrc: "/images/placeholder.jpg",
      imgAlt: "placeholder image",
      href: "/about",
      text: "About",
    },
    {
      imgSrc: "/images/placeholder2.jpg",
      imgAlt: "placeholder image 2",
      href: "/blog",
      text: "Blog",
    },
    {
      imgSrc: "/images/placeholder3.jpg",
      imgAlt: "placeholder image 3",
      href: "/menu",
      text: "Menu",
    },
  ];

  return (
    <div className="grid grid-cols-12 h-full gap-4">
      <Hero
        hideActionOnMobile={true}
        className="col-span-full lg:col-span-9 min-h-[500px] md:min-h-auto"
      />
      <div className="col-span-full lg:col-span-3 flex flex-col md:flex-row lg:flex-col gap-4">
        {data.map((item, index) => (
          <Link key={index} href={item.href} className="w-full h-full group">
            <CurvedCard
              className="min-h-[600px] md:min-h-[250px]"
              action={<TextButtonCard text={item.text} />}
            >
              <Image
                alt={item.imgAlt}
                fill
                className="object-cover w-full h-full group-hover:scale-105 duration-300 opacity-50 group-hover:opacity-100 overflow-hidden"
                src={item.imgSrc}
              ></Image>
            </CurvedCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
