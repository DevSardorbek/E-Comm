"use client";
import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/sass/__subHeader.scss";
import { TfiMenuAlt } from "react-icons/tfi";

const SubHeader = () => {
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [burger, serBurger] = useState(false);
  return (
    <div className={`subHeader__wrapper ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <div className="subHeader__section">
          <div className="subHeader__logo">
            <Link href={"/"}>
              <Image src={logo} />
            </Link>
          </div>

          <div className={`subHeader__links ${burger ? "show" : ""}`}>
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>BAGS</Link>
            <Link href={"/"}>SNEAKERS</Link>
            <Link href={"/"}>BELT</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
          <button onClick={() => serBurger(!burger)} className="burger">
            <TfiMenuAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
