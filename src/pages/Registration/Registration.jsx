import React from "react";
import registration from "/public/animation/registration.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto p-10">
      <div className="flex-container">
        <div className="sm:w-full sm:px-2 md:w-full lg:w-6/12">
          <div className="w-full sm:h-96">
            <Lottie
              animationData={registration}
              loop={true}
              className="sm:h-96"
            />
          </div>
        </div>
        <div className="sm:w-full sm:px-2 md:w-full lg:w-6/12 md:my-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded text-center shadow-xl"
          >
            <h3 className="text-3xl py-10 text-coustom font-bold tracking-wide">
              Sign Up
            </h3>
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Name
            </label>
            <input
              {...register("firstName")}
              placeholder="Your Name"
              className="mb-5"
              type="text"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Photo Url
            </label>
            <input
              {...register("firstName")}
              placeholder="Image Link"
              className="mb-5"
              type="url"
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Email
            </label>
            <input
              {...register("firstName")}
              placeholder="Enter Your Email Address"
              className="mb-5"
              type="email"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Password
            </label>
            <input
              {...register("firstName")}
              placeholder="Enter Your Password"
              className="mb-7"
              type="password"
              required
            />
            <input
              type="submit"
              className="btn bg-coustom text-white tracking-wide hover:bg-coustom cursor-pointer mb-3 text-lg"
              value="Sign Up"
            />
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-coustom hover:underline">
                Please Login
              </Link>
            </p>
            <div className="divider text-coustom px-10 py-5">OR</div>
            <div className="px-10 pb-7">
              <button className="btn bg-transparent text-coustom border-coustom hover:bg-transparent hover:border-coustom w-full text-lg">
                <FcGoogle className="text-xl cursor-pointer" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
