import React from "react";
import Board from "@/components/Board";
import TopNavBar from "@/components/TopNavBar";
import ProjectHeader from "@/components/ProjectHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavBar />
      <ProjectHeader />
      <Board />
    </div>
  );
}
