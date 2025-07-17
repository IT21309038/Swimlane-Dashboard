import React from "react";

import { FiPlus, FiMoreHorizontal } from "react-icons/fi";

type SwimlaneHeaderProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  "To Do": "bg-gray-200 text-gray-700",
  "In Progress": "bg-orange-400 text-white",
  Approved: "bg-lime-400 text-white",
  Rejected: "bg-red-500 text-white",
};

const SwimLaneHeader = ({status}: SwimlaneHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <span
        className={`text-sm font-semibold px-4 py-1 rounded-full ${
          statusStyles[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
      <div className="flex items-center gap-2 text-gray-500 text-lg">
        <button className="hover:text-gray-800">
          <FiPlus />
        </button>
        <button className="hover:text-gray-800">
          <FiMoreHorizontal />
        </button>
      </div>
    </div>
  );
};

export default SwimLaneHeader;
