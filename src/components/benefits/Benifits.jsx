import React from "react";
import "@/sass/__benifits.scss";
import benifitsImg1 from "@/assets/benefisImg.png";
import benifitsImg2 from "@/assets/benefisImg2.png";
import benifitsImg3 from "@/assets/benefisImg3.png";
import Image from "next/image";
const Benifits = () => {
  return (
    <div className="benifits__wrapper">
      <div className="container">
        <div className="benefits__section">
          <div className="benefits__card">
            <Image src={benifitsImg1} />
            <h2>FREE SHIPPING</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="benefits__card">
            <Image src={benifitsImg2} />
            <h2>100% REFUND</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="benefits__card">
            <Image src={benifitsImg3} />
            <h2>SUPPORT 24/7</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
