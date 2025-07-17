import React from "react";

import { useTaskStore } from "@/store/useTaskStore";
import TaskCard from "./TaskCard";

interface SwimlaneProps {
  status: string;
}

const Swimlane = ({ status }: SwimlaneProps) => {
  const { tasks, searchQuery } = useTaskStore();
  const filterdTasks = tasks
    .filter((task) => task.status === status)
    .filter(
      (tasks) =>
        tasks.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tasks.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-w-[300px] bg-gray-100 rounded-md p-4 shadow">
      <h2 className="text-lg font-bold mb-2">{status}</h2>
      <div
        className="flex flex-col gap-2 overflow-y-auto max-h-[480px] scrollbar-hide"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        <style>
          {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
          `}
        </style>
        {filterdTasks.length === 0 ? (
          <div className="p-4 bg-white rounded shadow text-center text-gray-500">
            No Tasks
          </div>
        ) : (
          filterdTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Swimlane;
