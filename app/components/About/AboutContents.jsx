"use client";
import Image from "next/image";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../../../public/static/Conthrax Bold.otf",
});

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SECTION_HEIGHT = 120;

const AboutContents = () => {
  return (
    <div
      className="relative w-full flex justify-between z-20 bg-gray-950"
      style={{ height: `calc(${SECTION_HEIGHT}rem + 100vh)` }}
    >
      <AboutTextContainer />
      <AboutImage />
    </div>
  );
};

export default AboutContents;

const AboutTextContainer = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [1400, 1600, 2200, 2400], [0, 1, 1, 0]);
  const opacity2 = useTransform(
    scrollY,
    [2400, 2600, 3000, 3200],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollY,
    [3200, 3400, 3800, 4300],
    [0, 1, 1, 0]
  );

  return (
    <div className="sticky top-0 flex-1  w-1/2 h-screen flex justify-center items-center">
      <motion.div
        style={{ opacity }}
        className="w-[75%]  p-10 pr-12 text-white absolute h-screen flex justify-center flex-col items-center "
      >
        <h2
          className={`md:text-5xl font-extrabold mb-4 ${myFont.className} w-full`}
        >
          Book Your Journey with Ease
        </h2>
        <p className="text-lg ">
          Booking with Flylux is streamlined and sophisticated. Engage with our
          expert concierge team for a personalized booking experience. We cater
          to your specific needs with flexibility and efficiency, ensuring a
          seamless journey from start to finish.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2 }}
        className="w-[75%] p-10 pr-12 text-white  absolute h-screen flex justify-center flex-col items-center "
      >
        <h2
          className={`md:text-5xl font-extrabold mb-4 ${myFont.className} w-full`}
        >
          Flying with the Finest Crews
        </h2>
        <p className="text-lg">
          We collaborate with top-tier operators who employ highly qualified
          pilots and professional cabin crew. Our partners ensure that all
          personnel are rigorously trained to deliver outstanding service while
          upholding the highest safety and comfort standards.
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3 }}
        className="w-[75%] p-10 pr-12 text-white  absolute h-screen flex justify-center flex-col items-center "
      >
        <h2
          className={`md:text-5xl font-extrabold mb-4 ${myFont.className} w-full`}
        >
          From Global Cities to Remote Locales
        </h2>
        <p className="text-lg">
          Flylux delivers worldwide connectivity, granting access to prestigious
          international destinations and remote locales. Domestically, we offer
          comprehensive service throughout India, covering all major cities and
          regional hubs with unparalleled reliability.
        </p>
      </motion.div>
    </div>
  );
};

const AboutImage = () => {
  return (
    <div className="flex-1 w-full h-[80%] flex flex-col justify-around mt-80">
      <Image
        src="/images/booking.jpg"
        width={1000}
        height={1000}
        className="w-[30rem] h-[35rem] object-cover relative left-56 rounded-lg "
      />
      <Image
        src="/images/crew.jpg"
        width={1000}
        height={1000}
        className="w-[30rem] h-[30rem] object-cover rounded-lg"
      />
      <Image
        src="/images/sky.jpg"
        width={1000}
        height={1000}
        className="w-[30rem] h-[30rem] object-cover relative left-56 mb-40 rounded-lg"
      />
    </div>
  );
};
