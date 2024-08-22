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

export default function MobileFeature() {
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
    <div className="md:hidden w-full h-full flex flex-col items-center py-8 px-4 bg-white z-10">
      <div ref={ref} className="mt-8 flex flex-col justify-center items-center max-w-full">
        <motion.div
          className={`${font.className} px-4 py-1 border rounded-xl text-[#0A377A] border-[#0A377A] text-sm mb-4`}
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
          className={`${myFont.className} text-2xl font-extrabold mb-10 text-[#0A377A] text-center`}
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

        <div className="w-full flex flex-col justify-center items-center space-y-12">
          {/* Feature 1 */}
          <div className="w-full flex flex-col items-center">
            <motion.div
              className="relative w-full h-56 mb-4 overflow-hidden"
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
            >
              <Image
                src={activeFeature.imageSrc}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-xl absolute top-0"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full text-lg font-medium text-gray-950 text-center`}
            >
              {activeFeature.text}
            </motion.div>
          </div>

          {/* Feature List */}
          <div className="w-full space-y-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full flex justify-start items-center p-4 border rounded-lg cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300`}
              onMouseEnter={() =>
                handleHover({
                  imageSrc: "/images/safety.jpg",
                  text: "To Flylux, safety is the first component of the luxury. We partner with established top-tier aircraft operators with good records of safety protocol maintenance, so that your safety is never compromised. Our partner operators provide the safest aircrafts clubbed with highly trained crews so you fly chill, hassle-free",
                })
              }
            >
              Safety
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full flex justify-start items-center p-4 border rounded-lg cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300`}
              onMouseEnter={() =>
                handleHover({
                  imageSrc: "/images/pet_friendly.jpg",
                  text: "Our services ensure the safety and well-being of your pets during the journey. We are committed to providing a comfortable and stress-free experience for all passengers, including your furry friends.",
                })
              }
            >
              Pet Friendly
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full flex justify-start items-center p-4 border rounded-lg cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300`}
              onMouseEnter={() =>
                handleHover({
                  imageSrc: "/images/business.jpg",
                  text: "For business professionals, our service is tailored to ensure productivity on the go. Enjoy seamless connectivity and comfort that enables you to work while you travel.",
                })
              }
            >
              Business Travel
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={`${font.className} w-full flex justify-start items-center p-4 border rounded-lg cursor-pointer hover:bg-[#0A377A] hover:text-white transition-colors duration-300`}
              onMouseEnter={() =>
                handleHover({
                  imageSrc: "/images/dining.jpg",
                  text: "Experience gourmet dining in the skies. Our private dining options are crafted to meet your tastes, offering exquisite meals prepared by top chefs.",
                })
              }
            >
              Private Dining
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
