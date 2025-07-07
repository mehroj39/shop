import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[75px] bg-black flex justify-between items-center px-4 border-b-2 border-white relative">
      <img className="w-[150px] h-[70px] object-contain" src={logo} alt="logo" />


      <ul className="hidden xl:flex items-center gap-8 font-semibold text-base text-white">
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#products">Products</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#review">Review</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
        <li className="p-3 hover:text-amber-300 rounded-md transition-all cursor-pointer">
          <a href="#blogs">Blogs</a>
        </li>
      </ul>

     
   <div className="flex xl:hidden">
       <i
        className="bx bx-menu  text-4xl text-white cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>
   </div>

     
      <ul
        className={`absolute xl:hidden top-[75px] left-0 w-full bg-white flex flex-col items-center 
        gap-4 font-semibold text-base py-4 transition-all duration-300 
        ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`}
      >
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/products">Products</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/review">Review</Link>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
