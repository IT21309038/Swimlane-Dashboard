"use client";

import React, { useState } from "react";
import Swimlane from "./Swimlane";

import { useEffect } from "react";
import { useTaskStore } from "@/store/useTaskStore";
import { DragEndEvent, DndContext, DragOverlay } from "@dnd-kit/core";
import { Task } from "@/store/useTaskStore";
import TaskCard from "./TaskCard";

const statuses = ["To Do", "In Progress", "Approved", "Rejected"];

const Board = () => {
  const { tasks, setTasks } = useTaskStore();
  const [hasMounted, setHasMounted] = useState(false);

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeTask = tasks.find((task) => task.id.toString() === activeId);

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
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeTask = tasks.find((t) => t.id.toString() === activeId);
    const overTask = tasks.find((t) => t.id.toString() === overId);

    if (!activeTask) return;

    const isOverLane = !overTask;

    if (isOverLane) {
      // Dropped directly into a lane (e.g. empty Approved column)
      const newStatus = overId; // Approved / Rejected / etc.

      setTasks(
        tasks.map((task) =>
          task.id.toString() === activeId
            ? { ...task, status: newStatus }
            : task
        )
      );
    } else {
      // Dropped on another task
      const isSameLane = activeTask.status === overTask.status;

      if (isSameLane) {
        const laneTasks = tasks.filter((t) => t.status === activeTask.status);
        const others = tasks.filter((t) => t.status !== activeTask.status);

        const oldIndex = laneTasks.findIndex(
          (t) => t.id.toString() === activeId
        );
        const newIndex = laneTasks.findIndex((t) => t.id.toString() === overId);

        const reordered = [...laneTasks];
        const [moved] = reordered.splice(oldIndex, 1);
        const adjustedIndex = oldIndex < newIndex ? newIndex - 1 : newIndex;
        reordered.splice(adjustedIndex, 0, moved);

        setTasks([...others, ...reordered]);
      } else {
        setTasks(
          tasks.map((task) =>
            task.id.toString() === activeId
              ? { ...task, status: overTask.status }
              : task
          )
        );
      }
    }
  };

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col gap-4">
      <DndContext
        onDragStart={(event) => setActiveId(event.active.id.toString())}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto">
          {statuses.map((status) => (
            <Swimlane key={status} status={status} />
          ))}
        </div>
        <DragOverlay>
          {activeTask ? <TaskCard task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Board;
