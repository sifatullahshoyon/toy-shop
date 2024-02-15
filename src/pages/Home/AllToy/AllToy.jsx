import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import ToyTable from "../../../components/ToyTable/ToyTable";


const AllToy = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  useEffect(() => {
    try {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="container mx-auto py-10 px-10">
      <h3 className="tracking-wide text-3xl py-5 text-center">All Toys</h3>
      <p className="text-center tracking-wide text-lg py-5">
        We have many and varied products. Hundreds of products in different
        categories.
      </p>
      {/* Search Field */}
      <div className="join flex justify-end text-right">
        <div>
          <div className="form-control ">
            <input
              className="input input-bordered join-item bg-transparent footer-input text-white tracking-wide"
              placeholder="Search By Name"
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item bg-white hover:bg-white text-coustom hover:text-coustom">
            Search
          </button>
        </div>
      </div>
      {/* Start Table */}
      <div className="overflow-x-auto pt-10 pb-5">
        <table className="w-full">
          {/* head */}
          <thead className="bg-white text-coustom">
            <tr className="">
              <th className="p-4">SL Number</th>
              <th className="p-4">Image</th>
              <th className="p-4">Seller Name </th>
              <th className="p-4">Toy Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Available Quantity</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (<ToyTable key={product._id} product={product} index={index} />))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
