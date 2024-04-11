/* eslint-disable no-async-promise-executor */
import axios from "axios";

export const fetchAllProductsAPI = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8010/api/v1/shopitup/product"
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsByFilterAPI = async (filter) => {
  try {
    let queryString = "";
    for (let key in filter) {
      queryString += `${key}=${filter[key]}&`;
    }
    const response = await axios.get(
      `http://localhost:8010/api/v1/shopitup/product?${queryString}`
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchBrandsAPI = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8010/api/v1/shopitup/brand"
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesAPI = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8010/api/v1/shopitup/category"
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
