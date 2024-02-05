import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Appbar = () => {
  return (
    <div className="bg-[#0E0915] p-0">
      <div className="navbar container mx-auto text-xs">
        <div className="flex-1">
          <div className="flex sm:flex-col md:flex-row">
            <div className="flex items-center gap-2  mr-8">
              <LuPhoneCall />
              <p>Call Us: (1800)-88-66-99</p>
            </div>
            <div className="flex items-center gap-2 ">
              <IoMdMail />
              <p>toyshop@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1  flex items-center">
            <li>
              <a>
                <FaCartShopping />
              </a>
            </li>
            <li>
              <details>
                <summary>English</summary>
                <ul className="p-2 bg-[#0E0915] rounded-t-none">
                  <li>
                    <a>Bangla</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
