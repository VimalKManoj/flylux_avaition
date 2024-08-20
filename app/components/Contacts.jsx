import React from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/static/Conthrax Bold.otf",
});

const Contacts = () => {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
};

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className={`${myFont.className} text-[14vw] leading-[0.8] mt-10`}>
        FLYLUX
      </h1>

      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>

        <p>Home</p>

        <p>Projects</p>

        <p>Our Mission</p>

        <p>Contact Us</p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>

        <p>News</p>

        <p>Learn</p>

        <p>Certification</p>

        <p>Publications</p>
      </div>
    </div>
  );
};

export default Contacts;
