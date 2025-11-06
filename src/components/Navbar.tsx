"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, TrendingUp } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0b0c10]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-2">
          <TrendingUp className="text-cyan-400 w-6 h-6" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PriceTracker
          </span>
        </Link>

        {/* --- Desktop Navigation Links --- */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Dashboard
          </Link>
          <Link href="#features" className="hover:text-cyan-400 transition">
            Features
          </Link>

          {/* --- Search Bar --- */}
          <div className="flex items-center bg-[#101218] border border-gray-700 rounded-lg px-3 py-2 ml-4 focus-within:border-cyan-500 transition">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-200 w-44"
            />
          </div>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-[#0b0c10] py-4 space-y-3 border-t border-gray-800">
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Dashboard
          </Link>
          <Link href="#features" className="hover:text-cyan-400 transition">
            Features
          </Link>

          {/* --- Mobile Search --- */}
          <div className="flex items-center bg-[#101218] border border-gray-700 rounded-lg px-3 py-2 mt-2 w-3/4">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-200 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
