import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/404/404.png";

const ErrorPage = () => {
  const { error } = useRouteError();
  
  return (
    <div className="container mx-auto h-screen px-10 py-10 flex justify-center items-center">
      <div className="text-center">
        <img
          src={errorImg}
          className="w-1/2 mx-auto object-cover"
          alt="404 img"
        />
        <p className="py-10 text-2xl">
          {error.message ? error.message : "We can't find that page."}
        </p>
        <Link to="/">
          <button className="btn my-btn">Back To Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
