import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { AppPrimaryColor, DarkModePrimaryColor, DarkModeText } from "../../../MasterData";

const UIButton = ({
  btnVariant,
  btnlabel,
  handleBtnClick,
  btnType,
  btnLoader,
  btnDisable,
  btnClassName,
  btnWidth,
  isDarkTheme
}) => {
  return (
    <span className="common_btn app_btn">
      <Button
        variant={btnVariant}
        onClick={handleBtnClick}
        type={btnType}
        disabled={btnDisable}
        className={btnClassName}
        style={{
          width: btnWidth,
          backgroundColor: (isDarkTheme) && DarkModePrimaryColor,
          borderColor: (isDarkTheme) && DarkModePrimaryColor,
          color: (isDarkTheme) && "#000"
        }}
      >
        {/* {btnLoader === true ? (
          <Spinner animation="border" size="sm" variant="light" />
        ) : (
          btnlabel
        )} */}
        {btnlabel}
      </Button>
    </span>
  );
};

export default UIButton;
