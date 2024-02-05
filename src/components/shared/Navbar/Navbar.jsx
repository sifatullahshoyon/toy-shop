import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = (
        <>
          <li>
            <Link to="/" className="text-lg font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-normal">
            All Toys
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-normal">
            My Toys
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-normal">
            Add Toy
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-normal">
            Blogs
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-lg font-normal">
              Contact
            </Link>
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
            <p className='text-2xl italic'>toyShop</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {/* <FiShoppingBag className="text-2xl text-my-gray mr-5" />
          <IoSearchOutline className="text-2xl text-my-gray mr-5" />
          <button className="btn btn-outline btn-error">Appointment</button>
          <div className="ml-2">
          {user?.email ? <>
          <button className="btn btn-info mr-2"><Link to='/bookings'>My Bookings</Link></button>
            <button onClick={handleSignOut} className="btn btn-primary">Log out </button>
          </> : <button className="btn btn-primary"><Link to='/login'>Sign In</Link></button>}
          </div> */}
          <p>A</p>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;