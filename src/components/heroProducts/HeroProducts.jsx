import React from "react";
import heroP1 from "@/assets/heroP1.png";
import heroP2 from "@/assets/heroP2.png";
import heroP3 from "@/assets/heroP3.png";
import Image from "next/image";
import "@/sass/__heroProducts.scss";

const HeroProducts = () => {
  return (
    <div className="heroProducts__wrapper">
      <div className="container">
        <div className="heroProducts__section">
          <div className="heroProducts__card">
            <Image src={heroP1} />
            <div className="heroProducts__card-info">
              <div className="card__title">
                <h4>FS - QUILTED MAXI CROSS BAG</h4>
              </div>
              <div className="card__discount">
                <del>$534,33</del>
                <h3>24% Off</h3>
              </div>
              <div className="card__price">
                <h2>$299,43</h2>
              </div>
            </div>
          </div>
          <div className="heroProducts__card">
            <Image src={heroP2} />
            <div className="heroProducts__card-info">
              <div className="card__title">
                <h4>FS - Nike Air Max 270 React...</h4>
              </div>
              <div className="card__discount">
                <del>$534,33</del>
                <h3>24% Off</h3>
              </div>
              <div className="card__price">
                <h2>$299,43</h2>
              </div>
            </div>
          </div>
          <div className="heroProducts__card">
            <Image src={heroP3} />
            <div className="heroProducts__card-info">
              <div className="card__title">
                <h4>FS - Nike Air Max 270 React...</h4>
              </div>
              <div className="card__discount">
                <del>$534,33</del>
                <h3>24% Off</h3>
              </div>
              <div className="card__price">
                <h2>$299,43</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
