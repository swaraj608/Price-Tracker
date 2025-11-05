"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0C10]/80 backdrop-blur-xl border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight"
        >
          Price<span className="text-cyan-400">Tracker</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            href="#features"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Inline Search Bar */}
          <div className="relative ml-6">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-44 bg-[#101218] border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition"
            />
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0B0C10] border-t border-gray-800 px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            href="#features"
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            Contact
          </Link>

          {/* Mobile Search */}
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full bg-[#101218] border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition"
            />
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
