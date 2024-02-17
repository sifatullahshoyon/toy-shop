import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ToyTable = ({ product, index }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }
  let number = 1;
  const { _id, availableQuantity, category , imgLink, price, title, seller } =
    product;
  console.log(JSON.stringify(product.category))
  return (
    <>
      <tr className="text-center">
        <th>{number + index}</th>
        <td>
          <div className="w-20 h-20 rounded">
            <img
              src={imgLink ? imgLink : "No img Found"}
              className="w-full h-full object-contain"
              alt="product img"
            />
          </div>
        </td>
        <td>{seller?.name ? seller?.name : "Data Not Found"}</td>
        <td>{title ? title : "Data Not Found"}</td>
        {/* <td>{category ? category : "Data Not Found"}</td> */}
        <td>{JSON.stringify(category) ? JSON.stringify(category) : "Data Not Found"}</td>
        <td>${price ? price : "Data Not Found"}</td>
        <td>{availableQuantity ? availableQuantity : "Data Not Found"}</td>
        <td>
          <>
            <Link to={`/details/${_id}`}>
              <button className="btn my-btn">View Details</button>
            </Link>
          </>
        </td>
      </tr>
    </>
  );
};

export default ToyTable;
