"use client";

import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    toogleLike(state, action) {
      state.value = action.payload;
      // let index = state.value?.findIndex((el) => el.id === action.payload.id);
      // if (index < 0) {
      //   state.value = [...state.value, action.payload];
      // } else {
      //   state.value = state.value?.filter((el) => el.id !== action.payload.id);
      // }
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("wishlist", JSON.stringify(state.value));
      // }
    },
  },
});
export const { toogleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
