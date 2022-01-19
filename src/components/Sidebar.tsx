import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Burger from "./burger";
import Cross from "./cross";

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

      <div className="invisible w-0 h-0 p-0 lg:visible font-roboto lg:p-8 md:m-0 sm:w-full lg:h-screen lg:w-72   bg-gray-800 md:border-r-2 lg:border-green-400 lg:space-y-8 space-y-8 border-b-2 lg:border-b-0 border-green-400 ">
        <div className="flex flex-col text-gray-500 text-2xl ">
          <Link to="/">
            <StaticImage
              className="border-purple-300 border-2 m-auto w-1/3 h-1/3  rounded-3xl lg:w-full "
              src="../images/grayLogo.png"
              alt={"test"}
            />
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
          to="/slides"
          activeStyle={activeStyles}
        >
          Slides
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
        <div className="font-roboto p-8 md:m-0 sm:w-full lg:w-72 h-screen  bg-gray-800  lg:border-green-400 lg:space-y-8 space-y-8 border-b-2 lg:border-b-0 border-green-400 ">
          <div className="flex flex-col text-gray-500 text-2xl m-auto">
            <StaticImage
              className="border-purple-400 border-2 m-auto w-1/3 h-1/3  rounded-3xl lg:w-full "
              src="../images/grayLogo.png"
              alt={"test"}
            />
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
            to="/slides"
            activeStyle={activeStyles}
          >
            Slides
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
