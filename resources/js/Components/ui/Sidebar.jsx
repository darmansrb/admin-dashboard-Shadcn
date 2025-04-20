import React from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Package,
  User2,
  Cog,
} from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar({ sidebarOpen, activeItem, setActiveItem }) {
  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Chats", badge: "3" },
    { icon: <Package className="w-5 h-5" />, label: "Apps" },
    { icon: <User2 className="w-5 h-5" />, label: "Users" },
    { icon: <Cog className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <aside
      className={`
        bg-background text-foreground border-r z-50 h-screen
        fixed top-0 left-0 transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-16"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:flex md:flex-col
        md:${sidebarOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Logo + Title */}
      <div className="h-16 flex items-center gap-2 px-4 border-b">
        <img
          src="/assets/logo/dthrees_logo.png"
          alt="Logo"
          className={`w-8 h-8 transition-all duration-200 ${sidebarOpen ? "mr-2" : "mx-auto"}`}
        />
        <span
          className={`text-lg font-semibold text-primary whitespace-nowrap transition-all duration-200 ${sidebarOpen ? "inline-block" : "hidden"
            } md:${sidebarOpen ? "inline-block" : "hidden"}`}
        >
          Admin Dashboard
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            badge={item.badge}
            active={activeItem}
            setActive={setActiveItem}
            sidebarOpen={sidebarOpen}
          />
        ))}
      </nav>
    </aside>
  );
}
