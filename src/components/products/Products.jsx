"use client";
import React from "react";
import "@/sass/__products.scss";
import Image from "next/image";
import pro from "@/assets/heroP1.png";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { memo } from "react";

import star from "@/assets/star.png";
import Link from "next/link";
const Products = (data) => {
  let cardItem = data?.data.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card-img">
        <Link href={`/product/${el.id}`}>
          <Image className="img1" src={el.image} width={301} height={276} />
        </Link>
        <div>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
      <div className="product__card-info">
        <h1>{el.title}</h1>
        <div className="card__star">
          <Image src={star} />
          <span>({el.rating.rate})</span>
        </div>
        <div>
          <h2>${el.price}</h2>
          <del>${el.price * 2}</del>
          <h3>{el.rating.count}</h3>
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
            <button>Sunglasess</button>
          </div>
        </div>
        <div className="products__section">{cardItem}</div>
        <div className="learnMore">
          <button>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
