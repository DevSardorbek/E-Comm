"use client";
import React, { useEffect } from "react";
import "@/sass/__products.scss";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { memo } from "react";
import { toogleLike } from "@/lib/slice/wishlistSlice";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { addToCart } from "@/lib/slice/cartSlice";
import { IoEyeOutline } from "react-icons/io5";
import star from "@/assets/star.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ data }) => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (Array.isArray(storedWishlist)) {
      dispatch(toogleLike(storedWishlist));
    }
  }, [dispatch]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(storedCart)) {
      dispatch(addToCart(storedCart));
    }
  }, [dispatch]);

  const handleLike = (product) => {
    const updatedWishlist = wishlist.some((item) => item.id === product.id)
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    dispatch(toogleLike(updatedWishlist));
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    let updatedCart;

    if (index !== -1) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    dispatch(addToCart(updatedCart));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const cardItems = data?.map((product) => (
    <div key={product.id} className="product__card">
      <div className="product__card-img">
        <Image className="img1" src={product.image} width={301} height={276} />
        <div>
          <button onClick={() => handleLike(product)}>
            {wishlist?.some((item) => item.id === product.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <BsHeart />
            )}
          </button>
          <button onClick={() => handleAddCart(product)}>
            {cart?.some((item) => item.id === product.id) ? (
              <BsCartCheck />
            ) : (
              <AiOutlineShoppingCart />
            )}
          </button>
          <button>
            <Link href={`/product/${product.id}`}>
              <IoEyeOutline />
            </Link>
          </button>
        </div>
      </div>
      <div className="product__card-info">
        <h1>{product.title}</h1>
        <div className="card__star">
          <Image src={star} alt="star" />
          <span>({product.rating.rate})</span>
        </div>
        <div>
          <h2>${product.price}</h2>
          <del>${product.price * 2}</del>
          <h3>{product.rating.count}</h3>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products__wrapper">
      <div className="container1">
        <div className="products__title">
          <h1>Best Products</h1>
          <div className="products__category">
            <button>All</button>
            <button>Bags</button>
            <button>Sneakers</button>
            <button>Belt</button>
            <button>Sunglasses</button>
          </div>
        </div>
        <div className="products__section">{cardItems}</div>
        <div className="learnMore">
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
