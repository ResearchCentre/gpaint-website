import React from "react";
import { Modal } from "react-bootstrap";
import { withStyles } from "tss-react/mui";
import { Button, IconButton } from "@mui/material";
import { AppPrimaryColor, DarkModeBackground, DarkModePrimaryColor, DarkModeText, SecondaryColor } from "../../../MasterData/index";
import {
  env_name,
  ua00_local_url,
  ua00_dev_url,
} from "../../../MasterData/url";
import ClearIcon from '@mui/icons-material/Clear';

const UILogout = ({ onLogout, isDarkTheme, showLogout, handleLogoutClose }) => {
  const [logOutAlert, setLogOutAlert] = React.useState(true); // Set to true to show the modal initially
  const YesBtn = withStyles(Button, (theme) => ({
    root: {
      fontFamily: "DM Sans",
      color: "#fff",
      backgroundColor: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor,
      border: `1px solid ${isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor}`,
      textTransform: "capitalize",
      borderRadius: "9px",
      width: "220px",
      padding: "12px 28px",
      margin: "auto",
      textAlign: "center",
      "&:hover": {
        color: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor,
      },
    },
  }));



  const handleLogoutSuccess = () => {
    let url;
    localStorage.clear("AccessPoint");
    localStorage.clear("secKey");
    localStorage.clear("subscriptionType");
    localStorage.clear("userId");
    setLogOutAlert(false);
    if (env_name === "dev") {
      url = ua00_dev_url;
    }
    if (env_name === "local") {
      url = ua00_local_url;
    }
    window.location.href = url;
    // Notify the parent component that logout is done
    if (onLogout) {
      onLogout();
    }
    return;
  };

  return (
    <>
      <Modal
        show={showLogout}
        onHide={handleLogoutClose}
        className={"logout_alert"}
        centered
      // style={{ backgroundColor: isDarkTheme ? DarkModeBackground : "ffff" }}
      >
        <Modal.Header closeButton={false}
          style={{
            backgroundColor: isDarkTheme ? DarkModeBackground : "ffff",
            color: isDarkTheme ? DarkModeText : SecondaryColor
          }}
          className="border-0 d-block">
          <Modal.Title>
            <IconButton className="float-end" onClick={() => handleLogoutClose()}>
              <ClearIcon style={{ color: isDarkTheme ? DarkModePrimaryColor : AppPrimaryColor }} />
            </IconButton>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: isDarkTheme ? DarkModeBackground : "ffff" }}>
          <h4 className="mt-0 mb-4">Logout!</h4>
          <div className="logout_text">
            Do you want to logout of this platform?
          </div>
        </Modal.Body>
        <Modal.Footer
          className="border-0 text-center"
          style={{
            display: "block",
            backgroundColor: isDarkTheme ? DarkModeBackground : "ffff"
          }}
        >
          <div style={{ width: "60%", display: "block", margin: "auto" }} className="mt-3">
            <YesBtn onClick={handleLogoutSuccess}>Yes</YesBtn>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UILogout;
