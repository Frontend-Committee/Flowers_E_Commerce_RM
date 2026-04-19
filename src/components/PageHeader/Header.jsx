import {
  MapPin,
  Search,
} from "lucide-react";
import flower from "../../assets/flower.png";
import HeaderActions from "./HeaderActions";

export default function Header({ isAuthenticated = false }) {
  return (
    <header className="w-full shadow-sm px-2">
      <div className="bg-white">
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          
          {/* left side */}
          <div className="flex shrink-0 items-center gap-3 ml-auto">
            <img
              src={flower}
              alt="Rose logo"
              className="h-14 w-14 object-contain"
            />

            {isAuthenticated && (
              <div className="hidden border-l border-gray-200 pl-4 md:block">
                <p className="text-xs text-gray-400">Deliver to:</p>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                  <MapPin size={15} className="text-[#741c21]" />
                  <span>Cairo</span>
                </div>
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="min-w-0 flex-1">
            <div className="relative w-full">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="What awesome gift are you looking for?"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-rose-400"
              />
            </div>
          </div>

          {/* Left side */}
          <div className="shrink-0">
            <HeaderActions isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </header>
  );
}