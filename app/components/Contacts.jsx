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
    <div className="hidden  h-full w-screen md:flex flex-col justify-between  text-white p-4 md:p-20 md:px-7 relative">
      <Section1 />
      <Section2 />
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
    <div
      className={`${font.className} relative text-4xl flex flex-col w-full h-full justify-around items-center rounded-3xl z-20 overflow-hidden p-3 md:p-10`}
    >
      <div className="w-full h-full absolute">
        <Image
          src="/images/background.jpg"
          width={1000}
          height={1000}
          className="w-full h-full md:h-auto object-cover absolute object-right  opacity-95 -z-10 "
        />
      </div>

      <div
        className="w-full h-full flex flex-col md:flex-row  justify-center items-center flex-1  "
        ref={ref}
      >
        <div
          className={`${myFont.className}  md:mb-0 md:self-end xl:text-6xl 2xl:text-7xl md:flex-1  `}
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)", // Adjust the third value (10px) for spread
          }}
        >
          Contact us
        </div>
        <div className="flex flex-col justify-between items-center w-full h-full flex-1 bg-black/40 backdrop-blur-sm rounded-3xl  md:ml-20 p-4 md:p-8 box-border ">
          <motion.p
            className="text-base w-full md:text-lg  2xl:text-2xl font-semibold text-justify text-white"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We are here to assist you with all your charter service needs and
            ensure you enjoy all the specialized benefits Flylux has to offer.
            Please don&apos;t hesitate to reach out to us through the following
            channels.
          </motion.p>
          <motion.div
            className="flex flex-col w-full md:w-auto h-full my-4 rounded-xl justify-around items-center bg-white/40 text-white backdrop-blur-md p-2 xl:p-4 2xl:p-5  overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* <div className="bg-gradient-to-t from-black/40 to-black/0 w-full h-full absolute z-0"></div> */}
            <h2 className=" xl:text-base 2xl:text-xl md:text-center xl:pb-4 2xl:pb-10 text-base font-semibold z-10">
              Our dedicated customer service team is ready to assist you with
              any inquiries or to arrange your next charter service.
            </h2>
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center w-full z-10">
              <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
                <Image
                  src="/svg/email.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 "
                />
                <a href="mailto:sales@flyluxaviation.in">
                  sales@flyluxaviation.in
                </a>
              </div>
              <div className="flex justify-center items-center text-base xl:text-base 2xl:text-xl font-normal">
                <Image
                  src="/svg/mobile.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-6 h-6 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 "
                />
                <a href="tel:+91 8123578889">+91 8123578889</a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col w-full h-full my-4 rounded-xl justify-around items-center bg-white/40 text-white backdrop-blur-md xl:p-4 2xl:p-5  overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* <div className="bg-gradient-to-t from-black/40 to-black/0 w-full h-full absolute z-0"></div> */}
            <h2 className="xl:pb-4 2xl:pb-10 font-semibold z-10 xl:text-base 2xl:text-xl md:text-center">
              Stay connected with us for the latest updates and exclusive
              offers.
            </h2>
            <div className="flex justify-around items-center w-full z-10 text-xl">
              <div className="flex justify-center items-center font-normal xl:text-lg 2xl:text-xl">
                <Image
                  src="/svg/arrow.svg"
                  width={45}
                  height={45}
                  className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
                />
                <h2>Linkedin</h2>
              </div>
              <div className="flex justify-center items-center font-normal xl:text-lg 2xl:text-xl">
                <Image
                  src="/svg/arrow.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
                />
                <h2>Facebook</h2>
              </div>
              <div className="flex justify-center items-center font-normal xl:text-lg 2xl:text-xl">
                <Image
                  src="/svg/arrow.svg"
                  width={40}
                  height={40}
                  className="pr-2 w-6 h-6 2xl:w-9 2xl:h-9 xl:w-8 xl:h-8"
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

{
  /* <div className="flex flex-col justify-end items-end xl:mb-12 2xl:mb-20 xl:px-32 2xl:px-48 w-[90%]  ">
<motion.p
  className={`${myFont.className} w-full justify-end flex text-start  pt-20 text-[#0A377A] mb-6 xl:pr-16 2xl:pr-44`}
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

</div>
<div className="flex-1 flex flex-col w-full justify-around items-start h-full   text-xl xl:px-16 2xl:px-28">
<motion.p
  className="w-[60%] justify-end items-end flex text-xl font-medium text-justify text-black"
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
<motion.div
  className="flex flex-col h-full rounded-xl justify-around items-center bg-blue-950/20 backdrop-blur-md xl:p-6 2xl:p-10 xl:w-[45%] 2xl:w-[40%] overflow-hidden"
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
  className="relative flex flex-col rounded-xl justify-around items-center bg-blue-950/20 backdrop-blur-md xl:p-6 2xl:p-10 xl:w-[45%] 2xl:w-[40%] h-full overflow-hidden"
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
</div> */
}
