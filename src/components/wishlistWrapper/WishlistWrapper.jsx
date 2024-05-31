"use client";
import Link from "next/link";
import React from "react";
import "@/sass/__wishlistWrapper.scss";
import { useSelector } from "react-redux";
import Products from "../products/Products";
import Empty from "../empty/Empty";
const WishlistWrapper = () => {
  let selector = useSelector((s) => s.wishlist.value);
  return (
    <div className="wishlistWrapper">
      <div className="container">
        {selector.length ? (
          <div>
            <div className="wishlistWrapper__line">
              <Link href={"/"}>Home</Link> / <p>Wishlist</p>
            </div>
            <Products data={selector} />
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default WishlistWrapper;
