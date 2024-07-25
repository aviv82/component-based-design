import axios from "axios";
import { BASE_URL } from "../data/constants/baseUrl";

export const healthService = async () => {
  try {
    const res = await axios.get(BASE_URL);
    console.log("axios get", res.data);
    return res.data;
  } catch (e) {
    console.log("oh oh", e.message ?? "some shit went down");
  }
};
