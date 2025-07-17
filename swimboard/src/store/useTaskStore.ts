import {create} from 'zustand';

export type SupportingFiles = {
    fileName: string;
    fileType: string;
    fileUrl: string;
};

export type Task = {

    id: number;
    title: string;
    description: string;
    status: string;
    priority?: string;
    dueDate?: string;
    assignedTo?: string;
    tags?: string[];
    supportingFiles?: SupportingFiles[];
};

type TaskStore = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;

    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (tasks) => set({tasks}),

    searchQuery: '',
    setSearchQuery: (query) => set({searchQuery: query})
}))