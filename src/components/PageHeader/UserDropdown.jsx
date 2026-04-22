import {
  User,
  MapPin,
  ClipboardList,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export default function UserDropdown() {
  const items = [
    { label: "My Profile", icon: User },
    { label: "My Addresses", icon: MapPin },
    { label: "My Orders", icon: ClipboardList },
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Log out", icon: LogOut },
  ];

  return (
    <div className="w-56 overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="border-b px-4 py-3">
        <p className="text-sm font-semibold text-[#741c21]">Jonathan Adrian</p>
      </div>

      <div className="py-2">
        {items.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}