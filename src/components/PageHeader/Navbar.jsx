import { Link, useLocation } from "react-router-dom";
import { Home, Gift, ClipboardList, Sparkles, Headphones, Info } from "lucide-react";

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/products", icon: Gift },
    { name: "Categories", path: "/categories", icon: ClipboardList },
    { name: "Occasions", path: "/occasions", icon: Sparkles },
    { name: "Contact", path: "/contact", icon: Headphones },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <nav className="bg-[#741c21] text-white">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4">
        <div className="flex min-w-max items-center justify-center gap-6 py-3 text-sm whitespace-nowrap">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 relative flex shrink-0 items-center gap-2 transition hover:text-gray-200
                          after:absolute after:left-0 after:-bottom-3 after:h-0.5 after:w-0 
                          after:bg-white after:transition-all after:duration-300
                          hover:after:w-full
                          ${active ? "after:w-full" : ""}
                        `}
              >
                <Icon size={15} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;