import React from "react";
import "@/sass/__empty.scss";
import empty from "@/assets/empty.png";
import Image from "next/image";
const Empty = () => {
  return (
    <div className="empty">
      <Image src={empty} width={400} height={400} />
    </div>
  );
};

export default Empty;
