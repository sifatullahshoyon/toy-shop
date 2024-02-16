import React from 'react';

import { HiPencilSquare } from "react-icons/hi2";

const Toy = ({toy , index}) => {
    let number = 1;
  const { _id, availableQuantity, category , imgLink, price, title, seller } =
    toy;
    console.log(toy)
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
          <td>{category ? category : "Data Not Found"}</td>
          {/* <td>{JSON.stringify(category) ? JSON.stringify(category) : "Data Not Found"}</td> */}
          <td>${price ? price : "Data Not Found"}</td>
          <td>{availableQuantity ? availableQuantity : "Data Not Found"}</td>
          <td>
            <div className='flex items-center justify-center'>
                <button className="btn btn-circle my-btn mr-3">
                    <HiPencilSquare />
                </button>
                <button className="btn btn-circle my-btn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
          </td>
        </tr>
      </>
    );
};

export default Toy;