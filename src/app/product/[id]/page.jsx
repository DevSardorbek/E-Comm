import React from "react";
import { getData } from "@/fetch";
import Link from "next/link";
import DetailWrapper from "@/components/detail-wrapper/DetailWrapper";
const Detail = async ({ params: { id } }) => {
  const item = await getData(`products/${id}`);
  console.log(item);
  return (
    <div>
      <DetailWrapper data={item} />
    </div>
  );
};

export default Detail;
