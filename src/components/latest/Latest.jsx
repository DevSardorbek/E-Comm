import React from "react";
import "@/sass/__latest.scss";
import limg1 from "../../../src/assets/lImg1.png";
import limg2 from "../../../src/assets/limg2.png";
import limg3 from "../../../src/assets/limg3.png";
import Image from "next/image";
const Latest = () => {
  return (
    <div className="latest__wrapper">
      <div className="container">
        <div className="latest__title">
          <h1>LATEST NEWS</h1>
        </div>
        <div className="latest__section">
          <div className="latest__section-card">
            <div className="latest__card-img">
              <Image src={limg1} />
            </div>
            <div className="latest__card-info">
              <span>01 Jan, 2015</span>
              <h3>Fashion Industry</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="latest__section-card">
            <div className="latest__card-img">
              <Image src={limg2} />
            </div>
            <div className="latest__card-info">
              <span>01 Jan, 2015</span>
              <h3>Best Design Tools</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="latest__section-card">
            <div className="latest__card-img">
              <Image src={limg3} />
            </div>
            <div className="latest__card-info">
              <span>01 Jan, 2015</span>
              <h3>HR Community</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
