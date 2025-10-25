import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import { APP_ROUTES, APP_ROUTES_NAMES } from "../../constants/app-routes";

const MainLayout = () => {
  const location = useLocation();

  // Function to get the title based on current route
  const getPageTitle = () => {
    const pathname = location.pathname;

    switch (pathname) {
      case APP_ROUTES.DASHBOARD:
        return APP_ROUTES_NAMES.DASHBOARD;
      case APP_ROUTES.USERS:
        return APP_ROUTES_NAMES.USERS;
      case APP_ROUTES.ORDERS:
        return APP_ROUTES_NAMES.ORDERS;
      case APP_ROUTES.CATEGORIES:
        return APP_ROUTES_NAMES.CATEGORIES;
      case APP_ROUTES.DEALS:
        return APP_ROUTES_NAMES.DEALS;
      case APP_ROUTES.MENU:
        return APP_ROUTES_NAMES.MENU;
      case APP_ROUTES.REVIEWS:
        return APP_ROUTES_NAMES.REVIEWS;
      case APP_ROUTES.PAYMENTS:
        return APP_ROUTES_NAMES.PAYMENTS;
      case APP_ROUTES.SETTINGS:
        return APP_ROUTES_NAMES.SETTINGS;
      default:
        return APP_ROUTES_NAMES.DASHBOARD; // fallback
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title={getPageTitle()} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
