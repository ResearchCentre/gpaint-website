import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { blogDataList, showBanner } from "../../MasterData/index";
import Footer from "../../Components/Layout/Footer/index";

const Blog = () => {
  const [blogImages, setBlogImages] = useState({});
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const images = {};
      // Load images dynamically
      for (let i = 1; i <= 10; i++) {
        try {
          const image = await import(
            `../../Assets/images/blog-image/blog${i}.png`
          );
          images[i] = image.default; // Default export from the module
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }
      setBlogImages(images);
    };

    loadImages();
  }, []);

  const topSpaceStyle = {
    paddingTop: showBanner ? "100px" : "0", // Conditionally set paddingTop based on showBanner variable
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <Container>
        <div className="top_space" style={topSpaceStyle}>
          {selectedBlog ? null : (
            <Row className="d-flex">
              {blogDataList.map((blogData) => (
                <Col md={4} sm={12} key={blogData.sno}>
                  {blogData.showInfo && (
                    // <div>
                    <div onClick={() => handleBlogClick(blogData)}>
                      <div style={{ position: "relative" }}>
                        {blogImages[blogData.sno] && (
                          <img
                            src={blogImages[blogData.sno]}
                            alt="Image description"
                            style={{ width: "100%", height: "auto" }}
                          />
                        )}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            padding: "5px",
                          }}
                        >
                          {blogData.badgeName && (
                            <Badge bg="primary">{blogData.badgeName}</Badge>
                          )}
                        </div>
                      </div>

                      <div style={{ maxWidth: "90%", overflow: "hidden" }}>
                        <p style={{ overflowWrap: "break-word" }}>
                          {blogData.title}
                        </p>
                        <p>{blogData.date}</p>
                      </div>
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          )}

          {selectedBlog && (
            <Row className="d-flex">
              {/* <Col md={12} sm={12}> */}
              {/* <Button variant="primary" onClick={handleBack}>
                  Back
                </Button> */}
              {/* <h3>{selectedBlog.title}</h3> */}
              <div
                style={{ marginBottom: "20px", cursor: "pointer" }}
                onClick={handleBack}
              >
                &#8592; Back
              </div>
              <Row>
                <Col md={6} sm={12}>
                  <h1>{selectedBlog.title} </h1>
                  <div style={{ maxWidth: "90%", overflow: "hidden" }}>
                    {/* <p style={{ overflowWrap: "break-word" }}>
                      {selectedBlog.title}
                    </p> */}
                    <div>
                      {selectedBlog.badgeName && (
                        <Badge bg="primary">{selectedBlog.badgeName}</Badge>
                      )}
                    </div>

                    {/* <p>{selectedBlog.date}</p> */}
                  </div>
                </Col>

                <Col md={6} sm={12}>
                  <div style={{ position: "relative" }}>
                    {blogImages[selectedBlog.sno] && (
                      <img
                        src={blogImages[selectedBlog.sno]}
                        alt="Image description"
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                  </div>
                </Col>
              </Row>
              <hr style={{ margin: "20px 0" }} /> {/* Horizontal line */}
              {selectedBlog.content.map((section, index) => (
                <div>
                  <Col md={12} sm={12}>
                    <div key={index}>
                      <h4 style={{ marginBottom: "50px" }}>
                        {section.heading}
                      </h4>{" "}
                      {/* Adjust margin-bottom */}
                      <p>{section.paragraph}</p>
                    </div>
                  </Col>
                </div>
              ))}
            </Row>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
