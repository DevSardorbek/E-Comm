"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
      // let index = state.value.findIndex((i) => i.id === action.payload.id);
      // if (index < 0) {
      //   state.value = [...state.value, { ...action.payload, quantity: 1 }];
      // } else {
      //   state.value = state.value.map((item, inx) =>
      //     inx === index ? { ...item, quantity: item.quantity + 1 } : item
      //   );
      // }
    },
    removeItemFromCart: (state, action) => {
      state.value = action.payload;
    },
    incrementCartQuantity: (state, action) => {
      state.value = action.payload;
    },
    decrementCartQuantity: (state, action) => {
      state.value = action.payload;
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
  deleteAllCart,
} = cartSlice.actions;
export default cartSlice.reducer;
