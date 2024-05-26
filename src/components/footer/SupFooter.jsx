import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import facebok from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import "@/sass/__supFooter.scss";
const SupFooter = () => {
  return (
    <div className="supfooter__wrapper">
      <div className="container">
        <div className="supfooter__section">
          <div className="supfooter__section-logo">
            <Image src={logo} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="supfooter__section-follow">
            <h3>Follow Us</h3>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="media1">
              <Image src={facebok} />
              <Image src={twitter} />
            </div>
          </div>
          <div className="supfooter__section-contact">
            <h3>Contact Us</h3>
            <h4>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupFooter;
