import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  fixed top-0 right-0 left-0 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#myWork">My Work</a>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a href="/" className=" normal-case text-xl">
            Ebrahim
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#myWork">My Work</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
