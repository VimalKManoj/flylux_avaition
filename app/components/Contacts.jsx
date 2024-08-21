import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const myFont = localFont({
  src: "../../public/static/Conthrax SemiBold.otf",
});

const Contacts = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between  text-white p-20 px-7 relative">
      <Section1 />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className={`${font.className} relative text-4xl flex flex-col w-full h-full justify-around items-center rounded-3xl z-20 overflow-hidden bg-black`}
    >
      <Image
        src="/images/contact_2.jpg"
        width={1500}
        height={1500}
        className="w-full h-full object-cover absolute object-top opacity-95 -z-10 "
      />
      <div
        className="w-full h-full flex flex-col justify-between items-center flex-1  font-extrabold text-6xl "
        ref={ref}
      >
        <div className="flex flex-col justify-center mb-20 px-48 ">
          <motion.p
            className={`${myFont.className} w-full text-end pt-20 text-[#0A377A] mb-6`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact Us
          </motion.p>
          <motion.p
            className=" text-xl font-medium  w-[55%] self-end text-justify text-black"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We are here to assist you with all your charter service needs and
            ensure you enjoy all the specialized benefits Fly Lux has to offer.
            Please don&apos;t hesitate to reach out to us through the following
            channels.
          </motion.p>
        </div>
        <div className="flex-1 flex w-full justify-around items-start h-full mb-40   text-xl px-28">
          <motion.div
            className="flex flex-col h-full rounded-xl justify-center items-center bg-blue-950/20 backdrop-blur-md p-10 w-[40%]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gradient-to-t from-black/40 to-black/0 w-full h-full absolute z-0"></div>
            <h2 className="pb-10 font-semibold z-10">
              Our dedicated customer service team is ready to assist you with
              any inquiries or to arrange your next charter service.
            </h2>
            <div className="flex justify-around items-center w-full z-10">
              <div className="flex justify-center items-center font-normal">
                <Image
                  src="/svg/email.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-8 h-8"
                />
                <a href="mailto:someone@example.com">sales@flyluxaviation.in</a>
              </div>
              <div className="flex justify-center items-center font-normal">
                <Image
                  src="/svg/mobile.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-8 h-8 "
                />
                <h2>+91 8123578889</h2>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative flex flex-col rounded-xl justify-center items-center bg-blue-950/20 backdrop-blur-md p-10 w-[40%] h-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-gradient-to-t from-black/40 to-black/0 w-full h-full absolute z-0"></div>
            <h2 className="pb-10 font-semibold z-10">
              Stay connected with us for the latest updates and exclusive
              offers.
            </h2>
            <div className="flex justify-around items-center w-full z-10">
              <div className="flex justify-center items-center font-normal">
                <Image
                  src="/svg/arrow.svg"
                  width={45}
                  height={45}
                  className="pr-2 w-9 h-9"
                />
                <h2>Linkedin</h2>
              </div>
              <div className="flex justify-center items-center font-normal">
                <Image
                  src="/svg/arrow.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-9 h-9"
                />
                <h2>Facebook</h2>
              </div>
              <div className="flex justify-center items-center font-normal">
                <Image
                  src="/svg/arrow.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-9 h-9"
                />
                <h2>Instagram</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div
      className={`${myFont.className} flex absolute w-full h-[10vh] bottom-0 left-0 text-black rounded-t-3xl justify-between items-center p-10 z-20`}
    >
      <Link href="#hero" className={`${font.className}`}>
        Home
      </Link>
      <Link href="#about" className={font.className}>
        About
      </Link>
      <Image
        className={`${myFont.className} w-40 h-10`}
        src="/svg/flylux.svg"
        width={100}
        height={50}
      />
      <Link href="#features" className={font.className}>
        Features
      </Link>
      <p className={font.className}>©copyright</p>
    </div>
  );
};

export default Contacts;
