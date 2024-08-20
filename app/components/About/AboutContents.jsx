import Image from "next/image";
import React from "react";

const AboutContents = () => {
  return (
    <div className="bg-white z-20 w-full">
      <ImageTextSection reverse imageSrc="/svg/about.svg" />
      <ImageTextSection  imageSrc="/svg/about_2.svg" />
    </div>
  );
};

export default AboutContents;

const ImageTextSection = ({ imageSrc, altText, title, content, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center my-10`}
    >
      {/* Image Section */}
      <div className="w-screen h-screen md:w-1/2 p-4">
        <Image
          src={imageSrc}
          alt={altText}
          width={500}
          height={500}
          className="rounded-lg object-contain w-full h-full "
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};
