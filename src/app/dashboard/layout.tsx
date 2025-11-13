"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import Topbar from "@/components/Layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sidebar width state
  const [sidebarWidth, setSidebarWidth] = useState(260); // default width
  const isDragging = useRef(false);

  // --- Mouse handlers for resizing sidebar ---
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const newWidth = Math.min(Math.max(e.clientX, 80), 320); // limit between 80px - 320px
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Attach / detach listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-[#090b10] text-white">
      {/* 🧩 Sidebar (resizable) */}
      <div
        style={{ width: sidebarWidth }}
        className="relative transition-[background] duration-200 ease-in-out"
      >
        <Sidebar width={sidebarWidth} onMouseDown={handleMouseDown} />
      </div>

      {/* 🧠 Main content — adjusts with sidebar */}
      <div
        style={{ width: `calc(100% - ${sidebarWidth}px)` }}
        className="transition-all duration-200"
      >
        <Topbar />
        <div className="p-6 md:p-10">{children}</div>
      </div>
    </div>
  );
}
