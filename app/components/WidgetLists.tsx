"use client";
import Image from "next/image";
import BgImage from "@/public/widgets_bg_image.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface LiveEditingProps {
  heading: string;
  text: string;
}

const obj: LiveEditingProps[] = [
  {
    heading: "Real-time live editing",
    text: "Unleash your creativity and create a website that captures your vision. Experience the power of real-time live editing.",
  },
  {
    heading: "100+ Widgets",
    text: "Transform your website with a vast selection of customizable widgets. With in-depth customization options, there's no limit to what you can do.",
  },
  {
    heading: "Absolute positioning",
    text: "Experience ultimate design freedom. Place elements exactly where you want them for a truly custom and pixel-perfect website design.",
  },
  {
    heading: "Block templates",
    text: "Choose from a range of pre-designed sections to jumpstart your creativity and create an amazing website with ease.",
  },
  {
    heading: "100% Built In-house",
    text: "Enjoy the full potential of JupiterX without relying on any third-party plugins. We're all about keeping things simple and reliable for you.",
  },
];

const WidgetLists = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-full lg:mt-40 lg:mx-0 px-8">
        <div className="lg:w-1/2 w-full lg:ml-auto ml-0">
          <div className="relative lg:ml-7">
            <Image
              src={BgImage}
              alt="Background Image"
              className="hidden lg:block"
            />
            <div className="lg:absolute relative z-10 lg:-top-14 lg:-left-12">
              <video
                className="rounded-md"
                width="100%"
                height="100%"
                loop
                autoPlay
                muted
                style={{ width: "579.969px", height: "386.646px" }}
              >
                <source src="real_time_editing.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-5/12 w-full lg:p-5 pt-0 m-5 ml-auto">
          {obj.map((data: LiveEditingProps) => (
            <>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h3
                      className={`text-[#111111dc] text-2xl font-extrabold pb-2 ${poppins.className}`}
                    >
                      {data.heading}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent
                    className={`flex items-center justify-center text-lg text-[#111111dc] ${poppins.className}`}
                  >
                    {data.text}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WidgetLists;
