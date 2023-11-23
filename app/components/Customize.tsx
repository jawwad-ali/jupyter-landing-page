import { customize } from "@/data";
import { CustomizeProps, poppins } from "@/interfaces";
import Image from "next/image";
import React from "react";

const Customize = () => {
  return (
    <div className="max-w-7xl mx-auto mt-64 mb-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="CustomizeHeading lg:text-8xl text-5xl font-extrabold leading-[1.08em]">
          Customize <br />
          Everything
        </h2>
      </div>

      <div className="lg:grid grid-cols-3 mt-20">
        {customize.map((data: CustomizeProps, idx: number) => (
          <>
            <div className="mb-4 p-5" key={idx}>
              <Image
                src={data.iconUrl}
                alt={data.heading}
                height={20}
                width={20}
                className="w-8"
              />
              <h4
                className={`my-8 text-lg font-bold leading-[1.08em] ${poppins.className}`}
              >
                {data.heading}
              </h4>
              <p
                className={`text-[#444444d6] ${poppins.className} text-base leading-[1.87em]`}
              >
                {data.text}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Customize;
