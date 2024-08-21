import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Link from "next/link";

const font = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const myFont = localFont({
  src: "../../public/static/Conthrax Bold.otf",
});

const Contacts = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between  text-white"  >
      <div className="w-full h-full absolute top-0 opacity-40 z-10 bg-black"></div>
      <Image
        src="/images/contact.jpeg"
        width={1500}
        height={1500}
        className="absolute w-full h-full object-cover top-0 -z-10 opacity-95 grayscale"
      />

      <Section1 />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div
      className={`${font.className} text-4xl flex w-full h-[80%] justify-center items-center z-20`}
     
    >
      <div className="w-1/2 h-full flex justify-start items-start flex-1 p-24 pt-32 font-extrabold text-7xl">
        <p className="w-2/3">Contact Us for Your Next Journey</p>
      </div>
      <div className="flex-1 flex w-full justify-around items-start h-full  p-24 pt-32 text-xl">
        <div className="flex flex-col h-[20rem]">
          <h2 className="pb-10">Email</h2>
          <a href="mailto:someone@example.com">flylux@gmail.com</a>
        </div>
        <div className="flex flex-col h-[20rem">
          <h2 className="pb-10 ">Socials</h2>
          <h2>Linkedin</h2>
          <h2>Facebook</h2>
          <h2>Instagram</h2>
        </div>

        <div className="flex flex-col h-[20rem">
          <h2 className="pb-10 ">Mobile</h2>
          <h2>+91 243435436</h2>
        </div>
        
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div
      className={`${myFont.className} flex h-[22%] justify-between items-end p-10 z-20`}
    >
      <h1 className={`${myFont.className} text-[10vw] leading-[0.8]`}>
        FLYLUX
      </h1>

      <Link href="#hero" className={`${font.className}`}>
        Home
      </Link>
      <Link href="#about" className={font.className}>
        About
      </Link>
      <Link href="#features" className={font.className}>
        Features
      </Link>
      <p className={font.className}>©copyright</p>
    </div>
  );
};

export default Contacts;
