import React, { useState } from "react";
import FullRouter from "./RouterPath/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Store/config";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppTheme } from "./MasterData/index";
import "./App.css";
import "./Assets/style/style.css";
import { updateSingleData } from "./Action/api";

const theme = createTheme();

function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const queryParamsString = new URLSearchParams(urlParams).get("queryParams");
  const queryParams = JSON.parse(queryParamsString);

  if (queryParams !== null) {
    let param1Value = queryParams?.param1;
    let param2Value = queryParams?.param2;
    let param3Value = queryParams?.param3;
    let param4Value = queryParams?.param4;
    let param5Value = queryParams?.param5;
    let param6Value = queryParams?.param6;
    localStorage.setItem("authToken", param1Value);
    localStorage.setItem("secKey", param2Value);
    localStorage.setItem("subscriptionType", param3Value);
    localStorage.setItem("userId", param4Value);
    localStorage.setItem("baseProductCode", param5Value);
    localStorage.setItem("userTheme", param6Value);
    localStorage.setItem("AccessPoint", 1);
    localStorage.setItem("userTheme", param6Value);
  }

  let AppTheme = localStorage?.getItem("userTheme");

  const [isDarkTheme, setIsDarkTheme] = useState(
    AppTheme == "Light" ? false : true
  );
  const [themeModule, setThemeModule] = useState(null);

  const toggleThemeLight = async () => {
    let value = "Light";
    setIsDarkTheme(false);
    let columnName = "base_theme";
    try {
      let result = await updateSingleData(value, columnName);

      if (result?.response?.status === 400) {
        return toast.error(result.response.data.message);
      }

      localStorage.setItem("userTheme", value);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const toggleThemeDark = async () => {
    let value = "Dark";
    setIsDarkTheme(true);
    let columnName = "base_theme";
    let result = await updateSingleData(value, columnName);
    if (result?.response?.status === 400) {
      return toast.error(result.response.data.message);
    }
    localStorage.setItem("userTheme", value);
  };


  React.useEffect(() => {
    console.log("isDarkTheme", isDarkTheme);

    // Dynamically import the theme module based on AppTheme
    // if (isDarkTheme === false) {
    import("./Assets/style/light_mode.css").then((module) => {
      console.log("Light", module);
      setThemeModule(module);
      toggleThemeLight();
    });
    // } else {
    //   import("./Assets/style/dark_mode.css").then((module) => {
    //     console.log("Dark", module);
    //     setThemeModule(module);
    //     toggleThemeDark();
    //   });
    // }
  }, [isDarkTheme]);

  return (
    <>
      <div className={`${isDarkTheme ? "dark_mode" : "light_mode"}`}>

        <ThemeProvider theme={isDarkTheme}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <FullRouter
                isDarkTheme={isDarkTheme}
                toggleThemeLight={toggleThemeLight}
                toggleThemeDark={toggleThemeDark}
              />
            </PersistGate>
          </Provider>

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
