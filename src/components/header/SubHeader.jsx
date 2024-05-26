"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/sass/__subHeader.scss";
import { TfiMenuAlt } from "react-icons/tfi";

const SubHeader = () => {
  const [burger, serBurger] = useState(false);
  return (
    <div className="subHeader__wrapper">
      <div className="container">
        <div className="subHeader__section">
          <div className="subHeader__logo">
            <Image src={logo} />
          </div>

          <div className={`subHeader__links ${burger ? "show" : ""}`}>
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>BAGS</Link>
            <Link href={"/"}>SNEAKERS</Link>
            <Link href={"/"}>BELT</Link>
            <Link href={"/"}>CONTACT</Link>
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
