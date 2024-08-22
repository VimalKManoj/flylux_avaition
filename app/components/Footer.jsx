"use client";
import React, { useEffect } from "react";
import FAQ from "./FAQ";
import Contacts from "./Contacts";
import Lenis from "lenis";
import MobileContact from "./MobileContact";

const Footer = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-white z-10 ">
      <FAQ />
      <div
        className="relative h-[100vh] "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        id="contact"
      >
        <div className="fixed bottom-0 h-[100vh] w-full" >
          <Contacts />
          <MobileContact/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
