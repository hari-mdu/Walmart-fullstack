import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BiGridAlt } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { navLinks } from "../constants"; // Importing navigation links from constants
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

// NavBar component
const NavBar = () => {
  // Selecting cart state from Redux store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Function to calculate total quantity of items in the cart
  const sumQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  // JSX for rendering NavBar
  return (
    <>
      {/* Navbar section */}
      <div className="w-full h-auto bg-[#0071dc] flex gap-4 py-[14px] px-[25px]">
        <div className="md:hidden flex items-center">
          <IoMenu size={28} color="white" />
        </div>
        <div className="grow-0 w-[50px] h-fit hover:bg-blue-950 rounded-full">
          <Link to="/">
            <img
              src="https://www.blankbeauty.com/static/media/walmartlogo.fbe34153c0415c58b1b0.png"
              alt=""
            />
          </Link>
        </div>
        {/* Delivery section */}
        <div className="md:flex hidden grow-0 items-center justify-center gap-3 bg-[#004f9a] hover:bg-blue-950 rounded-full px-2 hover:cursor-pointer">
          <div className="w-[35px]">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-e85b/k2-_1a51bd7e-5320-4581-a09b-b687913b6c8c.v1.png"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="text-white">
              <h3 className="font-semibold">Delivery</h3>
              <p className="font-light text-sm">Address, 123456</p>
            </div>
            <RiArrowDropDownLine size={25} color="white" />
          </div>
        </div>
        {/* Search input */}
        <div className="flex grow items-center relative">
          <input
            type="search"
            className="h-[45px] w-full rounded-full outline-none px-5"
          />
          <div className="absolute rounded-full bg-[#004f9a] p-1.5 right-1.5">
            <IoSearch className="text-[#e6f1fc]" size={20} />
          </div>
        </div>
        {/* My Items section */}
        <div className="md:flex hidden justify-center items-center gap-2 hover:bg-blue-950 rounded-full p-2 px-4 hover:cursor-pointer">
          <GoHeart color="white" size={16} />
          <div className="text-white text-sm">
            <p>Reorder</p>
            <h3 className="font-semibold text-base">My Items</h3>
          </div>
        </div>
        {/* Sign In section */}
        <div className="md:flex hidden items-center justify-center gap-2  hover:bg-blue-950 rounded-full px-4 hover:cursor-pointer">
          <CiUser color="white" size={16} />
          <Link to={"/signin"}>
            <div className="text-white text-sm">
              <p>Sign In</p>
              <h3 className="font-semibold text-base">Account</h3>
            </div>
          </Link>
        </div>
        {/* Cart section */}
        <div className="flex flex-col items-center justify-center hover:bg-blue-950 rounded-full px-4 hover:cursor-pointer">
          <Link to={"/cart"}>
            <div className="relative">
              <BsCart color="white" size={20} />
            </div>
            {/* Displaying cart item quantity */}
            {sumQuantity() > 0 ? (
              <div className="absolute top-5 right-10 flex items-center justify-center w-4 h-4 rounded-full font-bold bg-yellow-500">
                {sumQuantity()}
              </div>
            ) : (
              <div className="absolute top-5 right-10 flex items-center justify-center w-4 h-4 rounded-full font-bold bg-yellow-500">
                0
              </div>
            )}
          </Link>
          <div className="text-white text-sm">$0.00</div>
        </div>
      </div>
      {/* Secondary navigation section */}
      <div className="bg-[#f2f8fd] h-[48px] px-8 flex">
        <div className="flex gap-5 h-full border-e-2 pe-5">
          {/* Departments section */}
          <div className="flex items-center gap-2 hover:cursor-pointer hover:border-blue-900 hover:border-2 rounded-full my-1 px-1">
            <BiGridAlt size={25} />
            <h3>Departments</h3>
            <RiArrowDropDownLine size={25} />
          </div>
          {/* Services section */}
          <div className="flex items-center gap-2 hover:cursor-pointer hover:border-blue-900 hover:border-2 rounded-full my-1 px-1">
            <BiCategoryAlt size={25} />
            <h3>Services</h3>
            <RiArrowDropDownLine size={25} />
          </div>
        </div>
        {/* Navigation links */}
        <div className="lg:flex items-center px-5 xl:text-sm text-[10px] hidden flex-wrap overflow-hidden">
          <ul className="flex gap-x-7 items-center">
            {/* Mapping through navigation links and rendering each link */}
            {navLinks.map((item) => (
              <Link to={item.path} key={item.id}>
                <li className="hover:underline">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
