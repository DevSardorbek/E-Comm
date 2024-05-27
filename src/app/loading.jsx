import React from "react";
import loading from "@/assets/loading.webp";
import Image from "next/image";
import "@/sass/__loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <div className="container">
        <Image src={loading} />
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
