import React, { useState, useEffect, useRef } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { Outlet, useLocation } from "react-router-dom";
import { useMedia } from "react-use";
import { Container } from "@mui/material";
import Header from "../Header/index";
import { emitEvent } from "../../../MasterData/emitter";
import ScrollToTopButton from "../ScrollToTopButton";
import { showBanner } from "../../../MasterData/index"
const ClippedDrawer = React.memo((props) => {
const showMobileDrawer = useMedia("(max-width: 600px)");
const [outletLoaded, setOutletLoaded] = useState(false);
const location = useLocation();

  const [state, setState] = useState({
    right: true,
  });

  const paddingTopValue = showBanner ? "80px" : "10px";

  useEffect(() => {
    // Skip the initial render
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    const data = ("right", !state);

    emitEvent("toggleDrawerBtnClicked");
    emitEvent("toggleDrawer", data);
  }, [state]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutletLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Add a ref to track the first render
  const initialRenderRef = useRef(true);

  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open, showMobileDrawer }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open
      ? {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }
      : {}),
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    backgroundColor: "#fff",
    paddingRight: "0 !important",
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    ...(open && {
      backgroundColor: "#fff",
      paddingRight: "0 !important",
    }),
  }));

  const [open, setOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (showMobileDrawer) {
      setMobileOpen(!mobileOpen);
      setOpen(false);
    } else {
      setOpen(!open);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (props?.hideSideBar === true) {
      setOpen(false);
      setMobileOpen(false);
    } else if (showMobileDrawer) {
      setOpen(false);
      setMobileOpen(true);
    } else {
      setOpen(true);
      setMobileOpen(false);
    }
  }, [showMobileDrawer, props?.hideSideBar]);

  return (
    <>
      <AppBar sx={{ boxShadow: "none" }}>
        <Header
          handleDrawerToggle={handleDrawerToggle}
          hideSideBar={props.hideSideBar}
          showMobileDrawer={showMobileDrawer}
          isDarkTheme={props.isDarkTheme}
        />
      </AppBar>

      <Box>
        <CssBaseline />

        <div style={{ overflowY: "auto", paddingTop: paddingTopValue }}>

          {location.pathname === "/" && (
            <div className="content_divider_ecllips"></div>
          )}
          {/* <Container> */}
          <Main
            open={open}
            sx={{
              flexGrow: 1,
              mt: 8,
              width: "100%",
              marginRight: "0px",
              position: "relative",
              padding: 0,
              overflowX: "hidden",
              // height: "calc(100vh - 64px)",
            }}
          >
            {outletLoaded && <Outlet />}
          </Main>
          <ScrollToTopButton />

          {/* </Container> */}
        </div>
      </Box>
    </>
  );
});

export default ClippedDrawer;
