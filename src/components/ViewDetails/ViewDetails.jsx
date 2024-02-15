import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    availableQuantity,
    category,
    imgLink,
    price,
    title,
    seller,
    ratings,
    details,
  } = data;
  console.log(data);
  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };
  return (
    <div className="container mx-auto p-10">
      <div className="card card-side bg-[#0E0915] shadow-xl">
        <figure>
          <img
            src={imgLink ? imgLink : "No image Found"}
            className="sm:h-full lg:h-96 object-contain"
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap justify-between items-center pt-14">
            <div>
              <h2 className="card-title mb-3">
                Title : {title ? title : "Data Not Found"}
              </h2>
              <p className="mb-3">
                Seller Name : {seller?.name ? seller?.name : "Data Not Found"}
              </p>
              <p className="mb-3">
                Seller Email :{" "}
                {seller?.email ? seller?.email : "Data Not Found"}
              </p>
              <div className="flex items-center mb-3">
                <p className="card-title">
                  Ratings: {ratings ? ratings : "Data Not Found"}
                </p>
                <ReactStarsRating
                  onChange={onChange}
                  value={ratings}
                  size="15"
                  isEdit={false}
                  className="flex"
                />
              </div>
            </div>
            <div>
              <p className="mb-3">Price: ${price ? price : "Data Not Found"}</p>
              <p className="mb-3">
                Description : {details ? details : "Data Not Found"}
              </p>
              <p className="mb-3">
                Category: {category ? category : "Data Not Found"}
              </p>
              <p className="mb-3">
                Available Quantity:{" "}
                {availableQuantity ? availableQuantity : "Data Not Found"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
