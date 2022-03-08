import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Burger from "./burger";
import Cross from "./cross";
import Logo from "./Logo";

const activeStyles = {
  color: " 	mediumpurple",
};

function Sidebar() {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`${toggleNav ? `` : ``}`}>
      <div className="flex">
        <button
          className="flex visible lg:hidden p-4"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <Burger /> : <Cross />}
        </button>
      </div>

      <div className="invisible w-0 h-0 p-0 lg:visible font-roboto lg:p-8 md:m-0 sm:w-full lg:h-screen lg:w-72   bg-gray-900 md:border-r-2 lg:border-green-400 lg:space-y-8 space-y-8 border-b-2 lg:border-b-0 border-green-400 ">
        <div className="flex flex-col text-2xl items-center pt-8">
          <Link to="/">
            <Logo />
            <p className="text-2xl pt-4 pb-8">M.Dev</p>
          </Link>
        </div>

        <Link
          className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
          to="/about"
          activeStyle={activeStyles}
        >
          About
        </Link>
        <Link
          className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
          to="/talks"
          activeStyle={activeStyles}
        >
          Talks
        </Link>
        <Link
          className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
          to="/portfolio"
          activeStyle={activeStyles}
        >
          Portfolio
        </Link>

        <Link
          className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4 hover:text-purple-400"
          to="/blog"
          activeStyle={activeStyles}
        >
          Blog
        </Link>
        <Link
          className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4 hover:text-purple-400"
          to="/contact"
          activeStyle={activeStyles}
        >
          Contact
        </Link>
      </div>

      <div
        className={`${
          toggleNav ? `visible lg:invisible lg:w-0 lg:h-0 ` : `hidden`
        }`}
      >
        <div className="font-roboto p-8 md:m-0 sm:w-full lg:w-72 h-screen  bg-gray-900  lg:border-green-400 lg:space-y-8 space-y-8 border-b-2 lg:border-b-0 border-green-400 ">
          <div className="flex flex-col  text-2xl m-auto items-center">
            <Logo />
            <p className="text-2xl pt-4 pb-8">M.Dev</p>
          </div>

          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
            to="/"
            activeStyle={activeStyles}
          >
            Home
          </Link>
          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
            to="/about"
            activeStyle={activeStyles}
          >
            About
          </Link>
          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
            to="/talks"
            activeStyle={activeStyles}
          >
            Talks
          </Link>
          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 hover:text-purple-400"
            to="/portfolio"
            activeStyle={activeStyles}
          >
            Portfolio
          </Link>

          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4 hover:text-purple-400"
            to="/blog"
            activeStyle={activeStyles}
          >
            Blog
          </Link>
          <Link
            className="flex flex-col pt-2 pb-4 relative font-bold text-gray-400 py-4 hover:text-purple-400"
            to="/contact"
            activeStyle={activeStyles}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
