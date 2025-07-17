import React from "react";

import { Task } from "@/store/useTaskStore";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: task.id.toString(),
    });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: "none",
    zIndex: isDragging ? 999 : "auto",
    opacity: isDragging ? 0.8 : 1,
  };

  if (isDragging) return null;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-4 bg-white rounded shadow hover:shadow-md transition"
    >
      <div className="font-semibold">{task.title}</div>
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;
