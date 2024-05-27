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
import relImg1 from "@/assets/relatedImg1.png";
import relImg2 from "@/assets/relatedImg2.png";
import relImg3 from "@/assets/relatedImg3.png";
import relImg4 from "@/assets/relatedImg4.png";

const DetailWrapper = ({ data }) => {
  console.log(data);
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
            <div>
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
                  <button>
                    <p>Add To Cart</p>
                    <RiShoppingCart2Fill />
                  </button>
                  <button>
                    <FaRegHeart />
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
          <div className="related__cards">
            <div className="related__card">
              <div className="related__card-img">
                <Image src={relImg1} />
              </div>
              <div className="related__card-info">
                <h3>Nike Air Max 270 React</h3>
                <Image src={star} />
                <div className="related__card-price">
                  <h4>$299,43</h4>
                  <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>
            <div className="related__card">
              <div className="related__card-img">
                <Image src={relImg1} />
              </div>
              <div className="related__card-info">
                <h3>Nike Air Max 270 React</h3>
                <Image src={star} />
                <div className="related__card-price">
                  <h4>$299,43</h4>
                  <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>
            <div className="related__card">
              <div className="related__card-img">
                <Image src={relImg1} />
              </div>
              <div className="related__card-info">
                <h3>Nike Air Max 270 React</h3>
                <Image src={star} />
                <div className="related__card-price">
                  <h4>$299,43</h4>
                  <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>
            <div className="related__card">
              <div className="related__card-img">
                <Image src={relImg1} />
              </div>
              <div className="related__card-info">
                <h3>Nike Air Max 270 React</h3>
                <Image src={star} />
                <div className="related__card-price">
                  <h4>$299,43</h4>
                  <del>$534,33</del>
                  <span>24% Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailWrapper);
