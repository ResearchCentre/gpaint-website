import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { blogDataList, showBanner } from "../../MasterData/index";
import Footer from "../../Components/Layout/Footer/index";

const Help = () => {
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
        
        Work in Progress 

        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Help;
