import { landingPagesImages } from "@/data";
import { LandingPageProps } from "@/interfaces";
import Image from "next/image";

const Websites = () => {
  return (
    <div className="w-full bg-[#161618] flex lg:flex-row flex-col max-h-max mb-5">
      {/* Left */}
      <div className="flex flex-col items-center justify-center h-[100dvh] lg:w-1/2 w-full lg:sticky relative top-0 bottom-20">
        <h3 className="wesbitesHeading font-bold relative text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-indigo-800 animate-gradient">
          450+
        </h3>
        <h3 className="leading-[1.37em] text-white lg:text-5xl text-4xl font-bold pt-10 text-center">
          Readymade Websites!
        </h3>
      </div>

      {/* Right */}
      <div className="lg:w-1/2 w-full my-5">
        <div
          className="flex gap-8 2xl:w-[70%] lg:justify-evenly 2xl:justify-evenly flex-wrap flex-1 
        mt-16 mx-auto"
        >
          {landingPagesImages.map((picture: LandingPageProps, idx: number) => (
            <div key={idx} className="mx-auto mb-6 lg:mb-0">
              <Image
                className="rounded-xl 2xl:w-[380px]"
                src={picture.landingPageImage}
                alt={picture.landingPageImage}
                width="280"
                height="100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Websites;
