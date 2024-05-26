import React from "react";
import "@/sass/__featured.scss";
import feaImg from "@/assets/feaImg1.png";
import Image from "next/image";
import star from "@/assets/star2.png";
const Featured = () => {
  return (
    <div className="featured__wrapper">
      <div className="container">
        <div className="featured__title">
          <h1>FEATURED PRODUCTS</h1>
        </div>
        <div className="featured__section">
          <div className="featured__section-card">
            <div className="featured__card-img">
              <Image src={feaImg} />
            </div>
            <div className="featured__card-info">
              <h4>Blue Swade Nike Sneakers</h4>
              <Image src={star} />
              <div>
                <h3>$499</h3>
                <del>$599</del>
              </div>
            </div>
          </div>
          <div className="featured__section-card">
            <div className="featured__card-img">
              <Image src={feaImg} />
            </div>
            <div className="featured__card-info">
              <h4>Blue Swade Nike Sneakers</h4>
              <Image src={star} />
              <div>
                <h3>$499</h3>
                <del>$599</del>
              </div>
            </div>
          </div>
          <div className="featured__section-card">
            <div className="featured__card-img">
              <Image src={feaImg} />
            </div>
            <div className="featured__card-info">
              <h4>Blue Swade Nike Sneakers</h4>
              <Image src={star} />
              <div>
                <h3>$499</h3>
                <del>$599</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
