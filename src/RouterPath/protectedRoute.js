import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { env_name, ua00_local_url, ua00_dev_url } from "../MasterData/url";

const ProtectedRoute = ({ path, element }) => {
  const [userAllow, setUserAllow] = useState(false);
  const navigate = useNavigate();
  const { userAccess, secKey, subscriptionType, userId } = useParams();

  useEffect(() => {
    let url;
    let localStoreValue1 = localStorage?.getItem("authToken");
    let localStoreValue2 = localStorage?.getItem("secKey");
    let localStoreValue3 = localStorage?.getItem("subscriptionType");
    let localStoreValue4 = localStorage?.getItem("userId");
    let localStoreValue5 = localStorage?.getItem("baseProductCode");

    const urlParams = new URLSearchParams(window.location.search);
    const queryParamsString = new URLSearchParams(urlParams).get("queryParams");
    const queryParams = JSON.parse(queryParamsString);

    if (queryParams !== null) {
      urlParams.delete("queryParams");
      const remainingParams = urlParams.toString();
      const baseUrl = remainingParams
        ? `${window.location.origin}${window.location.pathname}?${remainingParams}`
        : window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, baseUrl);
      setUserAllow(true);
      return;
    } else {
      if (
        localStoreValue1 &&
        localStoreValue2 &&
        localStoreValue3 &&
        localStoreValue4 &&
        localStoreValue5
      ) {
        setUserAllow(true);
        return;
      }
    }
    if (
      localStoreValue1 === null &&
      localStoreValue2 === null &&
      localStoreValue3 === null
    ) {
      if (env_name === "dev") {
        url = ua00_dev_url;
      }
      if (env_name === "local") {
        url = ua00_local_url;
      }

      setUserAllow(false);
      window.location.href = url;
      return;
    }
  }, [userAccess, secKey, subscriptionType, userId, navigate]);
  return userAllow ? <Outlet /> : null; // Return null when user is not allowed
};

export default ProtectedRoute;
