import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button, Spinner } from "react-bootstrap";
import Footer from "../../Components/Layout/Footer/index";
import { productList } from "../../MasterData/index";
import Images from "../../MasterData/image";
import UIButton from "../../Components/Reusable/UIButton/index";
import { showBanner } from "../../MasterData/index";

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

const Product = () => {
  const [radioValue, setRadioValue] = useState(1);
  const [highlightedBox, setHighlightedBox] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlightedBox(index);
  };

  const handleMouseLeave = () => {
    setHighlightedBox(null);
  };
  const handlaRadioValue = (e) => {
    setRadioValue(e);
  };

  const [isLoading, setIsLoading] = useState(false);

  const topSpaceStyle = {
    paddingTop: showBanner ? "100px" : "0", // Conditionally set paddingTop based on showBanner variable
  };

  const handleProductClick = (url) => {
    // Handle product click
    console.log("Product clicked, navigate to:", url);
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = url;
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      <Container>
        {/* <div className="content_continer"> */}
        <div className="top_space" style={topSpaceStyle}>

          <Row className="align-items-stretch">
            <h1> Select the product which you would like to jump in</h1>
            {productList.map(
              (key, index) =>
                key.activeStatus && (
                  <Col md={6} sm={12} key={key.value}>
                    {/* <div className="my-2 button_container"> */}
                    <div
                      className={`my-2 button_container ${
                        highlightedBox === index ? "highlighted" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleProductClick(key.url)}

                    >
                      <div className="product-box">
                        <Row>
                          <Col
                            md={12}
                            sm={12}
                            style={{ height: "200px", position: "relative" }}
                          >
                            <h4>{key.label}</h4>
                            <p>{key.detailContent}</p>
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                              }}
                            >
                              <UIButton
                                btnlabel="Create"
                                btnVariant="primary"
                                // handleBtnClick={() =>
                                //   handleProductClick(key.url)
                                // }
                                btnClassName="mx-1"
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              {/* Image at the bottom right */}
                              <img
                                src={key.img}
                                alt={key.img}
                                className="product_img"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                )
            )}
          </Row>

          {isLoading && <Loader />}


        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
