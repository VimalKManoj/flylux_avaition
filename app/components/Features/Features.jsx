"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Features() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center py-32 bg-white z-10"
      id="features"
    >
      <div className="flex justify-center items-center max-w-[70vw] flex-col">
        <div
          className={`${inter.className} self-start px-1 py-1 border rounded-xl border-black text-sm uppercase mb-4`}
        >
          Features
        </div>
        <div className={`${inter.className} text-6xl mb-10 self-start font-medium`}>
          Exclusive Features Tailored for You
          {/* Redefining Air Travel Excellence */}
        </div>
        <div className="w-full h-[100vh] rounded-2xl relative flex flex-col justify-around items-end  ">
          <div className="w-full h-full absolute top-0  overflow-hidden rounded-2xl opacity-50 z-0">
            <Image
              src="/images/cloud.jpg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[40vw] h-[70vh] absolute -left-[10rem] top-[10rem] overflow-hidden rounded-2xl ">
            <Image
              src="/images/about_1.jpg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`${inter.className} mt-16 w-1/2 h-3/5 flex flex-col justify-around items-center z-50 p-10 text-3xl text-[#0A377A]`}
          >
            Booking with Fly Lux is streamlined and sophisticated.Engage with
            our expert concierge team for a personalized booking experience. We
            cater to your specific needs with flexibility and efficiency,
            ensuring a seamless journey from start to finish.
          </div>
          <div className="w-1/2 h-2/5 flex flex-col justify-around items-center p-10 z-50">
            <p className="border-y p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300">
              Safety
            </p>
            <p className="border-y p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300">
              Pet friendly
            </p>
            <p className="border-b p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300">
              Business Travel
            </p>
            <p className="border-b p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300">
              Private Dining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
