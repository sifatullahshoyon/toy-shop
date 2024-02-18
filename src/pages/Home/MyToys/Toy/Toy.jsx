import React, { useState } from 'react';

import { HiPencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Toy = ({toy , index}) => {
    const [toys , setToys] = useState(null);
    let number = 1;
  const { _id, availableQuantity, category , imgLink, price, title, seller } =
    toy;
    console.log(toy);

    const handleUpdated = (id) => {
      try {
        fetch(`https://toy-shop-server-omvngpqyq-sifat-ullah-shoyons-projects.vercel.app/products/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedToyInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Add Toy Successfully");
            }
          });
      } catch (error) {
        console.error(error.message);
      } 
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-shop-server-omvngpqyq-sifat-ullah-shoyons-projects.vercel.app/products/${id}` , {
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
              
            }
            const remaining = toys?.filter(toy => toy._id !== id);
            setToys(remaining);
          });
    };
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
                <Link to={`/updatedToy/${_id}`}>
                <button onClick={() => handleUpdated(_id)} className="btn btn-circle my-btn mr-3">
                    <HiPencilSquare />
                </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle my-btn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
          </td>
        </tr>
      </>
    );
};

export default Toy;