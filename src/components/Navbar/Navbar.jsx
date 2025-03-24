import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";


const Menu = [
  { id: 1, name: "WOMAN", link: "/#" },
  { id: 2, name: "MEN", link: "/#men" },
  { id: 3, name: "KIDS", link: "/#kids" },
  { id: 4, name: "ACCESSORIES", link: "/#accessories" },
  { id: 5, name: "GIFTS", link: "/#gifts" },
  { id: 5, name: "WATCH", link: "/#gifts" },
];

const DropdownLinks = [
  { id: 1, name: "Trending", link: "/#trending" },
  { id: 2, name: "Best Sellers", link: "/#best" },
  { id: 3, name: "Top Rated", link: "/#top" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <nav className="shadow-lg bg-white duration-300 relative z-50">
      {/* Top Bar with Logo, Search, Cart, and Login Icon */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-20 h-auto" />
          </a>

          {/* Search Bar & Action Icons */}
          <div className="flex items-center gap-4">
            {/* Search Bar (hidden on small screens) */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for style..."
                className="w-64 px-4 py-2 rounded-full border border-transparent focus:border-blue-500 transition-all duration-300"
              />
              <IoMdSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Cart Button */}
            <button
              onClick={handleOrderPopup}
              className="flex items-center gap-2 bg-white text-gray-700 font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaCartShopping className="text-xl" />
              <span className="hidden sm:inline"></span>
            </button>

            {/* Login Icon */}
            <a
              href="/login"
              className="flex items-center gap-2 bg-white text-gray-700 font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaUser className="text-xl" />
              <span className="hidden sm:inline"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center">
          <ul className="flex items-center gap-12">
            {Menu.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.link}
                  className="text-m font-medium text-gray-900 hover:text-gray-500 transition-colors duration-600"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Dropdown for Explore */}
            <li className="relative group">
              <a
                href="#"
                className="text-m font-medium flex items-center text-gray-900 hover:text-gray-500 transition-colors duration-300"
              >
                Explore
                <FaCaretDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <ul className="py-2">
                  {DropdownLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.link}
                        className="block px-4 py-2 text-gray-600 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
