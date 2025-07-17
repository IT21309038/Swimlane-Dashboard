import { create } from "zustand";

export type SupportingFile = {
  fileName: string;
  fileType: string;
  url: string;
};

export type Task = {
  id: string | number;
  title: string;
  description: string;
  status: string;
  priority?: string;
  dueDate?: string;
  assignedTo?: string;
  images?: string[];
  comments?: string[];
  tags?: string[];
  supportingFiles?: SupportingFile[];
};

type TaskStore = {
  tasks: Task[];
  searchQuery: string;
  setTasks: (tasks: Task[]) => void;
  setSearchQuery: (query: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => {
  const getInitialTasks = (): Task[] => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("tasks");
        const parsed = JSON.parse(stored || "[]");
        if (!Array.isArray(parsed)) throw new Error("Invalid tasks format");
        return parsed;
      } catch (e) {
        console.error("Failed to parse localStorage tasks", e);
        localStorage.removeItem("tasks"); // Clean corrupted data
        return [];
      }
    }
    return [];
  };

  return {
    tasks: getInitialTasks(),
    searchQuery: "",
    setTasks: (tasks) => {
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("tasks", JSON.stringify(tasks));
        } catch (e) {
          console.error("Failed to store tasks in localStorage", e);
        }
      }
      set({ tasks });
    },
    setSearchQuery: (query) => set({ searchQuery: query }),
  };
});