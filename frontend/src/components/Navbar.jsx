import React from "react";
import { Link } from "react-router-dom";
import shzlogo from "../assets/bgshz.jpg";

function NavBar() {
  return (
    <div className="bg-gradient-to-r from-black2 via-black2 to-purple fixed top-0 left-0 w-full">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <img
            src={shzlogo}
            alt="SHZ Logo"
            className="w-80 h-40 object-cover ml-10 rounded-lg opacity-60"
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white font-bold px-4 py-2 border border-gray-300 rounded bg-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/artistes"
              className="text-white font-bold px-4 py-2 border border-gray-300 rounded bg-black"
            >
              Artists
            </Link>
          </li>
          <li>
            <Link
              to="/releases"
              className="text-white font-bold px-4 py-2 border border-gray-300 rounded bg-black mr-60"
            >
              Releases
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
