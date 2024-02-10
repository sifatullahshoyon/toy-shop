import React from "react";
import Header from "../../Header/Header";
import ToysCategories from "../../ToysCategories/ToysCategories";
import ToyGallery from "../../ToyGallery/ToyGallery";
import OurHeros from "../OurHeros/OurHeros";
import Services from "../../Services/Services";


const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ToysCategories />
      <ToyGallery />
      <OurHeros />
      <Services />
    </div>
  );
};

export default Home;
