"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bell,
  BarChart3,
  Settings,
  ShoppingCart,
} from "lucide-react";

export default function Sidebar({
  width,
  onMouseDown,
}: {
  width: number;
  onMouseDown: () => void;
}) {
  const pathname = usePathname();
  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { name: "Products", icon: <ShoppingCart size={20} />, href: "/products" },
    { name: "Alerts", icon: <Bell size={20} />, href: "/alerts" },
    { name: "Analytics", icon: <BarChart3 size={20} />, href: "/analytics" },
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
  ];

  return (
    <aside
      style={{ width }}
      className="h-screen bg-[#0b0c10]/95 border-r border-gray-800 fixed left-0 top-0 flex flex-col transition-[width] duration-200"
    >
      {/* Logo */}
      <Link
        href="/"
        className={`flex items-center gap-2 mb-10 px-5 mt-6 hover:opacity-90 transition ${
          width < 150 && "justify-center"
        }`}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" />
        {width > 150 && (
          <h1 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PriceTracker
          </h1>
        )}
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-2">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                active
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1c22]"
              } ${width < 150 && "justify-center"}`}
            >
              {item.icon}
              {width > 150 && item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {width > 150 && (
        <div className="mt-auto pt-6 border-t border-gray-800 text-gray-500 text-xs px-5">
          © {new Date().getFullYear()} PriceTracker Inc.
        </div>
      )}

      {/* 🟢 Draggable Edge */}
      <div
        onMouseDown={onMouseDown}
        className="absolute top-0 right-0 h-full w-[6px] cursor-ew-resize hover:bg-cyan-500/30 transition"
        title="Drag to resize"
      ></div>
    </aside>
  );
}
