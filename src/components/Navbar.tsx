"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0b0c10]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          PriceTracker
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#0b0c10]/90 md:bg-transparent backdrop-blur-lg md:backdrop-blur-0 border-t md:border-0 border-gray-800 transition-all duration-300 ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 text-gray-300 font-medium">
            <Link
              href="/"
              className="hover:text-cyan-400 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-cyan-400 transition"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="#features"
              className="hover:text-cyan-400 transition"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
