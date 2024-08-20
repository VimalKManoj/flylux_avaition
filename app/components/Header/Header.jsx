"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// const opacity = {
//   initial: {
//     opacity: 0,
//   },
//   open: {
//     opacity: 1,
//     transition: { duration: 0.35 },
//   },
//   closed: {
//     opacity: 0,
//     transition: { duration: 0.35 },
//   },
// };



const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex  flex-col items-center justify-between relative">
      <div className="w-full my-4 p-4 px-8 fixed z-50 flex justify-between items-center ">
        <div className="w-full hidden md:flex justify-between flex-1 text-white">
          <Link href="/">
            <Image
              src="/svg/flylux_white.svg"
              width={200}
              height={200}
              alt="LOGO"
            />
          </Link>
          <Link href="#about">About Us</Link>
          <Link href="/Features">Features</Link>
          <Link href="/services">Services</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="bg-white px-3 py-2 text-[16px] rounded-lg text-[#4A5B77] shadow-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
