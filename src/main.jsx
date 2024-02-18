import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routes/Routes.jsx";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProviders from "./providers/AuthProviders.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";


AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <ToastContainer />
      <Toaster />
    </AuthProviders>
  </React.StrictMode>
);
