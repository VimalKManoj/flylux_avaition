"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Frank_Ruhl_Libre } from "next/font/google";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
  easeInOut,
} from "framer-motion";
const font = Frank_Ruhl_Libre({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const AboutHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const mainControls = useAnimation();
  const scaleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      scaleControls.start("visible");
    }
  }, [isInView, mainControls]);

  const leftImageY = useTransform(scrollYProgress, [0, 0.5], [-100, 100]);
  const centerImageY = useTransform(scrollYProgress, [0, 0.5], [-100, 100]);
  const rightImageY = useTransform(scrollYProgress, [0, 0.5], [200, -150]);

  return (
    <div
      id=""
      className="flex flex-col items-center  bg-[#ffffff] py-20 px-6 md:px-12 z-20 pt-36 relative"
    >
      <div className="w-1/2 flex">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`px-1 py-1 border rounded-xl border-[#0A377A] text-[#0A377A] text-sm uppercase mb-4 self-start`}
        >
          About us
        </motion.p>
      </div>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.35 }}
        className={`${font.className} text-4xl md:text-6xl font-thin  font-serif text-[#0A377A] mt-2 w-1/2 mb-10`}
      >
        Your Journey, Our Expertise
      </motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-lg text-center text-[#0A377A] mt-4 md:w-1/3"
      >
        Flylux offers unparalleled access to a distinguished selection of jets
        and helicopters, ensuring an exceptional travel experience. Our service
        provides access to aircraft with luxurious interiors, cutting-edge
        technology, and a commitment to excellence, designed to meet the highest
        standards of comfort and sophistication.
      </motion.p>
      <div
        ref={ref}
        className="flex flex-col md:flex-row items-center justify-between mt-12 pb-20"
      >
        <motion.div
          style={{ y: leftImageY }}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.3, delay:0.25,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",

              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="absolute left-8 top-1/3 w-[20rem] h-[24rem]"
        >
          <Image
            src="/images/1.png"
            alt="Image description"
            width={300}
            height={400}
            className="rounded-lg w-full h-full object-cover object-left"
          />
        </motion.div>
        <motion.div
          style={{ y: centerImageY }}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.3,delay:0.45,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",

              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="mr-28"
        >
          <Image
            src="/images/background.jpg"
            alt="Image description"
            width={400}
            height={400}
            className="rounded-lg mt-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: .4,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",

              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{ y: rightImageY }}
          className="absolute right-8 top-40 w-[20rem] h-[24rem]"
        >
          <Image
            src="/images/about.jpg"
            alt="Image description"
            width={500}
            height={600}
            className="rounded-lg w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;
