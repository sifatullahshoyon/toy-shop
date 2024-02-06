import React from "react";
import Header from "../../Header/Header";
import ToysCategories from "../../ToysCategories/ToysCategories";
import ToyGallery from "../../ToyGallery/ToyGallery";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ToysCategories />
      <ToyGallery />
    </div>
  );
};

export default Home;
