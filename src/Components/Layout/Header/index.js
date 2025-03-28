import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import UIButton from "../../Reusable/UIButton/index";
// import Logo from "../../../Assets/svg/Logo.svg";
import Logo from "../../../Assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { login_url, signup_url } from "../../../MasterData/url";
import { showBanner } from "../../../MasterData/index";
import { Spinner, Button } from "react-bootstrap";

const Loader = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(255, 255, 255, 0.8)",
      zIndex: 9999,
    }}
  >
    <Spinner
      animation="border"
      role="status"
      variant="primary"
      style={{
        animation: "spin 1s infinite linear", // inline keyframes
        width: "4rem",
        height: "4rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optionally, you can use smooth scrolling
  });
};

const ResponsiveAppBar = ({ isDarkTheme }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBtnClick = (targetedUrl, actionNo) => {
    if (actionNo == 1) {
      console.log("[handleBtnClick] Action  -->", actionNo);
      navigate("/product");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = targetedUrl;
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  let offerEndDate;
  // Function to check if the current date is after the end date
  const isOfferExpired = () => {
    offerEndDate = new Date("2024-02-29"); // End date of the offer
    const currentDate = new Date(); // Current date
    return currentDate.getTime() > offerEndDate.getTime(); // Check if current date is strictly after end date
  };
  // Function to format date as "31-Jan-2024"
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        className="customize_header"
        position="static"
        sx={{
          backgroundColor: isDarkTheme === true ? "#000" : "#fff",
          color: isDarkTheme === true ? "#fff" : "#000",
          fontFamily: "DM Sans",
          boxShadow: "0px 4px 38px 0px rgba(0, 0, 0, 0.08) !important",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link} // Use Link component instead of div
              to="/" // Set the destination path
              onClick={scrollToTop} // Scroll to top when clicked
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "150%",
                textDecoration: "none",
                marginRight: "auto",
              }}
            >
              <img
                src={Logo}
                style={{ height: "80px", width: "auto" }}
                alt="GPaint"
              />
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component={Link} // Use Link component instead of div
              to="/" // Set the destination path
              onClick={scrollToTop} // Scroll to top when clicked
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontSize: { xs: "20px", md: "28px" },
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "150%",
                textDecoration: "none",
              }}
            >
              <img
                src={Logo}
                style={{ height: "65px", width: "auto" }}
                alt="Gpaint"
              />
            </Typography>

            {/* <Box sx={{ flexGrow: 0 }}>
              <span className="header_btn">

              CALL US NOW: +61 432 626 688
              
              </span>
              
            </Box> */}

            <Box sx={{ flexGrow: 0 }}>
  <span className="header_btn">
    <a href="tel:+61467196540" style={{ textDecoration: "none", color: "inherit" }}>
      +61 432 626 688
    </a>
  </span>
</Box>

          </Toolbar>
        </Container>

        {/* Banner */}
        {showBanner && !isOfferExpired() && (
          <Box
            sx={{
              backgroundColor: "#ff9b15", // Set the background color to orange
              padding: "20px", // Adjust padding as needed
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "#fff" }}>
              <span style={{ margin: "20px" }}>
                Special Offer: Get 20% Off on All Products! Limited Time Only.
                Hurry, this offer ends on {formatDate(offerEndDate)}. Don't miss
                out!
              </span>
              <UIButton
                btnlabel="Try Now"
                btnVariant="contained"
                btnColor="primary"
                handleBtnClick={() => handleBtnClick(signup_url, 1)}
                sx={{ mt: 2 }} // Adjust margin-top and marginLeft as needed
              />
            </Typography>
          </Box>
        )}

        {isLoading && <Loader />}
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
