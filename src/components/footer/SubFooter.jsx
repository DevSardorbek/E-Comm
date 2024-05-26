import React from "react";
import "@/sass/__subfooter.scss";
import wes from "@/assets/wes.png";
import master from "@/assets/masterCard.png";
import paypal from "@/assets/paypal.png";
import visa from "@/assets/visa.png";
import Image from "next/image";
const SubFooter = () => {
  return (
    <div className="subfooter__wrapper">
      <div className="container">
        <div className="subfooter__section">
          <div className="subfooter__section-info">
            <h3>Infomation</h3>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="subfooter__section-service">
            <h3>Service</h3>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="subfooter__section-account">
            <h3>My Account</h3>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="subfooter__section-account">
            <h3>Our Offers</h3>
            <p>About Us</p>
            <p>Infomation </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="pay__section">
          <Image src={wes} />
          <Image src={master} />
          <Image src={paypal} />
          <Image src={visa} />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
