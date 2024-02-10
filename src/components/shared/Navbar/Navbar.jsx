import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // SignOut Successfully
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
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={(isActive) => {
            isActive ? "active" : "default";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toy"
          className={(isActive) => {
            isActive ? "active" : "default";
          }}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={(isActive) => {
            isActive ? "active" : "default";
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to="/"
            className={(isActive) => {
              isActive ? "active" : "default";
            }}
          >
            My Toys
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <NavLink
            to="/"
            className={(isActive) => {
              isActive ? "active" : "default";
            }}
          >
            Add A Toy
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <nav className="bg-transparent mb-12 sticky top-0">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0E0915] rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/">
            <p className="text-2xl italic">toyShop</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-start items-center gap-4">
            {user && (
              <div className="avatar">
                <div className="w-12 rounded">
                  <img
                    src={user?.photoURL ? user.photoURL : <span>U</span>}
                    title={user.displayName}
                  />
                </div>
              </div>
            )}
            {user?.email ? (
              <>
                <button onClick={handleSignOut} className="btn my-btn">
                  Sign out{" "}
                </button>
              </>
            ) : (
              <>
                <button className="btn my-btn">
                  <Link to="/login">Sign In </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
