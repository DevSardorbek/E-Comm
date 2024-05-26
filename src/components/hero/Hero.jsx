import React from "react";
import "@/sass/__hero.scss";
import herobg from "@/assets/herobg.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="hero__wrapper">
      <Image src={herobg} />
      <div className="container">
        <div className="hero__section">
          <h1>Super Flash Sale</h1>
          <h1>50% Off</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
