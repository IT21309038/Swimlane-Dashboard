"use client";

import React from "react";
import { FaImage } from "react-icons/fa";

const ProjectHeader = () => {
  return (
    <div className="px-6 py-4 border-b border-gray-300 bg-white mb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">
            Sport XI Project
          </h1>
          <span className="text-xs bg-yellow-100 text-yellow-800 font-medium px-2 py-0.5 rounded-full">
            in progress
          </span>
        </div>
        <button className="text-sm border border-gray-300 px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">
          Manage
        </button>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="inline-flex -space-x-2">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full bg-gray-700 text-white border-2 border-white flex items-center justify-center text-[10px]"
            >
              <FaImage />
            </div>
          ))}
        </div>
        <span>+2</span>
        <span>
          Last updated on:{" "}
          <strong>
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default ProjectHeader;
