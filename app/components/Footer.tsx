import { FooterData } from "@/data";

import { FooterProps, poppins } from "@/interfaces";

const Footer = () => {
  return (
    <div className={`w-full bg-black mt-24 pb-20 ${poppins.className}`}> 
      <div className="max-w-4xl text-white flex flex-col lg:flex-row items-start pt-32 justify-between mx-auto">
        {FooterData.slice(0, 2).map((data, idx: number) => (
          <>
            <div
              className="flex ml-5 lg:ml-0 lg:w-1/4 flex-col mb-14"
              key={idx}
            >
              <h3 className="text-xl mb-7 font-bold">{data.title}</h3>
              <ul>
                {data.item.map((list: string, idx: number) => (
                  <li
                    className="text-[#b0b0b0] pb-4 text-base font-semibold"
                    key={idx}
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
        <div className="flex flex-col ml-5 items-center justify-between">
          {FooterData.slice(2, 4).map((data: FooterProps, idx: number) => (
            <div className="flex flex-col mb-14 justify-between" key={idx}>
              <h3 className="text-xl mb-7 font-bold">{data.title}</h3>
              <ul>
                {data.item.map((list: string, idx: number) => (
                  <li
                    className="text-[#b0b0b0] pb-4 text-base font-semibold"
                    key={idx}
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
