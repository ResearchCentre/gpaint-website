import axios from "axios";
import { Modal } from "antd";

const AUTH_BASE_URL = "https://h47diqy468.execute-api.ap-south-1.amazonaws.com/pre-production";

const axiosinstance = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosinstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("apptoken");
  if (accessToken) {
    config.headers["authorizationToken"] = `${accessToken}`;
  }
  const addressValue = localStorage.getItem("addressValue");
  if (addressValue) {
    config.headers["ipAddress"] = addressValue;
  }
  const userID = localStorage.getItem("userID");
  if (userID) {
    config.headers["userId"] = userID;
  }
  return config;
});

axiosinstance.interceptors.response.use(
  (response) => response,
  async (error) => {

    try {
      console.log("API ERROR", error)
      if (error.response.status === 401 && error.response.data.message === "Unauthorized") {
        Modal.info({
          zIndex: 1101,
          title: 'SESSION EXPIRED',
          content: (
            <div className="remove_focusbtn">
              <p>Your session is expired.<a href="/login" className="p-0 mb-2">Click here</a> to login again</p>
            </div>
          ),
          onOk() {
            window.localStorage.clear();
            window.location.href = '/';
            sessionStorage.removeItem("positionApiData");
            sessionStorage.removeItem("registerApiData");
            sessionStorage.removeItem("approvalApiData");
            sessionStorage.removeItem("activityApiData");
          },
        });
      }
      return Promise.reject(error);

    } catch (error) {
      console.error("Error dispatching action:", error);
    }

    return Promise.reject(error);
  }
);

export default axiosinstance;
