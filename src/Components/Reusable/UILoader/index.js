import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderWrap from "./style";

const UILoader = () => {
  return (
    <LoaderWrap>
      <div className="loader-div">
        <span className="loader"></span>
      </div>
    </LoaderWrap>
  );
};

export default UILoader;
