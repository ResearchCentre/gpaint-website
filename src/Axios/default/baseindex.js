import axiosinstance from "../service/baseApi";
export class AxiosDefaultsBase {
  setAuthorizationHeader(accessToken) {
    axiosinstance.defaults.headers["authorizationToken"] = accessToken;
  }
}
