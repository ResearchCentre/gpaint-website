import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Body/index";
import { Enquiry } from "../Pages/Enquiry";

const RoutePath = ({ isDarkTheme }) => {

  useEffect(() => {
    const handleInvalidToken = (e) => {
      if (e.key === "apptoken" && e.oldValue && !e.newValue) {
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
          <Route
            element={
              <Layout isDarkTheme={isDarkTheme} />
            }
          >
            <Route path="/" element={<Enquiry />} />
            <Route path="/feedback" element={<Enquiry />} />          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RoutePath;
