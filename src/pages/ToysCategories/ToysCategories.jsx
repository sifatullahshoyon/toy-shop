import React from "react";
import { FaStarOfDavid } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { SiMarvelapp } from "react-icons/si";
import { PiCubeTransparentFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";

const ToysCategories = () => {
  return (
    <section className="py-32 px-10">
      <h3 className="tracking-wide text-3xl py-5">Toys Categories</h3>
      <Marquee>
        <div className="flex flex-wrap gap-6 pt-5 mr-5">
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <FaStarOfDavid className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              star wars
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <TbBrandLaravel className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              avengers
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <SiMarvelapp className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              marvel
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <PiCubeTransparentFill className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              transformers
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 pt-5 mr-5">
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <FaStarOfDavid className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              star wars
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <TbBrandLaravel className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              avengers
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <SiMarvelapp className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              marvel
            </p>
          </div>
          <div className="w-[180px] h-[140px] rounded-lg shadow-lg p-5 bg-gradient-to-b from-[#37152C] to-transparent hover:border hover:border-white hover:transition-transform hover:delay-200">
            <PiCubeTransparentFill className="mx-auto text-7xl pb-5" />
            <p className="text-center capitalize text-lg tracking-wider">
              transformers
            </p>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default ToysCategories;
