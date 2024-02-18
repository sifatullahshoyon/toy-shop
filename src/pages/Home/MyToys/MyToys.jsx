import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Toy from './Toy/Toy';

const MyToys = () => {
    const [toys , setToys] = useState([]);
    const {user} = useContext(AuthContext);
    
    useEffect(() => {
        try {
            fetch(`https://toy-shop-server-omvngpqyq-sifat-ullah-shoyons-projects.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
        } catch (error) {
            console.error(error.message);
        }
    } , [user]);
    return (
        <div className='container mx-auto p-10'>
            <h3 className="tracking-wide text-3xl py-5 text-center">MY Toys</h3>
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
            {toys?.map((toy, index) => (<Toy key={toy._id} toy={toy} index={index} />))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyToys;