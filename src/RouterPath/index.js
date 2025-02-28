import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from "../Components/Layout/Body/index";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import Product from "../Pages/Product";


const RoutePath = ({ toggleThemeDark, toggleThemeLight, isDarkTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleInvalidToken = (e) => {
      if (e.key === "apptoken" && e.oldValue && !e.newValue) {
        //  dispatch(logOutApp());
      }
    };

    window.addEventListener("storage", handleInvalidToken);
    return function cleanup() {
      window.removeEventListener("storage", handleInvalidToken);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* working on */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route
            element={
              <Layout isDarkTheme={isDarkTheme} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
            <Route path="/product" element={<Product />} />

          </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutePath;
