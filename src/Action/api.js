import axios from "axios";
import { AUTH_BASE_URL } from "../MasterData/index";

export const fetchFakeData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
const axiosheader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

// Create new user  API Flow 1
export const userTokenCheck = async (payLoad) => {
  try {
    const response = await axios.get(
      `${AUTH_BASE_URL}/3_userauth/register`,
      payLoad,
      axiosheader
    );
    return response;
  } catch (error) {
    return error;
  }
};

// Load Profile data
export const getProfile = async (payLoad) => {
  let userId = localStorage?.getItem("userId");
  console.log("[getProfile] Before Decrypt UserId -->", userId);
  // console.log("[getProfile] After Decrypt UserId -->", decrypt(userId));

  try {
    const response = await axios.get(
      `${AUTH_BASE_URL}/8_myaccount/` + userId,
      payLoad,
      axiosheader
    );
    console.log("response profile", response)
    return response;
  } catch (error) {
    return error;
  }
};

// Update Profile
export const updateProfile = async (payLoad) => {
  let userId = localStorage?.getItem("userId");
  console.log("[updateProfile] UserId -->", userId);
  // user id will come from local storage..
  try {
    const response = await axios.patch(
      `${AUTH_BASE_URL}/8_myaccount/` + userId,
      payLoad,
      axiosheader
    );
    return response;
  } catch (error) {
    console.log("err", error)
    return error;
  }
};

// Single Update
export const updateSingleData = async (payLoad, columnName) => {
  let userId = localStorage?.getItem("userId");
  console.log("[updateSingleData] UserId Before -->", userId);
  // console.log("[updateSingleData] UserId -->", decrypt(userId));
  // user id will come from local storage..
  try {
    const response = await axios.patch(
      `${AUTH_BASE_URL}/8_myaccount/` + userId + "/" + columnName,
      payLoad,
      axiosheader
    );
    return response;
  } catch (error) {
    return error;
  }
};

// Save the help Form
export const saveHelpFormData = async (payLoad) => {
  let userId = localStorage?.getItem("userId");
  try {
    const response = await axios.post(
      `${AUTH_BASE_URL}/8_myaccount/savehelp/` + userId,
      payLoad,
      axiosheader
    );
    return response;
  } catch (error) {
    console.log("err", error);
    return error;
  }
};
