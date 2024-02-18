import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCart from "../../../components/ProductCart/ProductCart";
import MarvelData from "../../../components/MarvelData/MarvelData";
import DcData from "../../../components/DcData/DcData";
import TransformersData from "../../../components/TransformersData/TransformersData";
import StarWarsData from "../../../components/StarWarsData/StarWarsData";
import { useNavigation } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";

const OurHeros = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  };

  const handleSeeMoreClick = () => {
    setVisibleItems(products.length);
  };

  const handleShowLessClick = () => {
    setVisibleItems(8);
  };

  // All Data
  useEffect(() => {
    try {
      fetch("https://toy-shop-server-sifatullahshoyon-sifat-ullah-shoyons-projects.vercel.app/products")
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
            <Tab>DC Comics</Tab>
            <Tab>Transformers</Tab>
            <Tab>Star Wars</Tab>
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
          <TabPanel>
            <MarvelData />
          </TabPanel>
          <TabPanel>
            <DcData />
          </TabPanel>
          <TabPanel>
            <TransformersData />
          </TabPanel>
          <TabPanel>
            <StarWarsData />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurHeros;
