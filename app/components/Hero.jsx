"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Video from "./Video";
import { Typewriter } from "./Typewriter";
import { Urbanist } from "next/font/google";

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


const Hero = () => {
  return (
    <motion.div
      className="h-screen overflow-hidden sticky top-0  p-3 w-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense
        fallback={
          <div className="w-full h-full object-cover rounded-3xl">
            <Image src="/images/suspense.png" width={1000} height={1000} />
          </div>
        }
      >
        <Video src="/Flylux_Banner_3.mp4" />
      </Suspense>

      <div className="absolute w-full  flex justify-center top-0 bottom-0 items-center overflow-hidden">
        <motion.div className="w-[35rem] flex justify-start items-center bg-white/75 py-3 px-4 rounded-[40px]">
          <Image
            src="/images/search.png"
            width={20}
            height={20}
            className="opacity-50"
            alt="search"
          />
          <div className="pl-2">
            <Typewriter text="Luxury private jets" />
          </div>
        </motion.div>
      </div>
      <motion.p
        className={`${font.className} absolute z-10 text-2xl  p-3 w-full bottom-16 md:leading-[110px] md:-tracking-[4px]  font-bold md:text-9xl text-white text-center select-none`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Your search for
        <br /> luxury ends here.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
