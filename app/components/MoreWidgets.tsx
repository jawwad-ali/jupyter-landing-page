"use client";

import { poppins, MoreWidgetsProps } from "@/interfaces";

import { moreWidgets } from "@/data";

const MoreWidgets = () => {
  return (
    <>
      {moreWidgets.map((data: MoreWidgetsProps, idx: number) => (
        <div
          className="flex lg:flex-row flex-col w-full lg:mt-28 mt-0 lg:mx-0 px-8"
          key={idx}
        >
          <>
            <div className="lg:w-1/2 w-full lg:ml-auto">
              <div className="relative lg:ml-7">
                <video
                  className="rounded-md"
                  width="100%"
                  height="100%"
                  loop
                  autoPlay
                  muted
                  // style={{ width: "100%", height: "100%" }}
                  style={{ width: "579.969px", height: "386.646px" }}
                >
                  <source src={data.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right Side */}
            <div
              className={`flex space-y-10 flex-col justify-between lg:w-5/12 w-full lg:p-5 pt-0 m-5 ml-auto ${poppins.className}`}
            >
              <>
                <h3 className="shopsBuilder">{data.widgetName}</h3>

                <h2 className="text-[#111111] lg:text-[52px] text-4xl font-extrabold leading-[1.08em]">
                  {data.heading}
                </h2>
                <p className="text-[#777777] lg:text-lg font-semibold leading-[1.67em]">
                  {data.text}
                </p>
              </>
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default MoreWidgets;
