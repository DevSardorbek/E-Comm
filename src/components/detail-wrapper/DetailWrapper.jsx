"use client";
import Image from "next/image";
import Link from "next/link";
import star from "@/assets/star2.png";
import React, { memo } from "react";
import radio1 from "@/assets/radio1.png";
import radio2 from "@/assets/radio2.png";
import radio3 from "@/assets/radio3.png";
import radio4 from "@/assets/radio4.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import "@/sass/__detailWrapper.scss";
import face from "@/assets/face.png";
import twit from "@/assets/twit.png";
import { toogleLike } from "@/lib/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { addToCart } from "@/lib/slice/cartSlice";

const DetailWrapper = ({ data, limitPro }) => {
  const wish = useSelector((state) => state.wishlist.value);
  let cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();
  let card = limitPro?.map((el) => (
    <div key={el.id} className="related__card">
      <div className="related__card-img">
        <Image src={el.image} width={301} height={276} />
      </div>
      <div className="related__card-info">
        <h3>{el.title}</h3>
        <Image src={star} />
        <div className="related__card-price">
          <h4>{el.price}</h4>
          <del>{el.price * 2}</del>
          <span>50% Off</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="detail__wrapper">
      <div className="container">
        <div className="detail__line">
          <Link href={"/"}>Home</Link>/<Link href={"/"}>Hot Detail</Link>/
          <p>{data.title}</p>
        </div>
        <div className="detail__section">
          <div className="detail__section-img">
            <Image src={data?.image} width={375} height={271} />
            <div className="miniImg">
              <div>
                <Image src={data?.image} width={86} height={86} />
              </div>
              <div>
                <Image src={data?.image} width={86} height={86} />
              </div>
              <div>
                <Image src={data?.image} width={86} height={86} />
              </div>
              <div>
                <Image src={data?.image} width={86} height={86} />
              </div>
            </div>
          </div>
          <div className="detail__section-info">
            <div className="detail__in">
              <h2>{data.title}</h2>
              <div className="detail__rating">
                <Image src={star} />
                <span>{data.rating.count}reviews </span>
                <p>Submit a review</p>
              </div>
              <div className="detail__price">
                <h2>${data.price}</h2>
                <del>${data.price * 2}</del>
                <span>50% Off</span>
              </div>
              <div className="detail__name">
                <p>Availability:</p>
                <p>In stock</p>
              </div>
              <div className="detail__name">
                <p>Category:</p>
                <p>Accessories</p>
              </div>
              <p>Free shipping</p>
              <div className="select__color">
                <p>Select Color:</p>
                <div>
                  <span>
                    <Image src={radio1} />
                  </span>
                  <span>
                    <Image src={radio2} />
                  </span>
                  <span>
                    <Image src={radio3} />
                  </span>
                  <span>
                    <Image src={radio4} />
                  </span>
                </div>
              </div>
              <div className="detail__size">
                <p>Size</p>
                <select>
                  <option>XS</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                </select>
              </div>
              <div className="detail__change">
                <div className="change">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
                <div className="cart">
                  <button onClick={() => dispatch(addToCart(data))}>
                    <p>Add To Cart</p>
                    <RiShoppingCart2Fill />
                  </button>
                  <button onClick={() => dispatch(toogleLike(data))}>
                    {wish?.some((item) => item.id === data.id) ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <BsHeart />
                    )}
                  </button>
                </div>
              </div>
              <div className="share_media">
                <button>
                  <Image src={face} />
                  <p>Share on Facebook</p>
                </button>
                <button>
                  <Image src={twit} />
                  <p>Share on Twitter</p>
                </button>
              </div>
            </div>
            <div className="best__seller">
              <div className="title">
                <h3>BEST SELLER</h3>
              </div>
              <div className="best__seller-card">
                <div className="best__seller-img">
                  <Image src={data.image} width={289} height={239} />
                </div>
                <div className="best__seller-info">
                  <Image src={star} />
                  <div className="best__seller-price">
                    <h2>${data.price}</h2>
                    <del>${data.price * 2}</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detailAll__info">
          <div className="detailAll__info-title">
            <h2>Product Infomation</h2>
            <h2>Reviews</h2>
            <h2>Another tab</h2>
          </div>
          <div className="detailAll__info-air">
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
          </div>
        </div>
        <div className="related__products">
          <div className="related__title">
            <h1>RELATED PRODUCTS</h1>
          </div>
          <div className="related__cards">{card}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailWrapper);
