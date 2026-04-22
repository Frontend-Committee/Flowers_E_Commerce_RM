import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Bell,
  User,
  ChevronDown,
} from "lucide-react";
import NotificationsPanel from "./notificationsComponents/NotificationsPanel";
import UserDropdown from "./UserDropdown";

export default function HeaderActions({ isAuthenticated = false }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  //dummy notifications data
  const notifications = 
  [
    {
      id: 1,
      title: "Your Order Has Been Shipped",
      message:
        "Your order #12345 has been shipped and will arrive in 2–3 business days.",
      isRead: false,
    },
    {
      id: 2,
      title: "Your Order Has Been Shipped",
      message:
        "Your order #12345 has been shipped and will arrive in 2–3 business days.",
      isRead: true,
    },
    {
      id: 3,
      title: "Your Order Has Been Shipped",
      message:
        "Your order #12345 has been shipped and will arrive in 2–3 business days.",
      isRead: true,
    },
  ];

  return (
    <div className="flex shrink-0 items-center gap-4 text-sm text-gray-700">
      {!isAuthenticated && (
        <button className="mr-1.5 flex items-center gap-1 hover:text-rose-700">
          <User size={18} />
          <span>Login</span>
        </button>
      )}

      {isAuthenticated && (
        <div className="relative mr-1.5 hidden sm:block">
          <p className="text-left text-[10px] leading-none text-gray-400">Hello</p>
          <button
            onClick={() => setShowUserDropdown((prev) => !prev)}
            className="mt-1 flex items-center gap-1 font-medium hover:text-rose-700"
          >
            <span className="text-[#741c21]">Jonathan</span>
            <ChevronDown size={15} />
          </button>

          {showUserDropdown && (
            <div className="absolute left-0 top-full z-50 mt-3">
              <UserDropdown />
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-4 border-x border-gray-200 px-3">
        <button className="relative hover:text-rose-700">
          <Heart size={20} />
        </button>

        <button className="relative hover:text-rose-700">
          <ShoppingCart size={20} />
          {isAuthenticated && (
            <span className="absolute -right-2 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative hover:text-rose-700"
          >
            <Bell size={20} />
            {isAuthenticated && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                8
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute -left-12.5 top-full z-50 mt-3 -translate-x-1/2">
              <NotificationsPanel notifications={notifications} />
            </div>
          )}
        </div>
      </div>

      <button className="ml-1.5 text-sm hover:text-[#741c21]">العربية</button>
    </div>
  );
}