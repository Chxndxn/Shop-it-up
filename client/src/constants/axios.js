import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.14:8010/api/v1/shopitup";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export default axios;
