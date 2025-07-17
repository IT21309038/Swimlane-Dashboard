"use client";

import React from "react";
import Swimlane from "./Swimlane";
import SearchBar from "./SearchBar";

import { useEffect } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { DragEndEvent, DndContext } from "@dnd-kit/core";

const statuses = ["To Do", "In Progress", "Approved", "Rejected"];

const Board = () => {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/tasks.json");
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, [setTasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const taskId = active.id.toString();
    const newStatus = over.id.toString();

    setTasks(
      tasks.map((task) =>
        task.id.toString() === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-semibold">Task Board</div>
      <SearchBar />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto">
          {statuses.map((status) => (
            <Swimlane key={status} status={status} />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
