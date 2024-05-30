import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: wishlistSlice,
      cart: cartSlice,
    },
  });
};
