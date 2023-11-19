import Image from "next/image";
import Logo from "@/public/jupiter_logo.svg";
import Link from "next/link";
import { Poppins } from "next/font/google";
import MobileNavbar from "./MobileNavbar";

export const navlinks = ["Features", "Widgets", "Shop", "Blog", "Portfolio", "Demos"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Navbar = () => {
  return (
    <>
      <div
        className={`hidden lg:flex flex-1 h-[90px] lg:max-w-[81.5rem] mx-auto`}
      >
        {/* Logo */}
        <div className="flex flex-[0.2]">
          <Image src={Logo} alt="Logo" loading="eager" width={150} />
        </div>

        {/* Navlinks */}
        <div className="flex flex-[0.7] justify-end items-center">
          <div className="flex flex-[0.8] justify-around">
            {navlinks.map((links) => (
              <button
                key={links}
                className={`hover:bg-gray-100 transition-all duration-100 ease-in-out rounded-3xl h-10 font-medium text-[15px] w-24 ${poppins.className}`}
              >
                <Link href="#">{links}</Link>
              </button>
            ))}
          </div>
        </div> 

        {/* CTA Button */}
        <div className="flex flex-[0.1] justify-end items-center">
          <button
            className={`bg-[#ec33cb] rounded-3xl text-[15px] font-bold h-10 w-40 text-white ${poppins.className}`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #EC33C8 2%, #3319CB 100%)",
            }} 
          >
            Buy JupiterX
          </button>
        </div>
      </div>
      {/* <MobileNavbar /> */}
    </>
  );
};

export default Navbar;