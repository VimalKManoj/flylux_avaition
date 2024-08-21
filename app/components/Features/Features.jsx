"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { motion, useInView, useAnimation } from "framer-motion";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../../../public/static/Conthrax Bold.otf",
});

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Features() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  const mainControls = useAnimation();
  const scaleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      scaleControls.start("visible");
    }
  }, [isInView, mainControls]);

  const [activeFeature, setActiveFeature] = useState({
    imageSrc: "/images/about_1.jpg",
    text: "Fly Lux is dedicated to providing a journey that’s uniquely yours. From personalized service to luxurious amenities, every feature is designed to enhance your travel experience with comfort and elegance.",
  });

  const handleHover = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <div
      className="w-full h-[90%] flex flex-col justify-center items-center py-32 bg-white z-10"
      id="features"
    >
      <div
        ref={ref}
        className="flex justify-center items-center max-w-[72vw] flex-col"
      >
        <motion.div
          className={`${font.className}  px-2 py-[2px] border rounded-xl text-[#0A377A]  border-[#0A377A] text-sm  mb-4`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Features
        </motion.div>
        <motion.div
          className={`${myFont.className} xl:text-4xl  2xl:text-5xl font-extrabold mb-10 text-[#0A377A] `}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Exclusive Features Tailored for You
        </motion.div>
        <div className="w-full h-[90vh] rounded-2xl relative flex justify-between items-center">
          <motion.div
            className="w-full h-full absolute top-0 overflow-hidden rounded-2xl opacity-50 z-0"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0.5 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/cloud.jpg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            initial="hidden"
            animate={scaleControls}
            transition={{
              duration: 1.5,
              delay: 0.7,
              ease: "easeInOut",
              type: "spring",
            }}
            className="w-full flex-1 h-full relative flex justify-center items-center  rounded-2xl"
            id="image"
          >
            <Image
              src={activeFeature.imageSrc}
              width={1000}
              height={1000}
              className="w-[full] h-[75%] object-cover relative right-16 rounded-xl"
            />
          </motion.div>

          <div className="flex-1 z-20 flex justify-between items-center flex-col w-full h-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} flex-1 w-full h-full flex flex-col justify-around items-center z-50 p-10 text-xl font-medium text-gray-950`}
              id="para"
            >
              {activeFeature.text}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full flex-1 flex flex-col justify-around h-full items-center p-10  z-50 font-semibold`} 
            >
              <p
                className="border-y p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300"
                onMouseEnter={() =>
                  handleHover({
                    imageSrc: "/images/safety.jpg",
                    text: "To Flylux, safety is the first component of the luxury. We partner with established top-tier aircraft operators with good records of safety protocol maintenance, so that your safety is never compromised. Our partner operators provide the safest aircrafts clubbed with highly trained crews so you fly chill, hassle-free",
                  })
                }
              >
                Safety
              </p>
              <p
                className="border-y p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300"
                onMouseEnter={() =>
                  handleHover({
                    imageSrc: "/images/pet_friendly.jpg",
                    text: "Our services ensure the safety and well-being of your pets during the journey. We are committed to providing a comfortable and stress-free experience for all passengers, including your furry friends.",
                  })
                }
              >
                Pet Friendly
              </p>
              <p
                className="border-b p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300"
                onMouseEnter={() =>
                  handleHover({
                    imageSrc: "/images/business.jpg",
                    text: "For business professionals, our service is tailored to ensure productivity on the go. Enjoy seamless connectivity and comfort that enables you to work while you travel.",
                  })
                }
              >
                Business Travel
              </p>
              <p
                className="border-b p-3 w-full flex-1 flex justify-start items-center cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300"
                onMouseEnter={() =>
                  handleHover({
                    imageSrc: "/images/dining.jpg",
                    text: "Experience gourmet dining in the skies. Our private dining options are crafted to meet your tastes, offering exquisite meals prepared by top chefs.",
                  })
                }
              >
                Private Dining
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
