import { Poppins } from "next/font/google";
import Image from "next/image";
// @ts-ignore
import HeroSectionImage from "@/public/HeroSectionImage.PNG";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const HeroSection = () => {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        backgroundImage: "linear-gradient(180deg, #FAF4FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="lg:max-w-7xl mt-24 lg:bg-transparent">
        <div className="lg:max-w-3xl lg:ml-36">
          <h1
            className={`text-[#000] lg:text-7xl text-6xl px-5 lg:px-0 font-bold ${poppins.className} leading-tight lg:leading-[1.1em] tracking-[0.7px]`}
          >
            Create <br /> stunning websites without limits
          </h1>
        </div>

        <div className="mt-24 flex items-center justify-center lg:ml-16 mx-3">
          <Image
            src={HeroSectionImage}
            alt="Hero Section Image"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
