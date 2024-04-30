import axios from "../../constants/axios";

export const addToCartAPI = async (cartItem) => {
  try {
    const response = await axios.post(`/cart`, cartItem);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const fetchItemsByUserIdAPI = async (userId) => {
  try {
    const response = await axios.get(`/cart?user=${userId}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
