import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartAPI, fetchItemsByUserIdAPI } from "./cartApi";

const initialState = {
  cartItems: [],
  status: "idle",
  totalCartItems: 0,
  cartLoaded: false,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ cartItem }) => {
    const response = await addToCartAPI(cartItem);
    return response.data;
  }
);

export const fetchItemsByUserId = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async (userId) => {
    const response = await fetchItemsByUserIdAPI(userId);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems.push(action.payload);
      })
      .addCase(fetchItemsByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByUserId.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems = action.payload;
      });
  },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;

export default cartSlice.reducer;
