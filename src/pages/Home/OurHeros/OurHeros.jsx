import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCart from "../../../components/ProductCart/ProductCart";

const OurHeros = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);

  const handleSeeMoreClick = () => {
    setVisibleItems(products.length);
  };

  const handleShowLessClick = () => {
    setVisibleItems(8);
  };

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
    <div className="py-32 px-10">
      <h3 className="tracking-wide text-3xl pt-5 pb-10 text-center">
        Our Heros
      </h3>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>All Toy</Tab>
            <Tab>Marvel</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Transformers</Tab>
          </TabList>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>World</TabPanel>
          <TabPanel>World</TabPanel>
          <TabPanel>World</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurHeros;
