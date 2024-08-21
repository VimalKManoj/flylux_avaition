"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { motion, useTransform, useScroll } from "framer-motion";
import DynamicLogo from "./DynamicLogo";

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Header = () => {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const color = useTransform(
    scrollY,
    [
      0,
      viewportHeight * 0.93,
      viewportHeight * 2.06,
      viewportHeight * 2.2,
      viewportHeight * 5.38,
      viewportHeight * 5.39,
    ],

    [
      "rgba(255 ,255 ,255 , 1)",
      "rgba(255 ,255 ,255 , 1)",
      "black",
      "rgba(255 ,255 ,255 , 1)",
      "rgba(255 ,255 ,255 , 1)",
      "black",
    ]
  );

  const padding = useTransform(scrollY, [0, 100], [24, 12]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${font.className} text-white w-full  fixed z-50 p-3 `}
    >
      <motion.div
        className="w-full h-full p-6  rounded-2xl flex justify-between items-center  "
        style={{
          padding,
          color,
        }}
      >
        <Link href="/" className="">
          <DynamicLogo />
        </Link>
        <div className="w-[40%] flex justify-between  items-center text-lg ">
          <Link href="#about">About Us</Link>
          <Link href="#features">Features</Link>

          <Link href="#contact">
            <p className="bg-white px-3 py-2 rounded-lg text-black shadow-md  text-lg">
              Contact us
            </p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
