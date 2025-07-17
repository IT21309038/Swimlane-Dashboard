"use client";

import { useState } from "react";
import { FaImage } from "react-icons/fa";
import {
  FiChevronDown,
  FiFolder,
  FiHome,
  FiMessageSquare,
  FiCalendar,
  FiUsers,
  FiLogOut,
  FiInfo,
} from "react-icons/fi";

function SidebarSubItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`cursor-pointer ${
        active
          ? "text-blue-600 font-semibold"
          : "text-gray-500 hover:text-blue-600"
      }`}
    >
      ▸ {label}
    </span>
  );
}

function SidebarLink({
  icon,
  label,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
}) {
  return (
    <div className="flex items-center justify-between cursor-pointer hover:text-blue-600">
      <div className="flex items-center gap-2">
        {icon}
        {label}
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-[10px] px-2 rounded-full font-bold">
          {badge}
        </span>
      )}
    </div>
  );
}

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="w-64 max-h-[640px] bg-white border-r border-gray-300 px-4 py-6 flex flex-col justify-between text-gray-600 text-sm font-medium">
      {/* Top Section */}
      <div className="flex flex-col gap-6">
        {/* Workspace */}
        <div className="bg-gray-100 p-3 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-700 text-white border-2 border-white flex items-center justify-center text-[15px]">
              <FaImage />
            </div>
            <div className="text-xs">
              <div className="text-gray-400">workspace</div>
              <div className="font-semibold text-gray-700">Root folder</div>
            </div>
          </div>
          <FiChevronDown className="text-gray-500" />
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-4">
          <SidebarLink icon={<FiHome />} label="Dashboard" />
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2 w-full text-left rounded-lg border border-gray-200 px-2 py-2 ${
                isOpen ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <FiFolder />
              Boards
              <FiChevronDown
                className={`ml-auto transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="ml-6 mt-2 bg-gray-50 p-2 rounded-lg border border-gray-200 text-[13px] flex flex-col gap-2">
                <SidebarSubItem label="Create routes" />
                <SidebarSubItem label="Deleopment React App" />
                <SidebarSubItem label="Sport Xi Project" active />
                <SidebarSubItem label="Wordpress theme" />
              </div>
            )}
          </div>
          <SidebarLink icon={<FiMessageSquare />} label="Messages" badge={3} />
          <SidebarLink icon={<FiCalendar />} label="Calendar" />
          <SidebarLink icon={<FiUsers />} label="Team members" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-2 text-md text-gray-500">
          <FiInfo />
          Support
        </button>
        <button className="flex items-center justify-center gap-2 bg-gray-800 text-white text-sm py-2 rounded-lg">
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
