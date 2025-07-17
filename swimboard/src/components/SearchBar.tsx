"use client";

import React from "react";

import { useTaskStore } from "@/store/useTaskStore";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full max-w-md px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
