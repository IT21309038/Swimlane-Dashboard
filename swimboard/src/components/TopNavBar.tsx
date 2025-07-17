"use client";

import React from "react";

import { FiBell, FiSettings } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { FaImage } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 border-b border-gray-300 bg-white shadow-sm">
      <div className="text-lg font-bold text-blue-600">Board App</div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="w-[240px]">
          <SearchBar />
        </div>

        {/* Create New Board */}
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-blue-700">
          + Create new board
        </button>

        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FiSettings className="hover:text-gray-800 cursor-pointer" />
          <FiBell className="hover:text-gray-800 cursor-pointer" />
          <div className="w-6 h-6 rounded-full bg-gray-700 text-white border-2 border-white flex items-center justify-center text-[10px]">
            <FaImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
