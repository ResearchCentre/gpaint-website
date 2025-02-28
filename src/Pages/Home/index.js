import { useState, useEffect, React } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import {
  homePgContent,
  exploreProduct,
  subscriptionDetail,
} from "../JsonFile/Home/index";
import UIButton from "../../Components/Reusable/UIButton";
import Aboutus from "./aboutus";
import Attendance from "./attendance";
import FaqContent from "./faq";
import { extensionAttendance } from "../../Pages/JsonFile/LiveAttendance";
import Footer from "../../Components/Layout/Footer/index";
import { signup_url } from "../../MasterData/url";

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

const Home = () => {
  const [showGoToTopButton, setShowGoToTopButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBtnClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = signup_url;
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 200) {
        setShowGoToTopButton(true);
      } else {
        setShowGoToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <div className="top_space">
          {homePgContent.map((content, idx) => {
            return (
              <>
                <Row className="d-flex">
                  <Col md={6} sm={12}>
                    {content.firstContentImg != (null || undefined || "") ? (
                      <div className="homepage_dividecontent">
                        <img
                          src={content.firstContentImg}
                          alt="banner_img"
                          className={content.imgClass}
                        />
                      </div>
                    ) : (
                      <div className="homepage_dividecontent ">
                        <div>
                          <div className={content.subtitleClass}>
                            {content.topSubTitle}
                          </div>
                          <h3 className={content.headingStyle}>
                            {content.title}
                          </h3>
                          <div className={content.bottomSubtittleClass}>
                            {content?.bottomSubTitle}
                          </div>
                          <div>
                            {" "}
                            {content.description.map((e, i) => {
                              return <p>{e.para}</p>;
                            })}
                          </div>
                          {content.button === true && (
                            <UIButton
                              btnlabel={content.btnLabel}
                              handleBtnClick={handleBtnClick}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </Col>
                  <Col md={6} sm={12}>
                    {content.secondContentImg != (null || undefined || "") ? (
                      <div className="homepage_dividecontent">
                        <img
                          src={content.secondContentImg}
                          alt="grp_people"
                          className={content.imgClass}
                        />
                      </div>
                    ) : (
                      <div className="homepage_dividecontent ">
                        <div>
                          <div className={content.subtitleClass}>
                            {content.topSubTitle}
                          </div>
                          <h3 className={content.headingStyle}>
                            {content.title}
                          </h3>
                          <div className={content.bottomSubtittleClass}>
                            {content?.bottomSubTitle}
                          </div>
                          <div>
                            {" "}
                            {content.description.map((e, i) => {
                              return <p>{e.para}</p>;
                            })}
                          </div>
                          {content.button === true && (
                            <UIButton btnlabel={content.btnLabel} />
                          )}
                        </div>
                      </div>
                    )}
                  </Col>
                </Row>
              </>
            );
          })}
        </div>

        <Aboutus />
      </Container>
      <section className="explore_product">
        <Container>
          <h2 className="text-center">{exploreProduct[0].maintitle}</h2>
          <Row>
            <Col md={6} sm={12}>
              <div className="my-lg-0 my-md-4">
                <h3>{exploreProduct[0].subTitle}</h3>
                <p>{exploreProduct[0].para}</p>
                <UIButton
                  btnlabel={exploreProduct[0].buttonLabel}
                  handleBtnClick={handleBtnClick}
                />
              </div>
            </Col>
            <Col md={6} sm={12} className="text-center">
              <img
                src={exploreProduct[0].img}
                alt="system"
                className="system_img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Attendance />
      </Container>
      <div className="subscription_container">
        <h3 className="text-center">{subscriptionDetail[0].maintitle}</h3>
        <p className="text-center">{subscriptionDetail[0].para}</p>
        <Row className="d-flex justify-content-center">
          <Col lg={6} md={10} sm={12}>
            <div className="white_container">
              <Row>
                {subscriptionDetail[0].amountdetails.map((data, idx) => {
                  return (
                    <Col md={6}>
                      <h3>{data.heading}</h3>
                      <p>{data.para}</p>
                      <h2>{data.rate}</h2>
                    </Col>
                  );
                })}
              </Row>

              <div className="my-3">{subscriptionDetail[0].boldtext}</div>
              <div>
                <b>{subscriptionDetail[0].paraheading} :</b>{" "}
                {subscriptionDetail[0].paraLine}
              </div>
              <div className="my-2">{subscriptionDetail[0].para1}</div>

              <div className="my-2">{subscriptionDetail[0].para2}</div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="extension_att">
        <h2 style={{ marginBottom: "100px" }} className="text-center">
          {extensionAttendance[0].title}
        </h2>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="text-center">
                <img
                  src={extensionAttendance[0].img}
                  alt="system att"
                  className="att_ext_system"
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <h3>{extensionAttendance[0].subtitle}</h3>
              <p>{extensionAttendance[0].content}</p>
              <UIButton
                btnlabel={extensionAttendance[0].btnLabel}
                handleBtnClick={handleBtnClick}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="check_in_app">
          <Row>
            <Col md={6}>
              <h2>{extensionAttendance[1].title}</h2>
              <p>{extensionAttendance[1].content}</p>
              <b>{extensionAttendance[1].getApp}</b>
            </Col>
            <Col md={6}>
              <img
                src={extensionAttendance[1].img}
                alt="Check in app"
                className="check_in_appimg"
              />
            </Col>
          </Row>
        </div>
      </Container>

      {isLoading && <Loader />}

      <Container>
        <FaqContent />
      </Container>

      <Footer />
    </>
  );
};
export default Home;
