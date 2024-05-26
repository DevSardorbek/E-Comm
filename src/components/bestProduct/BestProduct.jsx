import React from "react";
import bestProImg from "@/assets/bestProductImg.png";
import Image from "next/image";
import "@/sass/__bestProduct.scss";
const BestProduct = () => {
  return (
    <div className="bestProduct__wrapper">
      <div className="container">
        <div className="bestProduct__section">
          <div className="bestProduct__info">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <button> SHOP NOW</button>
          </div>
          <div className="bestProduct__img">
            <Image src={bestProImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
