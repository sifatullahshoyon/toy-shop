import React from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const { _id, title, price, ratings, discountPrice, imgLink } = product;
  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-compact bg-inherit shadow-xl border border-white duration-150"
      >
        <figure className="relative">
          <img
            src={imgLink ? imgLink : "No Image Found"}
            alt="product img"
            className="h-96 pt-5 mx-auto object-cover px-2"
          />
          <div className="badge badge-success gap-2 text-white absolute top-4 left-10">
            -{discountPrice ? discountPrice : price}%
          </div>
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto tracking-wide">
            {title ? title : "No Data Found"}
          </h2>
          <p>Price : ${price ? price : "No Data Found"}</p>
          <div className="flex">
            <ReactStarsRating
              onChange={onChange}
              value={ratings}
              size="15"
              isEdit={false}
              className="flex justify-center mx-auto "
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn viewDetails-btn bg-white text-[#37152C] hover:bg-transparent hover:text-white hover:border-white ">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
