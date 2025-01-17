import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#6941C6]">
      <div className=" mx-auto px-6 lg:px-24 2xl:px-44">
        <div className="flex items-center justify-between py-8">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-3">
            <Link to={'/'}>
              <img
                src="/src/assets/paper dashboard/homepage Logo .svg"
                alt="Logo Part 1"
                className="w-44 sm:w-64"
              />
            </Link>
          </div>

          {/* Right Section: Links */}
          <div className="flex space-x-3 sm:space-x-6 lg:space-x-8">
            <Link
              to="/login"
              className="bg-[#6243A8] text-white px-3 sm:px-4 xl:text-sm xl:font-semibold py-2 rounded-lg text-xs sm:text-base transition duration-200 hover:bg-[#503694]"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="bg-white text-[#6243A8] border border-[#6243A8] px-2 sm:px-4 xl:text-sm xl:font-semibold py-2 rounded-lg text-xs sm:text-base transition duration-200 hover:bg-[#f1f1f1]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
