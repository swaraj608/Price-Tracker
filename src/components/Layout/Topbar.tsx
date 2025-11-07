"use client";

import { Menu, Bell } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="md:hidden flex justify-between items-center bg-[#0b0c10]/90 px-4 py-3 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-300 hover:text-white"
      >
        <Menu size={24} />
      </button>
      <h1 className="font-semibold text-lg">PriceTracker</h1>
      <Bell className="text-gray-300" size={20} />
    </header>
  );
}
