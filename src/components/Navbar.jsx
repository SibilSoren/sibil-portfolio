/* eslint-disable react/prop-types */
import { Menu, MoonStar, Sun, X } from "lucide-react";
import { useState } from "react";

function Navbar({ dark, setDark }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];
  return (
    <nav className={` fixed w-full dark:bg-black bg-white drop-shadow-md`}>
      <div className="dark:bg-black dark:text-white  flex justify-between items-center h-24   px-4 text-black">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold">Sibil.dev</h1>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <div className="mr-4 cursor-pointer" onClick={() => setDark(!dark)}>
            {dark ? <MoonStar /> : <Sun />}
          </div>

          <ul className="hidden md:flex items-center">
            {navItems.map((item) => (
              <a href={`#${item.text}`} key={item.id}>
                <li className="p-4 hover:text-blue-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black font-semibold">
                  {item.text}
                </li>
              </a>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden hover:text-blue-500 cursor-pointer"
        >
          <Menu size={20} />
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[100%] h-full border-r-gray-900 bg-white text-black  ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="flex justify-end items-center px-4 pt-8 mb-4">
            {/* <h1 className="w-full text-3xl font-bold  ">Sibil Sarjam</h1> */}
            <div
              onClick={handleNav}
              className="block md:hidden hover:text-blue-500 cursor-pointer"
            >
              <X size={20} />
            </div>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b  hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
