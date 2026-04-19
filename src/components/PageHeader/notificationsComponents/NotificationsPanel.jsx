import { useState } from "react";
import { BellOff, CheckCheck, Trash2 } from "lucide-react";
import NotificationItem from "./NotificationItem";

export default function NotificationsPanel({ notifications = [] }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const hasNotifications = notifications.length > 0;

  const handleMenuClick = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleMarkRead = (id) => {
    console.log("mark read", id);
    setOpenMenuId(null);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
    setOpenMenuId(null);
  };

  const handleMarkAllRead = () => {
    console.log("mark all as read");
  };

  const handleClearAll = () => {
    console.log("clear all notifications");
  };

  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="bg-[#8E1B1F] px-4 py-3 text-sm font-semibold text-white">
        Notifications {hasNotifications ? `(${notifications.length})` : ""}
      </div>

      <div className="flex items-center justify-between border-b px-4 py-2 text-[11px] text-gray-400">
        <button
          onClick={handleClearAll}
          className="flex items-center gap-1 hover:text-gray-600"
        >
          <Trash2 size={12} />
          <span>Clear all notifications</span>
        </button>

        <button
          onClick={handleMarkAllRead}
          className="flex items-center gap-1 hover:text-gray-600"
        >
          <CheckCheck size={12} />
          <span>Mark all as read</span>
        </button>
      </div>

      {!hasNotifications ? (
        <div className="flex h-52 flex-col items-center justify-center px-6 text-center">
          <BellOff size={42} className="mb-3 text-gray-300" />
          <p className="text-sm text-gray-400">No notifications to display.</p>
        </div>
      ) : (
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((item) => (
            <NotificationItem
              key={item.id}
              id={item.id}
              title={item.title}
              message={item.message}
              isRead={item.isRead}
              showMenu={openMenuId === item.id}
              onMenuClick={handleMenuClick}
              onMarkRead={handleMarkRead}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}