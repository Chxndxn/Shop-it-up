import axios from "../../constants/axios";

export const createUserAPI = async (userDetails) => {
  try {
    const response = await axios.post(`/user`, userDetails);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const checkUserAPI = async (loginInfo) => {
  try {
    const response = await axios.post(`/auth`, loginInfo);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
