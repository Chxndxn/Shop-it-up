/* eslint-disable no-async-promise-executor */
import axios from "axios";
import { BASE_URL } from "../constants/api";

export const fetchAllProductsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsByFilterAPI = async (filter, sort, pagination) => {
  try {
    let queryString = "";
    for (let key in filter) {
      queryString += `${key}=${filter[key]}&`;
    }
    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }
    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }
    const response = await axios.get(`${BASE_URL}/product?${queryString}`);
    if (response.status === 200) {
      return {
        products: response.data,
        totalProducts: response.headers.get("x-total-count"),
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrandsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/brand`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductByIdAPI = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${productId}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
