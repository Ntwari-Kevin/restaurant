
import { Home, BarChart2, Coffee, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Coffee, label: "Products", path: "/admin/products" },
    { icon: BarChart2, label: "Analytics", path: "/admin/analytics" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-ckyc-charcoal">CKYC Admin</h2>
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === item.path
                ? "bg-ckyc-gold text-ckyc-charcoal"
                : "text-gray-600 hover:bg-ckyc-gold/10"
            )}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
        
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 mt-6 rounded-md text-sm font-medium w-full text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
