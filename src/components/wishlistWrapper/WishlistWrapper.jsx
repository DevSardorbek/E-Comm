"use client";
import Link from "next/link";
import React from "react";
import "@/sass/__wishlistWrapper.scss";
import { useSelector } from "react-redux";
import Products from "../products/Products";
const WishlistWrapper = () => {
  let selector = useSelector((s) => s.wishlist.value);
  return (
    <div className="wishlistWrapper">
      <div className="container">
        <div className="wishlistWrapper__line">
          <Link href={"/"}>Home</Link> / <p>Wishlist</p>
        </div>
      </div>
      <Products data={selector} />
    </div>
  );
};

export default WishlistWrapper;
