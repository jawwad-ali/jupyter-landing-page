import { FooterData } from "@/data";

import { FooterProps, poppins } from "@/interfaces";

const RightFooter = () => {
  return (
    <div
      className={` ${poppins.className} flex flex-col items-start justify-between`}
    >
      {FooterData.map((data: FooterProps, idx: number) => (
        <div className="flex flex-col" key={idx}>
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
  );
};

export default RightFooter;
