import React from "react";
import { getData } from "@/fetch";
import DetailWrapper from "@/components/detail-wrapper/DetailWrapper";
const Detail = async ({ params: { id } }) => {
  const item = await getData(`products/${id}`);
  const limitPro = await getData(`products?limit=4`);
  return (
    <div>
      <DetailWrapper limitPro={limitPro} data={item} />
    </div>
  );
};

export default Detail;
