import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { motion, useInView, useAnimation } from "framer-motion";

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const myFont = localFont({
  src: "../../public/static/Conthrax SemiBold.otf",
});

const MobileContact = () => {
  return (
    <div className="md:hidden h-full w-screen flex flex-col p-4 md:p-20 md:px-7 bg-gray-50 text-gray-900">
      <Section1 />
      {/* <Section2 /> */}
    </div>
  );
};

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="relative flex flex-col w-full items-center p-3 md:p-10">
      <div className="w-full text-center mt-9  text-[#0A377A]">
        <h1 className={`${myFont.className} text-3xl md:text-4xl font-bold`}>
          Contact us
        </h1>
        <p className={`${font.className} text-base md:text-lg mt-4 text-black`}>
          We are here to assist you with all your charter service needs and
          ensure you enjoy all the specialized benefits Flylux has to offer.
          Please don&apos;t hesitate to reach out to us through the following
          channels.
        </p>
      </div>

      <motion.div
        className="w-full bg-[#0A377A] backdrop-blur-md p-6 my-4 rounded-lg shadow-lg flex flex-col items-center text-white"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          <h3 className={`text-base font-semibold ${font.className} pb-6`}>
            Our dedicated customer service team is ready to assist you with any
            inquiries or to arrange your next charter service.
          </h3>
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center w-full z-10">
            <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
              <Image
                src="/svg/email.svg"
                width={40}
                height={40}
                className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 "
              />
              <a href="mailto:someone@example.com">sales@flyluxaviation.in</a>
            </div>
            <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
              <Image
                src="/svg/mobile.svg"
                width={40}
                height={40}
                className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 "
              />
              <h2>+91 8123578889</h2>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-[#0A377A] backdrop-blur-md p-6 my-4 rounded-lg shadow-lg flex flex-col items-center text-white"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          <h3 className={`text-base font-semibold ${font.className} pb-6`}>
            Stay connected with us for the latest updates and exclusive offers.
          </h3>
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center w-full z-10">
            <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
              <Image
                src="/svg/arrow.svg"
                width={45}
                height={45}
                className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
              />
              <h2>Linkedin</h2>
            </div>
            <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
              <Image
                src="/svg/arrow.svg"
                width={45}
                height={45}
                className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
              />
              <h2>Facebook</h2>
            </div>
            <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
              <Image
                src="/svg/arrow.svg"
                width={45}
                height={45}
                className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
              />
              <h2>Instagram</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div
      className={`${myFont.className} flex w-full justify-around items-center p-4 bg-white shadow-lg rounded-t-lg`}
    >
      <a href="#home" className={`${font.className} text-sm`}>
        Home
      </a>
      <a href="#about" className={`${font.className} text-sm`}>
        About
      </a>
      <Image
        className={`${myFont.className} w-24 h-8`}
        src="/svg/flylux.svg"
        width={100}
        height={50}
        alt="Flylux"
      />
      <a href="#features" className={`${font.className} text-sm`}>
        Features
      </a>
      <p className={`${font.className} text-sm`}>&copy; 2024 Flylux</p>
    </div>
  );
};

export default MobileContact;
