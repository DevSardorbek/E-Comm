"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartWrapper from "../cartWrapper/CartWrapper";
import Empty from "../empty/Empty";

const CartCantent = () => {
  const cartcant = useSelector((s) => s.cart.value);
  console.log("dsf", cartcant);
  return (
    <div className="cartContent">
      {cartcant.length ? <CartWrapper /> : <Empty />}
    </div>
  );
};

export default CartCantent;
