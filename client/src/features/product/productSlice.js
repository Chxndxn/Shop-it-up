import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProductsAPI,
  fetchProductsByFilterAPI,
  fetchBrandsAPI,
  fetchCategoriesAPI,
  fetchProductByIdAPI,
} from "./productAPI";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: "idle",
  totalProducts: 0,
  selectedProduct: null,
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
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilterAPI(filter, sort, pagination);
    return response;
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

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async ({ productId }) => {
    const response = await fetchProductByIdAPI(productId);
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
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFilter.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectTotalProducts = (state) => state.product.totalProducts;
export const selectProductById = (state) => state.product.selectedProduct;

export default productSlice.reducer;
