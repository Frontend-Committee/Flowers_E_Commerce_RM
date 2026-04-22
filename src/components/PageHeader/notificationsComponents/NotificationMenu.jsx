import { Check, Trash2 } from "lucide-react";

export default function NotificationMenu(isRead) {
  return (
    <div className="w-44 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5">
      <button disabled={isRead} className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
        <Check size={15} />
        <span className={isRead ? "text-gray-400" : "text-gray-700"}>Mark as read</span>
      </button>

      <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
        <Trash2 size={15} />
        <span>Delete notification</span>
      </button>
    </div>
  );
}