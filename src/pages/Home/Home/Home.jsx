import React from "react";
import Header from "../../Header/Header";
import ToysCategories from "../../ToysCategories/ToysCategories";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ToysCategories />
    </div>
  );
};

export default Home;
