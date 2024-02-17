import React, { useContext } from "react";
import "./Login.css";
import login from "../../../public/animation/login.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from , {replace : true})
        form.reset();
        toast.success("Login Successfully 😊", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("User Create Successfully 😊", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex-container">
        <div className="sm:w-full sm:px-2 md:w-full lg:w-6/12">
          <div className="w-full sm:h-96">
            <Lottie animationData={login} loop={true} className="sm:h-96" />
          </div>
        </div>
        <div className="sm:w-full sm:px-2 md:w-full lg:w-6/12 md:my-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded text-center shadow-xl"
          >
            <h3 className="text-3xl py-10 text-coustom font-bold tracking-wide">
              Login
            </h3>
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Enter Your Email Address"
              className="mb-5"
              type="email"
              required
            />
            <label className="block text-coustom text-left lg:px-11 px-2 mb-2">
              Password
            </label>
            <input
              {...register("password")}
              placeholder="Enter Your Password"
              className="mb-3"
              type="password"
              required
            />
            <p className="text-coustom text-left lg:pl-11 pl-2 pb-7 underline">
              Forgot Password?
            </p>
            <input
              type="submit"
              className="btn bg-coustom text-white tracking-wide hover:bg-coustom cursor-pointer mb-3 text-lg"
              value="Login"
            />
            <p className="text-gray-600">
              New to Toy Shop?{" "}
              <Link to="/registration" className="text-coustom hover:underline">
                Create New Account
              </Link>
            </p>
            <div className="divider text-coustom px-10 py-5">OR</div>
            <div className="px-10 pb-7">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-transparent text-coustom border-coustom hover:bg-transparent hover:border-coustom w-full text-lg"
              >
                <FcGoogle className="text-xl cursor-pointer" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
