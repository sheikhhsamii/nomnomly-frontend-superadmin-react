import {
  Menu,
  LogOut,
  LayoutDashboard,
  Users,
  Folder,
  Pizza,
  Tag,
  ShoppingBag,
  Star,
  CreditCard,
  Settings2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { APP_ROUTES, APP_ROUTES_NAMES } from "../../constants/app-routes";
const navItems = [
  {
    name: APP_ROUTES_NAMES.DASHBOARD,
    icon: LayoutDashboard,
    path: APP_ROUTES.DASHBOARD,
  },
  { name: APP_ROUTES_NAMES.USERS, icon: Users, path: APP_ROUTES.USERS },
  {
    name: APP_ROUTES_NAMES.CATEGORIES,
    icon: Folder,
    path: APP_ROUTES.CATEGORIES,
  },
  { name: APP_ROUTES_NAMES.DEALS, icon: Tag, path: APP_ROUTES.DEALS },
  { name: APP_ROUTES_NAMES.MENU, icon: Pizza, path: APP_ROUTES.MENU },

  { name: APP_ROUTES_NAMES.ORDERS, icon: ShoppingBag, path: APP_ROUTES.ORDERS },
  { name: APP_ROUTES_NAMES.REVIEWS, icon: Star, path: APP_ROUTES.REVIEWS },
  {
    name: APP_ROUTES_NAMES.PAYMENTS,
    icon: CreditCard,
    path: APP_ROUTES.PAYMENTS,
  },
  {
    name: APP_ROUTES_NAMES.SETTINGS,
    icon: Settings2,
    path: APP_ROUTES.SETTINGS,
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <aside
      className={clsx(
        "flex flex-col bg-gray-900 text-white transition-all duration-300",
        isSidebarOpen ? "w-64" : "w-20"
      )}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1
          className={clsx(
            "text-xl font-bold tracking-wide transition-opacity duration-300",
            !isSidebarOpen && "opacity-0 pointer-events-none"
          )}
        >
          NomNomly
        </h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-300 hover:text-white"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )
            }
          >
            <Icon size={20} />
            {isSidebarOpen && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg hover:bg-gray-800">
          <LogOut size={20} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
