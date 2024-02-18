import React from "react";
import Slider from "../../components/Slider/Slider";

const Header = () => {
  return (
    <header className="container mx-auto lg:px-10">
      <div
        data-aos="fade-right"
        className="flex  flex-col md:flex-col lg:flex-row justify-center items-center"
      >
        <div className="w-1/2">
          <div className="w-full">
          <h1 className="capitalize text-7xl mb-8 tracking-wide leading-none">
            exclusive toys <br /> special offer
          </h1>
          <p className="text-lg tracking-wide leading-normal font-light mb-8">
            Our toys are astm certified for safety. We use water-based paints
            <br /> & natural polish on our toys, making them absolutely
            child-safe
          </p>
          <button className="btn my-btn">shop now</button>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="w-full">
          <Slider />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
