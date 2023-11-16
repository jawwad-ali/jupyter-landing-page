"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navlinks } from "./Navbar";

import Link from "next/link";

import { Poppins } from "next/font/google";

import Image from "next/image";

import Logo from "@/public/jupiter_logo.svg";
import { Button } from "@/components/ui/button";

import { FaHamburger } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const MobileNavbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <div className={`lg:hidden flex`}>
        <Sheet>
          <SheetTrigger className="w-full flex !justify-end m-2">
            <Button variant="outline" className="">
              <FaHamburger />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-[0.2] mt-10 item-center justify-center">
                  <Image src={Logo} alt="Logo" loading="eager" width={150} />
                </div>
              </SheetTitle>

              <SheetDescription>
                {/* Navlinks */}
                <div className="flex flex-col justify-end items-center">
                  <div className="flex flex-col flex-[0.8] justify-around">
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
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-[0.1] lg:justify-end justify-center items-center">
              <button
                className={`bg-[#ec33cb] rounded-3xl text-[15px] font-bold h-10 w-40 text-white`}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #EC33C8 2%, #3319CB 100%)",
                }}
              >
                Buy JupiterX
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileNavbar;
