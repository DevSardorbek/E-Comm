"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/sass/__cartWrapper.scss";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
} from "@/lib/slice/cartSlice";
import PaymentModal from "../paymentModal/PaymentModal";

const CartWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementCartQuantity(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCartQuantity(item));
    } else {
      handleRemove(item);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="cartWrapper__section">
        <div className="container">
          <div className="cart__line">
            <Link href="/">Home</Link> / <p>Hot Deal</p>
          </div>
          <div className="cart__products-title">
            <h3>PRODUCT</h3>
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>TOTAL</h3>
          </div>
          <div className="cart__products">
            {cart.map((item) => (
              <div key={item.id} className="cart__product">
                <div className="cart__product-name">
                  <button onClick={() => handleRemove(item)}>
                    <IoCloseSharp />
                  </button>
                  <div>
                    <Image
                      src={item.image}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <h4>${item.price}</h4>
                <div className="cart__quantity">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <h4>${item.price * item.quantity}</h4>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <div className="cart__total-input">
              <input type="text" placeholder="Voucher code" />
              <button>Redeem</button>
            </div>
            <div className="cart__total-ship">
              <div className="cart__ship-info">
                <div>
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
                <div>
                  <p>Shipping fee</p>
                  <p>$20</p>
                </div>
                <div>
                  <p>Coupon</p>
                  <p>No</p>
                </div>
              </div>
              <div className="ship__total">
                <h2>TOTAL</h2>
                <h2>${totalPrice + 20}</h2>
              </div>
              <button onClick={handleCheckout}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
    </>
  );
};

export default CartWrapper;
