import React from "react";
import { FaChartPie } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi";

const Services = () => {
  return (
    <div className="py-32">
      <h3 className="tracking-wide text-3xl pt-5 pb-10 text-center">
        Our Services
      </h3>
      <div>
        <div className="flex justify-center flex-wrap gap-6 pt-5 mr-5 ">
          <div
            data-aos="zoom-in"
            className="flex justify-between items-center gap-4 rounded-lg shadow-lg p-5 bg-white"
          >
            <div className="h-20 w-20">
              <FaChartPie className="mx-auto text-7xl pb-5 text-white bg-coustom pt-5" />
            </div>
            <div className="text-custom">
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                Extra 15% offer
              </p>
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                for first order
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-between items-center gap-4 rounded-lg shadow-lg p-5 bg-white"
          >
            <div className="h-20 w-20">
              <TbTruckDelivery className="mx-auto text-7xl pb-5 text-white bg-coustom pt-5" />
            </div>
            <div className="text-custom">
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                Free Shipping
              </p>
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                for all orders
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-between items-center gap-4 rounded-lg shadow-lg p-5 bg-white"
          >
            <div className="h-20 w-20">
              <FaBox className="mx-auto text-7xl pb-5 text-white bg-coustom pt-5" />
            </div>
            <div className="text-custom">
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                Free returns
              </p>
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                in 14 days
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-between items-center gap-4 rounded-lg shadow-lg p-5 bg-white"
          >
            <div className="h-20 w-20">
              <HiCubeTransparent className="mx-auto text-7xl pb-5 text-white bg-coustom pt-5" />
            </div>
            <div className="text-custom">
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                Many promotions
              </p>
              <p className="text-center capitalize text-lg tracking-wider text-coustom font-bold">
                in one store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
