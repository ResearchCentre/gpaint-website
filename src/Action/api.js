import axios from "axios";
import { API_URL } from "../MasterData/index";

// Submit Enquiry API
export const submitEnquiryAPI = async (requestPayload) => {
  try {
    const response = await axios.post(`${API_URL}/enquiry`, requestPayload);
    return response;
  } catch (error) {
    console.log("err", error);
    return error;
  }
};
