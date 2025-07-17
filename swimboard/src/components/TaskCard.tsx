import React from "react";

import { Task } from "@/store/useTaskStore";
import { useDraggable } from "@dnd-kit/core";

const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id.toString(),
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

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
