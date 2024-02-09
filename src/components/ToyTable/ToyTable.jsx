import React from "react";


const ToyTable = ({ product, index}) => {
    let number = 1;
  const {
    _id,
    availableQuantity,
    category,
    imgLink,
    price,
    title,
    seller,
  } = product;

  
  return (
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
      <td>{category ? category : "Data Not Found"}</td>
      <td>${price ? price : "Data Not Found"}</td>
      <td>{availableQuantity ? availableQuantity : "Data Not Found"}</td>
      <td>
        <label htmlFor="my_modal_6" className="btn my-btn">View Details</label>
      </td>
    </tr>
  );
};

export default ToyTable;
