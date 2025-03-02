import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { IconButton, Typography } from "@mui/material";
import { AppPrimaryColor, AppName } from "../../../MasterData/index";
import { socialLink } from "../../../Pages/JsonFile/SocialLinks/index";
import { Link } from "react-router-dom";
// import Logo from "../../../Assets/svg/Logo.svg";
import Logo from "../../../Assets/images/logo.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optionally, you can use smooth scrolling
  });
};

const Footer = () => {
  return (
    <>
      <section className="primary_footer mt-5">
        <Container>
          <Row>
            <Col md={5}>
              <Typography
                variant="h6"
                noWrap
                // component="div"
                component={Link} // Use Link component instead of div
                to="/" // Set the destination path
                onClick={scrollToTop} // Scroll to top when clicked
                sx={{
                  mr: 2,
                  fontSize: "28px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "150%",
                  textDecoration: "none",
                  marginRight: "auto",
                  color: AppPrimaryColor,
                }}
              >
                <img
                  src={Logo}
                  alt="GPaint"
                  style={{ height: "80px", width: "auto" }}

                />
              </Typography>
            </Col>
            {/* <Col lg={1} md={2}>
              <Link to="/blog" onClick={scrollToTop} className="footer_nav">
                Blog
              </Link>
            </Col> */}
            {/* <Col lg={1} md={2}>
              <Link to="/blog" className="footer_nav">
                Feedback
              </Link>
            </Col> */}
            {/* <Col lg={2} md={3}>
              <Link to="/blog" className="footer_nav">
              Terms and Conditions
              </Link>

            </Col> */}
          </Row>

          <Row className="mt-3">
            <Col md={5}>gpaintwa@gmail.com</Col>
            <Col md={7}>
              <span className="follow_us_footer">
                Follow Us
                <div className="mx-4 d-inline-block">
                  {socialLink.map((data, idx) => {
                    return (
                      <IconButton>
                        <img src={data.icon} alt={data.name} />
                      </IconButton>
                    );
                  })}
                </div>
              </span>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <div className="secondary_footer">
          <Row>
            <Col md={6} sm={12}>
              ©2024 GPaint All rights reserved.
            </Col>
            <Col md={6} sm={12}>
              <div className="float-md-end float-sm-start mt-md-0 mt-sm-3 ">
                Privacy Policy
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Footer;
