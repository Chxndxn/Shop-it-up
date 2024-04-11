import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProductsAPI,
  fetchProductsByFilterAPI,
  fetchBrandsAPI,
  fetchCategoriesAPI,
} from "../api/productAPI";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: "idle",
  totalItems: 0,
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProductsAPI();
    return response.data;
  }
);

export const fetchProductsByFilter = createAsyncThunk(
  "product/fetchProductsByFilter",
  async (filter) => {
    const response = await fetchProductsByFilterAPI(filter);
    return response.data;
  }
);

export const fetchBrands = createAsyncThunk("product/fetchBrands", async () => {
  const response = await fetchBrandsAPI();
  return response.data;
});

export const fetchCategories = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategoriesAPI();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        (state.status = "idle"), (state.products = action.payload);
      })
      .addCase(fetchProductsByFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFilter.fulfilled, (state, action) => {
        (state.status = "idle"), (state.products = action.payload);
      })
      .addCase(fetchBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        (state.status = "idle"), (state.brands = action.payload);
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        (state.status = "idle"), (state.categories = action.payload);
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;

export default productSlice.reducer;
