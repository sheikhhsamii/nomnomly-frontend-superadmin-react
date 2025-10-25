// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts

// Pages
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Orders from "../pages/Orders";
import Deals from "../pages/Deals";
import Menu from "../pages/Menu";
import Reviews from "../pages/Reviews";
import Payments from "../pages/Payments";
import PageNotFound from "../pages/PageNotFound";
import MainLayout from "../components/layouts/MainLayout";
import Users from "../pages/User";
import AuthLayout from "../components/layouts/AuthLayout";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔒 Protected Admin Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 🔑 Public Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Route>

      {/* ❌ 404 Fallback */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
