import React, { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart";
import { useNavigation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const DcData = () => {
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const navigation = useNavigation();

  if(navigation.state === 'loading'){
    return <Spinner />
  };

  const handleSeeMoreClick = () => {
    setVisibleItems(products.length);
  };

  const handleShowLessClick = () => {
    setVisibleItems(8);
  };

  useEffect(() => {
    try {
      fetch("http://localhost:5000/dc-comics")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
        {products.slice(0, visibleItems)?.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        {visibleItems === 8 && (
          <button className="btn my-btn" onClick={handleSeeMoreClick}>
            See More
          </button>
        )}
        {visibleItems === products.length && (
          <button className="btn my-btn" onClick={handleShowLessClick}>
            See Less
          </button>
        )}
      </div>
    </>
  );
};

export default DcData;
