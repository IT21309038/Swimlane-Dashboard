import { Task } from "@/store/useTaskStore";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaImage, FaLink, FaCommentDots } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function TaskCard({ task }: { task: Task }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id.toString(),
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : "auto",
    opacity: isDragging ? 0.6 : 1,
  };

  const statusColors: Record<string, string> = {
    "To Do": "bg-gray-400",
    "In Progress": "bg-yellow-500",
    Approved: "bg-lime-500",
    Rejected: "bg-red-500",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm transition-all cursor-move"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2 text-xs text-gray-500 font-medium">
        <div className="flex items-center gap-1">
          <span
            className={`w-2 h-2 rounded-full ${statusColors[task.status]}`}
          />
          <span>{task.tags?.[0] || "Task"}</span>
        </div>
        <span className="text-gray-300">•••</span>
      </div>

      {/* Title */}
      <div className="text-sm font-semibold text-gray-900 mb-3">
        {task.title}
      </div>

      {/* Meta row 1 */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex -space-x-2">
            {task.images?.slice(0, 2).map((_, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full bg-gray-700 text-white border-2 border-white flex items-center justify-center text-[10px]"
              >
                <FaImage />
              </div>
            ))}

            {task.images && task.images.length > 2 && (
              <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 border-2 border-white flex items-center justify-center text-[10px] font-semibold">
                +{task.images.length - 2}
              </div>
            )}
          </div>
        </div>
        {task.priority && (
          <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            ⚡ {task.priority}
          </span>
        )}
      </div>

      <hr className="my-2 border-gray-200" />

      {/* Meta row 2 */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FaLink className="text-[13px]" />
            <span>{task.supportingFiles?.length || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCommentDots className="text-[13px]" />
            <span>{task.comments?.length || 0}</span>
          </div>
        </div>
        {task.dueDate && (
          <div className="flex items-center gap-1">
            <MdOutlineCalendarToday className="text-[13px]" />
            <span>
              Due:{" "}
              {new Date(task.dueDate).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
