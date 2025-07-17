"use client";

import React, { useState } from "react";
import Swimlane from "./Swimlane";
import SearchBar from "./SearchBar";

import { useEffect } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { Task } from "@/store/useTaskStore";

const statuses = ["To Do", "In Progress", "Approved", "Rejected"];

const Board = () => {
  const { tasks, setTasks } = useTaskStore();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const hasStored = localStorage.getItem("tasks");

    if (!hasStored) {
      const fetchTasks = async () => {
        const response = await fetch("/tasks.json");
        const data = await response.json();
        const normalized = data.map((task: Task) => ({
          ...task,
          status:
            task.status === "To Do"
              ? "To Do"
              : task.status === "In Progress"
              ? "In Progress"
              : task.status === "Approved"
              ? "Approved"
              : task.status === "Rejected"
              ? "Rejected"
              : task.status,
        }));
        setTasks(normalized);
      };
      fetchTasks();
    }
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

  if (!hasMounted) return null;

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
