import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProviders";
import Select from "react-select";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";

const AddAToy = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }
  const [selectedOption, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const options = [
    { value: "marvel", label: "Marvel" },
    { value: "dc comics", label: "DC Comics" },
    { value: "transformers", label: "transformers" },
    { value: "star wars", label: "star wars" },
  ];
  const onSubmit = (data) => {
    data.toyCategory = selectedOption;
    const toyName = data.toyName;
    const sellerName = data.sellerName;
    const sellereEmail = data.sellerEmail;
    const price = data.price;
    const toyCategory = data.category;
    const reating = data.rating;
    const quantity = data.quantity;
    const detail = data.detail;
    const imgUrl = data.ImgLink;
    const userInfo = {
      toyName,
      sellerName,
      sellereEmail,
      price,
      toyCategory,
      reating,
      quantity,
      detail,
      imgUrl,
    };
    console.log(userInfo);

    try {
      fetch(
        "https://toy-shop-server-sifatullahshoyon-sifat-ullah-shoyons-projects.vercel.app/add-toy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Add Toy Successfully");
          }
        });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="container mx-auto p-10">
      <div className="flex-container">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded text-center shadow-xl"
          >
            <h3 className="text-3xl py-10 text-coustom font-bold tracking-wide">
              Add A Toy
            </h3>
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Toy Name
            </label>
            <input
              {...register("toyName")}
              placeholder="Toy Name"
              className="mb-5"
              type="text"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Seller Name
            </label>
            <input
              {...register("sellerName")}
              placeholder="Seller Name"
              className="mb-5"
              type="text"
              value={user?.displayName}
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Seller Email
            </label>
            <input
              {...register("sellerEmail")}
              placeholder="Seller Email"
              className="mb-5"
              type="text"
              value={user?.email}
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Price
            </label>
            <input
              {...register("price")}
              placeholder="$00.0"
              className="mb-5"
              type="number"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Img Url
            </label>
            <input
              {...register("ImgLink")}
              placeholder="https://www.img.com"
              className="mb-5"
              type="url"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Category
            </label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="w-10/12 mx-auto"
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Rating
            </label>
            <input
              {...register("rating")}
              placeholder="4.5"
              className="mb-5"
              type="number"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Available quantity
            </label>
            <input
              {...register("quantity")}
              placeholder="5"
              className="mb-5"
              type="number"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Detail
            </label>
            <input
              {...register("detail")}
              placeholder="Detail"
              className="mb-5"
              type="text"
              required
            />

            <input
              type="submit"
              className="btn bg-coustom text-white tracking-wide hover:bg-coustom cursor-pointer mb-5 text-lg"
              value="Add Toy"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
