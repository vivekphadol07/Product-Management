import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = ({ setSearchQuery }) => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    navigate("/"); // go to home when searching
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-6">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}/logo.png`} alt="Logo" className="h-10" />
          </NavLink>

          {/* SEARCH BAR */}
          <div className="flex flex-1 max-w-xl items-center bg-gray-100 px-3 py-2 rounded-full">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              onChange={handleSearch}
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <NavLink to="/" className="font-medium">
              Home
            </NavLink>

            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
};
