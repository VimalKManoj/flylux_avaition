import React from "react";

const Video = ({ src }) => {
  return (
    <video
      className="w-full h-full object-cover rounded-3xl"
      width="1500"
      height="1500"
      preload="auto"
      autoPlay
      muted
    >
      <source src={src} type="video/mp4" />
      <source src="/Flylux_Banner_3.webm" type="video/webm" />
    </video>
  );
};

export default Video;
