"use client";
import React from "react";
import "@/sass/__supHeader.scss";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

import Link from "next/link";
import { useSelector } from "react-redux";

const SupHeader = () => {
  let selector = useSelector((s) => s.wishlist.value);
  let cartSelector = useSelector((s) => s.cart.value);
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
            <Link href={"/login"}>
              <FaRegUser />
            </Link>
            <Link href={"/wishlist"}>
              <span>{selector.length}</span>
              <FaRegHeart />
            </Link>
            <Link href={"/cart"}>
              <span>{cartSelector.length}</span>
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
