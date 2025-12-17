import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import MyNavbar from "../myNavbar/MyNavbar";

import Footer from "../Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Home ";
    } else if (pathname === "/about") {
      document.title = "About  ";
    } else if (pathname === "/contact") {
      document.title = "Contact  ";
    } else if (pathname === "/portoflo") {
      document.title = "Portfolio  ";
    } else {
      document.title = "Not Found ";
    }
  }, [pathname]);
  return (
    <>
      <MyNavbar />
      <Outlet></Outlet>

      <Footer />
    </>
  );
}
