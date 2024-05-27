import React from "react";
import "@/sass/__supHeader.scss";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

import Link from "next/link";

const SupHeader = () => {
  return (
    <div className="supHeader__wrapper">
      <div className="container">
        <div className="supHeader__section">
          <div className="supHeader__select">
            <select>
              <option value="">En</option>
              <option value="">Ru</option>
              <option value="">Uz</option>
            </select>
            <select>
              <option value="">USD</option>
              <option value="">Euro</option>
              <option value="">D ollor</option>
            </select>
          </div>
          <div className="supHeader__items">
            <div className="subHeader__items-home">
              <Link href={"/"}>
                <FiHome />
              </Link>
            </div>
            <Link href={"/"}>
              <FaRegUser />
            </Link>
            <Link href={"/"}>
              <span>0</span>
              <FaRegHeart />
            </Link>
            <Link href={"/cart"}>
              <span>0</span>
              <FiShoppingCart />
            </Link>
            <div className="supHeader__items-search">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupHeader;
