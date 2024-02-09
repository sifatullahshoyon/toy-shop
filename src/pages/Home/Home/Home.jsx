import React from "react";
import Header from "../../Header/Header";
import ToysCategories from "../../ToysCategories/ToysCategories";
import ToyGallery from "../../ToyGallery/ToyGallery";
import OurHeros from "../OurHeros/OurHeros";


const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ToysCategories />
      <ToyGallery />
      <OurHeros />
    </div>
  );
};

export default Home;
