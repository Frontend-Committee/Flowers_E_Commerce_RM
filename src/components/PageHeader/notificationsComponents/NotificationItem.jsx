import { MoreVertical } from "lucide-react";
import NotificationMenu from "./NotificationMenu";

export default function NotificationItem({
  id,
  title,
  message,
  isRead = false,
  showMenu = false,
  onMenuClick,
  onMarkRead,
  onDelete,
}) {
  return (
    <div
      className={`relative flex items-start gap-3 px-4 py-3 ${
        isRead ? "bg-white" : "bg-gray-200"
      }`}
    >
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="mt-1 line-clamp-2 text-xs text-gray-500">{message}</p>
      </div>

      <button
        onClick={() => onMenuClick(id)}
        className="shrink-0 text-gray-400 hover:text-gray-700"
      >
        <MoreVertical size={16} />
      </button>

      {showMenu && (
        <div className="absolute right-3 top-10 z-30">
          <NotificationMenu
            onMarkRead={() => onMarkRead(id)}
            onDelete={() => onDelete(id)}
          />
        </div>
      )}
    </div>
  );
}