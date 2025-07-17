import React from "react";
import Board from "@/components/Board";
import TopNavBar from "@/components/TopNavBar";
import ProjectHeader from "@/components/ProjectHeader";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div>
      <TopNavBar />
      <div className="flex">
        <SideBar />
        <main className="flex-1 flex flex-col min-h-screen bg-gray-50">
          <ProjectHeader />
          <Board />
        </main>
      </div>
    </div>
  );
}
