import React, { useEffect, useState } from "react";
import "./ToyGallery.css";
import { useNavigation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const ToyGallery = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  useEffect(() => {
    const loadedData = async () => {
      try {
        const res = await fetch("https://toy-shop-server-sifatullahshoyon-sifat-ullah-shoyons-projects.vercel.app/gallery");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadedData();
  }, []);
  return (
    <section className="py-32 px-10 h-auto">
      <h3 className="tracking-wide text-3xl pt-5 pb-10 text-center">
        Our Photo Gallery
      </h3>
      <div data-aos="fade-left" className="toyGallery">
        <div className="grid-container">
          {[...Array(Math.ceil(data.length / 7)).keys()].map((index) => (
            <div className="grid-column" key={index}>
              {data.slice(index * 7, (index + 1) * 7).map((item) => (
                <div className="grid-item" key={item._id}>
                  <img src={item?.imgLink} className="object-cover" alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToyGallery;
