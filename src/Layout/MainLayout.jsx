import React from "react";
import { Outlet } from "react-router-dom";
// import Appbar from "../pages/Appbar/Appbar";
import Navbar from "../components/shared/Navbar/Navbar";
import Appbar from "../pages/Appbar/Appbar";
import Footer from "../pages/Home/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Appbar />
      <Navbar />
      <div className="min-h-[calc(100vh-469px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
