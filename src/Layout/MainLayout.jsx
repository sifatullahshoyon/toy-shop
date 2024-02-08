import React from "react";
import { Outlet } from "react-router-dom";
// import Appbar from "../pages/Appbar/Appbar";
import Navbar from "../components/shared/Navbar/Navbar";
import Appbar from "../pages/Appbar/Appbar";

const MainLayout = () => {
  return (
    <>
      <Appbar />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
